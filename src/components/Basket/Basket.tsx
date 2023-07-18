import './Basket.scss'
import ItemBasket from '../ui/itemBasket/itemBasket';

const Basket = () =>{
    return(
        <div className='overlay'> 
            <div className='wrap_basket'>
                <h3 className='titile_basket'>Корзина</h3>
                <ItemBasket/>
                <div className='wrap_buy'>
                    <div className='wrap_info'>
                        <div className='item_one'></div>
                        <div className='item_two'></div>
                        <div className='item_btn'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket;