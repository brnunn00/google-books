import axios from "axios"

const BASEURL ='https://www.googleapis.com/books/v1/volumes?q=search+%27';
export default {
    searchBook: function(query){
        return axios.get(`${BASEURL} ${query}`)
    },

    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
      },

      gottaGetEmAll: function(){
          return axios.get("/api/books");
      }
}