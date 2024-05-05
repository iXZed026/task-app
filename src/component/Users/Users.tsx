import React, { useState, useEffect } from 'react';
import "./Users.css";
import Search from './Search';
import DeleteModal from './DeleteModal';
import AddModal from './AddModal';
import EditModal from './EditModal';
import SeenModal from './SeenModal';
import StaticModal from './StaticModal';
import { FaSearch } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { IoLocationOutline } from "react-icons/io5";

interface User {
    id: number,
    name: string,
    lastName: string,
    nationalCode: string,
    date: any,
    location: string,
}



const Users: React.FC = () => {


    let date = new Date()




    const usersJsonData = require('../../json/Users.json');

    const [users, setUsers] = useState<any>(usersJsonData);


    const [search, setSearchFlag] = useState<boolean>(false);

    const [deleteModalFlag, setDeleteModalFlag] = useState<boolean>(false);
    const [addModalFlag, setAddModalFlag] = useState<boolean>(false);
    const [editModalFlag, setEditModalFlag] = useState<boolean>(false);
    const [seenModalFlag, setSeenModalFlag] = useState<boolean>(false);
    const [staticModalFlag, setStaticModalFlag] = useState<boolean>(false);
    const [locationModalFlag, setLocationModalFlag] = useState<boolean>(false);
    let [ntCode, setNtCode] = useState();

    // const [notFoundUser,setNotFoundUser] = useState<string>("");


    const searchUserHandle = () => {
        setSearchFlag(!search);
    }

    const deleteModalHandle = (ntCode: any) => {
        setDeleteModalFlag(true);
        setNtCode(ntCode)
    }

    const addModalHandler = () => {
        setAddModalFlag(true);
    }

    const editModalHandle = (ntCode: any) => {
        setEditModalFlag(true)
        setNtCode(ntCode)
    }

    const seenModalHandle = (ntCode: any) => {
        setSeenModalFlag(true);
        setNtCode(ntCode);
    }

    const staticModalHandle = (ntCode: any) => {
        setStaticModalFlag(true);
        setNtCode(ntCode);
    }

    const locationModalHandle = (ntCode: any) => {
        setLocationModalFlag(true);
        setNtCode(ntCode);
    }


    return (
        <>
            <div className="users">
                <div className="users-container">
                    <div className="users-flex">
                        <div className="search" style={{ justifyContent: search ? "" : "space-between" }}>
                            <FaSearch id="icon-style" onClick={searchUserHandle} />
                            {
                                search && (
                                    <Search users={users} setUsers={setUsers} />
                                )
                            }
                            {
                                search ? (
                                    <IoPersonAdd style={{ display: "none" }} />
                                ) : (
                                    <IoPersonAdd id='add-icon' onClick={addModalHandler} />
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
                                        users.length > 0 ? (
                                            users.map((user: User, key: number, count: string) => (
                                                <tr key={user.id}>
                                                    <td id='border'>{user.id}.</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.lastName}</td>
                                                    <td>{user.nationalCode}</td>
                                                    <td id='radius'>
                                                        <div>
                                                            <MdOutlineDelete onClick={() => deleteModalHandle(user.nationalCode)} id='delete-icon' />
                                                            <FaEdit id="edit-icon" onClick={() => editModalHandle(user.nationalCode)} />
                                                            <MdOutlineRemoveRedEye id="seen-icon" onClick={() => seenModalHandle(user.nationalCode)} />
                                                            <FcStatistics id="static-icon" onClick={() => staticModalHandle(user.nationalCode)} />
                                                            <a href={user.location}><IoLocationOutline id='location-icon' /></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <>
                                                <tr style={{textAlign:"center"}}>
                                                <td></td>
                                                <td></td>
                                                <td id='notFound' >کاربر مورد نظر پیدا نشد!</td>
                                                <td></td>
                                                <td></td>
                                                </tr>
                                            </>
                                        )

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
                    <AddModal users={users} setUsers={setUsers} setAddModalFlag={setAddModalFlag} />
                )
            }
            {
                editModalFlag && (
                    <EditModal ntCode={ntCode} users={users} setUsers={setUsers} setEditModalFlag={setEditModalFlag} />
                )
            }
            {
                seenModalFlag && (
                    <SeenModal ntCode={ntCode} setSeenModalFlag={setSeenModalFlag} users={users} />
                )
            }
            {
                staticModalFlag && (
                    <StaticModal ntCode={ntCode} setStaticModalFlag={setStaticModalFlag} users={users} />
                )
            }

        </>
    )
}



export default Users