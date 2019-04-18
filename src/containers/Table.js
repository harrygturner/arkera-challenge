import React from 'react';
import TableRow from './TableRow'
import TableHeader from './TableHeader';

const Table = props => {
   const { header, data } = props;

   const sortData = () => {
      const URL = window.location.href.split('/')
      const sortColTitle = URL[URL.length - 1].toLowerCase()
      const tableHeaders = header.map(title => title.toLowerCase()) 
      const indexOfSortCol = tableHeaders.indexOf(sortColTitle)
      if(indexOfSortCol && sortColTitle !== '#'){
         return 0 < indexOfSortCol && indexOfSortCol <= 2
            ? data.sort((rowA, rowB) => rowA[indexOfSortCol].localeCompare(rowB[indexOfSortCol]))
            : data.sort((rowA, rowB) => rowB[indexOfSortCol] - rowA[indexOfSortCol])
      } else {
         return data
      }
   }

   const renderTableRows = () => sortData().map((row, i) => <TableRow row={row} key={i} />);

   return(
      <table>
         <tbody>
            <TableHeader header={header} />
            {renderTableRows()}
         </tbody>
      </table>
   )
}

export default Table