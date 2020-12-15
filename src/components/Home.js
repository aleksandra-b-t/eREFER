import React from 'react'
import './Home.css'


function Home() {
    return (
       <>
       <div className='main-page'> 
          <div className='main-container'>
            <div className='main-item'>
                <h1 className='logo'>eREFER</h1>
                <h2 className='under-logo'>Write perscriptions, ref patiens, and more!</h2>
                <form>
                    <label>
                    Email address :
                        <input type="email" name="email" />
                    </label>
                    <label>
                    Password :
                        <input type="password" name="password" />
                    </label>
                    <button className='b1' type="submit" value="Submit"> Sign In </button>
                    <button className='b2' type="forgotPassword" value="Forgot Password"> Forgot Password </button>
                </form>
            </div>
            <img className='main-item' src=" /network.png"/>
          </div>
       </div>
       </>
    )
}

export default Home
