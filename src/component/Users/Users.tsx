import React, { useState, useEffect } from 'react';
import "./Users.css";
import Search from './Search';
import DeleteModal from './DeleteModal'; 
import axios from 'axios';
import { FaSearch } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

interface User {
    id: number,
    name: string,
    lastName: string,
    nationalCode: string,
}


const Users:React.FC = () => {

    const usersJsonData = require('../../json/Users.json');

    const [users, setUsers] = useState<any>(usersJsonData);
    const [search, setSearchFlag] = useState<boolean>(false);
    const [deleteModalFlag,setDeleteModalFlag] = useState<boolean>(false);

    const searchUserHandle = () => {
        setSearchFlag(!search)
    }

    const deleteModalHandle = ()=> {
        setDeleteModalFlag(true);
    }

    const deleteUserHandler = (ntCode:string) => {

    const removeUser = users.filter((user:User) => user.nationalCode !== ntCode)        ;

    setUsers(removeUser)

    }


    return (
        <>
        <div className="users">
            <div className="users-container">
                <div className="users-flex">
                    <div className="search">
                        <FaSearch id="icon-style" onClick={searchUserHandle} />
                        {
                            search && (
                                <Search users={users} setUsers={setUsers} />
                            )
                        }
                    </div>
                    <div className="users-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>ردیف</th>
                                    <th>نام</th>
                                    <th>نام خانوادگی</th>
                                    <th>کد ملی</th>
                                    <th>عملیات</th>
                                </tr>
                            </thead>
                            <tbody id="table-body">
                                {
                                    users.map((user: User, key: number) => (
                                        <tr key={user.id}>
                                            <td id='border'>1</td>
                                            <td>{user.name}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.nationalCode}</td>
                                            <td id='radius'>
                                            <MdOutlineDelete onClick={() => deleteModalHandle()} id='icon' />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        {
            deleteModalFlag && (
                <DeleteModal />
            )
        }
        </>
    )
}

export default Users