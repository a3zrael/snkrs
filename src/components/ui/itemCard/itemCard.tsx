import './itemCard.scss'
import plus from './img/plus.svg'
import greenPlus from './img/greenPlus.svg'
import liked from './img/liked.svg'
// import activeLiked from './img/activeLiked.svg'

interface itemCardProps {cros:string, name:string, price:number}

const itemCard = ({cros, name, price}: itemCardProps) => {
    return(
        <div className='card'>
            <div className='favorite'>
                <img src={liked} alt="like" />     
            </div>
                <div className='img_box'>
                    <img className='cros' src={cros} alt="snkrs" />
                </div>
                <p className='name'>{name}</p> 
                <div className='plus_basket'>
                    <div className='info'>
                        <span className='price'>Цена:</span>
                        <span className='sum_price'>{price} rub</span>
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