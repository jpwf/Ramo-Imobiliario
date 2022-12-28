import React from 'react';
import LoginImage from '../assets/login-img.png'
import Navbar from  '../components/navBar'
import {EnvelopeSimple, Password, EyeSlash } from 'phosphor-react'
function LoginPage(){
  return(
    <>
      <Navbar/>
      <div className='flex flex-row justify-between'>
        <img className='ml-56 mt-24 max-h-[493px] 'src={LoginImage}/>
        <form className='flex flex-col w-auto h-auto px-12  mt-24 pt-12 mb-48 border border-solid rounded-xl border-gray-400 mr-40'>
          <p className='text-2xl font-light leading-7'>Bem vinde!</p>
          <p className='text-2xl font-bold leading-7 mb-8'>Acesse sua conta</p>
          <label className='flex flex-col mb-4'>
            E-mail
            <div className='flex border rounded-lg border-gray-400'>
              <EnvelopeSimple size={28} color='#9CA3AF' className='mt-[10px] ml-2'/>
              <input type="email"  className='border-solid   px-4 py-3 'placeholder="Digite seu email"></input>
            </div>
            
          </label>
          <label className='flex flex-col mb-6'>
            Senha
            <div className='flex border rounded-lg border-gray-400'>
              <Password size={28} color='#9CA3AF' className='mt-[10px] ml-2'/>
              <input type="password" className='border-solid   px-4 py-3 ' placeholder="Digite sua senha"></input>
              {/*<EyeSlash size={24} color='#9CA3AF' className='ml-3 mr-1 my-3'/>*/}
              
            </div>
            
          </label>
          <label className='mb-8'>
            <input type="checkbox" className='mx-2'></input>
            Lembre-se de mim
          </label>
          <button type="submit" className='mb-6 flex  w-[422px] h-[43px] justify-center items-center px-3 py-4 bg-blue-500 text-white '>Entrar</button>
          <p className='mb-12'>Não Possui uma conta? <button className='font-bold justify-center items-center'type="submit">Cadastre-se</button></p>
        </form>
      </div>
      
    </>
  )
}

export default LoginPage;