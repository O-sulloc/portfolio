import { useCallback, useRef, useState } from 'react';
import type { FormEvent, MouseEvent, SyntheticEvent } from 'react';
import emailjs from '@emailjs/browser';
import type { SnackbarCloseReason } from '@mui/material';

type EmailStatus = null | 'success' | 'error';

// Contact 폼의 상태·이메일 전송 로직을 담당하는 훅 (뷰와 분리)
export const useContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [emailStatus, setEmailStatus] = useState<EmailStatus>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Send 버튼 → 전송 확인 다이얼로그 열기
  const openDialog = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDialogOpen(true);
  }, []);

  const closeDialog = useCallback(() => setDialogOpen(false), []);

  // 다이얼로그에서 "예" → 실제 폼 제출 트리거
  const confirmSend = useCallback(() => {
    setDialogOpen(false);
    form.current?.requestSubmit();
  }, []);

  const sendEmail = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error('Form reference is not set.');
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_PUBLIC_KEY,
      )
      .then(
        (result) => {
          setEmailStatus(result.status === 200 ? 'success' : 'error');
          setSnackbarOpen(true);
        },
        (error) => {
          console.error('Failed to send email:', error);
          setEmailStatus('error');
          setSnackbarOpen(true);
        },
      );
  }, []);

  const closeSnackbar = useCallback(
    (_event?: SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
      if (reason === 'clickaway') {
        return;
      }
      setSnackbarOpen(false);
    },
    [],
  );

  return {
    form,
    dialogOpen,
    emailStatus,
    snackbarOpen,
    openDialog,
    closeDialog,
    confirmSend,
    sendEmail,
    closeSnackbar,
  };
};
