import React from 'react'
import {
    Chart as chartjs,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import PropTypes from 'prop-types'
import { Box, Grid } from '@mui/material'
import { Doughnut } from 'react-chartjs-2'

chartjs.register(
    ArcElement,
    Tooltip,
    Legend
)

function TaskPriorityBody({ data }) {

    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    usePointStyle: true,
                }
            }
        }
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container sx={{ width: '60%' }}>
                <Doughnut data={data} options={options} />
            </Grid>
        </Box>
    )
}

TaskPriorityBody.propTypes = {
    data: PropTypes.object.isRequired
}

export default TaskPriorityBody