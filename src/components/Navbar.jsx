import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchUser } from '../redux/slices/userDetailSlice'

const Navbar = () => {

  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(searchUser(search))
  },[search])

  const {users, loading} = useSelector((state)=> state.app)
  return (
    <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Faisal</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to={'/'} class="nav-link active" aria-current="page" href="#">Create Post</Link>
          </li>
          <li class="nav-item">
            <Link to={'/read'} class="nav-link active" aria-current="page" href="#">All Post ({users.length})</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" target='blank' href="https://65d4e0833f1ab8c634362f35.mockapi.io/crub">Databse</a>
          </li>
        </ul>
        <form class="d-flex w-25">
          <input class="form-control  me-2" onChange={(e)=> setSearch(e.target.value)} value={search} type="search" placeholder="Search" aria-label="Search"/>

        </form>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar