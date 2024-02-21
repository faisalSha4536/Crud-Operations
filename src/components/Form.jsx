import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../redux/slices/userDetailSlice'
import { useNavigate } from 'react-router-dom'

const Form = () => {

    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const getData = (e)=>{
        setUser({...user, [e.target.name]: e.target.value})
       
    }

    const dispatch = useDispatch()

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(createUser(user))
        navigate('/read')
    }

    return (
        <div><form onSubmit={(e)=>handleSubmit(e)} className='w-50 mx-auto my-50'>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Name</label>
                <input type="text" required name='name' class="form-control"  onChange={getData}/>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={getData}/>
                <div id="emailHelp" required class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Age</label>
                <input type="number" required name='age' class="form-control" onChange={getData}/>
            </div>
            <div class="form-check">
                <input class="form-check-input" required name='gender' value={'male'} type="radio"  onChange={getData}/>
                <label class="form-check-label" for="flexRadioDefault1">
                    Male
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" required name='gender' value={'female'} type="radio" onChange={getData}/>
                <label class="form-check-label" for="flexRadioDefault2">
                    Female
                </label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form></div>
    )
}

export default Form