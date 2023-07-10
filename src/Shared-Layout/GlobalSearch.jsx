import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

const GlobalSearch = () => {
    return (
        <React.Fragment>
            <div className="global-searchbox">
                <BiSearchAlt className='icon' />
                <input type="text" placeholder='search here...' />
            </div>
        </React.Fragment>
    )
}

export default GlobalSearch