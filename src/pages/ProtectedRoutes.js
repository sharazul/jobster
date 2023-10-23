import { Navigate } from 'react-router-dom'

import { useSelector } from 'react-redux'

const ProtectedRoutes = ({ children }) => {
  // children is sharedLayout.js
  const { user } = useSelector((store) => store.user)
  if (!user) {
    return <Navigate to='/landing' />
  }
  return children
}

export default ProtectedRoutes
