import React, { useState, useEffect } from 'react';
import "./Users.css";
import axios from 'axios';
import { FaSearch } from "react-icons/fa";

interface User {
    id: number,
    name: string,
    lastName: string,
    nationalCode: string,
}


const Users: React.FC = () => {

    const usersJsonData = require('../../json/Users.json');

    const [users, setUsers] = useState<any>(usersJsonData);



    return (
        <div className="users">
            <div className="users-container">
                <div className="users-flex">
                    <div className="search">
                        <FaSearch id="icon-style" />
                    </div>
                    <div className="users-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>نام</th>
                                    <th>نام خانوادگی</th>
                                    <th>کد ملی</th>
                                    <th>عملیات</th>
                                </tr>
                            </thead>
                            <tbody id="table-body">
                                {
                                    users.map((user:User,key:number)=>(
                                        <tr key={user.id}>
                                    <td id='border'>{user.name}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.nationalCode}</td>
                                    <td id='radius'>d m l g</td>
                                </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users