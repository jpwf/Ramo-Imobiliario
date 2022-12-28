import React from 'react';
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

Yup.setLocale({
    mixed: {
        required: "Campo obrigatório"
    }
});

function Register() { 
    const phoneRegExp = /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?9[1-9][0-9]{3}\-?[0-9]{4}$/;

    const schema = Yup.object().shape({
        name: Yup.string().matches(/^[A-Za-z ]*$/, 'Insira um nome válido').required(),
        cpf: Yup.string().matches(/^[0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2}$/, 'Insira um CPF válido').required(),
        phone: Yup.string().matches(phoneRegExp, "Número inválido").required(),
        email: Yup.string().email('E-mail inválido').required(),
        password: Yup.string().min(6, "Necessário no mínimo 6 dígitos").required(),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "As senhas precisam ser iguais").required(),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    
    const submitForm = (data) => {
        console.log({data});
    }
    
    return (
        <div className="bg-white h-screen flex flex-col min-h-screen items-center lg:flex-wrap">
            <div className="w-full py-5 flex items-center justify-between bg-gray-500 border-b border-gray-300 p-8 lg:justify-center">
                NAVBAR
            </div>
            <div className='flex flex-row flex-wrap gap-28 justify-center items-center mt-24 w-4/5'>
                <img 
                    className='max-w-lg max-h-[523px] lg:max-w-sm lg:max-h-96'
                    src="src/assets/register-img.png" alt="boneco segurando cartão identificador" 
                    />
                
                <div className="w-full max-w-xs flex flex-col p-14 items-center bg-white rounded-lg border-gray-400 shadow-md">
                    <strong className='text-gray-900 text-3xl font-bold lg:text-2xl'>
                        Crie sua conta
                    </strong>
                    <p className='text-gray-900 text-base font-normal pb-6'>É simples e rápido</p>
                    <form onSubmit={handleSubmit(submitForm)} className="">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Nome Completo
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="name" type="text" placeholder="Digite seu nome completo" 
                                {...register('name')} required
                            />
                            <p className="text-red-600 text-xs">{errors.name?.message}</p>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                                id="password" type="password" placeholder="***********"
                                {...register('password')} 
                            />
                            <p className="text-red-600 text-xs">{errors.senha?.message}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <button 
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                                type="submit"
                            >
                        
                            Sign In
                            </button>
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                            </a>
                        </div>
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
