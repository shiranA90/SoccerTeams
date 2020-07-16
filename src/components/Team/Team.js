import React, { Fragment } from 'react'
import Table from '../Table/Table'
import NotificationMessage from '../NotificationMessage/NotificationMessage'
import useGetDataApi from '../../useGetDataApi'
import { TeamName, TeamInfoContainer, TeamLogo } from './TeamStyle'

const HEADERS = ['Name', 'Shirt number']

const Team = props => {
    const teamId = props.match.params.id
    const { data, isLoading, isError } = useGetDataApi(`/teams/${teamId}`, {})
    const { name, crestUrl: teamLogo, founded, address, website, squad = [] } = data
    const team = !(isError || isLoading)

    const renderTableData = () => {
        return squad.map( player => {
           const { id, name, shirtNumber } = player 
           return (
              <tr key={ id }>
                 <td>{ name }</td>
                 <td>{ shirtNumber }</td>
              </tr>
           )
        })
     }

    return (
        <Fragment>
            <NotificationMessage error={ isError } loading={ isLoading } /> 
             { team && <TeamInfoContainer>
                <TeamName>{ name }</TeamName>
                    <TeamLogo src={ teamLogo } alt={ 'team-logo' }></TeamLogo>
                    <p>Founded in { founded }</p>
                    <a href={ website }>visit { name } website</a>
                    <p>Address: { address }</p>
                    <h2>Players list</h2>
                    <Table headers={ HEADERS } squad={ squad } renderTableData={ renderTableData }/>
              </TeamInfoContainer>
            }
        </Fragment>
    )
}

export default Team