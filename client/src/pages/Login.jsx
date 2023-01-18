import React from 'react';
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


import LoginImage from '../assets/login-img.png'
import { EnvelopeSimple, Password, EyeSlash } from 'phosphor-react'

function LoginPage() {
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    email: Yup.string().email("E-mail inválido").required(),
    password: Yup.string().min(6, "Necessário no mínimo 6 dígitos").required(),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  async function logarUsuario(data) {
    await axios.post('/user/login', data)
    .then(res => {
      localStorage.setItem('usuario', JSON.stringify(res.data.name));
      localStorage.setItem('token', JSON.stringify(res.data.token));
      navigate('/');
    })
    .catch(error => {
     console.error(error);
    })
 }

  const submitForm = async (e) => {
    const user = data;
    logarUsuario(user);
    reset();
    
  }

  return (

    <div className=" bg-white h-screen flex flex-col min-h-screen items-center">
      <div className='flex gap-28 justify-evenly items-center mt-24 w-4/5'>
        <img
          className='lg:flex md:hidden sm:hidden w-full max-w-md max-h-[425px]'
          src={LoginImage} alt="boneco segurando cartão identificador"
        />

        <div className=" w-full max-w-[535px] flex flex-col p-14 mb-4 items-center bg-white rounded-lg ring-[0.5px] ring-gray-400 ">
          <div className='w-full items-start mb-8'>
            <p className='text-gray-900 text-base font-normal'>
              Bem-vinde!
            </p>
            <strong className='text-gray-900 text-3xl font-bold lg:text-2xl'>Acesse sua conta</strong>
          </div>
          <form onSubmit={handleSubmit(submitForm)} className="w-full">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
                E-mail
              </label>
              <div className='flex shadow appearance-none border rounded w-full py-3 px-4 gap-3 text-sm text-gray-700 leading-tight focus:outline-none placeholder-gray-400 focus:ring-1 focus:ring-blue-400'>
                <EnvelopeSimple size={18} className="text-gray-400" />
                <input

                  className="w-full outline-0"
                  id="email" name='email' type="email" placeholder="Digite e-mail"
                  {...register('email')} required
                />
              </div>
              <p className="text-red-600 text-xs">{errors.email?.message}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="password">
                Senha
              </label>
              <div className='flex shadow appearance-none border rounded w-full py-3 px-4 gap-3 text-sm text-gray-700 leading-tight focus:outline-none placeholder-gray-400 focus:ring-1 focus:ring-blue-400'>
                <Password size={18} className="text-gray-400" />
                <input
                  className="w-full outline-0"
                  id="password" type="password" placeholder="Digite sua senha" autoComplete='on'
                  {...register('password')} required
                />
              </div>
              <p className="text-red-600 text-xs">{errors.password?.message}</p>

            </div>
            <div className='flex items-center mb-8'>
              <input id='rememberMe' type="checkbox" value='' className='form-checkbox mr-2 w-4 h-4 border border-gray-400 rounded text-blue-400 focus:ring-blue-300 transition duration-200 cursor-pointer'></input>
              <label htmlFor="rememberMe" className='text-sm font-medium text-gray-700 cursor-pointer'> Lembre-se de mim</label>
            </div>
            <button
              className="w-full mb-6 bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
              type="submit"
            >
              Entrar
            </button>

            <p className="text-base text-center text-gray-500">
              Não possui uma conta? <Link to={"/cadastro"} className='text-gray-900 font-semibold'>Cadastre-se</Link>
            </p>
          </form>
        </div>
      </div>
    </div>

  )
}

export default LoginPage;