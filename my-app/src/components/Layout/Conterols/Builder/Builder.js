import './Builder.css'

import React from "react"

const Builder = (props)=>{
    return(
        <div className='Builder'>
                <div >{props.title}</div>
                <button onClick={props.add}>Add</button>
                <button onClick={props.remove}>Remove</button>

        </div>
    )
}

export default Builder