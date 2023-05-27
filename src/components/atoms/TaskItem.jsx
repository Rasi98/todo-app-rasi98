import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment/moment'
import { Grid, Typography, Chip, Box } from '@mui/material'
import ToDoIcon from './ToDoIcon'

function TaskItem({ priority, text, completed, date }) {
    return (
        <Box>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ minHeight: '50px', paddingY: '10px' }}
            >
                <Grid item xs={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ToDoIcon priority={priority} />
                </Grid>
                <Grid item xs={7} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Typography
                        variant='body1'
                        color='rgba(0, 0, 0, 1)'
                        sx={{ fontWeight: 400, fontSize: '14px', lineHeight: '24px' }}
                    >
                        {text}
                    </Typography>
                </Grid>
                <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Chip
                        label={completed ? 'Done' : 'In-Progress'}
                        size='small'
                        sx={{
                            backgroundColor: completed ? 'rgba(232, 245, 233, 1)' : 'rgba(242, 201, 76, 0.2)'
                        }} />
                </Grid>
                <Grid item xs={1} >
                    <Typography
                        variant='body1'
                        color='rgba(117, 117, 117, 1)'
                        align='center'
                        sx={{ fontWeight: 400, fontSize: '12px', lineHeight: '22px' }}
                    >
                        {moment(date).format("MMM-D")}
                    </Typography>
                </Grid>
            </Grid>
            {!completed && <Grid
                container
            >
                <Grid item xs={1}></Grid>
                <Grid item xs={11}>
                    <Typography
                        variant='body1'
                        color='rgba(188, 0, 109, 1)'
                        sx={{ fontWeight: 500, fontSize: '12px', lineHeight: '22spx', cursor: 'pointer' }}
                    >
                        Mark as done
                    </Typography></Grid>
            </Grid>}
        </Box>
    )
}

TaskItem.propTypes = {
    priority: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    date: PropTypes.string.isRequired
}

export default TaskItem;
