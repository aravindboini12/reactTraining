import React from 'react'

const FBCPropsEx1 = (props) => {
    if(props.isloggedIn){
        return(
            <div>
                <h1>welcome {props.username}</h1>
                {
                    props.hobbies.map((ele)=>{
                        return <li>{ele}</li>
                    })
                }
            </div>
        )
    }
    else{
        return(
            <h1>please login</h1>
        )
    }
}

export default FBCPropsEx1