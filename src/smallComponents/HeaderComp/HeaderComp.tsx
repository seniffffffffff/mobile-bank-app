import userLogo from '../../assets/user.png'
import NotificationIcon from '../../icons/NotificationIcon'
import './styles.css'
const HeaderComp: React.FC = ({ pageName }: any) => {
    return (
        <footer className="footer">
            <div className="user-logo-div">
                <img src={userLogo} alt="" className="user-logo" />
            </div>
            {/* {pageName} */}
            <h3 className="page-name">Home</h3>
            <div className="notifications-div pointer">
                <NotificationIcon />
            </div>
        </footer>
    )
}

export default HeaderComp
