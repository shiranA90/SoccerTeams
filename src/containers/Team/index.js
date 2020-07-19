import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Table from '../../components/Table'
import NotificationMessage from '../../components/NotificationMessage'
import useGetDataApi from '../../hooks/useGetDataApi'
import { TeamName, TeamInfoContainer, TeamLogo } from './TeamStyle'

const PLAYERS_HEADERS = ['Name', 'Shirt Number']

const Team = ({ match }) => {
  const teamId = match.params.id
  const { data, 
          isLoading, 
          isError 
        } = useGetDataApi(`/teams/${teamId}`, {})
  const { name,
          crestUrl: teamLogo,
          founded, address,
          website: webSite,
          squad = [] 
        } = data
  const showTeam = !(isError || isLoading)

  const renderTableData = () => {
    return squad.map( ({ id, name, shirtNumber }) => 
          <tr key={ id }>
              <td>{ name }</td>
              <td>{ shirtNumber ? shirtNumber : '-'}</td>
          </tr>
        )
  }

  return (
    <Fragment>
        <NotificationMessage error={ isError } loading={ isLoading } /> 
          { showTeam && 
          <TeamInfoContainer>
            <TeamName>{ name }</TeamName>
            <TeamLogo src={ teamLogo } alt={ 'team-logo' }></TeamLogo>
            <p>Founded in { founded }</p>
            <a href={ webSite }>visit { name } website</a>
            <p>Address: { address }</p>
            <h2>Players list</h2>
            <Table 
              headers={ PLAYERS_HEADERS } 
              squad={ squad } 
              renderTableData={ renderTableData }
            />
          </TeamInfoContainer>
        }
    </Fragment>
  )
}

Team.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
}

export default Team