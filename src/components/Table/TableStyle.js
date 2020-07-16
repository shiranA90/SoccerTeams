import styled from 'styled-components';

export const StyledTable = styled.table`
    display: flex;
    justify-content: center;
    border-collapse: collapse;
    padding-top: 20px;
    tr {
        padding: 10px 10px 10px 10px;
        width: 100%
    }
    th {
        padding: 20px 20px 20px 0px;
    }
    td {
        padding: 10px 30px 10px 30px;
    }
    tbody tr {
        border: 1px solid grey;
        padding: 10px 10px 10px 10px;
        :hover {
        background-color: #efefef;
        }
    }
`;
