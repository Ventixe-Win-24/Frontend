// import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import EventPage from './assets/pages/EventPage'
// import EventDetails from './assets/pages/EventDetails'

// function App() {

//   return (
//     <>
//      <Routes>
//         {/* <Route path='/' element={<Dashboard />}/> */}
//         <Route path="/eventpage" element={<EventPage />}/>
//         <Route path="/events/:id" element={<EventDetails />}/>
//      </Routes>
//     </>
//   )
// }

// export default App

import { Route, Routes } from 'react-router-dom'
import './App.css'
import EventPage from './assets/pages/EventPage'
import Dashboard from './assets/pages/Dashboard'
import EventDetails from './assets/pages/EventDetails'
import BookingEventPage from './assets/pages/BookingEventPage'

function App() {
  return (
    <Routes>
    <Route path="/" element={<EventPage />} />
    <Route path="/dashbord" element={<Dashboard />} />
    <Route path="/eventpage" element={<EventPage />} />
    <Route path="/events/:id" element={<EventDetails />} />
    <Route path="/events/booking/:id" element={<BookingEventPage />} />
  </Routes>

  )
}

export default App
