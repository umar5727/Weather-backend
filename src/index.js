import { app } from "./app.js";
import connectDB from "./db/index.js";
import 'dotenv/config';


connectDB()
    .then(() => {
        app.on('error', (err) => {
            console.log('server error ', err)
            throw err
        })
        app.listen(process.env.PORT || 8800), () => {
            console.log(`server is running on port :  ${process.env.PORT}`)
        }
    })
    .catch((err) => {
        console.log('mongodb connection failed --index ', err)
    })