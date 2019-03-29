import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtnSearch, FormBtnSave } from "../components/Form";

class Movies extends Component {
  state = {
    savedMovies: [],
    foundMovie: false,
    searchInput: "",
    title: "",
    year: "",
    actors: "",
    movieImg: "",
  };

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = () => {
    API.getSavedMovies()
      .then(res =>
        this.setState({savedMovies: res.data})
      )
      .catch(err => console.log(err));
  };

  deleteMovie = id => {
    API.deleteMovie(id)
      .then(res => this.loadMovie())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.searchInput !== ""){
      API.search(this.state.searchInput)
        .then(res => {
          console.log(res);
          this.setState({title: res.data.Title, actors: res.data.Actors, year: res.data.Year,movieImg:res.data.Poster, foundMovie: true })
        })
        .catch(err => console.log(err));
    }
    
  };
  saveButton = event => {
    event.preventDefault();
    console.log("saving");
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            
              <h2>Search Movies</h2>
           
            <form>
              <Input
                value={this.state.searchInput}
                onChange={this.handleInputChange}
                name="searchInput"
                placeholder="Search Movie"
              />
              <FormBtnSearch
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtnSearch>
            </form>
          </Col>
          
          <Col size="md-6 sm-12">
            
              <h2>Saved movies to watch</h2>
            
            {this.state.savedMovies.length ? (
              <List>
                {this.state.savedMovies.map(movie => (
                  <ListItem key={movie._id}>
                    <p>
                      <strong>
                        {movie.title}
                      </strong>
                      <img style={{width:"50px", height:"50px"}} src={movie.movieImg}/>
                    </p>
                    <DeleteBtn onClick={() => this.deleteMovie(movie._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No movies saved</h3>
            )}
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
              <h1 name="title">{this.state.title}</h1>
              <p name="year">{this.state.year}</p>
              <p name="actors">{this.state.actors}</p>
              <img src={this.state.movieImg}/>
              {this.state.foundMovie ? (<FormBtnSave onClick={() => 
                API.saveMovie(
                  {
                    title: this.state.title,
                    actors: this.state.actors,
                    year: this.state.year,
                    movieImg: this.state.movieImg
                  }
                )
              }>

              Save</FormBtnSave>) : (<p></p>)}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Movies;
