import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import Home from './Components/Home/Home.jsx'
import Layout from "./Layout";

import Hero from "./components/Hero";
import Benefits from "./components/BenefitSection";
import Feature from "./components/Feature";
import Contact from "./components/Contact";
import User from "./components/User/User";
import AssetForm from "./components/AssetForm/AssetForm";
import { ResourseAllowcation } from "./components/Resource Allowcation/ResourceAllowcation";
import Chart from "./components/Chart/Chart";
import Prediction from "./components/PredictionMaintenace/PredictionPage";
// import PreditionCase from "./components/PredictionMaintenace/PredictionForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Hero />} />
      <Route path="/benefits" element={<Benefits />} />
      <Route path="/feature" element={<Feature />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="/asset" element={<AssetForm />} />
      {/* <Route path="/asset-prediction" element={<PreditionCase />} /> */}
      <Route path="/asset-prediction" element={<Prediction />} />
      <Route path="/resource-allowcation" element={<ResourseAllowcation />} />
      <Route path="/chart" element={<Chart />} />

     

      {/* <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github /> }/> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// src/components/ProtectedRoute.jsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// import Layout from './Layout';
// import Hero from './components/Hero';
// import Benefits from './components/BenefitSection';
// import Feature from './components/Feature';
// import Contact from './components/Contact';
// import User from './components/User/User';
// import AssetForm from './components/AssetForm/AssetForm';
// import PreditionCase from './components/PredictionMaintenace/Prediction';
// import { ResourseAllowcation } from './components/Resource Allowcation/ResourceAllowcation';
// import Chart from './components/Chart/Chart';
// import SignIn from './components/Login';
// import SignUp from './components/SignUp';
// import { AuthProvider } from './context/AuthContext';
// import ProtectedRoute from './components/ProtectedRoute';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="signin" element={<SignIn />} />
//       <Route path="signup" element={<SignUp />} />
//       <Route
//         path="/"
//         element={
//           <ProtectedRoute>
//             <Hero />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/benefits"
//         element={
//           <ProtectedRoute>
//             <Benefits />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/feature"
//         element={
//           <ProtectedRoute>
//             <Feature />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/contact"
//         element={
//           <ProtectedRoute>
//             <Contact />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="user/:userid"
//         element={
//           <ProtectedRoute>
//             <User />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/asset"
//         element={
//           <ProtectedRoute>
//             <AssetForm />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/asset-prediction"
//         element={
//           <ProtectedRoute>
//             <PreditionCase />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/resource-allowcation"
//         element={
//           <ProtectedRoute>
//             <ResourseAllowcation />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/chart"
//         element={
//           <ProtectedRoute>
//             <Chart />
//           </ProtectedRoute>
//         }
//       />
//     </Route>
//   )
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <AuthProvider>
//       <RouterProvider router={router} />
//     </AuthProvider>
//   </React.StrictMode>
// );

