import React, { Fragment } from "react";

function FilmListComponent(props){
    return (
        <section className="film-list-section">
            {/* <h3>Films Here</h3> */}
            {
                props.myFilms.map(
                    (item, index) => {
                        return(
                            <Fragment key={`fragment-${index}`}>
                                <div key={`film-div-${index}`} className="card">
                                    <div className="card-content light-blue accent-4">
                                        <h3 className="card-title">{item.title}</h3>
                                        <h6>{item.release_date}</h6>
                                    </div>
                                    <div className="card-content blue darken-2"> 
                                        <div className="divider"></div>
                                        <h4>{item.description}</h4>
                                    </div>
                                </div>
                                <div className="divider"></div>
                            </ Fragment>
                        );
                    }
                )
            }
        </section>
    );
}

export default FilmListComponent;