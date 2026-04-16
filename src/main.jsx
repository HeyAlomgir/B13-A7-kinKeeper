import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout.jsx'
import Homepage from './pages/homepage/Homepage.jsx'
import { RouterProvider } from 'react-router'
import Timeline from './pages/timeline/Timeline.jsx'
import Status from './pages/status/Status.jsx'
import FriendDetails from './pages/freiendDetails/FriendDetails.jsx'
import TimelineProviderFriend from './context/TimelineProviderFriend.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    Component:RootLayout,
    children: [
      {index:true,
        Component:Homepage,
      },
      {
        path:"/friendDetails/:id",
        Component:FriendDetails,
      },
      {
        path:"/timeline",
        Component:Timeline
      },
      {
        path:"/stats",
        Component:Status
      }
    ],
    errorElement: <h2>This page is not found</h2>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <TimelineProviderFriend>

    <RouterProvider router={router}></RouterProvider>
    </TimelineProviderFriend>
    
  </StrictMode>,
  
)
