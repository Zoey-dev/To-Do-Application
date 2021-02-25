import React from 'react'
const CategoryWrapper = `
    background: ${({color})=>color}
`
export default function Category({tag, task, color, progressBar}) {
    return (
        <CategoryWrapper color={color}>
            
        </CategoryWrapper>
        
    )
}
