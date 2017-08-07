import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import * as rb from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      gifs: [],
      favorites: [],
      userComment: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
    this.handleComment = this.handleComment.bind(this);
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

  handleFavoriteClick(gif) {
    console.log(`${this.state.query} was searched`);
    $('#commentInput').val('');

    axios.post('/favorite', {
      comment: this.state.userComment,
      id: gif.id,
      slug: gif.slug,
      embed_url: gif.embed_url
    })
    .then(response => {
      this.setState({
        favorites: response.data
      });
      console.log('handleFaveClick faves: ', this.state.favorites);
    })
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
      <rb.Jumbotron id="jumbo">
      <h1><em>GIF</em>eelMe</h1>
      <Search handleSearch={this.handleSearch} handleChange={this.handleChange}/>
      </rb.Jumbotron>
      <div class="col-sm-6" id="left">
        <List handleComment={this.handleComment}handleFavoriteClick={this.handleFavoriteClick} gifs={this.state.gifs}/>
      </div>

      <div class="col-sm-6" id="right">
        <Favorites favorites={this.state.favorites}/>
      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));