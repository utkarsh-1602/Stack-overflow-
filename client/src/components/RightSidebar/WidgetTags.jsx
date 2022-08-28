import React from 'react'

const WidgetTags = () => {

  const tags =  ['c', 'css', 'javascript', 'typescript', 'java', 'c++', 'python', 'html', 'firebase', 'express', 'mern', 'mongodb', 'node.js', 'php', 'mysql', 'next.js', 'reactjs'];


  return (
    <div className='widget-tags'>
      <h3>Watched Tags</h3>
      <div className='widget-tags-div'>
        {
          tags.map((tag) => (
              <p key={tag}>{tag}</p>
              ))
        }    
      </div>  
    </div>
  )
}

export default WidgetTags