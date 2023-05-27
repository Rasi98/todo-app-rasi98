import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography, Divider } from '@mui/material'

function PaperLayout({ heading, body }) {
    return (
        <Paper variant='outlined'>
            <Typography variant='h1' component='div' noWrap sx={{ fontSize: '16px', lineHeight: '24px', padding: '10px' }}>
                {heading}
            </Typography>
            <Divider />
            {body}
        </Paper>
    )
}

PaperLayout.propTypes = {
    heading: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired
}

export default PaperLayout