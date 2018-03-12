# Fully-Featured Express Blog

- Routing using express.Router()
- Exporting Route Callback Functions as Controllers
- Gzipping, Minifying (using compression, express-minify)
- Aggressive Caching of Assets (using Cache-Control, Expires headers)
- New/Useful CSS Features (Grid, 'font-display' property, new text decoration properties, :not())
- ES6 / ES7 Features (Async / Await, Object.entries / Object.values)
- Pug Templating / Mixins
- BEM Naming Convention for Styles
- Dynamic Environment Variable Swapping Based on Environment (to use as NODE_ENV= in package.json scripts)
- Service Worker (for offline functionality)
- Mongoose ORM with MLab MongoDB database

Will Likely Add:

- Mongoose lifecycle hooks (i.e. pre .save())
- ~~Service Worker (for offline functionality)~~
- Background Sync
- manifest.json
- Testing (probably with Jest and Enzyme)
- JSON Web Tokens
- ~~Flash Messaging (something like Toastr)~~
- express-validator (to provide feedback to user on auth)
- Intersection Observer API (if there are images)
- Push notifications
- CDN (maybe a trial version from cloudinary or something, we'll see)

Questions: 

- ~~How to cache bust when adding/editing posts (the Cache-Control headers didn't pose a problem with this, but service worker requires a page refresh to update content, since it is caching the HTML, as well as JS/CSS)~~

To Do: 

- Have each post check contents of localStorage on page load to see if post has already been saved, so upon future visits, it will continue to say 'Post saved'