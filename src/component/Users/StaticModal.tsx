import React, { useEffect, useState } from 'react';
import "./staticModal.css";
import { IoMdClose } from "react-icons/io";

const StaticModal: React.FC<any> = ({ ntCode, setStaticModalFlag, users }) => {

    const [newUser, setNewUser] = useState<any>()

    useEffect(() => {
        const findUser = users.find((user: any) => ntCode === user.nationalCode);
        console.log(findUser);

        setNewUser(findUser)
        console.log(newUser);
    }, [])


    return (
        <div className="staticModal">
            <div className="staticModal-container">
                <div className="staticModal-flex">
                    <div className="close" style={{direction:"ltr"}}>
                        <IoMdClose id='close-icon' onClick={()=>{ setStaticModalFlag(false) }}/>
                    </div>
                    <div className="staic-table">
                        {
                            newUser && (
                                <>
                                    <div className="sat-view" style={{ height: `${newUser.date.satDay}%` }}></div>
                                    <div className="son-view" style={{ height: `${newUser.date.sonDay}%` }}></div>
                                    <div className="mon-view" style={{ height: `${newUser.date.monDay}%` }}></div>
                                </>
                            )
                        }
                    </div>
                    <div className="week-name">
                        <div id="satday">
                            <p>شنبه</p>
                        </div>
                        <div id="sonday">
                            <p>یکشنبه</p>
                        </div>
                        <div id="monday">
                            <p>دوشنبه</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaticModal