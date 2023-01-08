import bgImage from '../assets/backgroundImg.png'

function Inicio() {
    return(
        <div className='bg-src-{bgImage}'>
            <footer className='flex justify-between bg-blue-300 px-24'>
                (21)99999-9999
                <div className='flex flex-col'>
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