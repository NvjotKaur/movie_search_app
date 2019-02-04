import React, { Component } from 'react';
import './App.css';
import MovieRow from './components/movieRow';
import $ from 'jquery';

class App extends Component {
  constructor(props){
    super(props);

    this.state={

    }

      this.performSearch("Avengers") 
}

  performSearch=(searchTerm)=>{
    console.log("perform search using movies")
    const urlString="https://api.themoviedb.org/3/search/movie?&api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" +searchTerm;
    $.ajax({
      url: urlString,
      success:(searchResult)=>{
        console.log("Fetched data successfully")
        
        const results= searchResult.results


        var movieRows =[]

        results.forEach((movie)=>{
          movie.poster_src = "https://image.tmdb.org/t/p/w500" + movie.poster_path
     
         
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})

      },
      error: (xhr, status, err) =>{
        console.error("Failed to fetched data")
      }
    })
  }

  searchHandle=(event)=>{
    console.log(event.target.value)
    const boundObject=this
    const searchTerm=event.target.value;
    boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <div className="App">
      <table className="tableTitle">
        <tbody>
          <tr>
            <td> 
              <img style={{height:"80px", width:"100px"}} alt="movie_app" src="https://i.pinimg.com/originals/68/12/f9/6812f99c05ddb5f8bb6c3842d08a8127.png"/> 
             </td>
            <td>
              <h3> Movie Search </h3> 
              </td>
          </tr>
          </tbody>
         </table>

         <input style={{
          fontSize:"40",
          display:"block",
          width:"100%",
          padding:"10px"
          }} 
          type="text" onChange={this.searchHandle.bind(this)} placeholder="Enter Search Item"/>

          {this.state.rows}

      </div>
    );
  }
}

export default App;
