import React from 'react'
import Card from '../components/Card'
import SortBy from '../components/SortBy';

const HomePage = () => {
  let arr = [1, 3, 4, 4, 5, 6,5,6,7,7,7,7,7,7];

  return (
    <div className="container py-4">
    <div className="row g-3">
    <div className="col-md-12 d-flex justify-content-between">
        <h4>All Books</h4>
        <SortBy/>
    </div>
  {arr.map((el, index) => (
    <div key={index} className="col-6 col-lg-3">
      <Card />
    </div>
  ))}
    </div>
    </div>
  )
}

export default HomePage