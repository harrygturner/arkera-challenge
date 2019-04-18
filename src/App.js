import React, { Component } from 'react';
import Papa from 'papaparse';
import csv from './data.csv'; 
import Table from './containers/Table.js'
import './App.css';

class App extends Component {

  state = {
    data: ''
  }

  componentDidMount() {
    this.getCsvData();
  }
  
  async getCsvData() {
    const csvData = await this.fetchCsv();

    Papa.parse(csvData, {
      delimiter: ',',
      complete: this.getData
    });
  }

  fetchCsv = () => {
    return fetch(csv).then(resp => { 
      const reader = resp.body.getReader();
      const decoder = new TextDecoder('utf-8');

      return reader.read().then(result => decoder.decode(result.value));
    });
  }

  getData = result => {
    this.setState({ 
      data: result.data 
    });
  }

  sortByFirstCol = () => {
    const tableData = this.state.data.slice(1)
    return tableData.sort((rowA, rowB) => rowA[0] - rowB[0])
  }

  renderTable = () => (
    <div>
      < Table data={this.sortByFirstCol()} header={this.state.data.shift()} />
    </div>
  )

  renderLoadingPage = () => <h2>Page is loading...</h2>

  render() {
    return (
      <div className="App">
        { this.state.data ? this.renderTable() : this.renderLoadingPage() }
      </div>
    );
  }
}

export default App;
