import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox'
import Loader from '../components/Loader'
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

function Contact() {

  const formRef = useRef(null);
  
  const [form,setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading ,setisLoading] = useState(false);
  const [currentAnimation,setcurrentAnimation]=useState('idle');
  //onChange takes the keypress event

  const { alert, showAlert, hideAlert }=useAlert();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
    //e will have the changes and that will be spread across the entire form in the manner that is written i.e name of the field is given the value being entered
  };

  const handleFocus = () => setcurrentAnimation('walk');

  const handleBlur = () => setcurrentAnimation('idle');

  const handleSubmit = (e) =>{
    e.preventDefault();
    setisLoading(true);
    setcurrentAnimation('hit');
    // this is async so .then is called
    
    emailjs.send(
      'service_apteqdc',
      'template_twwfzrp',
      {
        from_name : form.name,
        to_name : "Akshay",
        from_email : form.email,
        to_email : 'akshay11rai@gmail.com',
        message : form.message
      },
      'NFfPbGTVv-UJByP_T'
    ).then(()=>{
      setisLoading(false);
      // Show success message and hide it
      showAlert({show:true,text:'Message sent successfully !',type:'success'});
      setTimeout(()=>{
        hideAlert();
        setcurrentAnimation('idle');
        setForm({name:'',email:'',message:''});
      },[3000])
    }).catch((error)=>{
      setisLoading(false);
      console.log(error);
      setcurrentAnimation('idle');
      // Show error message
      showAlert({show:true,text:'No Message sent, Sorry !! ',type:'danger'});
    })
  };

  return (

    <section className='relative flex lg:flex-row flex-col max-container h-full'>
      {alert.show && <Alert {...alert} />}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
        <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold'>Name
          <input type='text' name='name' className='input' placeholder='What’s In A Name?' 
          required
          value={form.name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}/>
          </label>
          <label className='text-black-500 font-semibold'>Email
          <input type='email' name='email' className='input' placeholder='akshay11rai@gmail.com' 
          required
          value={form.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}/>
          </label>
          <label className='text-black-500 font-semibold'>Your Message
          <textarea name='message' 
          rows={4}
          className='textarea' placeholder='Let me know how I can help you !' 
          required
          value={form.message}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}/>
          </label>
          <button
            type='submit'
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}>
              { isLoading ? 'Sending...' : 'Send Message'}
            </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
        camera={{
          position: [0,0,5],
          fov: 75,
          near:0.1,
          far: 1000
          }}>
            <directionalLight intensity={2.5} position={[0,0,1]}/>
            <ambientLight intensity={0.5}/>
          <Suspense fallback={<Loader/>}>
            <Fox
            currentAnimation={currentAnimation}
            position={[0.5,0.35,0]}
            rotation={[12.6,-0.6,0]}
            scale={[0.5,0.5,0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>

  )
}

export default Contact
