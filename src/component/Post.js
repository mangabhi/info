import React from 'react'
import "./Post.css"
const Post = (props) => {
    if(props.loading){
        return <h1>Fetching...</h1>
    }
    return( 
        <div className="mainDv">
        <div className="card">
        <img src={props.data.avatar} alt={props.data.avatar} className="photo"/>
        <h2>{props.data.last_name} {props.data.first_name}</h2>
        <p>{props.data.email}</p>
        
        </div>
        </div>
    )
}

export default Post
