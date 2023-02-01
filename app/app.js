import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';
 
// ES2022 Modules fix for _dirname - just to find the folders
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const _dirname = dirname(fileURLToPath(import.meta.url));

//Configuration Module - s/b instance for config module
import { Secret } from '../config/index.js'; 

// Import Routes
import indexRouter from '../app/routes/index.js';

// Instantiat the expresss application
const app = express();

// Use Routs 
app.use('/',indexRouter);

export default app;  // export app variable as default module 
