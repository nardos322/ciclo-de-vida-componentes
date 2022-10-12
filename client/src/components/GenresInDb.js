import React, { Component } from 'react';
import Genre from './Genre';




class GenresInDb extends Component {
    constructor() {
        super()

        this.state = {

            isLoaded: false,
            genresList: [],

        }

    }


    componentDidMount() {
        fetch('http://localhost:3001/api/genres')
            .then(res => res.json())
            .then(genres => {
                this.setState({
                    isLoaded: true,
                    genresList: genres.data
                })

            })
            .catch(error => console.log(error))




    }

    componentDidUpdate() {

    }

    changeBackground(){
        document.querySelector('.genre-container').classList.toggle('bg-secondary')
    }

    render() {


        return (
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 style={{cursor: 'pointer'}} className="m-0 font-weight-bold text-gray-800" onMouseOver={this.changeBackground} onMouseOut={this.changeBackground}>Genres in Data Base</h6>
                        </div>
                        <div className="card-body genre-container">
                            <div className="row">
                                {
                                    this.state.genresList.map((genre, index) => {
                                        return <Genre  {...genre} key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )

    }








}
export default GenresInDb;