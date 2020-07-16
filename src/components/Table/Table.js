import React from 'react'
import { StyledTable } from './TableStyle'

const Table = props => {
    const { headers } = props
    const renderTableHeader = () => {
        return headers.map((key, index) => 
        <th key={ index }>
            { key.toUpperCase() }
        </th>
        )
    }

    return (
            <StyledTable>
               <tbody>
                  <tr>{ renderTableHeader() }</tr>
                  { props.renderTableData() }
               </tbody>
            </StyledTable>
    )
}

export default Table