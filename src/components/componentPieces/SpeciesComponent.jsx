import React, { Fragment, Component } from "react";
import "isomorphic-fetch";
import "es6-promise";

class SpeciesComponent extends Component{
    constructor(props){
        super(props);
        console.log("Fire");
        this.state = {species: props.mySpecies}
        console.log(`Species`, this.state.species);
    }

    render(){
        console.log("rendering");
        return( 
            <section className="species-list-section">
                {
                    this.state.species.map(
                        (item, index) => {
                            return(
                                <Fragment key={`fragment-${index}`}>
                                    <div key={`species-div-${index}`} className="card">
                                        <div className="card-content light-green accent-3">
                                            <h3 className="card-title">
                                                {item.name}
                                            </h3>
                                        </div>
                                        <div className="divider"></div>
                                        <div className="card-content light-green accent-4">
                                            <h4>Classification: {item.classification}</h4>
                                            <h6>Eye colors: {item.eye_colors}</h6>
                                            <h6>Hair colors: {item.hair_colors}</h6>
                                        </div>
                                    </div>
                                </Fragment>
                            );
                        }
                    )
                }
            </section>
        );
    }
}

export default SpeciesComponent;