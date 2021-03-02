import React from 'react'
import Progress from '../ProgressBar/progress'
import {CategoryWrapper} from './category_style'


export default function Category(props) {
    const {tag, completedTask, totalTask, color} = props.data

    const completionRatio = Math.round((completedTask / totalTask) * 100)


    return (
        <CategoryWrapper color={color}>
            <h4>{tag}</h4>
            <span>Tasks: {totalTask}</span>
            <Progress value = {completionRatio} />
        </CategoryWrapper>
        
    )
}
