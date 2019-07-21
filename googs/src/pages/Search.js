import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/BookCard"
import CardDetail from "../components/BookDetails"
import API from "../utils/API";
import SaveBtn from "../components/SaveBtn";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import SearchForm from "../components/SearchForm";
import { Link } from "react-router-dom";

class Search extends Component {
  state = {
    search: "",
    books: []
  };

  componentDidMount() {
    // this.loadBooks();
  }
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  searchBooks = query => {

  };

  checkInfo(derr){
    if (derr){
      return derr;
    } else {
      return 'Not Provided';
    }
  }

  saveBook(book){
    API.saveBook(book)
      .then()
      .catch(err => console.log(err));
  }


  handleFormSubmit = event => {
    event.preventDefault();
    API.searchBook(this.state.search)
      .then(res => {
        console.log(res.data);
        this.setState({ books: res.data.items })
      })
      .catch(err => console.log(err));
    // this.searchBooks(this.state.search);
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Jumbotron>

          </Col>
        </Row>

        <Row>
          <Col size="sm-12">
            {this.state.books.length ? (
              <Container>
                <div class="card-columns">
                {this.state.books.map(book => (                
                    <Card>
                    <CardDetail 
                      url={book.volumeInfo.imageLinks ?book.volumeInfo.imageLinks.thumbnail  :''}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors ? book.volumeInfo.authors.toString()  :''}
                    
                    desc= {this.checkInfo(book.volumeInfo.description)}
                    />  
                    <SaveBtn onClick={ () => this.saveBook(
                      {title: book.volumeInfo.title,
                      image: book.volumeInfo.imageLinks ?book.volumeInfo.imageLinks.thumbnail  :'',
                    description:'hi'}
                      
                      )} />           
                    </Card>
                  ))}
                  </div>
              </Container>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
