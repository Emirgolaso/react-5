import React, { useEffect } from 'react'
import fetchAllUsers from '../../store/thunks/usersThuk';
import { useSelector, useDispatch } from 'react-redux';


const Users = () => {
  const { users, userError, isUsersLaodung } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  console.log(users.length)
  return (
    <div>
      {userError && userError}
      {isUsersLaodung && 'loading...'}
      {Boolean(users.length) && users.map((el) => (
        <div key={el.id}>
          {el.name}{el.email}
        </div>
      ))}

    </div>
  )
}

export default Users