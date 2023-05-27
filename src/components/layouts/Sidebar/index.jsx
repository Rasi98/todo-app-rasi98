import React from 'react'
import PropTypes from 'prop-types'
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { drawerWidth } from '../../../styles/DrawerWidth';
import DashboardIcon from '../../../assets/Dashboard.svg'


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(235, 230, 237, 0.1)',
}));

function SideBar({ open, handleDrawerClose }) {
    const theme = useTheme();
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: '#33074F',
                    color: 'white'
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <Typography variant="h3" noWrap component="div" sx={{ fontSize: '1.3rem', fontWeight: '700', marginRight: '10px' }}>
                    Acmy Solutions
                </Typography>
                <IconButton onClick={handleDrawerClose} sx={{ color: 'white' }}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List sx={{ marginTop: '2rem' }}>
                <ListItem disablePadding>
                    <ListItemButton alignItems='center' sx={{ backgroundColor: 'rgba(235, 230, 237, 0.1)', borderRadius: '24px', marginX: '10px' }}>
                        <ListItemIcon sx={{ minWidth: '40px' }}>
                            <img src={DashboardIcon} alt='dashboardicon' />
                        </ListItemIcon>
                        <ListItemText primary={'Dashboard'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    )
}

SideBar.propTypes = {
    open: PropTypes.bool.isRequired,
    handleDrawerOpen: PropTypes.func.isRequired
}

export default SideBar