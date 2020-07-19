import React from 'react'
import PropTypes from 'prop-types'
import { StyledTable } from './TableStyle'

export const renderTableHeader = headers => {
  return headers.map((key, index) => 
  <th key={ index }>
      { key }
  </th>
  )
}

const Table = ({ renderTableData, headers }) => {
  return (
          <StyledTable>
              <tbody>
                <tr>{ renderTableHeader(headers) }</tr>
                { renderTableData() }
              </tbody>
          </StyledTable>
  )
}

Table.propTypes = {
  renderTableData: PropTypes.func,
  headers: PropTypes.array
}
  
Table.defaultProps = {
  renderTableData: () => {},
  headers: []
}

export default Table