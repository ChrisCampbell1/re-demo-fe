import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/reviews`

const createReview = async(formData) => {
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

const getAllReviews = async() => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'GET'
    })
    return res.json()
  } catch (err) {
    throw err
  }
}

const deleteReview = async(id) => {
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

const updateReview = async(id, formData) => {
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

export { createReview, getAllReviews, deleteReview, updateReview }
