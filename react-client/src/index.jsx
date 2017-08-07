import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
//import * as rb from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      gifs: [],
      favoritedGifs: [],
      userComment: ''
    }

    this.context = this;
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFavoriteGif = this.handleFavoriteGif.bind(this);
  }

  handleChange(event) {
    this.setState({
      query: event.target.value
    });
    console.log('handleChange query:', this.state.query);
  }

  handleSearch() {
    console.log(`${this.state.query} was searched`);

    $.ajax({
      type: "POST",
      url: "/gifs",
      data: {query: this.state.query},

      success: function(data) {
        this.setState({
          gifs: data
        })
        console.log('successful gifs:', this.state.gifs)
      }.bind(this),
      error: function(error) {
        console.log('error from handleSearch!', error)
      }
    });
  }

  handleFavoriteGif(event) {
    console.log('hi from favoriteGifHandler: ', event)
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
      <h1>GIFeelMe</h1>
      <Search handleSearch={this.handleSearch} handleChange={this.handleChange}/>
      <List handleFavoriteGif={this.handleFavoriteGif} gifs={this.state.gifs}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));