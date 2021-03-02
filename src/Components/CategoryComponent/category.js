import React from 'react'
import Progress from '../ProgressBar/progress'
import {CategoryWrapper} from './category_style'


export default function Category(props) {
    const {tag, completedTask, totalTask, color} = props.data

    const completionRatio = Math.round((completedTask / totalTask) * 100)


    return (
        <CategoryWrapper color={color}>
            <h2>{tag}</h2>
            <span className="category-tasks">Tasks: {totalTask}</span> <br/>
            <Progress value = {completionRatio} />
        </CategoryWrapper>
        
    )
}
