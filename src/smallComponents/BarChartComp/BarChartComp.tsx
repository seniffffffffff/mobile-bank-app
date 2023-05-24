import React from 'react'
import { MonthInComeProps } from '../interfaces/interfaces'
import './styles.css'

const BarChartComp: React.FC<MonthInComeProps> = ({
    monthInCome,
    maxValue,
}) => {
    const { month, expens } = monthInCome

    const [isHover, setIsHover] = React.useState<boolean>(false)

    const maxHeightOfBar: number = 113
    const heightOfBar: number = Math.floor((expens * maxHeightOfBar) / maxValue)
    const reducedExpens: any = []
    const addComma = expens
        .toString()
        .split('')
        .map((item: string, index: number) => {
            if (index === 0) {
                reducedExpens.push(item, ',')
            } else reducedExpens.push(item)
        })

    return (
        <div
            className="bar-section"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div
                className={
                    isHover ? 'month-expens  text-hover' : 'month-expens'
                }
            >
                ${reducedExpens.join('')}
            </div>
            <div
                className={isHover ? 'bar-chart  bg-hover' : 'bar-chart'}
                style={{ height: `${heightOfBar}px` }}
            ></div>
            <div className={isHover ? 'month-div  text-hover' : 'month-div'}>
                {month}
            </div>
        </div>
    )
}

export default BarChartComp
