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

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    
    const submitForm = (data) => {
        console.log({data});
        reset();
    }
    
    return (
        <div className="bg-white h-screen flex flex-col min-h-screen items-center">
            <div className="w-full py-5 flex items-center justify-center bg-gray-500 border-b border-gray-300 p-8 lg:justify-center">
                NAVBAR
            </div>
            <div className='flex flex-wrap gap-28 justify-evenly items-center mt-24 w-4/5'>
                <img 
                    className='w-full max-w-lg max-h-[523px] sm:min-w-fit sm:min-h-fit'
                    src="src/assets/register-img.png" alt="boneco segurando cartão identificador" 
                    />
                
                <div className=" w-full max-w-[535px] flex flex-col p-14 mb-4 items-center bg-white rounded-lg ring-[0.5px] ring-gray-400 ">
                    <strong className='text-gray-900 text-3xl font-bold lg:text-2xl'>
                        Crie sua conta
                    </strong>
                    <p className='text-gray-900 text-base font-normal pb-6'>É simples e rápido</p>
                    <form onSubmit={handleSubmit(submitForm)} className="w-full">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="name">
                            Nome Completo
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400 focus:ring-1 focus:ring-blue-400" 
                                id="name" name='name' type="text" placeholder="Digite seu nome completo" 
                                {...register('name')} required
                            />
                            <p className="text-red-600 text-xs">{errors.name?.message}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="cpf">
                            CPF
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400 focus:ring-1 focus:ring-blue-400" 
                                id="cpf" name='cpf' type="text" placeholder="Digite seu CPF"
                                {...register('cpf')} required
                            />
                            <p className="text-red-600 text-xs">{errors.cpf?.message}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="phone">
                            Telefone
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400 focus:ring-1 focus:ring-blue-400" 
                                id="phone" name='phone' type="tel" placeholder="(xx) xxxxx-xxxx" 
                                {...register('phone')} required
                            />
                            <p className="text-red-600 text-xs">{errors.phone?.message}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
                            E-mail
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400 focus:ring-1 focus:ring-blue-400" 
                                id="email" name='email' type="email" placeholder="Digite seu melhor e-mail" 
                                {...register('email')} required
                            />
                            <p className="text-red-600 text-xs">{errors.email?.message}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="password">
                            Senha
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400 focus:ring-1 focus:ring-blue-400" 
                                id="password" type="password" placeholder="Digite sua senha"
                                {...register('password')} required
                            />
                            <p className="text-red-600 text-xs">{errors.password?.message}</p>
                        </div>
                        <div className="mb-8">
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="confirmPassword">
                            Confirme sua senha
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400 focus:ring-1 focus:ring-blue-400" 
                                id="confirmPassword" name='confirmPassword' type="password" placeholder="Confirme sua senha" 
                                {...register('confirmPassword')} required
                            />
                            <p className="text-red-600 text-xs">{errors.confirmPassword?.message}</p>
                        </div>
                        
                        <button 
                            className="w-full mb-6 bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                            type="submit"
                        >
                        Cadastre-se
                        </button>
                        
                        <p className="text-base text-center text-gray-500">
                        Já possui uma conta? <a href="/login" className='text-gray-900 font-semibold'>Faça o login</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
