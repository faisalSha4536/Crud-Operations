import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, showUser } from '../redux/slices/userDetailSlice';
import CustomPopup from './CustomPopup';
import { Link } from 'react-router-dom';
import RadioButtons from './RadioButtons';

const Read = () => {
    const dispatch = useDispatch();
    const { users, loading, searchData, Gender } = useSelector(state => state.app);
    const [popup, setPopup] = useState(false);
    const [id, setId] = useState(null);

    useEffect(() => {
        dispatch(showUser())
    }, [dispatch]);

    const handleView = (userId) => {
        setId(userId);
        setPopup(true);
    };

    if (loading) {
        return <div>Loading</div>;
    }

    return (
        <>
            {popup && <CustomPopup id={id} popup={popup} setPopup={setPopup} />}
            <div className='mx-auto w-50 '>
                <div className="d-flex align-items-center justify-content-between px-2">
                    <h2 className='my-2'>All Posts</h2>
                    <RadioButtons />
                </div>
                <div className="">
                    {users &&

                        users.filter((user) => {
                            if (searchData.length === 0) {
                                return user
                            } else {
                                return user.name.toLowerCase().includes(searchData.toLowerCase())
                            }
                        })

                            .filter((user) => {
                                if(Gender === 'male'){
                                    return user.gender === 'male'
                                } else if(Gender === 'female'){
                                    return user.gender === 'female'
                                } else {
                                    return user
                                }
                            })

                            .map((user) => (
                                <div key={user.id} className="card my-2 mx-auto">
                                    <div className="card-body">
                                        <h5 className="card-title">{user.name}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                                        <p className="card-text">{user.gender}</p>
                                        <button className="btn btn-primary mx-2" onClick={() => handleView(user.id)}>View</button>
                                        <button onClick={() => dispatch(deleteUser(user.id))} className=" btn btn-danger card-link">Delete</button>
                                        <Link to={`/edit/${user.id}`} className="btn btn-primary card-link">Edit</Link>
                                    </div>
                                </div>
                            ))}
                </div>
            </div>
        </>
    );
}

export default Read;
