// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Dashboard from './pages/Dashboard/Dashboard'
import Blog from './pages/Blog/Blog'
import EditBlog from './pages/EditBlog/EditBlog'
import BlogCategory from './pages/BlogCategory/BlogCategory'
import Reviews from './pages/Reviews/Reviews'
import EditReview from './pages/EditReview/EditReview'
import Properties from './pages/Properties/Properties'
import EditProperty from './pages/EditProperty/EditProperty'
import PropertyDetail from './pages/PropertyDetail/PropertyDetail'
import BlogDetail from './pages/BlogDetail/BlogDetail'
import Contact from './pages/Contact/Contact'
import AddOns from './pages/AddOns/AddOns'
import Neighborhoods from './pages/Neighborhoods/Neighborhoods'
import NeighborhoodDetail from './pages/NeighborhoodDetail/NeighborhoodDetail'
import EditNeighborhood from './pages/EditNeighborhood/EditNeighborhood'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import HorizontalNavBar from './components/HorizontalNavBar/HorizontalNavBar'

// services
import * as authService from './services/authService'
import * as neighborhoodService from './services/neighborhoodService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [neighborhoods, setNeighborhoods] = useState(null)
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  useEffect(() => {
    const fetchNeighborhoods = async () => {
      const neighborhoods = await neighborhoodService.getAllNeighborhoods()
      setNeighborhoods(neighborhoods)
    }
    fetchNeighborhoods()
  }, [])

  return (
    <>
      <HorizontalNavBar
        user={user}
        handleLogout={handleLogout}
        neighborhoods={neighborhoods}
      />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard
                setNeighborhoods={setNeighborhoods}
                neighborhoods={neighborhoods}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blog/edit/:id"
          element={
            <ProtectedRoute user={user}>
              <EditBlog />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blog"
          element={
            <Blog user={user} />
          }
        />
        <Route
          path="/blog/:category"
          element={
            <BlogCategory user={user} />
          }
        />
        <Route
          path="/blog/view/:id"
          element={
            <BlogDetail user={user} />
          }
        />
        <Route
          path="/reviews"
          element={
            <Reviews user={user} />
          }
        />
        <Route
          path="/review/edit/:id"
          element={
            <ProtectedRoute user={user}>
              <EditReview />
            </ProtectedRoute>
          }
        />
        <Route
          path="/listings"
          element={
            <Properties user={user} />
          }
        />
        <Route
          path="/listing/edit/:id"
          element={
            <ProtectedRoute user={user}>
              <EditProperty />
            </ProtectedRoute>
          }
        />
        <Route
          path="/listing/:id"
          element={
            <PropertyDetail user={user} />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact user={user} />
          }
        />
        <Route
          path="/addons"
          element={
            <AddOns user={user} />
          }
        />
        {neighborhoods &&
          <>
            <Route
              path="/neighborhoods"
              element={
                <Neighborhoods user={user} />
              }
            />
            {neighborhoods.map((neighborhood) =>
              <Route
                key={neighborhood._id}
                path={`/${neighborhood.slug}`}
                element={
                  <NeighborhoodDetail
                    user={user}
                    neighborhood={neighborhood}
                    setNeighborhoods={setNeighborhoods}
                    neighborhoods={neighborhoods}
                  />
                }
              />
            )}
          </>
        }
        <Route
          path="/neighborhoods/edit/:id"
          element={
            <ProtectedRoute user={user}>
              <EditNeighborhood setNeighborhoods={setNeighborhoods} neighborhoods={neighborhoods} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
