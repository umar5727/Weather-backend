import { Router } from "express";
import { uploadMulter } from "../middlewares/multer.middleware.js";
import { addPlace, AllPlaces } from "../controllers/place.controller.js";


const router = Router();

router.route('/addPlace').post(
    uploadMulter.fields([
        {
            name: 'placeImage',
            maxCount: 1
        }
    ]),
    addPlace
)
router.route('/AllPlaces').post(AllPlaces)
export default router