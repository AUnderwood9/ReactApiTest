import React from "react";

function InputComponent(props){
    return(
        <section className="btn-input">
            <button className="btn"
                onClick={() => props.toggleComponent("film")}
            >
                Load Films
            </button>
            <button className="btn"
                onClick={() => props.toggleComponent("species")}
            >
                Load Species
            </button>
        </section>
    )
}

export default InputComponent;