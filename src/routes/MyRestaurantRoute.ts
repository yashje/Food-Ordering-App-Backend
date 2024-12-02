import express from "express";
import { createMyRestaurant, getMyRestaurant, updateMyRestaurant } from "../controllers/MyRestaurantController"
import multer from "multer";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyRestaurantRequest } from "../middleware/validation"
const router = express.Router()

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1025//5mb
    }
})

router.get("/", jwtCheck, jwtParse, getMyRestaurant)
router.post("/", upload.single("imageFile"), validateMyRestaurantRequest, jwtCheck, jwtParse, createMyRestaurant);
router.put("/", upload.single("imageFile"), validateMyRestaurantRequest, jwtCheck, jwtParse, updateMyRestaurant)

export default router;