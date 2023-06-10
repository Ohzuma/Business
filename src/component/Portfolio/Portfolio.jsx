import React from 'react'
import { useState } from 'react';
import Items from './data'
import Menu from './Menu'
import Categories from './Categories'

const allCategories = ['All Work',...new Set(Items.map((items)=>items.category))];

const Portfolio = () => {
  const [menuItem,setMenuItem] = useState(Items)
  const [categories,setCategories] = useState(allCategories)

const filterItem = (category)=>{
if(category === 'All Work'){
setMenuItem(Items)
return
}

const newItem = Items.filter((items)=> items.category === category)
setMenuItem(newItem)


}

  return (
<section className='portfolio'>
<header className="ServiceHeading">
            <h3 style={{width:'200px'}} className='intro'>Our Portfolio</h3>
            <h1>Our Recent Works</h1>
            <p>
             There are many variations of passages of Lorem Ipsum
             available, but <br/> the majority have suffered alteration 
             in some form. 
             </p>
        </header>

      <Categories categories={categories} filterItem={filterItem}/>
      <Menu item={menuItem}/>
</section>
  )
}

export default Portfolio