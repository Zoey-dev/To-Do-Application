import styled from 'styled-components'

export const Container = styled.div`

    progress[value]{
        width: ${props => props.width};
        appearance: none;
    

        ::-webkit-progress-bar{
            height: 0.5rem;
            border-radius: 20px;
            background-color: #eee;
        }

        ::-webkit-progress-value{
            height: 0.5rem;
            border-radius: 20px;
            background-color: ${props => props.color};
        }
       
    }   
    
`