import React, {Component} from 'react';
import MovieList from './MovieList';

class Movie extends Component {

	constructor(){
		super()
		this.state = {
			movieList: [],
		}
	}


	componentDidMount(){
		fetch('http://localhost:3001/api/movies')
			.then(res => res.json())
			.then(movies => {
				
				this.setState({
					movieList: movies.data
				})
			})
			.catch(error => console.log(error))
	}



	componentDidUpdate(){


	}

	render(){
		
		
		return(
			<React.Fragment>
						{/*<!-- PRODUCTS LIST -->*/}
						<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>
						
						{/*<!-- DataTales Example -->*/}
						<div className="card shadow mb-4">
							<div className="card-body">
								<div className="table-responsive">
									<MovieList movies={this.state} />
								</div>
							</div>
						</div>            
			</React.Fragment>
		)
	}

   
}
export default Movie;