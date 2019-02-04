import React, {Component} from 'react';


class MovieRow extends Component{
	render(){
		return(
			<table key={this.props.movie.id}> 
        <tbody>
          <tr>
            <td>
              <img alt="movie search" width="150px" height="180px" src={this.props.movie.poster_src} />
             </td>

             <td>
              <h2> {this.props.movie.title} </h2>
              <p style={{width:"400px", margin:"20px", paddingLeft:"50px"}}>{this.props.movie.overview} </p>
             </td>
           </tr>
         </tbody>
      </table>


			)
	}
}

export default MovieRow;