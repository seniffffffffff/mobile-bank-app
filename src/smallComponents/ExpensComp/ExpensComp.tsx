import React from 'react'
import './styles.css'
import { ExpensProps } from '../interfaces/interfaces'
import CustomizedProgressBars from '../LinearProgressComp/LinearProgressComp'

const ExpensComp: React.FC<ExpensProps> = ({ expensInfo }) => {
    const { nameExpens, totalSpend, totalBudget, percentageSpent, logo, date } =
        expensInfo
    return (
        <div className="expens-div">
            <div className="expens-info">
                <div className="logo-text">
                    <img src={logo} className="transaction-logo" />
                    <div className="transaction-text-info">
                        <h4 className="transaction-name">{nameExpens}</h4>
                        <div className="transaction-account text-gray">
                            Bank Account
                        </div>
                    </div>
                    <div className="date-div text-gray">{date}</div>
                </div>
                <div className="spend-content">
                    <div className="spend-div">
                        <div className="grey-text-reg mr-bot-16">
                            Total Spend
                        </div>
                        <div className="green-text">${totalSpend}</div>
                    </div>
                    <div className="budget-div">
                        <div className="grey-text-reg mr-bot-16">
                            Total Budget
                        </div>
                        <div className="black-text-reg">${totalBudget}</div>
                    </div>
                    <div className="pensent-spend green-text">
                        {percentageSpent}%
                    </div>
                </div>
                <div className="mr-bot-16">
                    <CustomizedProgressBars progressValue={percentageSpent} />
                </div>
            </div>
        </div>
    )
}

export default ExpensComp
