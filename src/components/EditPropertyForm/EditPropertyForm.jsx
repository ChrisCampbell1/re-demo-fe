// npm modules
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// components


// services
import * as propertyService from '../../services/propertyService'


// styles
import styles from './EditPropertyForm.module.css'

// component


export default function EditPropertyForm({ property, properties, setProperties }) {
  const [slugs, setSlugs] = useState([])
  const [currentSlug, setCurrentSlug] = useState(property.slug)

  useEffect(() => {
    const fetchSlugs = async () => {
      const properties = await propertyService.getAllProperties()
      const slugs = []
      properties.forEach((property) => {
        slugs.push(property.slug)
      })
      setSlugs(slugs)
    }
    fetchSlugs()
  }, [])
  
  const [formData, setFormData] = useState({
    mlsId: property.mlsId,
    address: property.address,
    slug: property.slug,
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

  const format = /[ `!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?~]/

  const validateSlug = () => {
    if(formData.slug.match(format)){
      return true
    } else {
      return false
    }
  }

  const handleChangePhoto = (e) => {
    setPhotoData(e.target.files)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(validateSlug()){
      window.alert("Sharable link can only include letters, numbers and '-'")
      return
    }
    const slug = formData.slug
    if(currentSlug !== slug && slugs.includes(slug)){
      window.alert("A listing already exists with this address, please double check the address you entered.")
      return
    }
    if(photoData !== null){
      await propertyService.updatePhoto(photoData, property._id)
    }
    const updatedProperty = await propertyService.updateProperty(property._id ,formData)
    let updatedProperties = properties.filter((el) => el._id !== updatedProperty._id)
    updatedProperties = [...updatedProperties, updatedProperty]
    setProperties(updatedProperties)
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
          required
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
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="slug">Custom Shareable Link</label>  
        <input
          type="text"
          name="slug"
          id="slug"
          onChange={handleChange}
          placeholder="what do you want after the / in your shareable url? e.g. 123-Main"
          value={formData.slug}
          required
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
          required
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
          required
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
          required
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
          required
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
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          onChange={handleChange}
          value={formData.status}
          required
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
          required
        />

      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="type">Type</label>
        <select
          name="type"
          id="type"
          onChange={handleChange}
          value={formData.type}
          required
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
          required
        />
      </div>
      <div className={styles.inputContainerCheck}>
        <label htmlFor="featured">Featured</label>
        <input
          type="checkbox"
          name="featured"
          id="featured"
          onChange={handleCheckboxChange}
          checked={formData.featured ? 'checked' : ''}
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
