# Fully-Featured Express Blog

- Routing using express.Router()
- Exporting Callbacks for Routes as Controllers (in separate file/folder)
- Gzipping, minifying (using compression, express-minify)
- Aggressive Caching of Assets (using Cache-Control, Expires headers)
- New CSS Features (Grid, font-display property, new text decoration styling)
- ES7 Features (Async / Await, Object.entries)
- Pug Mixins
- BEM Naming Convention for CSS
- Dynamic Environment Variable Swapping (based on environment)
- Service Worker (for offline functionality)

Will Likely Add

- Mongoose lifecycle hooks (i.e. pre .save())
- ~~Service Worker (for offline functionality)~~
- Background Sync
- manifest.json
- Testing
- JSON Web Tokens
- Flash Messaging (something like Toastr)
- express-validator
- Intersection Observer API (if there are images)

Questions: 

- How to cache bust when adding/editing posts (the Cache-Control headers didn't pose a problem with this, but service worker requires a page refresh to update content, since it is caching the HTML, as well as JS/CSS)