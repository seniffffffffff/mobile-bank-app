import React from 'react'
import './styles.css'
import { TransactionInfo } from '../interfaces/interfaces'

import nikeLogo from '../../assets/nikeLogo.png'
import pumaLogo from '../../assets/pumaLogo.png'
import TransactionComp from '../TransactionComp/TransactionComp'
import SectionComp from '../SectionComp/SectionComp'

const TransactionsComp: React.FC = () => {
    const transactionsList: TransactionInfo[] = [
        {
            name: 'Nike Super Store',
            amount: 475,
            date: 'Fri, 05 April 2022',
            logo: nikeLogo,
            account: 'Bank Account',
            id: 1,
        },
        {
            name: 'Puma Store',
            amount: 952,
            date: 'Fri, 05 April 2022',
            logo: pumaLogo,
            account: 'Bank Account',
            id: 2,
        },
    ]
    return (
        <div className="section-div">
            <SectionComp sectionName={'Transaction'} />
            {transactionsList.map((transaction) => (
                <TransactionComp
                    key={transaction.id}
                    transaction={transaction}
                />
            ))}
        </div>
    )
}

export default TransactionsComp
