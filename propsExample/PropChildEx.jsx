import React from 'react'

const PropChildEx = (props) => {
    console.log(props);
    
    return (
    <div>PropChildEx
        <br/>
        <h1>{props.username}</h1>
        <h1>{props.company}</h1>
        {
            props.children[1]
        }
    </div>
    )
}

export default PropChildEx