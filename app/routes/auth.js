/**
 * File name:    index.js **  Controller 
 * Student name: Krishna Ramlakhan
 * Student ID:   818583171 
 * Date:         Feb 17, 2023 
 * Assignment 2
 */

import { Router} from "express";
import { DisplayLoginPage, 
         DisplayRegistrationPage,
         ProcessLoginPage,
         ProcessLogoutPage,
         ProcessRegisterPage} from "../controllers/auth.js";


  const router = Router();
  
  // Display Login Page
  router.get('/login', DisplayLoginPage);
  // Processs Login Page
  router.post('/login', ProcessLoginPage);
  // Display Registration Page
  router.get('/register', DisplayRegistrationPage);

//Process Registration Page
router.post('/register', ProcessRegisterPage);

//Process Logout Page
router.get('/logout', ProcessLogoutPage);

export default router;