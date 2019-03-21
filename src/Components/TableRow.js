import React, { Component } from 'react'

const TableRow = ({id, name, description}) => {
    return(
        <tr>
            <td>
                {name}
            </td>
            <td>
                {description}
            </td>
        </tr>
    );
}

export default  TableRow;
