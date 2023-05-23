import React from 'react'

const AddIcon = () => {
    return (
        <div
            style={{
                background: '#FF643B',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
            >
                <path d="M9.39136 0V18" stroke="white" strokeWidth="2" />
                <path
                    d="M0.391357 9L18.3914 9"
                    stroke="white"
                    strokeWidth="2"
                />
            </svg>
        </div>
    )
}

export default AddIcon
