import AnuncioStepper from "../components/Stepper";

function CriarAnuncio1() {
    return (
        <>
            <div className='flex flex-col col-span-2 justify-center min-h-[195px] bg-blue-500 pl-[195px] text-white  '>
                <h2 className='font-semibold text-2xl'>Olá, Nome</h2>
                <p className='text-base'>Estamos prontos para anunciar o seu imóvel. O cadastro leva em <br />
                    média de 3 a 7 minutos para ser concluído.</p>
            </div>
            <div className='flex flex-col gap-12 w-1/2 pl-[195px]'>
                <p>Qual a localização do imóvel?</p>
                <div className='flex flex-col'>
                    <label>CEP</label>
                    <input className='px-3 py-4  w-[148px] h-[41px] items-center border border-solid box-border border-gray-400 rounded' placeholder='_ _ _ _ _ - _ _' />
                </div>

                <div className='flex flex-col'>
                    <label>Endereço</label>
                    <input className='w-[544px] h-[41px] rounded border border-solid border-box border-gray-400 px-3 py-4 items-center' />
                </div>

                <div className='flex gap-4 ' >
                    <div className='flex flex-col'>
                        <label>Número</label>
                        <input className='w-[237px] h-[41px] items-center px-4 py-3 rounded border border-solid border-box border-gray-400 ' />
                    </div>
                    <div className='flex flex-col'>
                        <label>Complemento</label>
                        <input className='w-[291px] h-[41px] items-center px-4 py-3 rounded border border-solid border-box border-gray-400 ' />
                    </div>
                </div>
                <AnuncioStepper />
            </div>
        </>
    )
}

export default CriarAnuncio1;