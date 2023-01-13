import React from 'react';


function Anuncio(){
  return(
    <div>
      <div className='bg-blue-400 '>
        <h2>Olá user</h2>

        <p>Estamos prontos para anunciar o seu imóvel. O cadastro leva em <br></br>
        média de 3 a 7 minutos para ser concluído.</p>
      </div>
      <div className='flex  flex-col justify-start'>
        <p>Qual a localização do seu imóvel?</p>
        <div className='flex flex-col'>
          <label>CEP</label>
          <input type='number' placeholder='_____-__' />
        </div>
        <div className='flex flex-col'>
          <label>Endereço *</label>
          <input type='name' />
        </div>
        <div className='flex'>
          
        </div>
        </div>
      
      
    </div>
  )
}
export default Anuncio