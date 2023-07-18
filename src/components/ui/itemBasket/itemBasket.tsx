import './itemBasket.scss'
import cros from './img/cros1.svg'
import cancel from './img/krest.svg'

const itemBasket = () =>{
    return(
        <div className='wrap_card'>
            <img className='snkr' src={cros} alt="" />
            <div className='info'>
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <div className="price">12 999 руб.</div>
            </div>
            <img src={cancel} alt="" />
        </div>
    )
}

export default itemBasket;