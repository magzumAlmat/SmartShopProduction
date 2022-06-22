import React, { Component } from 'react'
import { storage } from '../../config/fbConfig';

const inputFormField=() => {

const [img,setImg]=seState(null)
const handleChange=e=>{
    if (e.targer.files[0]){

    }
}
const handleUpload=()=>{};
        return (
            <div>
                <h2>hello 1111111111</h2>
                <input type="file" onChange={handleChange}/>
                <button onClick={handleUpload}>Upload</button>
            </div>
        )
    }


export default inputFormField;