// import backImg from '../assets/backgroundImg.png'

function Inicio() {
    return(
        <div>
            <div className=' bg-home  bg-cover w-[1440px] h-[708px]'>
                <div className='text-3xl font-bold text-white pt-56 ml-24 '>
                    <p>Encontre um lar na</p>
                    <p>cidade do </p>
                    <p>Rio de Janeiro</p>
                </div>
                
            </div>
            <footer className='flex justify-between items-center text-white  bg-blue-400 px-24'>
                (21)99999-9999
                <div className='flex flex-col  items-center'>
                    <h2>Endereço</h2>
                    <p>Rua Gen. Canabarro, 485 - Maracanã. Rio de Janeiro - RJ </p>
                    <p>(21)4002-8922</p>
                </div>
                <p>Nossas redes sociais</p>
                
            </footer>
        </div>
    )
}

export default Inicio;