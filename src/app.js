import express from "express"

import 'dotenv/config';
import cors from "cors"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
})
)
console.log("cors", process.env.CORS_ORIGIN)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))


//routes 

import placeRouter from './routes/place.route.js'
app.use((req, res, next) => {

    console.log('request recieved in app ')
    next()
}
)
app.use('/api/v1/places', placeRouter);


export { app }