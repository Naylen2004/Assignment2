/**
 * File name:    index.js **  Controller 
 * Student name: Krishna Ramlakhan
 * Student ID:   818583171 
 * Date:         Feb 17, 2023 
 * Assignment 2
 */

import {Router} from 'express';
import { DisplayBusinessAddPage, DisplayBusinessEditPage, DisplayBusinessList, ProcessBusinessAddPage, ProcessBusinessDelete, ProcessBusinessEditPage } from '../controllers/business.js';
import { AuthGuard } from '../utils/index.js';

const router = Router();

// R ead
router.get('/business-list',AuthGuard, DisplayBusinessList);

// C reate
router.get('/business-add', DisplayBusinessAddPage);
router.post('/business-add', AuthGuard,ProcessBusinessAddPage);

// U pdate
router.get('/business-edit/:id',AuthGuard, DisplayBusinessEditPage);
router.post('/business-edit/:id', AuthGuard, ProcessBusinessEditPage);

// D elete
router.get('/business-delete/:id',AuthGuard,ProcessBusinessDelete);

export default router;