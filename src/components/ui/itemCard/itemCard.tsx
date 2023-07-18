import './itemCard.scss'
import plus from './img/plus.svg'
import greenPlus from './img/greenPlus.svg'
import cros from './img/cros1.svg'
import liked from './img/liked.svg'
import activeLiked from './img/activeLiked.svg'


const itemCard = () => {
    return(
        <div className='card'>
            <div className='favorite'>
                <img src={liked} alt="like" />     
            </div>
            <img className='cros' src={cros} alt="snkrs" />
            <p className='name'>Мужские Кроссовки Nike Blazer Mid Suede</p> 
            <div className='plus_basket'>
                <div className='info'>
                    <span className='price'>Цена:</span>
                    <span className='sum_price'>12 900 rub</span>
                </div>
                <button>
                    <img className='plus' src={plus} alt="plus" />
                    <img className='plus_active' src={greenPlus} alt="" />
                </button>
            </div>
        </div>
    )
}

export default itemCard;