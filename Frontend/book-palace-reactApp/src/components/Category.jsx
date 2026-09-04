import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const SortBy = ({ value = "", onChange }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const initial = searchParams.get('category') || value || ""
  const [selected, setSelected] = useState(initial)

  useEffect(() => {
    const cat = searchParams.get('category') || value || ""
    if (cat !== selected) setSelected(cat)
  }, [searchParams, value])

  const handleChange = (e) => {
    const val = e.target.value
    setSelected(val)
    if (typeof onChange === "function") onChange(e)
      
    const params = Object.fromEntries(searchParams)
    if (val) params.category = val
    else delete params.category
    setSearchParams(params)
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
        <option value="Self development">Self-Development</option>
        <option value="Life Lessons">Life Lessons</option>
        <option value="Novels">Novels</option>
        <option value="Stories">Stories</option>
        <option value="Others">Others</option>
      </select>
    </div>
  )
}

export default SortBy
