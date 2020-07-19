import React from 'react'
import PropTypes from 'prop-types'
import { MessageContainer } from './NotificationMessageStyle'

const NotificationMessage = ({ error, loading}) => {
  const getMessage = () => {
      if (error) {
          return <MessageContainer error>
            Something went wrong ...
            </MessageContainer>
      }
      else if (loading) {
          return <MessageContainer>
            Loading ...
            </MessageContainer> 
      }
      return null   
  }
    
  return (
    getMessage()
  )
}

NotificationMessage.propTypes = {
  error: PropTypes.bool,
  loading:  PropTypes.bool
}

NotificationMessage.defaultProps = {
  error: false,
  loading: false
}

export default NotificationMessage
