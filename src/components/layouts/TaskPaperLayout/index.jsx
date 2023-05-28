import React from 'react'
import { useSelector } from 'react-redux'
import PaperLayout from '../PaperLayout'
import TaskPaperBody from '../TaskPaperBody'

function TaskPaperLayout() {
    const state = useSelector((state) => state)

    return (
        <PaperLayout heading='Tasks' body={<TaskPaperBody data={state.todo} />} />
    )
}

export default TaskPaperLayout