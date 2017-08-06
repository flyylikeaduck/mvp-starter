// import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
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

    $.ajax({
      type: "POST",
      url: "/gifs",
      data: {query: this.state.term},

      success: function() {
        console.log('success!')
      },
      error: function(error) {
        console.log('error from handleSearch!', error)
      }
    });

  }

  // componentDidMount() {
  //   this.getGifs();
  // }

  // getGifs() {
  //   axios.get('/gifs')
  //   .then(response => this.setState({gifs: response.data}))
  //   .catch(err => console.log('error from getGifs!', err));
  // }

  render () {
    return (<div>
      <h1><strong>GIF</strong>eelMe</h1>
      <Search handleSearch={this.handleSearch} handleChange={this.handleChange}/>
      <List gifs={this.state.gifs}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));