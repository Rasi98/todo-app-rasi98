import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Banner from '../../atoms/Banner'
import { bannerData } from '../../../staticData/banner'
import TaskPaperLayout from '../TaskPaperLayout';
import ActivityFeedLayout from '../ActivityFeedLayout';
import TaskPriorityLayout from '../TaskPriorityLayout';

function DashboardContent() {
    return (
        <>
            <Banner
                bannerHeading={bannerData.bannerHeading}
                bannerBody={bannerData.bannerBody}
                bannerLink={bannerData.bannerLink}
                bannerLinkText={bannerData.bannerLinkText}
            />
            <Box sx={{ marginTop: '1rem' }}>
                <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Grid xs={12} md={7} >
                        <TaskPaperLayout />
                    </Grid>
                    <Grid xs={12} md={4} >
                        <Grid container direction={'column'} gap={2}>
                            <Grid xs={12} >
                                <ActivityFeedLayout />
                            </Grid>
                            <Grid xs={12} >
                                <TaskPriorityLayout />
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default DashboardContent