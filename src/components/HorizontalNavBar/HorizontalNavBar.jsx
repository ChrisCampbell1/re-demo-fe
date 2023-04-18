// npm modules
import { NavLink } from 'react-router-dom'


// components


// services


// styles
import styles from './HorizontalNavBar.module.css'

// component


export default function HorizontalNavBar({ user, handleLogout }) {
  return (
    <nav className={styles.container}>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          <li><NavLink to="/profiles">Profiles</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
          <li><NavLink to="/change-password">Change Password</NavLink></li>
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
          <li><NavLink to="/login">Log In</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </ul>
      }
    </nav>
  )
}
