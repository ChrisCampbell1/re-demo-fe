// npm modules
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// components


// services
import * as propertyService from '../../services/propertyService'

// styles
import styles from './NewPropertyForm.module.css'

// component


export default function NewPropertyForm() {
  const [slugs, setSlugs] = useState([])

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
    mlsId: '',
    address: '',
    slug: '',
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

  // const validateKey = (e) => {
  //   console.log(e)
  //   let key  = e.nativeEvent.which || e.nativeEvent.keyCode || 0;
  //   if((key >= 65 && key <= 92) || (key >= 97 && key <= 124) || (key = 8)) {
  //     setFormData({ ...formData, slug: formData.slug + e.nativeEvent.key })
  //   } else return
  // }

  // const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
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

  const handleSubmit = async(e) => {
    e.preventDefault()
    if(validateSlug()){
      window.alert("Sharable link can only include letters, numbers and '-'")
      return
    }
    const slug = formData.slug
    if(slugs.includes(slug)){
      window.alert("A listing already exists with this address, please double check the address you entered.")
      return
    }
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
        <label htmlFor="slug">Custom Shareable Link</label>  
        <input
          type="text"
          name="slug"
          id="slug"
          onChange={handleChange}
          placeholder="what do you want after the / in your shareable url? e.g. 123-Main"
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
