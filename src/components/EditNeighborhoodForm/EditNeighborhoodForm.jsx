// npm modules
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// components


// services
import * as neighborhoodService from '../../services/neighborhoodService'

// styles
import styles from './EditNeighborhoodForm.module.css'

// component


export default function EditNeighborhoodForm({ neighborhood, setNeighborhoods, neighborhoods }) {
  const [slugs, setSlugs] = useState([])
  const [currentSlug, setCurrentSlug] = useState(neighborhood.slug)

  useEffect(() => {
    const fetchSlugs = async () => {
      const neighborhoods = await neighborhoodService.getAllNeighborhoods()
      const slugs = []
      neighborhoods.forEach((neighborhood) => {
        slugs.push(neighborhood.slug)
      })
      setSlugs(slugs)
    }
    fetchSlugs()
  }, [])
  
  const [formData, setFormData] = useState({
    name: neighborhood.name,
    about: neighborhood.about,
    stat1Name: neighborhood.stat1[0],
    stat1Number: neighborhood.stat1[1],
    stat2Name: neighborhood.stat2[0],
    stat2Number: neighborhood.stat2[1],
    stat3Name: neighborhood.stat3[0],
    stat3Number: neighborhood.stat3[1],
    stat4Name: neighborhood.stat4[0],
    stat4Number: neighborhood.stat4[1],
  })

  const [photoData, setPhotoData] = useState(null)
  const [mapData, setMapData] = useState(null)
  const [heroData, setHeroData] = useState(null)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleChangePhoto = (e) => {
    setPhotoData(e.target.files)
  }

  const handleMapChange = (e) => {
    setMapData(e.target.files[0])
  }

  const handleHeroChange = (e) => {
    setHeroData(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const slug = formData.name.replaceAll(/\s/g, "-")
    if(currentSlug !== slug && slugs.includes(slug)){
      window.alert("This neighborhood page already exists, select a unique name or edit the existing neighborhood page")
      return
    }
    const updatedNeighborhood = await neighborhoodService.updateNeighborhood(neighborhood._id ,formData)
    if (heroData !== null){
      neighborhoodService.addHero(heroData, updatedNeighborhood._id)
    }
    if (mapData !== null) {
      neighborhoodService.addMap(mapData, updatedNeighborhood._id)
    }
    const updatedNeighborhoods = neighborhoods.filter((el) => el._id !== updatedNeighborhood._id)
    updatedNeighborhoods.push(updatedNeighborhood)
    setNeighborhoods(updatedNeighborhoods)
    navigate(`/${updatedNeighborhood.slug}`)
  }
  
  return (
<form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="name">Neighborhood</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={formData.name}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="about">About</label>
        <textarea
          name="about"
          id="about"
          cols="30"
          rows="6"
          onChange={handleChange}
          value={formData.about}
        ></textarea>
      </div>
      <div className={styles.sideBySide}>
        <div className={styles.inputContainer}>
          <label htmlFor="stat1Name">Statistic 1 Name</label>
          <input
            type="text"
            name="stat1Name"
            id="stat1Name"
            onChange={handleChange}
            value={formData.stat1Name}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="stat1Number">Statistic 1 Number</label>
          <input
            type="text"
            name="stat1Number"
            id="stat1Number"
            onChange={handleChange}
            value={formData.stat1Number}
          />
        </div>
      </div>
      <div className={styles.sideBySide}>
        <div className={styles.inputContainer}>
          <label htmlFor="stat2Name">Statistic 2 Name</label>
          <input
            type="text"
            name="stat2Name"
            id="stat2Name"
            onChange={handleChange}
            value={formData.stat2Name}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="stat2Number">Statistic 2 Number</label>
          <input
            type="text"
            name="stat2Number"
            id="stat2Number"
            onChange={handleChange}
            value={formData.stat2Number}
          />
        </div>
      </div>
      <div className={styles.sideBySide}>
        <div className={styles.inputContainer}>
          <label htmlFor="stat3Name">Statistic 3 Name</label>
          <input
            type="text"
            name="stat3Name"
            id="stat3Name"
            onChange={handleChange}
            value={formData.stat3Name}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="stat3Number">Statistic 3 Number</label>
          <input
            type="text"
            name="stat3Number"
            id="stat3Number"
            onChange={handleChange}
            value={formData.stat3Number}
          />
        </div>
      </div>
      <div className={styles.sideBySide}>
        <div className={styles.inputContainer}>
          <label htmlFor="stat4Name">Statistic 4 Name</label>
          <input
            type="text"
            name="stat4Name"
            id="stat4Name"
            onChange={handleChange}
            value={formData.stat4Name}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="stat4Number">Statistic 4 Number</label>
          <input
            type="text"
            name="stat4Number"
            id="stat4Number"
            onChange={handleChange}
            value={formData.stat4Number}
          />
        </div>
      </div>
      <div className={styles.inputContainerUpload}>
        {heroData ?
          <label htmlFor="hero">Hero Selected</label>
          :
          <label htmlFor="hero">Select Hero Image</label>
        }

        <input
          type="file"
          name="hero"
          id="hero"
          onChange={handleHeroChange}
          accept="image/*"
        />
      </div>
      <div className={styles.inputContainerUpload}>
        {mapData ?
          <label htmlFor="map">Map Selected</label>
          :
          <label htmlFor="map">Select Map Image</label>
        }

        <input
          type="file"
          name="map"
          id="map"
          onChange={handleMapChange}
          accept="image/*"
        />
      </div>
      {/* <div className={styles.inputContainerUpload}>
        {photoData ?
          <label htmlFor="photos">{photoData.length === 1 ? "1 Image Selected" : `${photoData.length} Images Selected`}</label>
          :
          <label htmlFor="photos">Select Neighborhood Photos</label>
        }

        <input
          type="file"
          name="photos"
          id="photos"
          multiple={true}
          onChange={handleChangePhoto}
          accept="image/*"
        />
      </div> */}
      <button type='submit'>Update Neighborhood Page</button>
    </form>
  )
}
