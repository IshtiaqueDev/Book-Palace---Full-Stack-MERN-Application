import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const SortBy = ({ value = '', onChange = () => {} }) => {
  const [selected, setSelected] = useState(value)
  const [searchParams,setSearchParams]=useSearchParams();

  useEffect(() => {
    setSelected(value)
  }, [value])

  const handleChange = (e) => {
    setSelected(e.target.value)
    onChange(e)
    setSearchParams({category:e.target.value})
  }

  return (
    <div>
      <select
        className="form-select"
        value={selected}
        onChange={handleChange}
        aria-label="Categories select"
      >
        <option value="">Categories</option>
        <option value="self-development">Self-Development</option>
        <option value="life-lessons">Life Lessons</option>
        <option value="novels">Novels</option>
        <option value="stories">Stories</option>
        <option value="others">Others</option>
      </select>
    </div>
  )
}

export default SortBy
