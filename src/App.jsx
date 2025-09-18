import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from "./components/landingpage/herosection.jsx";
import MainAuth from "./components/mainauth.jsx";
import TravelSignup from "./components/travelsignup.jsx";
import VendorSignup from "./components/vendorsignup.jsx";
import AdminSignup from "./components/adminsignup.jsx";
import TouristDashboard from "./components/touristDashboard.jsx";
import Tripplanner from "./components/Aitripplanner.jsx";
import Services from "./components/servicesmarketplace.jsx";
import TransportLayout from "./components/local/transport/Layout";
import GuideLayout from "./components/local/guide/Layout";
import HandicraftLayout from "./components/local/handicraft/Layout";
import HomestayLayout from "./components/local/homestay/Layout";
import VendorTypeSelection from "./components/forms/vendorOptions.jsx";
import TourixAdminDashboard from './components/AdminDashboard.jsx';
import FloatingChatbot from './components/chatbot.jsx';
// Import all dashboard pages
import TransportDashboard from "./components/local/transport/pages/Dashboard";
import TransportEarnings from "./components/local/transport/pages/Earnings";
import TransportServices from "./components/local/transport/pages/Services";
import TransportApplied from "./components/local/transport/pages/Applied";
import TransportApproved from "./components/local/transport/pages/Approved";
import TransportBookings from "./components/local/transport/pages/Bookings";

import GuideDashboard from "./components/local/guide/pages/Dashboard";
import GuideEarnings from "./components/local/guide/pages/Earnings";
import GuideServices from "./components/local/guide/pages/Services";
import GuideApplied from "./components/local/guide/pages/Applied";
import GuideApproved from "./components/local/guide/pages/Approved";
import GuideBookings from "./components/local/guide/pages/Bookings";

import HandicraftDashboard from "./components/local/handicraft/pages/Dashboard";
import HandicraftEarnings from "./components/local/handicraft/pages/Earnings";
import HandicraftServices from "./components/local/handicraft/pages/Services";
import HandicraftApplied from "./components/local/handicraft/pages/Applied";
import HandicraftApproved from "./components/local/handicraft/pages/Approved";
import HandicraftBookings from "./components/local/handicraft/pages/Bookings";

import HomestayDashboard from "./components/local/homestay/pages/Dashboard";
import HomestayEarnings from "./components/local/homestay/pages/Earnings";
import HomestayServices from "./components/local/homestay/pages/Services";
import HomestayApplied from "./components/local/homestay/pages/Applied";
import HomestayApproved from "./components/local/homestay/pages/Approved";
import HomestayBookings from "./components/local/homestay/pages/Bookings";
import MainSelection from "./components/pages/MainSelection.jsx";

import VendorDashboard from './components/VendorDashboard.jsx';

//import VendorHome from "./components/vendorhome.jsx";
// You can create a combined component for the home page if needed.
const HomePage = () => (
  <>
    <HeroSection />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mainauth" element={<MainAuth />}/>
          <Route path="/travelsp" element={<TravelSignup />}/>
          <Route path="/vendorsp" element={<VendorSignup />}/>
          <Route path="/adminsp" element={<AdminSignup />}/>
          <Route path='/touristDashboard' element={<TouristDashboard/>}/>
          <Route path='/trip'  element={<Tripplanner />}/>
          <Route path='/services' element={<Services />} />
          <Route path="/chooseType" element={<VendorTypeSelection/>}/>
          <Route path="/vendordashboard" element={<VendorDashboard/>}/>
          <Route path="/admindashboard" element={<TourixAdminDashboard/>}/>
          <Route path="/vendorhome" element={<MainSelection />} />
        <Route path="/transport" element={<TransportLayout />}>
          <Route index element={<TransportDashboard />} />
          <Route path="earnings" element={<TransportEarnings />} />
          <Route path="services" element={<TransportServices />} />
          <Route path="applied" element={<TransportApplied />} />
          <Route path="approved" element={<TransportApproved />} />
          <Route path="bookings" element={<TransportBookings />} />
        </Route>
        <Route path="/guide" element={<GuideLayout />}>
          <Route index element={<GuideDashboard />} />
          <Route path="earnings" element={<GuideEarnings />} />
          <Route path="services" element={<GuideServices />} />
          <Route path="applied" element={<GuideApplied />} />
          <Route path="approved" element={<GuideApproved />} />
          <Route path="bookings" element={<GuideBookings />} />
        </Route>
        <Route path="/handicraft" element={<HandicraftLayout />}>
          <Route index element={<HandicraftDashboard />} />
          <Route path="earnings" element={<HandicraftEarnings />} />
          <Route path="services" element={<HandicraftServices />} />
          <Route path="applied" element={<HandicraftApplied />} />
          <Route path="approved" element={<HandicraftApproved />} />
          <Route path="bookings" element={<HandicraftBookings />} />
        </Route>
        <Route path="/homestay" element={<HomestayLayout />}>
          <Route index element={<HomestayDashboard />} />
          <Route path="earnings" element={<HomestayEarnings />} />
          <Route path="services" element={<HomestayServices />} />
          <Route path="applied" element={<HomestayApplied />} />
          <Route path="approved" element={<HomestayApproved />} />
          <Route path="bookings" element={<HomestayBookings />} />
        </Route>


        </Routes>
      </div>
      <FloatingChatbot/> 
    </Router>
  );
}

export default App;