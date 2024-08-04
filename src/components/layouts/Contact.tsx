import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error("환경 변수가 설정되지 않았거나 올바르지 않습니다.");
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="contact-section" id='contact-section'>
        <h1>Contact</h1>

        <div className='contact-container'>
          <form className='contact-form' ref={form} onSubmit={sendEmail}>
            <div className='contact-info-wrapper'>
              <input type='text' className='contact-name-input' placeholder='Your Name *' required />
              <input type='email' className='contact-email-input' placeholder='Email / Phone *' required />
            </div>
            <div className='contact-message-wrapper'>
              <textarea className='contact-message-input' placeholder='Message *' name='message' rows={4} required />
            </div>
            <button className='contact-button' type='submit'>Send</button>
          </form>

          <div className='contact-image-wrapper'>
            <canvas id='rotate-image' width={300} height={300}></canvas>
          </div>
        </div>

      </div>

    </>
  )
}

export default Contact;