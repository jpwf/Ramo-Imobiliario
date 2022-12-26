import React from 'react';
// import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      
      <div className=" flex flex-row justify-center items-center text-base mt-12  ">
        <h1 className="  mt-18 mb-9 ml-16">Logo</h1>
        <div className="mr-56 ml-48 ">
          <button className="mx-16"> Início </button>
          <button className="mx-16"> Buscar imóveis</button>
          <button className="mx-16"> Anunciar </button>
        </div>
        <div className="mr-8 ">
          <button className="mr-8"> Entrar </button>
          <button className="px-3 py-4 bg-blue-500 text-white"> Cadastre-se</button>
        </div>

      </div>
    </div>
  )
}
 
export default Navbar;
