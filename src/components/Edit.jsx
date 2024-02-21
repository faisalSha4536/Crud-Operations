import React, { useEffect, useState } from 'react'
import './style.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../redux/slices/userDetailSlice'

const Edit = () => {

  const navigate = useNavigate()
  const [editData, setEditData] = useState()
  const {id} = useParams()

  const {users, loading} = useSelector((state)=> state.app)
  const dispatch = useDispatch()

  useEffect(()=>{

      const singleUser = users.filter((user) => id === user.id)
      setEditData(singleUser[0])
  },[])

  const updateData = (e)=>{
    setEditData({...editData, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(updateUser(editData))
    navigate('/read')
  }
 
  return (
    <div><form className='w-50 mx-auto my-50' onSubmit={(e)=> handleSubmit(e)}>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Name</label>
        <input type="text" name='name' value={editData && editData.name} class="form-control" onChange={(e) => updateData(e)}/>
    </div>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" name='email' value={editData && editData.email} onChange={(e) => updateData(e)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Age</label>
        <input type="number" value={editData && editData.age} onChange={(e) => updateData(e)} name='age' class="form-control" />
    </div>
    <div class="form-check">
        <input class="form-check-input" name='gender' onChange={(e) => updateData(e)} checked = {editData && editData.gender === 'male'}  value={'male'} type="radio"  />
        <label class="form-check-label" for="flexRadioDefault1">
            Male
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" onChange={(e) => updateData(e)} checked = {editData && editData.gender === 'female'}  name='gender' value={'female'} type="radio" />
        <label class="form-check-label" for="flexRadioDefault2">
            Female
        </label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form></div>
  )
}

export default Edit