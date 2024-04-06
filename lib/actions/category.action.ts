'use server'


import { CreateCategoryParams } from '@/types'
import React from 'react'
import { handleError } from '../utils'
import { connectToDatabase } from '../database'
import Category from '../database/models/category-model'

export const createCategory= async({categoryName}:CreateCategoryParams) => {
    try{
        await connectToDatabase();

        const newCategory=await Category.create({name:categoryName});

        console.log("new Category",newCategory);

        return JSON.parse(JSON.stringify(newCategory));
    }
    catch(error){
        handleError(error);
    }
        
}


export const getAllCategories= async() => {
    try{
        await connectToDatabase();

        const Categories=await Category.find({});

        console.log("new Category",Categories);

        return JSON.parse(JSON.stringify(Categories));
    }
    catch(error){
        handleError(error);
    }
}



