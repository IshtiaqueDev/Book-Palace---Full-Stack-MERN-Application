import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-3 w-100 mt-b">
      <div className="container text-center">
        <small>© {new Date().getFullYear()} Book Palace. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
