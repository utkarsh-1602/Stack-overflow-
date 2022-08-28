import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList';
import './Tags.css'

const Tags = () => {

    const tagsList = [{
        id: 1,
        tagName: "javascript",
        tagDesc: "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn."
    },{
        id: 2,
        tagName: "Java",
        tagDesc: "Java is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn."
    },{
        id: 3,
        tagName: "C++",
        tagDesc: "C++ is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn."
    },{
        id: 4,
        tagName: "Python",
        tagDesc: "Python is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn."
    },
    
]

  return (
    <div className='home-container-1'>
            <LeftSidebar/>
            <div className="home-container-2">
                <h1 className='tags-h1'>Tags</h1>
                <p className='tags-p'>A tag is a keyword or label that categories your question with other, similar questions</p>
                <p className='tags-p'>using the right tags makes it easier for others to find and answer your question</p>
                <div className='tags-list-container'>
                    {
                        tagsList.map((tag) => (
                            <TagsList tag={tag} key={tagsList.id}/>
                        ))
                    }
                </div>
            </div>
    </div>
  )
}

export default Tags