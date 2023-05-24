import React from 'react'
import HeaderComp from '../../smallComponents/HeaderComp/HeaderComp'
import MenuComp from '../../smallComponents/MenuComp/MenuComp'
import CalendarComp from '../../smallComponents/CalendarComp/CalendarComp'
import './styles.css'
import BankAccountsComp from '../../smallComponents/BankAccountsComp/BankAccountsComp'
import ExpensesSmallComp from '../../smallComponents/ExpensesSmallComp/ExpensesSmallComp'
import { useLocation } from 'react-router-dom'

const ExpensesComp: React.FC = () => {
    const location = useLocation()

    console.log('Текущий путь:', location.pathname)
    return (
        <div className="content-wrapper ">
            <div className="content-div flex-start">
                <HeaderComp pageName="Expenses" />
                <CalendarComp />
                <BankAccountsComp />
                <ExpensesSmallComp />
            </div>
            <MenuComp />
        </div>
    )
}

export default ExpensesComp
