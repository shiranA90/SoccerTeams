import React from 'react'
import { MessageContainer } from './NotificationMessageStyle'

const NotificationMessage = ({ error,  loading}) => {
    const getMessage = () => {
        if (error) {
            return <MessageContainer>Something went wrong ...</MessageContainer>
        }
        else if(loading){
            return <MessageContainer>Loading ...</MessageContainer> 
        }
        return null   
    }

  
  return (
    getMessage()
  )
}

export default NotificationMessage
