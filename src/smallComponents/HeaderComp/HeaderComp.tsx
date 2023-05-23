import userLogo from '../../assets/user.png'
import NotificationIcon from '../../icons/NotificationIcon'
import { PageName } from '../interfaces/interfaces'
import './styles.css'
const HeaderComp: React.FC<PageName> = ({ pageName }) => {
    return (
        <header className="footer">
            <div className="user-logo-div">
                <img src={userLogo} alt="" className="user-logo" />
            </div>
            {/* {pageName} */}
            <h3 className="page-name">{pageName}</h3>
            <div className="notifications-div pointer">
                <NotificationIcon />
            </div>
        </header>
    )
}

export default HeaderComp
