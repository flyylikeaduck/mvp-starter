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
      favorites: [],
      favoriteGif: '',
      userComment: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.setFavoriteGif = this.setFavoriteGif.bind(this);
  }

  handleChange(event) {
    this.setState({
      query: event.target.value
    });
  }

  handleSearch() {
    console.log(`${this.state.query} was searched`);
    $('#queryInput').val('');

    $.ajax({
      type: "POST",
      url: "/gifs",
      data: {query: this.state.query},

      success: function(data) {
        this.setState({
          gifs: data
        })
        console.log(this.state.gifs)
      }.bind(this),
      error: function(error) {
        console.log('error from handleSearch!', error)
      }
    });
  }

  handleComment(event) {
    this.setState({
      userComment: event.target.value
    })
    console.log('handleComment:', this.state.userComment);
  }

  setFavoriteGif() {
    this.setState
  }

  handleFavoriteClick(gif) {
    console.log(`${this.state.query} was searched`);
    $('#commentInput').val('');

    axios.post('/favorite', {
      comment: this.state.userComment,
      id: gif.id,
      slug: gif.slug,
      embed_url: gif.embed_url
    })
    .then(response => console.log('handleFaveClick response: ', response))
    .catch(err => console.log('error from handleFaveClick: ', err))
  }

  // componentDidMount() {
  //   this.getGifs();
  // }

  getGifs() {
    axios.get('/favorite')
    .then(response => this.setState({
      favorites: response.data
    }))
    .catch(err => console.log('error from getGifs!', err));
  }

  render () {
    return (<div>
      <h1><em>GIF</em>eelMe</h1>

      <Search handleSearch={this.handleSearch} handleChange={this.handleChange}/>
      <List handleComment={this.handleComment} setFavoriteGif={this.setFavoriteGif} handleFavoriteClick={this.handleFavoriteClick} gifs={this.state.gifs}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));