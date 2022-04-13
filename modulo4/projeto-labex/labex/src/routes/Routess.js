import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminHomePage from '../pages/AdminHomePage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import CreateTripPage from '../pages/CreateTripPage'
import HomePage from '../pages/HomePage'
import ListTripsPage from '../pages/ListTripsPage'
import LoginPage from '../pages/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage'

const Routess = () => {
    return (
        <BrowserRouter>
          <Routes>
              <Route index element = {<HomePage />} />
              <Route path = 'ApplicationForm' element = {<ApplicationFormPage />} />
              <Route path = 'Login' element = {<LoginPage />}/>
              <Route path = 'AdminHome' element = {<AdminHomePage />}/>
              <Route path = 'CreateTrip' element = {<CreateTripPage />}/>
              <Route path = 'ListTrips' element = {<ListTripsPage />}/>
              <Route path = 'TripDetails' element = {<TripDetailsPage />}/>
          </Routes>
        </BrowserRouter>
    )
}

export default Routess
