import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Banner from '../../atoms/Banner'
import { bannerData } from '../../../staticData/banner'
import TaskPaperLayout from '../TaskPaperLayout';
import ActivityFeedLayout from '../ActivityFeedLayout';

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
                    <Grid xs={12} md={4} sx={{ height: '300px' }}>
                        <Grid container direction={'column'}>
                            <Grid xs={12} sx={{ height: '300px' }}>
                                <ActivityFeedLayout />
                            </Grid>
                            <Grid xs={12} sx={{ height: '300px' }}>
                                {/* <PaperLayout /> */}
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default DashboardContent