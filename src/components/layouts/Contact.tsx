import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Alert, Button, Dialog, DialogActions, DialogTitle, Snackbar, SnackbarCloseReason, SnackbarOrigin } from '@mui/material';

// snackbar position
interface State extends SnackbarOrigin {
  open: boolean;
}

const Contact = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [emailStatus, setEmailStatus] =useState<null | 'success' | 'error'>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  
  // snackbar position
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const form = useRef<HTMLFormElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Send 버튼 클릭 시 다이얼로그를 열도록 수정
  const handleSubmitBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault(); // 폼 제출 방지
    setDialogOpen(true);
  }
  const handleDialogClose = () => {
    setDialogOpen(false);
  }

  // Yes 버튼 클릭 시 폼 제출 이벤트 트리거
  const handleSendYes = () => {
    setDialogOpen(false);

    if (form.current) {
      form.current.requestSubmit(); // 폼 제출 이벤트 트리거
    }
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form reference is not set.");
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID as string,
        import.meta.env.VITE_APP_TEMPLATE_ID as string,
        form.current,
        import.meta.env.VITE_APP_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          if (result.status === 200) {
            console.log('Email sent successfully!');
            setEmailStatus('success');
            setSnackbarOpen(true);
          }
        },
        (error) => {
          console.error('Failed to send email. Error: ', error);
          setEmailStatus('error');
          setSnackbarOpen(true);
        }
      );
  };

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <>
      <div className="contact-section" id='contact-section'>
        <h1>Contact</h1>

        <div className='contact-container'>
          <form className='contact-form' ref={form} onSubmit={sendEmail}>
            <div className='contact-info-wrapper'>
              <input type='text' className='contact-name-input' placeholder='Your Name *' name='sender_name' required />
              <input type='email' className='contact-email-input' placeholder='Email *' name='sender_email' required />
            </div>
            <div className='contact-message-wrapper'>
              <textarea className='contact-message-input' placeholder='Message *' name='message' rows={4} required />
            </div>
            <button className='contact-button' onClick={handleSubmitBtn}>Send</button>
            <Dialog
              open={dialogOpen}
              onClose={handleDialogClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Are you sure you want to send the email?"}</DialogTitle>
              <DialogActions>
                <Button onClick={handleDialogClose}>No</Button>
                <Button onClick={handleSendYes} autoFocus>
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
          </form>

          <div className='contact-image-wrapper'>
            <canvas id='rotate-image' width={300} height={300}></canvas>
          </div>
        </div>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={5000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical, horizontal }}
        >
          {emailStatus === 'success' ? (
            <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
              Email sent successfully! 
            </Alert>
          ) : (
            <Alert onClose={handleSnackbarClose} severity="error" sx={{ width: '100%' }}>
              Failed to send email. Please try again later.
            </Alert>
          )}
        </Snackbar>
      </div>
    </>
  )
}

export default Contact;