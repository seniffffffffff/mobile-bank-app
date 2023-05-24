import React from 'react'
import PointsIcon from '../../icons/PointsIcon'
import { CardProps } from '../interfaces/interfaces'
import './styles.css'
import MasterCardIcon from '../../icons/MasterCardIcon'
const CardBalanceComp: React.FC<CardProps> = ({ cardInfo }) => {
    const { cardBalance, cardNumber } = cardInfo

    const cardNumberFormater = (cardNumber: string): string => {
        const res = cardNumber.replace(/\s/g, '')
        return res
    }
    console.log(cardNumberFormater(cardNumber))

    return (
        <div className="card-content-wrapper">
            <div className="rear-div"></div>
            <div className="card-info-div">
                <div className="top-info">
                    <div className="card-balance">
                        <div className="balance-title">Total Balance</div>
                        <div className="balance-amount">{cardBalance}</div>
                    </div>
                    <div className="card-actions">
                        <PointsIcon />
                    </div>
                </div>
                <div className="card-number-div">
                    <div className="numbers">
                        {cardNumberFormater(cardNumber).slice(0, 4)}
                        &nbsp;&nbsp;&nbsp;
                        {cardNumberFormater(cardNumber).slice(4, 8)}
                        &nbsp;&nbsp;&nbsp;
                        {cardNumberFormater(cardNumber).slice(8, 12)}
                        &nbsp;&nbsp;&nbsp;
                        {cardNumberFormater(cardNumber).slice(12, 16)}
                    </div>
                    <MasterCardIcon />
                </div>
            </div>
        </div>
    )
}

export default CardBalanceComp
