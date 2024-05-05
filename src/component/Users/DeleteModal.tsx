import React from 'react';
import "./DeleteModal.css";
import { IoMdClose } from "react-icons/io";

interface User {
  id: number,
  name: string,
  lastName: string,
  nationalCode: string,
}

const deleteModal: React.FC<any> = ({ setDeleteModalFlag, users, setUsers, ntCode }) => {

  const deleteUserHandler = () => {

    const removeUser = users.filter((user: User) =>  user.nationalCode !== ntCode )

    setUsers(removeUser);

    setDeleteModalFlag(false);

  }

  return (
    <div className='deleteModal'>
      <div className="deleteModal-container">
        <div className="deleteModal-flex">
          <div className="deleteModal-header">
            <IoMdClose id='deleteModal-icon' onClick={() => { setDeleteModalFlag(false) }} />
          </div>
          <div className="delteModal-body">
            <h5 id='delteModal-title'>ایا رکورد حذف شود ؟</h5>
          </div>
          <div className="deleteModal-footer">
            <button type='submit' onClick={deleteUserHandler}>بله</button>
            <button onClick={() => { setDeleteModalFlag(false) }} type='submit'>خیر</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default deleteModal