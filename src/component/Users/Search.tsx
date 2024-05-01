import React, { useState } from 'react';
import "./Search.css"

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

    const [inputValue, setInputValue] = useState<Value>({
        name: "",
        lastName: "",
        nationalCode: "",
    })

    const { name, lastName, nationalCode } = inputValue;

    const findUserHandler = () => {
        let findUser: any = users.find((user: any, key: number) => {
            if ((user.name === name && user.lastName === lastName) || user.nationalCode === nationalCode) {
                return user
            }
        })

        if(findUser){
            setUsers([findUser])
        }

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

    return (
        <form action="" className="form-search" onSubmit={(e: any) => e.preventDefault()}>
            <input type="text"
                className="name"
                placeholder='نام'
                value={name}
                onChange={changeValueHandler}
            />
            <input type="text"
                className="name"
                placeholder='نام خانوادگی'
                value={lastName}
                onChange={changeValueHandler}
            />
            <input type="text"
                className="name"
                placeholder='کد ملی'
                value={nationalCode}
                onChange={changeValueHandler}
            />
            <button type="submit" onClick={findUserHandler}>جستجو</button>
        </form>
    )
}

export default Search