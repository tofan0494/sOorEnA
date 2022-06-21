import './conterols.css'

import Builder from './Builder/Builder'
import React from "react"

const products =[
    {title : 'product 1' , type : 'product 1'},
    {title : 'product 2' , type : 'product 2'},
    {title : 'product 3' , type : 'product 3'},
    {title : 'product 4' , type : 'product 4'},

]

const Conterols = (props) =>{
    return(
        <div className="conterols">
            <div> <p>Total Price : {props.Price}</p></div>
            {products.map((item)=>{
                return <Builder 
                key={item.title} 
                title={item.title} 
                add ={()=>{props.producadd(item.type)}}
                remove ={()=>props.productRemove(item.type)}
                />
            })}
        </div>
    )
}

export default Conterols