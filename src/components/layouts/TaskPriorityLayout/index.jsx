import React from 'react'
import { useSelector } from 'react-redux'
import PaperLayout from '../PaperLayout'
import TaskPriorityBody from '../TaskPriorityBody'

function TaskPriorityLayout() {
    const ToDos = useSelector((state) => state)

    const countPriority = () => {
        const highPriorityCount = ToDos.todo.data.filter((item) => item.priority === "HIGH").length
        const mediumPriorityCount = ToDos.todo.data.filter((item) => item.priority === "MEDIUM").length
        const lowPriorityCount = ToDos.todo.data.filter((item) => item.priority === "LOW").length
        const dataCount = [highPriorityCount, mediumPriorityCount, lowPriorityCount]
        return dataCount;
    }

    const data = {
        labels: ['High', 'Medium', 'Low'],
        datasets: [{
            label: 'Tasks',
            data: countPriority(),
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