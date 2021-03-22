import React from 'react'
import {ReactComponent as SearchButton} from '../icons/search.svg'

function SearchBar(props) {

    const sendDataBack = (event) => {
        const {value} = event.target
        props.sendData(value)
    }

    return (
        <div className="container mt-4 mb-3 sticky-top">
            <input 
                type="text" 
                name="input"
                value={props.currentInput}
                onChange={sendDataBack}
                className="form-control" 
                placeholder="Поиск по имени, должности, номеру телефона" 
                aria-label="Поиск по имени, должности, номеру телефона"

            />
            <SearchButton className="search-icon" />
        </div>
    )
    
}

export default SearchBar;