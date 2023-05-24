import { useLocation } from 'react-router-dom'
import AnalyticsComp from '../../smallComponents/AnalyticsComp/AnalyticsComp'
import CardBalanceComp from '../../smallComponents/CardBalanceComp/CardBalanceComp'
import HeaderComp from '../../smallComponents/HeaderComp/HeaderComp'
import MenuComp from '../../smallComponents/MenuComp/MenuComp'
import TransactionsComp from '../../smallComponents/TransactionsComp/TransactionsComp'
import { CardInfo } from '../../smallComponents/interfaces/interfaces'
import { useDispatch } from 'react-redux'

import './styles.css'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const HomeComp: React.FC = () => {


    const cardInfo: CardInfo = {
        cardBalance: '$76,22.00',
        cardNumber: '2544 7545 3785 1023',
    }

    return (
        <div className="content-wrapper">
            <div className="content-div">
                <HeaderComp pageName="Home" />
                <CardBalanceComp cardInfo={cardInfo} />
                <AnalyticsComp />
                <TransactionsComp />
            </div>
            <MenuComp />
        </div>
    )
}

export default HomeComp
