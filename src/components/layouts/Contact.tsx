import { lazy, Suspense } from 'react';
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Snackbar,
} from '@mui/material';
import type { SnackbarOrigin } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useContactForm } from '../../hooks/useContactForm';

// 무거운 three.js 3D 씬은 초기 번들에서 분리해 지연 로딩
const Planet = lazy(() => import('../common/Planet'));

// snackbar position (fixed)
const snackbarPosition: SnackbarOrigin = { vertical: 'top', horizontal: 'center' };

const Contact = () => {
  const { t } = useTranslation();
  const {
    form,
    dialogOpen,
    emailStatus,
    snackbarOpen,
    openDialog,
    closeDialog,
    confirmSend,
    sendEmail,
    closeSnackbar,
  } = useContactForm();

  return (
    <>
      <div className="contact-section" id="contact-section">
        <h1>{t('navbar:contact')}</h1>

        <div className="contact-container">
          <div className="contact-wrapper">
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <div className="contact-input-wrapper">
                <input
                  type="text"
                  className="contact-name-input"
                  placeholder={t('contact:placeholder:name')}
                  name="sender_name"
                  required
                />
                <input
                  type="email"
                  className="contact-email-input"
                  placeholder={t('contact:placeholder:email')}
                  name="sender_email"
                  required
                />
              </div>
              <div className="contact-message-wrapper">
                <textarea
                  className="contact-message-input"
                  placeholder={t('contact:placeholder:message')}
                  name="message"
                  rows={4}
                  required
                />
              </div>
              <button className="contact-button" onClick={openDialog}>
                {t('contact:placeholder:send')}
              </button>
              <Dialog
                open={dialogOpen}
                onClose={closeDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{t('contact:email:confirm')}</DialogTitle>
                <DialogActions>
                  <Button onClick={closeDialog}>{t('contact:email:no')}</Button>
                  <Button onClick={confirmSend} autoFocus>
                    {t('contact:email:yes')}
                  </Button>
                </DialogActions>
              </Dialog>
            </form>

            <div className="contact-detail">
              <div>
                <h5>{t('contact:contact:title')}</h5>
                <p>{t('contact:contact:email')}</p>
                <p>{t('contact:contact:phone')}</p>
              </div>

              <div>
                <h5>{t('contact:social')}</h5>
                <IconButton aria-label="github" href="https://github.com/O-sulloc">
                  <GitHub />
                </IconButton>
                <IconButton
                  aria-label="linkedin"
                  sx={{ '&:hover': { color: 'social.linkedin' } }}
                  href="https://www.linkedin.com/in/jeonghyeon-kim-11b874202/"
                >
                  <LinkedIn />
                </IconButton>
              </div>
            </div>
          </div>

          <div className="contact-image-wrapper">
            <p className="bubble-message">{t('contact:try')}</p>
            <Suspense fallback={<div className="planet-container" />}>
              <Planet />
            </Suspense>
          </div>
        </div>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={5000}
          onClose={closeSnackbar}
          anchorOrigin={snackbarPosition}
        >
          {emailStatus === 'success' ? (
            <Alert onClose={closeSnackbar} severity="success" sx={{ width: '100%' }}>
              {t('contact:email:success')}
            </Alert>
          ) : (
            <Alert onClose={closeSnackbar} severity="error" sx={{ width: '100%' }}>
              {t('contact:email:error')}
            </Alert>
          )}
        </Snackbar>
      </div>
    </>
  );
};

export default Contact;
