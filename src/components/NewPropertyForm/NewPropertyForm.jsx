// npm modules
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// components


// services
import * as propertyService from '../../services/propertyService'

// styles
import styles from './NewPropertyForm.module.css'

// component


export default function NewPropertyForm() {
  const [formData, setFormData] = useState({
    mlsId: '',
    address: '',
    description: '',
    beds: '',
    baths: '',
    squareFeet: '',
    price: '',
    status: '',
    mlsLink: '',
    type: '',
    listingBrokerage: '',
    featured: false
  })

  const [photoData, setPhotoData] = useState(null)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, featured: !formData.featured })
  }

  const handleChangePhoto = (e) => {
    setPhotoData(e.target.files)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const property = await propertyService.createProperty(formData)
    propertyService.addPhoto(photoData, property._id)
    navigate('/listings')
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="mlsId">MLS ID</label>
        <input
          type="text"
          name="mlsId"
          id="mlsId"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="address">Address</label>  
        <input
          type="text"
          name="address"
          id="address"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="6"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="beds">Beds</label>
        <input
          type="number"
          name="beds"
          id="beds"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="baths">Baths</label>
        <input
          type="number"
          name="baths"
          id="baths"
          step={.5}
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="squareFeet">Square Feet</label>
        <input
          type="number"
          name="squareFeet"
          id="squareFeet"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          onChange={handleChange}
        >
          <option value="Active">Select Listing Status</option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Closed">Closed</option>
        </select>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="mlsLink">MLS Link</label>
        <input
          type="text"
          name="mlsLink"
          id="mlsLink"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="type">Type</label>
        <select
          name="type"
          id="type"
          onChange={handleChange}
        >
          <option value="Buyer">Select Listing Type</option>
          <option value="Buyer">Buyer</option>
          <option value="Seller">Seller</option>
        </select>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="listingBrokerage">Listing Brokerage</label>
        <input
          type="text"
          name="listingBrokerage"
          id="listingBrokerage"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainerCheck}>
        <label htmlFor="featured">Featured</label>
        <input
          type="checkbox"
          name="featured"
          id="featured"
          onChange={handleCheckboxChange}
        />
      </div>
      <div className={styles.inputContainerUpload}>
        {photoData ?
          <label htmlFor="photos">{photoData.length === 1 ? "1 Photo Selected" : `${photoData.length} Photos Selected`}</label>
        :
          <label htmlFor="photos">Select Listing Photos</label>
        }
        
        <input
          type="file"
          name="photos"
          id="photos"
          multiple={true}
          onChange={handleChangePhoto}
          accept="image/*"
        />
      </div>
      <button type='submit'>Save Listing</button>
    </form>
  )
}
