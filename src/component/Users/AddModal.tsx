import React, { useState } from 'react';
import "./AddModal.css";
import { IoMdClose } from "react-icons/io";

interface Input {
    name: string,
    lastName: string,
    nationalCode: string | number,
}

const AddModal: React.FC<any> = ({ setAddModalFlag, setUsers, users }) => {

    const [inputValues, setInputValues] = useState<Input>({
        name: "",
        lastName: "",
        nationalCode: "",
    })

    const closeAddModal = () => {
        setAddModalFlag(false);
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

    const addUserHandler = () => {

        if (inputValues.name && inputValues.lastName && inputValues.nationalCode) {
            setUsers([...users, {
                name: inputValues.name,
                lastName: inputValues.lastName,
                nationalCode: inputValues.nationalCode,
                id: users.length + 1,
            }])
            setAddModalFlag(false)
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
                        <button type='submit' onClick={addUserHandler}>افزودن</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddModal