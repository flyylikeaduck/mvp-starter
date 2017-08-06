// react-client

import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      gifs: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    this.setState({
      term: event.target.value
    });
    console.log('handleChange term:', this.state.term);
  }

  handleSearch() {
    console.log(`${this.state.term} was searched`);

    axios.post('/gifs', {search: this.state.term})
    .then(() => this.getGifs());
  }

  componentDidMount() {
    this.getGifs();
  }

  getGifs() {
    axios.get('/gifs')
    .then(response => this.setState({gifs: response.data}))
    .catch(err => console.log('error! ', err));
  }

  render () {
    return (<div>
      <h1>GIF me!</h1>
      <Search handleSearch={this.handleSearch} handleChange={this.handleChange}/>
      <List gifs={this.state.gifs}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));