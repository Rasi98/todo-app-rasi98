import React from 'react'
import PaperLayout from '../PaperLayout'
import ActivityFeedBody from '../ActivityFeedBody'

function ActivityFeedLayout() {
    return (
        <PaperLayout heading='Activity Feed' body={<ActivityFeedBody />} />
    )
}

export default ActivityFeedLayout