import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';


import 'bootstrap/dist/css/bootstrap.min.css'
import './Contacts.css'



export default function Contacts() {

  const form = useRef();
  const [show, setShow] = useState(false);

  function getForm(event) {
    event.preventDefault();
    console.log(form)
    emailjs
      .sendForm('service_p49fjgb', 'template_6dpu9tb', form.current, {
        publicKey: 'ktHadcYyA-GrhR8GX',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setShow(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  
  return (
    <>
    <div className="contacts">

      <h1 className='contacts__title'> Send me a message </h1>
      <form onSubmit={getForm} ref={form} action="#">

        <div className='email'>
          <label className='email__text ' htmlFor="">Введите вашу почту:</label>
          <input name='email' className='form-control email__inp ' type="email" placeholder='test@gmail.com' required />
        </div>

        <div className='message'>
          <label className='message__text' htmlFor="">Введите ваше сообщение: </label>
          <textarea name='message' className='form-control message__inp'></textarea>
        </div>

        <button className='btn btn-secondary submit__btn' type='submit'>Отправить</button>
      </form>


      { show && (<p>Данные успешно отправлены!</p>)}

    </div>
    </>
  )
}
