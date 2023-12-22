import React, { Component } from 'react';


class Genres extends Component {

    constructor(){
        // Props que hereda del componente padre
        super();
        this.state = {
            genresList: [
                'Bebidas',
                'Comidas',
                'Postres',
            ]
        }
    }

    /**
     * El estado de un componente es aquel que permite que el mismo pueda guardar información 
     * internamente.
     */
    
    render(){
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                            Tipos de Productos
                        </h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {
                                this.state.genresList.map((genre, index) => (
                                    <div key={index} className="col-lg-6 mb-4">
                                        <div className="card bg-dark text-white shadow">
                                            <div className="card-body">{genre}</div>
                                        </div>
                                    </div>
                                ))
                            }
    
    
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}

export default Genres;