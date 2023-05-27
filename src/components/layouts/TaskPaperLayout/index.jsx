import React from 'react'
import PaperLayout from '../PaperLayout'
import TaskPaperBody from '../TaskPaperBody'

function TaskPaperLayout() {
    return (
        <PaperLayout heading='Tasks' body={<TaskPaperBody />} />
    )
}

export default TaskPaperLayout