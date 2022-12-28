import React from 'react';
import LoginImage from '../assets/login-img.png'
import Navbar from  '../components/navBar'
function LoginPage(){
  return(
    <>
      <Navbar/>
      <div className='flex flex-row justify-between'>
        <img className='ml-56 mt-24 max-h-[493px] 'src={LoginImage}/>
        <form className='flex flex-col w-auto h-auto px-12 mt-24 pt-12 mb-48 border border-solid rounded-xl border-formLine mr-40'>
          <p className='text-2xl font-light leading-7'>Bem vinde!</p>
          <p className='text-2xl font-bold leading-7 mb-8'>Acesse sua conta</p>
          <label className='flex flex-col mb-4'>
            E-mail
            <input type="email"  className='border-solid  border rounded-lg border-formLine'placeholder="Digite seu email"></input>
          </label>
          <label className='flex flex-col mb-6'>
            Senha
            <input type="password" className='border-solid  border rounded-lg border-formLine' placeholder="Digite sua senha"></input>
          </label>
          <label className='mb-8'>
            <input type="checkbox"></input>
            Lembre-se de mim
          </label>
          <button type="submit" className='mb-6 flex flex-row justify-center items-center px-3 py-4 bg-blue'>Entrar</button>
          <p className='mb-12'>Não Possui uma conta? <button type="submit">Cadastre-se</button></p>
        </form>
      </div>
      
    </>
  )
}

export default LoginPage;