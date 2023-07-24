import './Content.scss'
import lupa from './img/lupa.svg'
import cros1 from './img/cros1.svg'
import cros2 from './img/cros2.svg'
import ItemCard from '../ui/itemCard/itemCard';

const Content = () => {



    return(
        <div className='section__content'> 
            <div className="search">
                <h3 className='title'>Все кроссовки</h3>
                <div className='box__input'>
                    <img src={lupa} alt="" />
                    <input type="text" placeholder='Поиск...'/>
                </div>
            </div>
            <div className='wrap_snkrs'>
                <ItemCard cros={cros1} name='Мужские Кроссовки Nike Blazer Mid Suede' price={12999}/>
                <ItemCard cros={cros2} name='Мужские Кроссовки Nike Air Max 270' price={15700}/>
                <ItemCard cros={cros2} name='Мужские Кроссовки Nike Air Max 270' price={15700}/>
                <ItemCard cros={cros1} name='Мужские Кроссовки Nike Blazer Mid Suede' price={12999}/>
            </div>
            
        </div>
    )
}

export default Content