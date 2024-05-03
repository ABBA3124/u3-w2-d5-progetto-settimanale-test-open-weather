import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"

function NotFoundPage({ onSearch }) {
  const navigate = useNavigate()

  const handleHomeClick = () => {
    if (onSearch) {
      onSearch("") 
    }
    navigate("/")
  }

  return (
    <div className="text-center ms-auto me-auto mt-5 mb-5">
      <h1>404 - Pagina Non Trovata</h1>
      <p className='fs-4'>La pagina che stai cercando non esiste.</p>
      <Button onClick={handleHomeClick} className="text-white border" style={{background: "#7B94A4"}}>
        Torna Alla Home
      </Button>
    </div>
  )
}

export default NotFoundPage
