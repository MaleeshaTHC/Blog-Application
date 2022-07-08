import express from "express";
import mongoose from 'mongoose'

const app = express()

mongoose.connect(
    "mongodb+srv://BlogWebsite:BlogWebsite@cluster0.4x97p.mongodb.net/Blog?retryWrites=true&w=majority"
    ).then(() => app.listen(5000))
    .then(() => console.log('Connected the Database with localhost:5000')).catch((err) => console.log(err))
app.listen(5000)


