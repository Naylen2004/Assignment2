/**
 * File name:    index.js **  Controller 
 * Student name: Krishna Ramlakhan
 * Student ID:   818583171 
 * Date:         Feb 17, 2023 
 * Assignment 2
 */

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
    name: String,
    number: Number,
    email: String
}, {
    timestamps: true, 
    collection: 'business'
});

export default mongoose.model("Business", BusinessSchema);