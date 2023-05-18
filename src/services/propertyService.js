import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/properties`

const createProperty = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(formData)
    })
    return res.json()
  } catch (err) {
    throw err
  }
}

const addPhoto = async(photos, propertyId) => {
  for (let i = 0; i < photos.length; i++) {
    const photoData = new FormData()
    photoData.append('photo', photos[i])
    await fetch(`${BASE_URL}/${propertyId}/add-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoData
    })
  }
}

const getAllProperties = async() => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'GET'
    })
    return res.json()
  } catch (err) {
    throw err
  }
}

const deleteProperty = async(id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (err) {
    throw err
  }
}

const updateProperty = async(id, formData) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(formData)
    })
    return res.json()
  } catch (err) {
    throw err
  }
}

const updatePhoto = async(photos, propertyId) => {
  await fetch(`${BASE_URL}/${propertyId}/delete-photos`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  for (let i = 0; i < photos.length; i++) {
    const photoData = new FormData()
    photoData.append('photo', photos[i])
    await fetch(`${BASE_URL}/${propertyId}/add-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoData
    })
  }
}

const getProperty = async(slug) => {
  try {
    const res = await fetch(`${BASE_URL}/${slug}`, {
      method: 'GET'
    })
    return res.json()
  } catch (err) {
    throw err
  }
}

export { createProperty, addPhoto, getAllProperties, deleteProperty, updateProperty, updatePhoto, getProperty }
