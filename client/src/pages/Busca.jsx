import Card from '../components/Card'
import cardImage from '../assets/cardImage.png'
function Busca() {
    return(
        <div>
            <div className='flex justify-between my-4'>
                <div className='flex px-3'>
                    <div className='flex flex-col mx-12'>
                        <h3>Bairro</h3>
                        <select>
                             <option></option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className='flex flex-col ml-12'>
                        <h3>Número de quartos</h3>
                        <select>
                            <option></option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
                
                <select className='mr-8'>
                    <option disabled>Selecione</option>
                </select>    
            </div>
            
            <Card title='Jorge aragão' img={cardImage} bairro='Praia de Botafogo' rooms='4 Quartos' price='R$ 100000' />
            
            
        </div>
        
    )
}

export default Busca;