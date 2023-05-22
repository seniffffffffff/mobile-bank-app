import CardBalanceComp from '../../smallComponents/CardBalanceComp/CardBalanceComp'
import HeaderComp from '../../smallComponents/HeaderComp/HeaderComp'
import TransactionsComp from '../../smallComponents/TransactionsComp/TransactionsComp'
import { CardInfo } from '../../smallComponents/interfaces/interfaces'
import './styles.css'

const HomeComp: React.FC = () => {
    const cardInfo: CardInfo = {
        cardBalance: '$76,22.00',
        cardNumber: '2544 7545 3785 1023',
    }
    return (
        <div className="home-wrapper">
            <div className="home-div">
                <HeaderComp />
                <CardBalanceComp cardInfo={cardInfo} />
                <TransactionsComp />
            </div>
        </div>
    )
}

export default HomeComp