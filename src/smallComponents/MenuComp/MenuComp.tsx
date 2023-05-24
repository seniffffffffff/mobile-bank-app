import { Link } from 'react-router-dom'
import AddIcon from '../../icons/AddIcon'
import HomeIcon from '../../icons/HomeIcon'
import { SmallCardIcon } from '../../icons/CardsIcons'
import CalendarIcon from '../../icons/CalendarIcon'
import SettingsIcon from '../../icons/SettingsIcon'
import './styles.css'

const MenuComp = () => {
    return (
        <nav className="nav">
            <div className="nav-wrapper">
                <Link to={'/home'}>
                    <HomeIcon />
                </Link>
                <Link to={'/expenses'}>
                    <SmallCardIcon />
                </Link>
                <Link to={'/expenses'}>
                    <AddIcon />
                </Link>
                <Link to={'/expenses'}>
                    <CalendarIcon />
                </Link>
                <Link to={'/expenses'}>
                    <SettingsIcon />
                </Link>
            </div>
        </nav>
    )
}

export default MenuComp
