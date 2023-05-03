// npm modules
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// components


// services
import * as propertyService from '../../services/propertyService'


// styles
import styles from './EditPropertyForm.module.css'

// component


export default function EditPropertyForm({ property }) {
  const [formData, setFormData] = useState({
    mlsId: property.mlsId,
    address: property.address,
    description: property.description,
    beds: property.beds,
    baths: property.baths,
    squareFeet: property.squareFeet,
    price: property.price,
    status: property.status,
    mlsLink: property.mlsLink,
    type: property.type,
    listingBrokerage: property.listingBrokerage,
    featured: property.featured
  })

  const [photoData, setPhotoData] = useState(null)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, featured: !formData.featured })
    console.log(formData.featured)
  }

  const handleChangePhoto = (e) => {
    setPhotoData(e.target.files)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedProperty = await propertyService.updateProperty(property._id ,formData)
    if(photoData !== null){
      await propertyService.updatePhoto(photoData, updatedProperty._id)
    }
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
          value={formData.mlsId}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          onChange={handleChange}
          value={formData.address}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          onChange={handleChange}
          value={formData.description}
        ></textarea>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="beds">Beds</label>
        <input
          type="number"
          name="beds"
          id="beds"
          onChange={handleChange}
          value={formData.beds}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="baths">Baths</label>
        <input
          type="number"
          name="baths"
          id="baths"
          onChange={handleChange}
          value={formData.baths}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          onChange={handleChange}
          value={formData.price}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="squareFeet">Square Feet</label>
        <input
          type="number"
          name="squareFeet"
          id="squareFeet"
          onChange={handleChange}
          value={formData.squareFeet}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          onChange={handleChange}
          value={formData.status}
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
          value={formData.mlsLink}
        />

      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="type">Type</label>
        <select
          name="type"
          id="type"
          onChange={handleChange}
          value={formData.type}
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
          value={formData.listingBrokerage}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="featured">Featured</label>
        <input
          type="checkbox"
          name="featured"
          id="featured"
          onChange={handleCheckboxChange}
          checked={formData.featured ? 'checked' : ''}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="photos">Photos</label>
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
