import React, { useState, useEffect } from 'react';
import "./Users.css";
import Search from './Search';
import DeleteModal from './DeleteModal';
import AddModal from './AddModal';
import axios from 'axios';
import { FaSearch } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
interface User {
    id: number,
    name: string,
    lastName: string,
    nationalCode: string,
}


const Users: React.FC = () => {

    const usersJsonData = require('../../json/Users.json');

    const [users, setUsers] = useState<any>(usersJsonData);
    const [search, setSearchFlag] = useState<boolean>(false);

    const [deleteModalFlag, setDeleteModalFlag] = useState<boolean>(false);
    const [addModalFlag, setAddModalFlag] = useState<boolean>(false);
    let [ntCode, setNtCode] = useState();


    const searchUserHandle = () => {
        setSearchFlag(!search);
    }

    const deleteModalHandle = (ntCode: any) => {
        setDeleteModalFlag(true);
        setNtCode(ntCode)
    }

    const addModalHandler = ()=>{
        setAddModalFlag (true);
    }


    return (
        <>
            <div className="users">
                <div className="users-container">
                    <div className="users-flex">
                        <div className="search" style={{justifyContent:search ? "" : "space-between"}}>
                            <FaSearch id="icon-style" onClick={searchUserHandle} />
                            {
                                search && (
                                    <Search users={users} setUsers={setUsers} />
                                )
                            }
                            {
                                search ? (
                                    <IoPersonAdd style={{display:"none"}}/>
                                ) : (
                                    <IoPersonAdd id='add-icon' onClick={addModalHandler}/>
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
                                                    <div>
                                                        <MdOutlineDelete onClick={() => deleteModalHandle(user.nationalCode)} id='delete-icon' />
                                                        
                                                    </div>
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
                    <DeleteModal ntCode={ntCode} users={users} setUsers={setUsers} setDeleteModalFlag={setDeleteModalFlag} />
                )
            }
            {
                addModalFlag && (
                    <AddModal users={users} setUsers={setUsers} setAddModalFlag={setAddModalFlag}/>
                )
            }
        </>
    )
}

export default Users