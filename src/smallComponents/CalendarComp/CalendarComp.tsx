import React, { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export default function BasicDateCalendar() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
                sx={{
                    marginTop: '36px',
                    height: '140px',
                    width: '100%',
                    background: '#FAFAFA',
                    borderRadius: '21px',
                }}
            />
        </LocalizationProvider>
    )
}
