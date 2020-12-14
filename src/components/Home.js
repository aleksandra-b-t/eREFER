import React from 'react'
import './Home.css'


function Home() {
    return (
       <>
       <div className='main-page'> 
          <div className='main-container'>
            <div className='main-item'>
                <a className='logo'>Logo</a>
                <p className='under-logo'>Write perscriptions, ref patiens, and more!</p>
                <form>
                    <label>
                    Email address :
                        <input type="email" name="email" />
                    </label>
                    <label>
                    Password :
                        <input type="password" name="password" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div className='main-item'>
                <img src="https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.nationalcapitalmission.org%2Fnew-page-1&psig=AOvVaw3P5rppNjrhLL0ezRQXHjL6&ust=1608065471363000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNi54--szu0CFQAAAAAdAAAAABAD" alt="network"/>
            </div>
          </div>
       </div>
       </>
    )
}

export default Home
