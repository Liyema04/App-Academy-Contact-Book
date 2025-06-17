# App-Academy-Contact-Book

## Contact Book App

A web application for managing contacts from ITvarsity (API), built with HTML, CSS, and JavaScript.

---

## Features

- View contact list
- Add new contacts
- Edit existing contacts
- Delete contacts
- Upload contact avatars
- API key authentication (required before accessing contacts)
- Responsive design for desktop and mobile
- Avatar images displayed in a circular frame
- User-friendly error handling and feedback

---

## Project Structure

```
ContactBook/
├── public/
│   ├── index.html
│   ├── contacts.html
│   ├── edit-contact.html
│   ├── add-contact.html
│   ├── enter-api-key.html
│   └── src/
│       ├── css/
│       │   └── style.css
│       ├── js/
│       │   └── config.js
│       └── images/
│           └── (no favicon.ico yet)
├── package.json
├── package-lock.json
└── vercel.json
```

- **HTML files** are in the `public` folder for easy static hosting and Vercel deployment.
- **CSS, JS, and images** are inside `public/src/` for organized asset management.
- **API key** is required and stored in `localStorage`. Users are redirected to `enter-api-key.html` if not set.

---

## API Integration

- The app uses the ITvarsity Contact Book API.
- All API requests are made to:  
  `https://mysite.itvarsity.org/api/ContactBook/`
- The API key is appended to all requests as a query parameter.
- Error handling is implemented for empty or invalid API responses.

---

## Deployment

This app is deployed on Vercel. To deploy your own version:

1. Fork this repository
2. Install Vercel CLI:  
   ```bash
   npm i -g vercel
   ```
3. Login to Vercel:  
   ```bash
   vercel login
   ```
4. Deploy:  
   ```bash
   vercel deploy --prod
   ```

**Vercel Configuration:**

- The `vercel.json` file ensures all routes resolve correctly for static hosting.
- All static assets are served from the `public` directory.

---

## Local Development

To run locally:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the local server:
   ```bash
   npm start
   ```
3. Open your browser and go to:  
   [http://localhost:8080/index.html](http://localhost:8080/index.html)

**Important Notes:**  
- **CORS:** The ITvarsity API does **not** allow requests from `localhost` due to CORS restrictions. This means API features will not work when running locally.  
- **Favicon:** No favicon has been created yet, so you may see a 404 error for `/favicon.ico` in your browser console. This does not affect app functionality.

---

## Troubleshooting

- **API Data Not Loading on Localhost:**  
  - This is expected due to CORS rules on the ITvarsity API. Use the deployed Vercel version for full functionality.
- **404 for favicon.ico:**  
  - You can ignore this error or add a `favicon.ico` file in `public/src/images/` and reference it in your HTML files.
- **File Paths:**  
  - All asset paths should be relative (e.g., `src/css/style.css`, `src/js/config.js`).
- **First Page:**  
  - The app redirects to `enter-api-key.html` if no API key is found in `localStorage`.

---

## License

MIT

---