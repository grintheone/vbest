import React from 'react'

function ProfileInfo(props) {
    return (
        <div className="info">
            <p className="fs-4 fw-bold card-name">{props.name}</p>
            <p className="fs-6 fw-light mt-2"><span className="d-none d-sm-inline">Телефон: </span>{props.phone}</p>
            <p className="fs-6 fw-light"><span className="d-none d-sm-inline">Почта: </span>{props.email}</p>
        </div>
    )
}

export default ProfileInfo