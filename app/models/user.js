/**
 * File name:    index.js **  Controller 
 * Student name: Krishna Ramlakhan
 * Student ID:   818583171 
 * Date:         Feb 17, 2023 
 * Assignment 2
 */

import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose'; // can give any name

const { passportLocalSchema } = mongoose;  // extract/deconstruct the PassportLocalSchema property from mongoose

const Schema = mongoose.Schema;

// dont need to store passpord, just the hash
const UserSchema = new Schema({
    username: String,
    emailAddress: String,
    displayName: String,
}, {
    timestamps: true,
    collection: 'users'
});

UserSchema.plugin(passportLocalMongoose);

export default mongoose.model('User', UserSchema);