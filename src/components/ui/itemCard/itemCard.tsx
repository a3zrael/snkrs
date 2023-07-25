import { useState } from 'react';
import './itemCard.scss'
import plus from './img/plus.svg'
import greenPlus from './img/greenPlus.svg'
import liked from './img/liked.svg'
import activeLiked from './img/activeLiked.svg';


interface itemCardProps {cros:string, name:string, price:number}

const itemCard = ({cros, name, price }: itemCardProps) => {


    const[isAdd, setIsAdd] = useState(false)
    const[isLike, setIsLike] = useState(false)

    const onClickPlus = () => {
        setIsAdd(!isAdd);
    }

    const onClickLike = () => {
        setIsLike(!isLike);
    }

    return(
        <div className='card'>
            <div className='favorite' onClick={onClickLike}>
                <img src={isLike ? activeLiked : liked} alt="like" />    
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
                    <button onClick={onClickPlus}>
                        <img className='plus' src={isAdd ? greenPlus : plus} alt="plus" />
                        <img className='plus_active' src={greenPlus} alt="" />
                    </button>
                    
                </div>
        </div>
    )
}

export default itemCard;