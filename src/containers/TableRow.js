import React from 'react';
import TableCell from '../components/TableCell'

const TableRow = props => {
   const { row } = props

   const renderTableRows = () => row.map((cell, i) => {
      if(parseInt(cell) && cell.length > 3) {
         cell = cell.slice(0, 1) + ',' + cell.slice(1)
      }
      return < TableCell content={cell} key={i} />
   })

   return(
      <tr>
         {renderTableRows()}
      </tr>
   )
}

export default TableRow