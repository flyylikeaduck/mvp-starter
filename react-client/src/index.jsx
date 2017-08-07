import axios from 'axios';
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

    this.context = this;
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    this.setState({
      term: event.target.value
    });
    console.log('handleChange term:', this.state.term);
  }

  updateGifs(data) {
    this.setState({
      gifs: data
    })
  }

  handleSearch() {
    console.log(`${this.state.term} was searched`);

    // axios.get('/gifs')

    $.ajax({
      type: "POST",
      url: "/gifs",
      data: {query: this.state.term},

      success: function(data) {
        console.log('success in index.jsx!', data)
        console.log('this in success', this)
        this.setState({
          gifs: data
        })
        console.log('please work!', this.state.gifs)
      }.bind(this),
      error: function(error) {
        console.log('error from handleSearch!', error)
      }
    });

  }

  componentDidMount() {
    this.getGifs();
  }

  getGifs() {
    axios.get('/gifs')
    .then(response => this.setState({gifs: response.data}))
    .catch(err => console.log('error from getGifs!', err));
  }

  render () {
    return (<div>
      <h1><strong>GIF</strong>eelMe</h1>
      <Search handleSearch={this.handleSearch} handleChange={this.handleChange}/>
      <List gifs={this.state.gifs}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));