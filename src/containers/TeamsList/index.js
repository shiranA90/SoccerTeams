import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import Table from '../../components/Table'
import NotificationMessage from '../../components/NotificationMessage'
import useGetDataApi from '../../hooks/useGetDataApi'

const TEAMS_HEADERS = ['Name', 'Founded', 'Address']

const TeamsList = () => {
  const history = useHistory()
  const { data,
          isLoading,
          isError 
        } = useGetDataApi(`competitions/2014/teams`, [])
  const { teams = [] } = data
  const showTeams = !(isLoading || isError)

  const onClickRowHandler = ({ currentTarget }) => {
    const id = currentTarget.getAttribute('data-item')
    history.push(`/teams/${id}`)
  }
      
  const renderResultRows = () => {
    return teams.map( ({ id, name, founded, address }) =>   
          <tr key={ id } data-item={ id } onClick={ onClickRowHandler }>
              <td>{ name }</td>
              <td>{ founded }</td>
              <td>{ address }</td>
          </tr>
    )
  }

  return (
    <Fragment>
        <NotificationMessage error={ isError } loading={ isLoading } /> 
        { showTeams &&
            <Table 
              headers={ TEAMS_HEADERS } 
              renderTableData={ renderResultRows }
            />
        }
    </Fragment>
  )
}

export default TeamsList