import React, { useState, useEffect } from 'react'
import List from './List';

function Form({ list, setList, memberToEdit, setMemberToEdit }) {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ role, setRole ] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log(list)
        if(memberToEdit){
            setList([...list.filter(item => item.id !== memberToEdit.id),
                {
                    name,
                    email,
                    role,
                    id: memberToEdit.id
                }
            ]);
            setName("");
            setEmail("");
            setRole("");
            setMemberToEdit(null);
        }else {
            setList([
                ...list,
                {
                    name,
                    email,
                    role,
                    id: list.length > 1 ? list[list.length-1].id + 1 : 1,
                }
            ])
        }
        
    }

    useEffect(() => {
        if(memberToEdit){
            setName(memberToEdit.name);
            setEmail(memberToEdit.email);
            setRole(memberToEdit.role);
        }
    }, [memberToEdit])

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' value={name} onChange={e => setName(e.target.value)} />
            <input type='text' name='email' value={email} onChange={e => setEmail(e.target.value)} />
            <input type='text' name='role' value={role} onChange={e => setRole(e.target.value)} />
            <button type='submit'>{memberToEdit ? "Edit" : "Enter"}</button>
        </form>
    )
}

export default Form
