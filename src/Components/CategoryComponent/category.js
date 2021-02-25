import React from 'react'
import Progress from '../ProgressBar/progress'

// const CategoryWrapper = `
//     background: ${({color})=>color}
// `

export default function Category(props) {
    const {tag, completedTask, totalTask, color} = props.data

    const completionRatio = Math.round((completedTask / totalTask) * 100)


    return (
        <div className="category-style" color={color}>
            <h4>{tag}</h4>
            <span>Task: {totalTask}</span>
            <Progress value = {completionRatio} />
        </div>
        
    )
}
