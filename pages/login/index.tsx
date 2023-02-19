// 'use client';
import { useState } from "react";
import { useForm } from "react-hook-form";
import Captcha from "../../components/captcha";


export default function Login() {

    const [text, setText] = useState('');
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const [showpwd, setShowPwd] = useState(false);

    const onSubmit = () => {
        console.log('has submited')
    }

    const textCode = (code: string) => {
        setText(code);
    }

    const togglePwd = () => {
        setShowPwd(!showpwd);
    }

    return (
        <div className=' w-full h-screen bg-gradient-to-r from-[#ECECEC] via-[#D7D7D7] to-[#ECECEC] flex items-center justify-center '>

            <div className='login-panel w-full lg:w-[690px] h-auto md:h-[516px] flex flex-col md:flex-row gap-6 md:gap-14 p-4 md:px-6 md:py-4 '>
                <div className='title w-auto h-auto flex flex-col items-center md:items-start justify-center '>
                    <h1 className=' w-[201px] h-auto text-3xl font-bold text-center '>Nauta</h1>
                    <span className=' w-[201px] h-auto text-2xl font-semibold text-[#7a7a7a] text-center '>Portal de Usuario</span>
                </div>
                <div className='separator w-full h-px md:w-px md:h-full bg-[#9d9d9d] '> </div>
                
                <div className='form-wrapper w-full flex flex-col justify-center gap-6 '>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-6 '>
                        <label htmlFor="user" className='flex flex-col gap-2'>
                            User
                            <input type="text" id='user' {...register('user', {required: true})} className=' h-12 rounded-lg border-none form-input focus:placeholder:opacity-0 ' placeholder='user@email.domain' />
                            {errors.user && <span className='text-red-500 text-sm'>This field is required</span>}
                        </label>
                        <div className='flex flex-col gap-2 '>
                            <label htmlFor="password" className='flex flex-col gap-2'>
                                Password
                                <input type={showpwd ? 'text' : 'password'} id='password' {...register('pass', {required: true})} className=' h-12 rounded-lg border-none form-input focus:placeholder:opacity-0 ' placeholder='••••••••••' />
                                {errors.pass && <span className='text-red-500 text-sm'>This field is required</span>}
                            </label>
                            <label htmlFor="showPass" className=' flex items-center gap-2 '>
                                <input type="checkbox" name="Show Password" onChange={togglePwd} id="showPass" className='form-checkbox rounded-[4px]' />
                                Show Password
                            </label>
                        </div>
                        <div className='captcha flex flex-col gap-2 '>
                                <span>Captcha</span>
                                <Captcha text={textCode} />
                                <input type="text" {...register('captchatext', {required: true})} className=' h-12 rounded-lg border-none form-input focus:placeholder:opacity-0 ' placeholder='Captcha code' />
                                {errors.captchatext && <span className='text-red-500 text-sm'>Fill the captcha code</span>}
                            </div>
                        <button type='submit' className=' w-full h-12 rounded-lg bg-[#2B79D6] flex items-center justify-center font-bold text-white '>Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
