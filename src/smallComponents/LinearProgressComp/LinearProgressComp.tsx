import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import LinearProgress, {
    linearProgressClasses,
} from '@mui/material/LinearProgress'
import React from 'react'
import { LinearProgressValue } from '../interfaces/interfaces'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 13,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor:
            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: '#8635F7',
    },
}))

const CustomizedProgressBars: React.FC<LinearProgressValue> = ({
    progressValue,
}) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <BorderLinearProgress variant="determinate" value={progressValue} />
        </Box>
    )
}

export default CustomizedProgressBars
