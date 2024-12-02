import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const handleValidationErrors = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

export const validateMyUserRequest = [
    body("name").isString().notEmpty().withMessage("Name must be a string"),
    body("addressLine1")
        .isString()
        .notEmpty()
        .withMessage("AddressLine1 must be a string"),
    body("city").isString().notEmpty().withMessage("City must be a string"),
    body("country").isString().notEmpty().withMessage("Country must be a string"),
    handleValidationErrors,
];

export const validateMyRestaurantRequest = [
    body("restaurantName").notEmpty().withMessage("Restaurant name is Required"),
    body("city").notEmpty().withMessage("city name is Required"),
    body("country").notEmpty().withMessage("country name is Required"),
    body("deliveryPrice").isFloat({ min: 0 }).withMessage("Dlivery Price is Required"),
    body("estimatedDeliveryTime").isInt({ min: 0 }).withMessage("Estimated Delivery Time is Required"),
    body("cuisines").isArray().withMessage("Cuisines is Required").not().isEmpty().withMessage("Cuisines is Required"),
    body("menuItems").isArray().withMessage("Menu Items is Required"),
    body("menuItems.*.name").notEmpty().withMessage("Name is Required"),
    body("menuItems.*.price").isFloat({ min: 0 }).withMessage("Price is Required"),
    handleValidationErrors,
]