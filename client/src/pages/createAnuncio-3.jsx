import Navbar from '../components/navBar'
import AnuncioStepper from '../components/Stepper'
import anuncio from '../assets/anuncio.png'
import {CurrencyDollar} from 'phosphor-react'

function CreateAnuncio3(){
  return(
    
    <div className='h-screen'>
      <Navbar/>
      <div className='flex w-full gap-40'>
        <div className='flex flex-col pt-[72px] pl-[195px]'>
          <h2 className='font-bold text-xl text-gray-800 pb-2'>Valor do anúncio para venda</h2>
          <p className='pb-[51px] text-base text-gray-800'>Se não souber o valor exato, você pode informar um aproximado e alterar depois.</p>
          <div className='flex flex-col '>
            <label className='flex flex-col gap-2'>
              Por quanto você quer vender?
              <input placeholder='R$ Digite o valor' className='mb-[32px] py-3 px-4 gap-3 items-center border rounded border-solid border-[#9CA3AF] '  />
            </label>
            
            <div className='bg-blue-100 w-full h-fit px-1 flex flex-col gap-1 items-start rounded mb-[27px] '>
              <div className='flex items-center'>
                <CurrencyDollar size={20} className='text-gray-500' />
                <h3 className='font-semibold text-base text-[#60A5FA] pl-1 '>Imóveis com preços redondos podem atrair mais interessados</h3>
              </div>
              
              <p className='text-[#60A5FA] pl-[24px] w-full'>Valores como R$505.000 diminuem suas chances de aparecer nas buscas dos clientes que usam limites 
                redondos nos filtros do site, como R$500.000. </p>
            </div>

            <AnuncioStepper />
          </div>
        </div>
        <img src={anuncio} className='max-w-[416px] max-h-[314px] mr-[122px] mt-[110px]' />
      </div>
    </div>
  )
}
export default CreateAnuncio3