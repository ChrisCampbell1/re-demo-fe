import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/blogs`

const createBlog = async (formData) => {
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

const addPhoto = async(photo, blogId) => {
  const photoData = new FormData()
    photoData.append('photo', photo)
    const blogPost = await fetch(`${BASE_URL}/${blogId}/add-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoData
    })
    return await blogPost.json()
}

const getAllBlogs = async() => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'GET'
    })
    return res.json()
  } catch (err) {
    throw err
  }
}

const deleteBlog = async(id) => {
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

const getBlog = async(slug) => {
  try {
    const res = await fetch(`${BASE_URL}/${slug}`, {
      method: 'GET'
    })
    return res.json()
  } catch (err) {
    throw err
  }
}

const updateBlog = async(id, formData) => {
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

const getBlogsByCategory = async(category) => {
  try {
    const res = await fetch(`${BASE_URL}/category/${category}`, {
      method: 'GET'
    })
    return res.json()
  } catch (err) {
    throw err
  }
}

export { createBlog, addPhoto, getAllBlogs, deleteBlog, getBlog, updateBlog, getBlogsByCategory }
