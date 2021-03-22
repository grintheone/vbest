import React from 'react'
import Picture from './card/ProfilePicture'
import Info from './card/ProfileInfo'
import Number from './card/ProfileNumber'


function CardBody(props) {
    return (
        <div className="container card-body d-flex justify-content-between">
            <div className="d-flex align-items-center">
                <Picture />
                <Info name={props.name} phone={props.phone} email={props.email}/>
            </div>
            <div>
                <Number number={props.contact}/>
            </div>
        </div>
    )
}

export default CardBody
