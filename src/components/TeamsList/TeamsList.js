import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import Table from '../Table/Table'
import NotificationMessage from '../NotificationMessage/NotificationMessage'
import useGetDataApi from '../../useGetDataApi'

const HEADERS = ['Name', 'Founded', 'Address']

const TeamsList = () => {
    const history = useHistory()
    const { data, isLoading, isError } = useGetDataApi(`competitions/2014/teams`, [])
    const { teams = [] } = data
    const teamsList = !(isLoading || isError)

    const onClickRowHandler = e => {
        const id = e.currentTarget.getAttribute('data-item')
        history.push(`/teams/${id}`)
    }
      
    const renderResultRows = () => {
        return teams.map( team => {  
            return (
                <tr key={ team.id } data-item={ team.id } onClick={ onClickRowHandler }>
                    <td>{ team.name }</td>
                    <td>{ team.founded }</td>
                    <td>{ team.address }</td>
                </tr>
            )
        })
      }

    return (
        <Fragment>
             <NotificationMessage error={ isError } loading={ isLoading } /> 
            { teamsList &&
                <div>
                    <Table headers={ HEADERS } renderTableData={ renderResultRows }/>
                </div>
            }
        </Fragment>
    )
}

export default TeamsList