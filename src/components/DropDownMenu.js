import React from 'react'
import {ReactComponent as MenuButton} from '../icons/list.svg'

function DropDownMenu(props){
    const pointer = {cursor: 'pointer'}
    return (
        <div className="dropdown">
            <MenuButton className="menu-button dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"/>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li onClick={() => props.getSection(props.section)} className="dropdown-item" style={pointer} type="button" data-bs-toggle="modal" data-bs-target="#modal">Добавить сотрудника</li>
                <li className="dropdown-item" style={pointer}>Убрать сотрудника</li>
                <li className="dropdown-item" style={pointer} onClick={props.collapse}>{props.collapseBtnText}</li>
            </ul>
        </div>
    )
    
}


export default DropDownMenu;