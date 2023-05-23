import React from 'react'
import './styles.css'
import { BankAccountProps } from '../interfaces/interfaces'
import { BigCardIcon } from '../../icons/CardsIcons'

const AccountComp: React.FC<BankAccountProps> = ({ bankAccountInfo }) => {
    const { cardBalance, cardNumber } = bankAccountInfo
    const cardColors = ['#8234F8', '#FF643B']
    const randomColor =
        cardColors[Math.floor(Math.random() * cardColors.length)]
    return (
        <div
            className="account-content"
            style={{ background: `${randomColor}` }}
        >
            <div className="total-balance pd-left">Total Balance</div>
            <h3 className="full-balance pd-left">${cardBalance}</h3>
            <div className="account-number-div">
                <div className="card-logo-div">
                    <BigCardIcon cardColor={randomColor} />
                </div>
                <div className="card-number">
                    <div className="bank-account">Bank Account</div>
                    <div className="card-num">{cardNumber}</div>
                </div>
            </div>
        </div>
    )
}

export default AccountComp
