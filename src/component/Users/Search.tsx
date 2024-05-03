import React, { useState } from 'react';
import "./Search.css";

interface Props {
    users: any,
    setUsers: any
}

interface Value {
    name: string,
    lastName: string,
    nationalCode: string,
}

const Search: React.FC<Props> = ({ users, setUsers }) => {

    const usersJsonData = require('../../json/Users.json');

    const [inputValue, setInputValue] = useState<Value>({
        name: "",
        lastName: "",
        nationalCode: "",
    })

    const { name, lastName, nationalCode } = inputValue;

    const findUserHandler = () => {

        let findUser: any = users.filter((user: any, key: number) => {
            return user.name === name || user.nationalCode === nationalCode || user.lastName === lastName
        });

        if (name || lastName || nationalCode) {

            setUsers(findUser)

            if (findUser.length > 1 && lastName) {
                let findUser2: any = findUser.filter((user: any) => {
                    return lastName === user.lastName
                })
                setUsers(findUser2)
            }
        }

        // setInputValue({ name: "", lastName: "", nationalCode: "" })

    }

    const changeValueHandler = (e: any) => {

        if (e.target.placeholder === "نام") {
            setInputValue({ ...inputValue, name: e.target.value })
        } else if (e.target.placeholder === "نام خانوادگی") {
            setInputValue({ ...inputValue, lastName: e.target.value })
        } else if (e.target.placeholder === "کد ملی") {
            setInputValue({ ...inputValue, nationalCode: e.target.value })
        }
    }

    const showAllUsers = () => {
        if (!name && !lastName && !nationalCode) {
            setUsers([])
            setUsers(usersJsonData)
        }
    }


    return (
        <form action="" className="form-search" onSubmit={(e: any) => e.preventDefault()}>
            <input type="text"
                className="name"
                placeholder='نام'
                value={name}
                onChange={changeValueHandler}
                onKeyUp={showAllUsers}
            />
            <input type="text"
                className="name"
                placeholder='نام خانوادگی'
                value={lastName}
                onChange={changeValueHandler}
                onKeyUp={showAllUsers}
            />
            <input type="text"
                className="name"
                placeholder='کد ملی'
                value={nationalCode}
                onChange={changeValueHandler}
                onKeyUp={showAllUsers}
            />
            <button type="submit" onClick={findUserHandler}>جستجو</button>
        </form>
    )
}

export default Search