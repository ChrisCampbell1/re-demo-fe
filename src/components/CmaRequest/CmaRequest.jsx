// npm modules
import { useState } from 'react'

// components


// services


// styles
import styles from './CmaRequest.module.css'

// component


export default function CmaRequest() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    datePurchased: '',
    imporvements: '',
    comments: '',
  })

  const [popup, setPopup] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    setPopup(!popup)
  }

  
  return (
  <form
        autoComplete="off"
        // onSubmit={handleSubmit}
        className={styles.container}
      >
        {popup &&
          <div className={styles.confirmation}>
            <h1>Thank You!</h1>
            <p>I'll be in touch soon to discuss a marketing and pricing plan for your home.</p>
            <button onClick={() => handleSubmit()} type='button'>Close</button>
          </div>
        }
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

        <div className={styles.inputContainer}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            onChange={handleChange}
          />
        </div>
        <div className={styles.sideBySide}>
          <div className={styles.inputContainer}>
            <label htmlFor="address1">Address</label>
            <input
              type="text"
              name="address1"
              id="address1"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="address2">Unit Number</label>
            <input
              type="text"
              name="address2"
              id="address2"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.sideBySide}>
          <div className={styles.inputContainer}>
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputContainer}>
          <label htmlFor="state">
            State
          </label>
          <select
          name="state"
          id="state"
          onChange={handleChange}>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>

        </div>
        <div className={styles.sideBySide}>
          <div className={styles.inputContainer}>
              <label htmlFor="zip">Zip Code</label>
              <input
                type="text"
                name="zip"
                id="zip"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="datePurchased">Date Purchased</label>
              <input
                type="date"
                name="datePurchased"
                id="datePurchased"
                onChange={handleChange}
              />
            </div>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="improvements">Improvements Made Since Purchase</label>
          <textarea
            name="improvements"
            id="improvements"
            cols="30"
            rows="3"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="comments">Comments</label>
          <textarea
            name="comments"
            id="comments"
            cols="30"
            rows="3"
            onChange={handleChange}
          ></textarea>
        </div>
        <button onClick={() => handleSubmit()} type='button'>Sumbit</button>
      </form>
  )
}
