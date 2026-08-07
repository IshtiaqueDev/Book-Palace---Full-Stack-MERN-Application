import React from 'react'

const SortBy = () => {
  return (
    <div>
    <div className="dropdown">
    <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Sort By
    </button>
    <ul className="dropdown-menu">
    <li><button className="dropdown-item" type="button">Top Rated</button></li>
    <li><button className="dropdown-item" type="button">Most Popular</button></li>
    <li><button className="dropdown-item" type="button">A-Z</button></li>
    <li><button className="dropdown-item" type="button">Z-A</button></li>
    <li><button className="dropdown-item" type="button">Most Reviewed</button></li>
  </ul>
    </div>
    </div>
  )
}

export default SortBy
