import './Search.scss'
import lupa from './img/lupa.svg'

const Search = () => {
    return(
        <div className='section__search'> 
            <h3 className='title'>Все кроссовки</h3>
            <div className='box__input'>
                <img src={lupa} alt="" />
                <input type="text" placeholder='Поиск...'/>
            </div>
        </div>
    )
}

export default Search