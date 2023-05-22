import React from 'react'
import './styles.css'
import { TransactionsProps } from '../interfaces/interfaces'

const TransactionComp: React.FC<TransactionsProps> = ({ transaction }) => {
    const { name, amount, date, logo, account } = transaction

    return (
        <div className="transaction">
            <div className="logo-text">
                <img src={logo} className="transaction-logo" />
                <div className="transaction-text-info">
                    <h4 className="transaction-name">{name}</h4>
                    <div className="transaction-account text-gray">
                        {account}
                    </div>
                </div>
            </div>

            <div className="transaction-amount-date">
                <div className="transaction-amount">${amount}</div>
                <div className="transaction-date text-gray">{date}</div>
            </div>
        </div>
    )
}

export default TransactionComp
