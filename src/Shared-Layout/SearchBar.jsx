import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'



const SearchBar = ({ filter, setFilter }) => {



  return (
    <React.Fragment>
      <div className="searchbox">
        <BiSearchAlt className='search-icon' />
        <input className='form-input' type="text" placeholder='search here...'
          value={filter || ''}
          onChange={(e) => setFilter(e.target.value)} />

      </div>
    </React.Fragment>
  )
}

export default SearchBar