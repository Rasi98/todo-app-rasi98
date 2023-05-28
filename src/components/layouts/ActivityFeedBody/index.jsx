import React from 'react'
import { List, ListItem } from '@mui/material'
import ActivityFeedItem from '../../atoms/activityFeed'
import { activityFeed } from '../../../staticData/activityFeed'

const ActivityList = activityFeed.map((item, index) => {
    return (
        <ListItem key={index} divider>
            <ActivityFeedItem avatar={item.avatar} text={item.activity} date={item.date} />
        </ListItem>
    )
})

function ActivityFeedBody() {
    return (
        <List dense={true}>
            {ActivityList}
        </List>
    )
}

export default ActivityFeedBody