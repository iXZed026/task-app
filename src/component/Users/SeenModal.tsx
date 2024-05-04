import React, { useState, useEffect } from 'react';
import "./SeenModal.css"
import { IoMdClose } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

interface User {
    name: string,
    lastName: string,
    nationalCode: string,
    id: number | string
}

const SeenModal: React.FC<any> = ({ setSeenModalFlag, users, ntCode }) => {

    const [seenUser, setSeenUser] = useState<User | undefined>();

    useEffect(() => {
        const findUser = users.find((user: User) => user.nationalCode === ntCode);
        if (findUser) {
            setSeenUser(findUser);
        }
    }, [users, ntCode]);


    return (
        <div className="seenModal">
            <div className="seenModal-container">
                <div className="seenModal-flex">
                    <div className="editModal-header">
                        <IoMdClose id='seenModal-icon' onClick={() => { setSeenModalFlag(false) }} />
                    </div>
                    <div className="seenModal-body">
                        <div className="user-profile">
                            <FaUserCircle id='user-icon'/>
                        </div>
                        <h4>نام: {seenUser?.name}</h4>
                        <h4>نام خانوادگی: {seenUser?.lastName}</h4>
                        <h4>کد ملی: {seenUser?.nationalCode}</h4>
                    </div>
                    <div className="seenModal-footer">
                        <button onClick={() => { setSeenModalFlag(false) }}>بستن</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeenModal;
