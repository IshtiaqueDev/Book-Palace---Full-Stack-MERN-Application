import React from 'react'

const SortBy = () => {
  return (
    <div>
    <div className="dropdown">
    <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Categories
    </button>
    <ul className="dropdown-menu">
    <li><button className="dropdown-item" type="button">Self-Development</button></li>
    <li><button className="dropdown-item" type="button">Life Lessons</button></li>
    <li><button className="dropdown-item" type="button">Novels</button></li>
    <li><button className="dropdown-item" type="button">Stories</button></li>
    <li><button className="dropdown-item" type="button">Others</button></li>
  </ul>
    </div>
    </div>
  )
}

export default SortBy
