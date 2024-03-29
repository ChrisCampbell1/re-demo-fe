// npm modules
import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from "framer-motion"


// components


// services


// styles
import styles from './HorizontalNavBar.module.css'

// component


export default function HorizontalNavBar({ user, handleLogout, neighborhoods }) {
  const [display, setDisplay] = useState(false)
  const [displaySub, setDisplaySub] = useState(false)
  const [displaySubSub, setDisplaySubSub] = useState(false)
  const [navColor, setNavColor] = useState(false)

  let location = useLocation()

  const changeNavColor = () => {
    if (location.pathname !== "/") {
      setNavColor(true)
    } else if (window.scrollY >= 50) {
      setNavColor(true)
    } else setNavColor(false)
  }

  window.addEventListener('scroll', changeNavColor)

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
      {navColor ?
        <>
          <nav className={styles.containerDark}>
            {user ?
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                {/* <li><NavLink to="/profiles">Profiles</NavLink></li> */}
                <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
                {/* <li><NavLink to="/change-password">Change Password</NavLink></li> */}
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/reviews">Reviews</NavLink></li>
                <li><NavLink to="/listings">Listings</NavLink></li>
                {neighborhoods &&
                  <>
                    <li><NavLink className={styles.dropdown} to="/neighborhoods">Neighborhoods</NavLink>
                      <ul className={styles.dropdownContent}>
                        {neighborhoods.map((neighborhood) =>
                          <li key={neighborhood._id}><NavLink to={`/${neighborhood.slug}`} state={neighborhood}>{neighborhood.name}</NavLink></li>
                        )}
                      </ul>
                    </li>
                  </>
                }
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/addons">Add Ons</NavLink></li>
                {/* <li className={styles.dropdown}><NavLink to="/change-password">Category 1</NavLink>
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
          </li> */}
              </ul>
              :
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/reviews">Reviews</NavLink></li>
                <li><NavLink to="/listings">Listings</NavLink></li>
                {neighborhoods &&
                  <>
                    <li><NavLink className={styles.dropdown} to="/neighborhoods">Neighborhoods</NavLink>
                      <ul className={styles.dropdownContent}>
                        {neighborhoods.map((neighborhood) =>
                          <li key={neighborhood._id}><NavLink to={`/${neighborhood.slug}`} state={neighborhood}>{neighborhood.name}</NavLink></li>
                        )}
                      </ul>
                    </li>
                  </>
                }
                <li><NavLink to="/contact">Contact</NavLink></li>
                {/* <li className={styles.dropdown}><NavLink to="/change-password">Category 1</NavLink>
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
          </li> */}
              </ul>
            }
          </nav>
        </>
        :
        <>
          <nav className={styles.container}>
            {user ?
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                {/* <li><NavLink to="/profiles">Profiles</NavLink></li> */}
                <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
                {/* <li><NavLink to="/change-password">Change Password</NavLink></li> */}
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/reviews">Reviews</NavLink></li>
                <li><NavLink to="/listings">Listings</NavLink></li>
                {neighborhoods &&
                  <>
                    <li><NavLink className={styles.dropdown} to="/neighborhoods">Neighborhoods</NavLink>
                      <ul className={styles.dropdownContent}>
                        {neighborhoods.map((neighborhood) =>
                          <li key={neighborhood._id}><NavLink to={`/${neighborhood.slug}`} state={neighborhood}>{neighborhood.name}</NavLink></li>
                        )}
                      </ul>
                    </li>
                  </>
                }
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/addons">Add Ons</NavLink></li>
                {/* <li className={styles.dropdown}><NavLink to="/change-password">Category 1</NavLink>
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
          </li> */}
              </ul>
              :
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/reviews">Reviews</NavLink></li>
                <li><NavLink to="/listings">Listings</NavLink></li>
                {neighborhoods &&
                  <>
                    <li><NavLink className={styles.dropdown} to="/neighborhoods">Neighborhoods</NavLink>
                      <ul className={styles.dropdownContent}>
                        {neighborhoods.map((neighborhood) =>
                          <li key={neighborhood._id}><NavLink to={`/${neighborhood.slug}`} state={neighborhood}>{neighborhood.name}</NavLink></li>
                        )}
                      </ul>
                    </li>
                  </>
                }
                <li><NavLink to="/contact">Contact</NavLink></li>
                {/* <li className={styles.dropdown}><NavLink to="/change-password">Category 1</NavLink>
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
          </li> */}
              </ul>
            }
          </nav>
        </>

      }

      <nav className={styles.mobileNav}>
        <div className={styles.mobileNavTop}>
          <button className={styles.hamburger} onClick={handleClick}>
            ☰
          </button>
        </div>
        {display &&
          <div
            className={styles.mobileLinks}
          >
            {user ?
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                {/* <li><NavLink to="/profiles">Profiles</NavLink></li> */}
                <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
                {/* <li><NavLink to="/change-password">Change Password</NavLink></li> */}
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/reviews">Reviews</NavLink></li>
                <li><NavLink to="/listings">Listings</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/addons">Add Ons</NavLink></li>
                {neighborhoods &&
                  <>
                    <p onClick={handleSubClick}>Neighborhoods</p>
                    {displaySub &&
                      <>
                        <li><NavLink to='/neighborhoods'>View All</NavLink></li>
                        {neighborhoods.map((neighborhood) =>
                        <li key={neighborhood._id}><NavLink to={`/${neighborhood.slug}-real-estate`} state={neighborhood}>{neighborhood.name}</NavLink></li>
                        )}
                      </>
                    }
                  </>
                }
                {/* <p onClick={handleSubClick}>Metro Areas</p>
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
                } */}
              </ul>
              :
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/reviews">Reviews</NavLink></li>
                <li><NavLink to="/listings">Listings</NavLink></li>
                {neighborhoods &&
                  <>
                    <p onClick={handleSubClick}>Neighborhoods</p>
                    {displaySub &&
                      <>
                        <li><NavLink to='/neighborhoods'>View All</NavLink></li>
                        {neighborhoods.map((neighborhood) =>
                        <li key={neighborhood._id}><NavLink to={`/${neighborhood.slug}-real-estate`} state={neighborhood}>{neighborhood.name}</NavLink></li>
                        )}
                      </>
                    }
                  </>
                }
                {/* <p onClick={handleSubClick}>Metro Areas</p>
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
                } */}
              </ul>
            }
          </div>
        }
      </nav>
    </>
  )
}
