import React, { useState, useRef, Suspense } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import Loader  from '../components/Loader';
import useAlert from '../hooks/useAlert'
import Alert from '../components/Alert';
import { linkedin, github } from '../assets/icons';

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const { alert, showAlert, hideAlert } = useAlert()
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setCurrentAnimation('hit')

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Jason',
        from_email: form.email,
        to_email: 'jason.whitby@protonmail.com',
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setLoading(false);
      showAlert({ 
        show: true, 
        text: 'Message sent successfully', 
        type: 'success' })
      setTimeout(() => {
        hideAlert(false);
        setCurrentAnimation('idle')
        setForm({ 
          name: '', 
          email: '', 
          message: '' });
      }, 3000)
    }).catch((error) => {
      setLoading(false)
      setCurrentAnimation('idle')
      console.log(error)
      showAlert({ show: true, text: "I didn't get that, can you repeat it?", type: 'danger' })
    })
  }

  const handleFocus = () => setCurrentAnimation('walk')
  const handleBlur = () => setCurrentAnimation('idle')

  return (
    <section className=' bg-gradient-black lg:h-screen'>
      <section className='relative flex lg:flex-row flex-col max-container '>
        {alert.show && <Alert {...alert} />}
        <div className='flex-1 min-w-[50%] flex flex-col'>
          <h1 className='head-text'>Get in touch</h1>
            <form className='w-full flex flex-col gap-7 mt-3'
              onSubmit={handleSubmit}>
              <label className='text-black-500 font-semibold'>
                  Name
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder='Onyx'
                    required
                    value={form.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
              </label>
              <label className='text-black-500 font-semibold'>
                  Email
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder='Onyx@exapmle.com'
                    required
                    value={form.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
              </label>
              <label className='text-black-500 font-semibold'>
                  Your Message
                  <textarea
                    name="message"
                    className="input"
                    placeholder='How can I help you?'
                    required
                    value={form.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
              </label>
              <button
                type="submit"
                className="btn-red"
                disabled={loading}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>

        </div>

        <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
          <Canvas
            camera={{ 
              position: [0, 0, 5], 
              fov: 75,
              near: 0.1,
              far: 1000 
            }}
          >
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <ambientLight intensity={0.5} />
            <Suspense fallback={<Loader />}>
              <Fox 
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.6, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
                />
            </Suspense>
          </Canvas>
        </div> 

      </section>
              <div className='flex-1 min-w-[50%] flex flex-col lg:ml-[40%] ml-[20%]'>
                <div className='lg:w-[400px] w-full' >
                  <div className='flex lg:gap-52 gap-28 '>
                    <button onClick={() => window.open("https://www.linkedin.com/in/jason-whitby-mscsia-12x-aws-certified", "_blank")} >
                      <div className='block-container w-12 h-12'>
                        <div className='btn-front-white rounded-xl flex justify-center items-center '>
                          <img
                            src={linkedin}
                            alt="LinkedIn Icon"
                            className='w-75% h-75% object-contain'/>
                        </div>
                      </div>       
                    </button>

                    <div >
                      <button 
                          className='lg:mt-2 mt-2 '
                          onClick={() => window.open("https://github.com/735783D", "_blank")} >
                        <div className='block-container w-12 h-12'>
                          <div className='btn-front-white rounded-xl flex justify-center items-center '>
                            <img
                              src={github}
                              alt="GitHub Icon"
                              className='w-75% h-75% object-contain'/>
                          </div>
                        </div>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
    </section>
  )
}

export default Contact;