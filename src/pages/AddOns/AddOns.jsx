// npm modules
import { useState } from 'react'

// components
import CmaRequest from '../../components/CmaRequest/CmaRequest'
import ProtectedDownload from '../../components/ProtectedDownload/ProtectedDownload'

// services


// styles and assets
import styles from './AddOns.module.css'
// import pdf from '../../assets/downloads/test.pdf'

// component


export default function AddOns() {
  const [signup, setSignup] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subscribe: false
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, subscribe: !formData.subscribe })
  }

  const swapSignup = () => {
    setSignup(!signup)
  }

  const handleDownloadClick = () => {
    const el = document.getElementById('downloadGuide')
    console.log(el)
    el.click()
    swapSignup()
  }

  return (
    <main className={styles.container}>
      {signup &&
        <div className={styles.signup}>
          <h1>Confirm Your Contact Info to Start Download</h1>
          <form
            autoComplete="off"
            // onSubmit={handleSubmit}
            className={styles.form}
          >
            <div className={styles.sideBySide}>

            </div>
            <div className={styles.sideBySide}>
              <div className={styles.inputContainer}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.sideBySide}>
              <div className={styles.inputContainer}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputContainerCheck}>
                <label htmlFor="subscribe">Subscribe</label>
                <input
                  type="checkbox"
                  name="subscribe"
                  id="subscribe"
                  onChange={handleCheckboxChange}
                  required
                />
              </div>
            </div>
            <button onClick={() => handleDownloadClick()} type='button'>Download</button>
            <a
              href='/test.pdf'
              download id={'downloadGuide'}
              style={
                {display: 'none'}
              }
            >
                download
            </a>
          </form>
        </div>
      }
      <h1>Add Ons</h1>
      <h2>CMA Request</h2>
      <CmaRequest />
      <h2>Protected Download with Signup Modal</h2>
      <ProtectedDownload swapSignup={swapSignup} />
    </main>
  )
}
