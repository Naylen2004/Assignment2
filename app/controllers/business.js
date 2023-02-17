/**
 * File name:    index.js **  Controller 
 * Student name: Krishna Ramlakhan
 * Student ID:   818583171 
 * Date:         Feb 1  7, 2023 
 * Assignment 2
 */

import businessModel from '../models/business.js';
import { UserDisplayName } from "../utils/index.js";

//R ead Operations
export function DisplayBusinessList(req, res, next){
   // businessModel.find(function (error, businessCollection){
      businessModel.find(function (error, businessCollection){
        if(error){
            console.error(error);
            res.end(error);
        }

        console.log(businessCollection);

        res.render('index', {title: 'Business List', page: 'business/list', business: businessCollection , displayName: UserDisplayName(req)})
    }).sort({name: 1})  // sort alphabetically, 1 is in ascending order
}

//C reate
export function DisplayBusinessAddPage(req, res, next){
    res.render('index', {title: 'Add business', page: 'business/edit', business: {},displayName: UserDisplayName(req)})
}

export function ProcessBusinessAddPage(req, res, next){
    let newBusiness = businessModel({
        name: req.body.name,
        number: req.body.number,       
        email: req.body.email
    });

    businessModel.create(newBusiness,function(error, Business){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.redirect('/business-list');
    })
}

//U pdate
export function DisplayBusinessEditPage(req, res, next){

    let id = req.params.id;

    businessModel.findById(id, function(error, business){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.render('index', {title: 'Edit Business', page: 'business/edit', business, displayName: UserDisplayName(req)})
    })    
}

export function ProcessBusinessEditPage(req, res, next){
    let id = req.params.id


    let editBusiness = businessModel({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,       
        email: req.body.email
    });

    businessModel.updateOne({_id: id}, editBusiness,function(error, Business){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.redirect('/business-list');
    })
}

//D elete
export function ProcessBusinessDelete(req, res, next){
    let id = req.params.id

    businessModel.remove({_id: id}, function(error){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.redirect('/business-list');
    })
} 