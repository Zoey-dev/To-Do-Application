import styled from 'styled-components'

export const CategoryWrapper = styled.div`
     background-color: ${({color})=>color};
     border-radius: 20px;
     margin: 1rem;
     padding: 1rem 2rem;
     width: 12rem;

    .category-tasks{
         margin-bottom: 0.1rem;
         display: block;
    } 

    h2{
         margin: 0.8rem 0;

    }
`