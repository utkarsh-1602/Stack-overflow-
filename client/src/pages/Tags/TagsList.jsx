import React from 'react'
import './Tags.css'

const Tagslist = ({ tag }) => {
  return (
    <div className='tag'>
        <h5>{tag.tagName}</h5>
        <h5>{tag.tagDesc}</h5>

    </div>
  )
}

export default Tagslist