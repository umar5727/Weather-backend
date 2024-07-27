import { Place } from "../models/place.model.js";
import { uploadCloudinary } from "../utils/cloudinary.js";

const addPlace = async (req, res) => {
    const { city, placeName, details } = req.body;
    console.log(city, placeName, details)
    if (!city || !placeName || !details) {
        return res.status(409).json({ message: 'all fields required' })
    }
    const existPlace = await Place.findOne({
        $and: [{ placeName }, { city }]
    })
    if (existPlace) {
        return res.status(403).json({ message: 'Place already exists' })
    }

    const imageLocalPath = req.files?.placeImage[0]?.path;
    console.log('\nimageLocal path : ', imageLocalPath)
    if (!imageLocalPath) {
        return res.status(409).json({ message: 'image is required' })
    }
    const placeImage = await uploadCloudinary(imageLocalPath)

    console.log(placeImage?.url)
    const place = await Place.create({
        city,
        placeName,
        details,
        placeImage: placeImage?.url || ''
    })
}

const AllPlaces = async (req, res) => {
    const { city } = req.body
    console.log(city)
    if (!city) {
        return res.status(400).json({ message: 'city name required' })
    }
    console.log(city)

    const placeDate = await Place.find({ city })

    if (!placeDate) {
        return res.status(401).json({ message: 'No Place found in this City ' })
    }
    console.log(placeDate)
    return res.status(200).json({ placeData: placeDate, message: 'success' })
}

export { addPlace, AllPlaces }