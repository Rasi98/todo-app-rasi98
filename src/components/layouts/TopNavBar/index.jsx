import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Profile from '../../../assets/Profile.svg';
import NotificationIcon from '../../../assets/Notifications.svg'
import ChevronDown from '../../../assets/Chevron-down.svg'
import { drawerWidth } from '../../../styles/DrawerWidth';
import { Container } from '@mui/material';

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


function TopNavBar({ open, handleDrawerOpen, show }) {
    return (
        <AppBar position="fixed" open={open} sx={{ backgroundColor: 'rgb(255,255,255)' }}>
            <Toolbar>
                <IconButton
                    color="default"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h4" noWrap component="div" sx={{ fontSize: '20px', fontWeight: '600', minWidth: 'fit-content' }} color={'black'}>
                    Dashboard
                </Typography>
                {show && <Container sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginRight: 0 }} disableGutters>
                    <img src={NotificationIcon} alt="notificationicon" style={{ marginRight: '2%', cursor: 'pointer' }} />
                    <img src={Profile} alt='profileimage' style={{ marginRight: '1%' }} />
                    <img src={ChevronDown} alt="chevrondown" style={{ cursor: 'pointer' }} />
                </Container>}
            </Toolbar>
        </AppBar>
    )
}

TopNavBar.propTypes = {
    open: PropTypes.bool.isRequired,
    handleDrawerOpen: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
}

export default TopNavBar