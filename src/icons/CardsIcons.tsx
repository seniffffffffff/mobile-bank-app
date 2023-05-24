import React from 'react'
import { CardColorInterface } from '../smallComponents/interfaces/iconInterface'
import { useLocation } from 'react-router-dom'

export const SmallCardIcon: React.FC = () => {
    const location = useLocation()
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="23"
            viewBox="0 0 29 23"
            fill="none"
        >
            <path
                d="M27.3914 0.5H1.39136C0.838232 0.5 0.391357 0.946875 0.391357 1.5V6.5H28.3914V1.5C28.3914 0.946875 27.9445 0.5 27.3914 0.5ZM0.391357 21.5C0.391357 22.0531 0.838232 22.5 1.39136 22.5H27.3914C27.9445 22.5 28.3914 22.0531 28.3914 21.5V9.25H0.391357V21.5ZM18.4851 15.75C18.4851 15.6125 18.5976 15.5 18.7351 15.5H23.8914C24.0289 15.5 24.1414 15.6125 24.1414 15.75V18C24.1414 18.1375 24.0289 18.25 23.8914 18.25H18.7351C18.5976 18.25 18.4851 18.1375 18.4851 18V15.75Z"
                fill={location.pathname === '/expenses' ? '#FF643B' : '#A3A3A3'}
            />
        </svg>
    )
}

export const BigCardIcon: React.FC<CardColorInterface> = ({
    cardColor = '#7A4DBE',
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="26"
            viewBox="0 0 33 26"
            fill="none"
        >
            <path
                d="M31.8214 0H1.17857C0.526674 0 0 0.528125 0 1.18182V6.09091C0 6.64319 0.447715 7.09091 1 7.09091H32C32.5523 7.09091 33 6.64319 33 6.09091V1.18182C33 0.528125 32.4733 0 31.8214 0ZM0 24.8182C0 25.4719 0.526674 26 1.17857 26H31.8214C32.4733 26 33 25.4719 33 24.8182V11.3409C33 10.7886 32.5523 10.3409 32 10.3409H0.999999C0.447714 10.3409 0 10.7886 0 11.3409V24.8182ZM21.3248 18.0227C21.3248 17.8602 21.4574 17.7273 21.6194 17.7273H27.6964C27.8585 17.7273 27.9911 17.8602 27.9911 18.0227V20.6818C27.9911 20.8443 27.8585 20.9773 27.6964 20.9773H21.6194C21.4574 20.9773 21.3248 20.8443 21.3248 20.6818V18.0227Z"
                fill={cardColor}
                fillOpacity="0.5"
            />
        </svg>
    )
}
