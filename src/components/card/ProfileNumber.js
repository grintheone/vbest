import React from 'react'
import {ReactComponent as PhoneIcon} from '../../icons/telephone.svg'

function ProfileNumber(props) {
    return props.number ?
         <div className="d-flex fs-6 fw-bold contact-card" ><PhoneIcon className="phone-icon"/><p>{props.number}</p></div> : null    
}

export default ProfileNumber