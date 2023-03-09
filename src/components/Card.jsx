import React from 'react'

export const Card = ({ nombreCompleto, colorFavorito }) => {
  return (
    <div className='contenedor-card'>
      <div className='mt-3'>
        <h3> Hola {nombreCompleto}!</h3>
        <h3>Sabemos que tu color favorito es: </h3>
        <p style={{ background: `#${colorFavorito}`, padding: 18, borderRadius: 8, textAlign: 'center', color: '#ffffff' }}>{`#${colorFavorito}`}</p>
      </div>
    </div>
  )
}
