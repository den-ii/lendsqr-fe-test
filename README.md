# lendsqr-fe-test

![lends2](https://user-images.githubusercontent.com/104834114/213447593-6b7d7cbf-8fe2-45fb-a97f-e824ddd2fc2a.jpg)
**Visit [Live Link](https://deni-wisdom-ochiche-lendsqr-fe-test.netlify.app/)**


## Assessment
Given the design here: https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/FrontendTesting?node-id=5530%3A0  which has sample pages to be built.

### Build the 4 pages Login, Dashboard, User page, User details page
- The user pages should pull data from a mock api with 500 records
- Use local storage or indexedDB to store and retrieve user details on the user details page.
- The page must be mobile respon

### Tech stack
- React with TypeScript
- SCSS

### Mock API
- Get all users https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users 
- Get user details by id https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/:id

## How to Login
Login in with adedeji@gmail.com and any password with length greater than five

### What's Working?
- Search for the users
- Filter the Users
- View User Details
- Activate and Blacklist accounts
- Pagination
- Pop up on activation or blacklist accounts

## How to run Locally
This React application is created with Vite

- npm install: install dependencies
- npm run dev: open locally on your browser
- npm run build: to build

## Testing
#### Testing with Vitest
**Vitest** is just like jest but love vite because it's fast
- npm test : to run tests
- npm run coverage: checkout tests stats
