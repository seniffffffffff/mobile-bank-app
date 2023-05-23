import React from 'react'
import './styles.css'

import { BankAccountInfo } from '../interfaces/interfaces'
import AccountComp from '../AccountComp/AccountComp'
const BankAccountsComp = () => {
    const bankAccounts: BankAccountInfo[] = [
        {
            cardBalance: '76,22.00',
            cardNumber: '**** **** 1965',
            id: 1,
        },
        {
            cardBalance: '76,22.00',
            cardNumber: '**** **** 1965',
            id: 2,
        },
    ]
    return (
        <div className="accounts-div">
            {bankAccounts.map((bankAccountInfo) => (
                <AccountComp
                    key={bankAccountInfo.id}
                    bankAccountInfo={bankAccountInfo}
                />
            ))}
        </div>
    )
}

export default BankAccountsComp
