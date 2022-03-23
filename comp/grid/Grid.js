

export default function Grid ({showForm, grid}){


    function inGridGoBackForm(){
        showForm()
    }

    return(
        <div>
            <h1>{grid.grid}</h1>
            
            <button onClick={inGridGoBackForm}>back</button>            
        </div>
    )
}


const gridThree = () => {
    <div>

    </div>
}