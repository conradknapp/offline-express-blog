# Fully-Featured Express Blog

- Routing using express.Router()
- Exporting Route Callback Functions as Controllers
- Gzipping, Minifying (using compression, express-minify)
- Aggressive Caching of App Shell (using Cache-Control, Expires headers)
- New/Useful CSS Features (Custom Properties (Variables), Grid, 'font-display' property, new text decoration properties, :not())
- Advanced JS Methods (namely .reduce())
- ES6 / ES7 Features (Async / Await syntax, Object.entries() / Object.values())
- Pug Templating / Mixins
- BEM Naming Convention for CSS
- Dynamic Environment Variable Swapping Based on Environment (to use as NODE_ENV= in package.json scripts)
- rem / em units (rem largely for text sizing, em for most everything else, particularly media queries)
- Service Worker (for offline functionality)
- Mongoose ORM with MLab MongoDB database
- Flash Messaging
- Mobile-First Design
- Getting / Setting Data from LocalStorage
- Full CRUD Functionality
- Posts Use Markdown Syntax with marked (try it yourself!)
- Forms Sanitization with express-validator
- Ajax Requests using axios
- Custom-made SVG Icons
- Streams
- Regular Expressions for Text Formatting
- [Performant CSS transitions](http://tobiasahlin.com/blog/how-to-animate-box-shadow/) 

Will Likely Add:

- Mongoose lifecycle hooks (i.e. pre .save())
- Background Sync
- manifest.json
- Testing (probably with Jest and Enzyme)
- JSON Web Tokens
- express-validator (to provide feedback to user on auth)
- Intersection Observer API (if there are images)
- Push notifications
- CDN (maybe a trial version from cloudinary or something, we'll see)
- Sending emails with SendGrid
- Provide options for sign-up (i.e. provide both email as well as phone)

To Do: 

- Maybe add page to cache if user has been on page for a certain amount of time (i.e. a minute or so)
- Disable links to inaccessible parts of the site when offline 
- Revisit essentials of [mobile UX Design](https://developers.google.com/web/fundamentals/design-and-ux/principles/) to make sure site satisfies them

Maybe: 

- Establish your [app shell](https://developers.google.com/web/fundamentals/architecture/app-shell), aggressively cache