import Arrow from '../../img/Arrow.svg';
import Arrow2 from '../../img/Arrow2.svg';
import Avatar from '../../img/user-avatar.svg';
import './header.css';
import {useState} from 'react';

function Header(){
    const [isOpen, setOpen] = useState(false)
    const addClick = () =>{
        setOpen(!isOpen)
    }
    return(
        <header className='header'>
            <h1 className='header__title'>Awesome Kanban Board</h1>
            <div className='menu'>
                <img className='menu__logo' src={Avatar} alt='logo' />
                <button className='menu__arrow' onClick={addClick}>
                    {isOpen ? (
                        <img src={Arrow2} alt='arrow' />
                    ) : (
                        <img src={Arrow} alt='arrow' />
                    )
                    }
                </button>
                <nav className={`nav ${isOpen ? 'active' : ''}`}>
                    <ul className='nav__list'>
                        <li className='list__item'>
                            <span>Profile</span>
                        </li>
                        <li className='list__item'>
                            <span>Log Out</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header