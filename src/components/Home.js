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
                <img src="/network.png"/>
            </div>
          </div>
       </div>
       </>
    )
}

export default Home
