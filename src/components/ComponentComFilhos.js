import react from "react";

function ComponentComFilhos(props){
    return(
        <div>
            <h2>Crianças:</h2>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default ComponentComFilhos;