import React, { Component } from "react";
import "isomorphic-fetch";
import "es6-promise";
import FilmListComponent from "./componentPieces/FilmListComponent";
import InputComponent from "./componentPieces/InputComponent";
import SpeciesComponent from "./componentPieces/SpeciesComponent";


class PageComponent extends Component{
    constructor(props){
        super(props);

       this.state = { filmList: [],
            speciesList: [],
            showFilmComponent: false,
            showSpeciesComponent: false
        };
    }

    toggleComponent = (componentToToggle) => {
        // Toggle the compnent we want to render
       switch(componentToToggle){
           case "film": this.setState(
                {
                    showFilmComponent: !this.state.showFilmComponent,
                    showSpeciesComponent: false
                }

           );   
                // get information for the component here
                // this.fetchFilmData();
            break;

           case "species": this.setState(
                {
                    showSpeciesComponent: !this.state.showSpeciesComponent,
                    showFilmComponent: false
                }
           );
                // get information for the component here
                // this.fetchSpeciesData();
            break;

           default:
            break;
       } 
    }  

    componentDidMount(){
        // const promises = [
        //     fetch("https://ghibliapi.herokuapp.com/films"),
        //     fetch("https://ghibliapi.herokuapp.com/species")
        // ]
        
        // use promise.all ?
        let films;
        let species;
        fetch("https://ghibliapi.herokuapp.com/films")
            // .then(res => console.log(res)
            .then(res => res.json())
            .then(obj => {films = obj
                this.setState({filmList: films})
            });

        fetch("https://ghibliapi.herokuapp.com/species")
            // .then(res => console.log(res)
            .then(res => res.json())
            .then(obj => {species = obj
                this.setState({speciesList: species})
            });
        }

    // use renderLoading(){}
        
    render(){

        return(
            <div className="main-page container">   
                <h1>Welcome to Studio Ghibli's Stuff!!! :D</h1>
                <InputComponent toggleComponent={this.toggleComponent}/>
                {this.state.showFilmComponent ? <FilmListComponent myFilms = {this.state.filmList}/> : null}
                {this.state.showSpeciesComponent ? <SpeciesComponent mySpecies = {this.state.speciesList}/> : null}
            </div>
        );
    }
}

export default PageComponent;