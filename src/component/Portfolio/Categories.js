import React from 'react'

const Categories = ({categories,filterItem,allCategories}) => {
  return (
    <div className='filterbtn'>
      {categories.map((item,index)=>{
        return <button key={index} className={`${index === item && 'active'}`} onClick={()=> filterItem(item)}>
          {item}
        </button>
      })}
    </div>
  )
}

export default Categories