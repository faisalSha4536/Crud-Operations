import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Gender } from '../redux/slices/userDetailSlice'

const RadioButtons = () => {

    const {users, loading} = useSelector((state)=> state.app)
    const dispatch = useDispatch()

    const [checkGender, setCheckGender] = useState('')
    
    const handleChange = (e)=>{
        setCheckGender(e.target.value)
    }
    // console.log(checkGender);

    useEffect(()=>{
        dispatch(Gender(checkGender))
    },[checkGender])

    return (
        <div className='d-flex gap-2'>
            <div class="form-check">
                <input class="form-check-input" value={''} type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={(e)=>handleChange(e)}/>
                <label class="form-check-label" for="flexRadioDefault1">
                   All
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" value={'male'} type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={(e)=>handleChange(e)}/>
                <label class="form-check-label" for="flexRadioDefault2">
                   Male
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" value={'female'} type="radio" name="flexRadioDefault" id="flexRadioDefault3"  onClick={(e)=>handleChange(e)} />
                <label class="form-check-label" for="flexRadioDefault3">
                    Female
                </label>
            </div>
        </div>
    )
}

export default RadioButtons