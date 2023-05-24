import React from 'react'
import './styles.css'
import { MonthInCome } from '../interfaces/interfaces'
import BarChartComp from '../BarChartComp/BarChartComp'
import ArrowDown from '../../icons/ArrowDown'

const AnalyticsComp = () => {
    const analyticsData: MonthInCome[] = [
        {
            month: 'Jan',
            expens: 1234,
            id: 1,
        },
        {
            month: 'Feb',
            expens: 2234,
            id: 2,
        },
        {
            month: 'Mar',
            expens: 5234,
            id: 3,
        },
        {
            month: 'Apr',
            expens: 2234,
            id: 4,
        },
        {
            month: 'May',
            expens: 1000,
            id: 5,
        },
        {
            month: 'Jun',
            expens: 2900,
            id: 6,
        },
        {
            month: 'Jul',
            expens: 3900,
            id: 7,
        },
    ]

    const maxValue: number = Math.max(
        ...analyticsData.map((item) => item.expens)
    )

    return (
        <div className="analytics-wrapper">
            <div className="title">
                <h3 className="section-article">Analytics</h3>
                <div className="section-filter bg-orange">
                    <div className="year-picker"> Year - 2022</div>
                    <ArrowDown />
                </div>
            </div>
            <div className="analytics-bar">
                {analyticsData.map((monthInCome) => (
                    <BarChartComp
                        key={monthInCome.id}
                        maxValue={maxValue}
                        monthInCome={monthInCome}
                    />
                ))}
            </div>
        </div>
    )
}

export default AnalyticsComp
