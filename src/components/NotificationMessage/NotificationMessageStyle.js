import styled from 'styled-components'

export const MessageContainer = styled.div`
    text-align: center;
    padding-top: 100px;
    color: ${props => (props.error ? 'red' : 'black')};
`