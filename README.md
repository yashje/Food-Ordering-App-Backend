
# 🍔 Food-Ordering-App-Backend

The backend of a MERN stack Food Ordering application, crafted to practise and showcase my MERN skills.

🚀 [Frontend Live Demo](https://food-ordering-app-frontend-1oly.onrender.com)

---

## 📖 Overview

This backend API powers a food ordering platform where users can:
- Create and manage their own restaurants.
- Browse and place orders at other restaurants.
- Buy and sell food seamlessly.

Built with Node, Express, MongoDB, and sprinkled with Stripe, Auth0 & Cloudinary integrations.

---

## ✨ Features

✅ Restaurant creation & management  
✅ Order placement & tracking  
✅ JWT-based authentication (via Auth0)  
✅ Secure file uploads to Cloudinary  
✅ Stripe payment integration & webhook handling  
✅ Robust input validation & error responses  

---

## 🧰 Tech Stack

- **Node.js** & **Express** — server & routing
- **MongoDB & Mongoose** — database
- **TypeScript** — typed JS
- **Auth0** — authentication & JWT validation
- **Stripe** — payments & webhook
- **Cloudinary** — image storage
- **Multer** — file uploads

---

## 🚀 Getting Started

### 📋 Prerequisites
- Node.js >= 16
- MongoDB (local or Atlas)
- Auth0 account
- Stripe account
- Cloudinary account

---

## 🛠️ Installation

```bash
git clone <your-repo-url>
cd Food-Ordering-App-Backend
npm install
````

---

## 🧪 Development

Start the backend & listen for Stripe webhook:

```bash
npm run dev
```

This runs:

* The backend server (`nodemon`)
* The Stripe webhook listener, forwarding to `/api/order/checkout/webhook`

---

## 🔨 Production

Build & run production code:

```bash
npm run build
npm start
```

---

## 📂 Scripts

| Command          | What it does                                  |
| ---------------- | --------------------------------------------- |
| `npm run dev`    | Start dev server with nodemon & stripe listen |
| `npm run build`  | Compile TypeScript                            |
| `npm start`      | Run built JS code                             |
| `npm run stripe` | Start Stripe webhook listener only            |

---

## 🔐 Environment Variables

Create a `.env` file in the root with these keys:

```env
PORT=7000

MONGODB_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>

AUTH0_AUDIENCE=<your_auth0_audience>
AUTH0_ISSUER_BASE_URL=<your_auth0_issuer_url>

CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>

FRONTEND_URL=<your_frontend_deployed_url>

STRIPE_API_KEY=<your_stripe_secret_key>
STRIPE_WEBHOOK_SECRET=<your_stripe_webhook_secret>
```


## 📄 License

📝 For educational and personal practice only.
Fork it, run it, and learn from it!

---

## 🙋‍♂️ Author

Made with ❤️ by **Yash**
Check out the [Frontend](https://food-ordering-app-frontend-1oly.onrender.com) here.

