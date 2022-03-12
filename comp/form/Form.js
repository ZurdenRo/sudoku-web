

const Form = () => {

    

    return (

        <form className="formGrid">
           
            <input type="radio" name="grid"></input>
            <label>Grid 2x2</label>
            <br/>
            <input type="radio" name="grid"></input>
            <label>Grid 3x3</label>
            <br/>
            <button>Start</button>
           
        </form>
    );

}


export default Form