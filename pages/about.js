import React, {useState} from 'react'

const About = () => {

    const [obj, sarasa] = useState({number : 1, name: 'ro', lastName: 'last'})
   
    function decrementCount(){
        sarasa( state => ({number: state.number - 1}) )
    }

    function incrementCount(){
        sarasa( state => ({number: state.number + 1}))
    }

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{obj.number}</span> 
            <button onClick={incrementCount}>+</button>
            <p></p>
            <span>{obj.name}</span>
        </>
    );
}

export default About;