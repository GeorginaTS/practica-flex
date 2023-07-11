import React from 'react'

export const Discover = () => {
  return (
    <> 
        <h1>Discover new music</h1>
        <div className='discover-btns'>
            <button>Charts</button>
            <button>Albums</button>
            <button>More</button>
        </div>
        <p>By joining you can benefit by listening the lastest albums released.</p>
        <img src="./src/assets/covers.jpg" alt="" />
    </>
  )
}