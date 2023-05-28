import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography, Link, Box } from '@mui/material'
import BannerImage from '../../assets/Vector.svg'
import close from '../../assets/Close.svg'

function Banner({ bannerHeading, bannerBody, bannerLinkText, bannerLink, closeBanner }) {
    return (
        <Paper
            variant='outlined'
            sx={{
                backgroundImage: `url(${BannerImage})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: 'right',
                padding: '1rem 1rem',
            }}
        >
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <img src={close} alt='close' style={{ cursor: 'pointer' }} onClick={() => closeBanner()} />
            </Box>
            <Typography variant="h3" noWrap component="div" sx={{ fontWeight: 600, fontSize: '24px' }}>
                {bannerHeading}
            </Typography>
            <Typography variant='body1' sx={{ fontWeight: 400, fontSize: '14px', lineHeight: '24px', color: 'rgba(117, 117, 117, 1)' }}>
                {bannerBody}
            </Typography>
            <Link
                href={bannerLink}
                color='rgba(188, 0, 109, 1)'
                target='_blank'
                sx={{ fontWeight: 400, fontSize: '14px', lineHeight: '24px' }}
            >
                {bannerLinkText}
            </Link>
        </Paper>
    )
}

Banner.propTypes = {
    bannerHeading: PropTypes.string.isRequired,
    bannerBody: PropTypes.string.isRequired,
    bannerLink: PropTypes.string.isRequired,
    bannerLinkText: PropTypes.string.isRequired,
    closeBanner: PropTypes.func.isRequired
}

export default Banner