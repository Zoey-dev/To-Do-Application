import React from 'react';
import Progress from "../ProgressBar/progress";

// const CategoryWrapper = `
//     // background-color: ${({color})=>color}
// `
export default function Category(props) {
        const {tag, color, completedTask, totalTask} = props.data;

        const completionRatio  = Math.round((completedTask / totalTask) * 100);
        console.log(completedTask);
    return (
        <div color={color}>
            <h4>{tag}</h4>
            <span>Tasks: {totalTask}</span>
            <Progress 
                value = {completionRatio}
             />
        </div>
    )
}
