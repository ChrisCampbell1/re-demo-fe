// npm modules
import { NavLink, useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react'


// components


// services


// styles
import styles from './HorizontalNavBar.module.css'

// component


export default function HorizontalNavBar({ user, handleLogout }) {
  const [display, setDisplay] = useState(false)
  const [displaySub, setDisplaySub] = useState(false)
  const [displaySubSub, setDisplaySubSub] = useState(false)

  let location = useLocation()
  
  const handleClick = () => {
    setDisplay(!display)
  }

  const handleSubClick = () => {
    setDisplaySub(!displaySub)
  }

  const handleSubSubClick = () => {
    setDisplaySubSub(!displaySubSub)
  }

  useEffect(() => {
    setDisplay(false)
  }, [location])
  
  return (
    <>
    <nav className={styles.container}>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          <li><NavLink to="/profiles">Profiles</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
          <li><NavLink to="/change-password">Change Password</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/reviews">Reviews</NavLink></li>
          <li className={styles.dropdown}><NavLink to="/change-password">Category 1</NavLink>
            <ul className={styles.dropdownContent}>
              <li><NavLink to='#'>Sub Cat 1</NavLink></li>
              <li><NavLink to='#'>Sub Cat 2</NavLink></li>
              <li className={styles.secondHover}><NavLink to='/change-password'>Sub Cat 2</NavLink>
                <ul className={styles.secondDropdown}>
                  <li><NavLink to='#'>Sub Cat 1</NavLink></li>
                  <li><NavLink to='#'>Sub Cat 2</NavLink></li>
                  <li><NavLink to='#'>Sub Cat 2</NavLink></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      :
        <ul>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/reviews">Reviews</NavLink></li>
          <li className={styles.dropdown}><NavLink to="/change-password">Category 1</NavLink>
            <ul className={styles.dropdownContent}>
              <li><NavLink to='#'>Sub Cat 1</NavLink></li>
              <li><NavLink to='#'>Sub Cat 2</NavLink></li>
              <li className={styles.secondHover}><NavLink to='/change-password'>Sub Cat 2</NavLink>
                <ul className={styles.secondDropdown}>
                  <li><NavLink to='#'>Sub Cat 1</NavLink></li>
                  <li><NavLink to='#'>Sub Cat 2</NavLink></li>
                  <li><NavLink to='#'>Sub Cat 2</NavLink></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      }
    </nav>
    <nav className={styles.mobileNav}>
      <div className={styles.mobileNavTop}>
        <button className={styles.hamburger} onClick={handleClick}>
          ☰
        </button>
      </div>
      {display && 
      <div className={styles.mobileLinks}>
        {user ?
          <ul>
            <li>Welcome, {user.name}</li>
            <li><NavLink to="/profiles">Profiles</NavLink></li>
            <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
            <li><NavLink to="/change-password">Change Password</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/reviews">Reviews</NavLink></li>
            <p onClick={handleSubClick}>Metro Areas</p>
              {displaySub &&
                <>
                  <li><NavLink to='#'>Sub Cat 1</NavLink></li>
                  <li><NavLink to='#'>Sub Cat 2</NavLink></li>
                  <p onClick={handleSubSubClick}>Denver</p>
                    {displaySubSub &&
                      <>
                        <li><NavLink to='#'>Harvy Park</NavLink></li>
                        <li><NavLink to='#'>Cap Hill</NavLink></li>
                        <li><NavLink to='#'>Sunnyside</NavLink></li>
                      </>
                    }
                </>
              }
          </ul>
        :
          <ul>
            <li><NavLink to="#">Link 1</NavLink></li>
            <li><NavLink to="#">Link 2</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/reviews">Reviews</NavLink></li>
            <p onClick={handleSubClick}>Metro Areas</p>
              {displaySub &&
                <>
                  <li><NavLink to='#'>Sub Cat 1</NavLink></li>
                  <li><NavLink to='#'>Sub Cat 2</NavLink></li>
                  <p onClick={handleSubSubClick}>Denver</p>
                    {displaySubSub &&
                      <>
                        <li><NavLink to='#'>Harvy Park</NavLink></li>
                        <li><NavLink to='#'>Cap Hill</NavLink></li>
                        <li><NavLink to='#'>Sunnyside</NavLink></li>
                      </>
                    }
                </>
              }
          </ul>
        }
      </div>
      }
    </nav>
    </>
  )
}
