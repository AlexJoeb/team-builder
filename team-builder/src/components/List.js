import React from 'react'
import { ReactComponent as Trash } from '../Trash.svg';
import { ReactComponent as Edit } from '../Edit.svg';
function List ({ list, setList, setMemberToEdit }) {
    return (
        <div className='list__wrapper'>
            <ul className='list'>
                {
                    list.map((member, index) => <li key={index} style={{
                        marginTop: member.id > 2 ? "20px" : '0',
                        order: member.id,
                    }} className='list__item'>
                        <div className='list__item--info' >
                            <p>{member.name}</p>
                            <p>{member.email}</p>
                            <p>{member.role}</p>
                        </div>
                        <div className='list__item--controls'>
                            <button onClick={() => setMemberToEdit(member)}><Edit /></button>
                            <button onClick={() => setList(list.filter(item => item.id !== member.id))}><Trash /></button>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default List
