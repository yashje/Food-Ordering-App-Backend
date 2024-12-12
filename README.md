# Food-Ordering-App-Backend

This project is a backend application built with Node.js, TypeScript, and Express, designed to handle a food ordering app. It also integrates with third-party services like Stripe for payment processing and Cloudinary for media storage.

## Deployed Version
The project is deployed and can be accessed``` [(https://food-ordering-app-backend-1ju4.onrender.com)].```

---

## Prerequisites

Before starting, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm (comes with Node.js)
- TypeScript globally (`npm install -g typescript`)
- Stripe CLI (for local testing of Stripe webhooks)

---

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yashje/Food-Ordering-App-Backend
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add the required environment variables. Example:
     ```
     PORT=1000
     STRIPE_SECRET_KEY=your_stripe_secret_key
     CLOUDINARY_URL=your_cloudinary_url
     JWT_SECRET=your_jwt_secret
     ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   This command:
   - Starts `nodemon` to watch for file changes.
   - Listens to Stripe webhook events using the Stripe CLI.

5. **Building the project**:
   To build the TypeScript code into JavaScript, run:
   ```bash
   npm run build
   ```
   The compiled files will be in the `dist` directory.

6. **Start the production server**:
   ```bash
   npm start
   ```

---

## Scripts

### `npm run dev`
- Starts the development server with hot-reloading using `nodemon`.
- Forwards Stripe webhook events to the API.

### `npm run build`
- Installs dependencies and compiles TypeScript files into JavaScript.

### `npm start`
- Runs the production server using the compiled JavaScript files in the `dist` directory.

---

## Dependencies

### Core Dependencies:
- `express`: Web framework for Node.js.
- `mongoose`: ODM for MongoDB.
- `cors`: Middleware for handling cross-origin requests.
- `jsonwebtoken`: For handling JSON Web Tokens (JWTs).
- `stripe`: For payment processing.
- `cloudinary`: For handling media uploads.
- `multer`: For file uploads.
- `express-validator`: For request validation.

### Dev Dependencies:
- `typescript`: TypeScript language support.
- `ts-node`: Run TypeScript files directly.
- `nodemon`: Auto-restarts the server during development.
- `@types/...`: TypeScript type definitions for various packages.

---

## Additional Notes

- **Stripe Webhooks**:
  Ensure the Stripe CLI is running to forward webhook events during development:
  ```bash
  stripe listen --forward-to localhost:1000/api/order/checkout/webhook
  ```

- **TypeScript**:
  Ensure TypeScript is installed globally to avoid errors during builds.
  ```bash
  npm install -g typescript
  ```

---

Enjoy building and scaling your food ordering app backend!
