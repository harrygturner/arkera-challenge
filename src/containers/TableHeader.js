import React from 'react';
import TableHeaderCell from '../components/TableHeaderCell'

const TableHeader = props => {
   const { header } = props

   const formatTitles = () => {
      return header.map((title, i) => {
         if(3 < i && i < 8) {
            return title + ' (m)';
         } else if(i === 3 || ( 8 <= i && i <= 9)) {
            let indexOfUpperCaseLetter;
            title.split('').slice(1).map((letter, i) => 
               letter <= 'Z' 
                  ? indexOfUpperCaseLetter = i 
                  : null
               )
            return title.slice(0, indexOfUpperCaseLetter + 1) + ' ' + title.slice(indexOfUpperCaseLetter + 1)
         } else {
            return title;
         }
      })
   }

   const renderHeaderColumns = () => formatTitles().map((cell, i) => < TableHeaderCell content={cell} key={i} />)

   return (
      <tr>
         {renderHeaderColumns()}
      </tr>
   )
}

export default TableHeader