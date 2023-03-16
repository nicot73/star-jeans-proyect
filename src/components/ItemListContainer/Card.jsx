import React from 'react';


const Card = ({ product }) => {
  return (
    <div className='card'>
      <img src={product.image1} alt="" />
      <div className="card-body">
        <h4 className="card-title">{product.title}</h4>
        <p className='card-text text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi debitis libero tempora perspiciatis! Velit soluta dicta recusandae est. Culpa velit animi obcaecati doloremque vero! Veniam aspernatur incidunt dolores? Beatae, expedita!</p>
      </div>
    </div>
  )
}

export default Card