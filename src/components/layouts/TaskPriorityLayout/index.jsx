import React from 'react'
import PaperLayout from '../PaperLayout'
import TaskPriorityBody from '../TaskPriorityBody'

function TaskPriorityLayout() {

    const data = {
        labels: ['High', 'Medium', 'Low'],
        datasets: [{
            label: 'Tasks',
            data: [300, 600, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
        }]
    }

    return (
        <PaperLayout heading='Tasks Priorities' body={<TaskPriorityBody data={data} />} />
    )
}

export default TaskPriorityLayout