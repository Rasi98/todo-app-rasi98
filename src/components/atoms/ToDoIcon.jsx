import React from 'react'
import PropTypes from 'prop-types'
import RedIcon from '../../assets/Priority-High.svg'
import BlueIcon from '../../assets/Priority-Low.svg'
import YellowIcon from '../../assets/Priority-Medium.svg'

function ToDoIcon({ priority }) {
    const handleToDoIcon = () => {
        switch (priority) {
            case 'HIGH':
                return <img src={RedIcon} alt='icon' />
            case 'MEDIUM':
                return <img src={YellowIcon} alt='icon' />
            case 'LOW':
                return <img src={BlueIcon} alt='icon' />
            default:
                break;
        }
    }
    return (
        handleToDoIcon()
    )
}

ToDoIcon.propTypes = {
    priority: PropTypes.string.isRequired,
}

export default ToDoIcon