import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/neighborhoods`

const createNeighborhood = async (formData) => {
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

const addPhoto = async(photos, neighborhoodId) => {
  for (let i = 0; i < photos.length; i++) {
    const photoData = new FormData()
    photoData.append('photo', photos[i])
    await fetch(`${BASE_URL}/${neighborhoodId}/add-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoData
    })
  }
}

const addHero = async(photo, neighborhoodId) => {
  const photoData = new FormData()
    photoData.append('photo', photo)
    const neighborhood = await fetch(`${BASE_URL}/${neighborhoodId}/add-hero`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoData
    })
    return await neighborhood.json()
}

const addMap = async(photo, neighborhoodId) => {
  const photoData = new FormData()
    photoData.append('photo', photo)
    const neighborhood = await fetch(`${BASE_URL}/${neighborhoodId}/add-map`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoData
    })
    return await neighborhood.json()
}

const getAllNeighborhoods = async() => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'GET'
    })
    return res.json()
  } catch (err) {
    throw err
  }
}

const deleteNeighborhood = async(id) => {
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

const updateNeighborhood = async(id, formData) => {
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

const updatePhoto = async(photos, neighborhoodId) => {
  await fetch(`${BASE_URL}/${neighborhoodId}/delete-photos`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  for (let i = 0; i < photos.length; i++) {
    const photoData = new FormData()
    photoData.append('photo', photos[i])
    await fetch(`${BASE_URL}/${neighborhoodId}/add-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoData
    })
  }
}


const fetchNeighborhood = async(slug) => {
  try {
    const res = await fetch(`${BASE_URL}/${slug}`, {
      method: 'GET'
    })
    return res.json()
  } catch (err) {
    throw err
  }
}

export { createNeighborhood, addPhoto, getAllNeighborhoods, deleteNeighborhood, updateNeighborhood, updatePhoto, addHero, addMap, fetchNeighborhood }
