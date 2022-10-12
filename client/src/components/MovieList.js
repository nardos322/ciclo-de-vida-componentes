import React from "react";

function MovieList(props) {
    
    return (
        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Titulo</th>
                    <th>Calificación</th>
                    <th>Premios</th>
                    <th>Duración</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th>Id</th>
                    <th>Titulo</th>
                    <th>Calificación</th>
                    <th>Premios</th>
                    <th>Duración</th>
                </tr>
            </tfoot>
            <tbody>
                {
                    props.movies.movieList.map((movie, index) => {

                        
                        return (
                            <tr key={index}>
                            <td>{movie.id} </td>
                            <td>{movie.title} </td>
                            <td>{movie.rating} </td>
                            <td>{movie.awards} </td>
                            <td>{movie.length} </td>
                        </tr>
                        )
                    })
                }
               
               
            </tbody>
        </table>
    )
}

export default MovieList