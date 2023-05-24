import React from 'react'
import './styles.css'
import SectionComp from '../SectionComp/SectionComp'
import { ExpensInfo } from '../interfaces/interfaces'
import ExpensComp from '../ExpensComp/ExpensComp'
import nikeLogo from '../../assets/nikeLogo.png'

const ExpensesSmallComp = () => {
    const expenses: ExpensInfo[] = [
        {
            nameExpens: 'Nike Super Store',
            totalSpend: '2,486',
            totalBudget: '3,000',
            percentageSpent: 75.78,
            logo: nikeLogo,
            date: 'April 2022',
            id: 1,
        },
    ]

    return (
        <div className="expenses-content">
            <SectionComp sectionName="Expenses" />
            {expenses.map((expens) => (
                <ExpensComp key={expens.id} expensInfo={expens} />
            ))}
        </div>
    )
}

export default ExpensesSmallComp
