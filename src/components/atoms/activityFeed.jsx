import { Box, Grid, Typography, Divider } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'

function ActivityFeedItem({ avatar, text, date }) {
    return (
        <Box py={1} px={1}>
            <Grid container direction={'row'}>
                <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={avatar} alt='avatar' style={{ width: '32px', height: '32px' }} />
                </Grid>
                <Grid item xs={10}>
                    <Typography variant='body1' component='div' sx={{ fontSize: '14px', lineHeight: '24px' }}>
                        {text}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container direction={'row'}>
                <Grid item xs={2} ></Grid>
                <Grid item xs={10} >
                    <Typography variant='body1' component='div' color='rgba(117, 117, 117, 1)' sx={{ fontSize: '12px', lineHeight: '22px', fontWeight: 400 }}>
                        {date}
                    </Typography>
                </Grid>
            </Grid>
            {/* <Divider /> */}
        </Box>
    )
}

ActivityFeedItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default ActivityFeedItem