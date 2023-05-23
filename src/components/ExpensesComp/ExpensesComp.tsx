import React from 'react'
import HeaderComp from '../../smallComponents/HeaderComp/HeaderComp'
import AnalyticsComp from '../../smallComponents/AnalyticsComp/AnalyticsComp'
import CardBalanceComp from '../../smallComponents/CardBalanceComp/CardBalanceComp'
import MenuComp from '../../smallComponents/MenuComp/MenuComp'
import TransactionsComp from '../../smallComponents/TransactionsComp/TransactionsComp'
import CalendarComp from '../../smallComponents/CalendarComp/CalendarComp'
import './styles.css'
import BankAccountsComp from '../../smallComponents/BankAccountsComp/BankAccountsComp'

const ExpensesComp: React.FC = () => {
    return (
        <div className="content-wrapper ">
            <div className="content-div flex-start">
                <HeaderComp pageName="Expenses" />
                <CalendarComp />
                <BankAccountsComp />
            </div>
            <MenuComp />
        </div>
    )
}

export default ExpensesComp
