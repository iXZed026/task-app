import React, { useState } from 'react';
import "./EditModal.css"
import { IoMdClose } from "react-icons/io";

interface User {
    id: number,
    name: string,
    lastName: string,
    nationalCode: string,
}

interface Input {
    name: string,
    lastName: string,
    nationalCode: string | number,
}

const EditModal: React.FC<any> = ({ ntCode, users, setUsers, setEditModalFlag }) => {

    const [inputValues, setInputValues] = useState<Input>({
        name: "",
        lastName: "",
        nationalCode: "",
    })

    const closeAddModal = () => {
        setEditModalFlag(false);
    }

    const changeValuesHandler = (e: any) => {

        if (e.target.placeholder === "نام") {
            setInputValues({ ...inputValues, name: e.target.value })
        } else if (e.target.placeholder === "نام خانوادگی") {
            setInputValues({ ...inputValues, lastName: e.target.value })
        } else if (e.target.placeholder === "کد ملی") {
            setInputValues({ ...inputValues, nationalCode: e.target.value })
        }

    }

    const editUserHandler = () => {
        if (inputValues.name && inputValues.lastName && inputValues.nationalCode) {
            const updatedUsers = users.map((user: User) => {
                if (user.nationalCode === ntCode) {
                    return { ...user, name: inputValues.name, lastName: inputValues.lastName, nationalCode: inputValues.nationalCode };
                } else {
                    return user;
                }
            });
            setUsers(updatedUsers);

            setEditModalFlag(false)
        }


    }

    return (
        <div className="addModal">
            <div className="addModal-container">
                <div className="addModal-flex">
                    <div className="addModal-header">
                        <IoMdClose id='close-icon' onClick={closeAddModal} />
                    </div>
                    <div className="addModal-body">
                        <form action="" className="add-form" onSubmit={(e: any) => e.preventDefault()}>
                            <div>
                                <input
                                    type="text"
                                    placeholder='نام'
                                    onChange={changeValuesHandler}
                                    value={inputValues.name}
                                />
                                {
                                }
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder='نام خانوادگی'
                                    onChange={changeValuesHandler}
                                    value={inputValues.lastName}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder='کد ملی'
                                    maxLength={10}
                                    onChange={changeValuesHandler}
                                    value={inputValues.nationalCode}
                                />
                            </div>

                        </form>
                    </div>
                    <div className="addModal-footer">
                        <button type='submit' onClick={editUserHandler}>ویرایش</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditModal