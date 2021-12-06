import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
    const [keyword, setKeyword] = useState('')
    let navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword.trim()){
            navigate(`/search/${keyword}`)
        } else {
            navigate('/shop')
        }
    }
    return (
        <center><Form onSubmit = {submitHandler} className = "d-flex">
            <Form.Control 
            type = "text" 
            name = "q" 
            onChange = {(e) => setKeyword(e.target.value)} 
            placeholder = "Looking for something specific?"
            // className = "mr-sm-2 ml-sm-5"
            style = {{margin: "0px 8px 0px 8px"}}
            ></Form.Control>
            <Button type = "submit" variant = "outline-secondary">
            Search
            </Button>
        </Form></center>
//         <div class="form-group">
//     <div class="input-group mb-3" 
//     onSubmit= {submitHandler} 
//     onChange = {(e) => setKeyword(e.target.value)}
//     name = "q"  >
//       <input type="text" class="form-control" placeholder="Search all products" aria-label="Search all products" aria-describedby="Search"></input>
//       <button class="btn btn-secondary" type="submit" id="button-addon2">Search</button>
//     </div>
//   </div>
    )
}

export default SearchBox
