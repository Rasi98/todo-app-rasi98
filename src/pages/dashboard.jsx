import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TopNavBar from '../components/layouts/TopNavBar';
import SideBar from '../components/layouts/Sidebar';
import DashboardContent from '../components/layouts/Body';
import { drawerWidth } from '../styles/DrawerWidth';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

function Dashboard() {
    const [open, setOpen] = useState(true);
    const [show, setShow] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setOpen(window.innerWidth > 600)
            setShow(window.innerWidth > 600)
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <TopNavBar open={open} handleDrawerOpen={handleDrawerOpen} show={show} />
            <SideBar open={open} handleDrawerClose={handleDrawerClose} />
            <Main open={open}>
                <DrawerHeader />
                <DashboardContent />
            </Main>
        </Box>
    )
}

export default Dashboard;