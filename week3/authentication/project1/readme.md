# Project description
- People should be able to sign up to our website
- Only signed in users to see prople/product(create a dummy list)
- 2 endpoints:
- 1st endpoint:
  - POST-->/signin
    - Body={
  username:string
  password:string
  }
O/P--> It should return a JSON web token with username encrypted.

- 2nd endpoint
  Get-->/users
  Headers=Authorization header
O/P--> Returns an array of all users if signed in(token is correct). And returns 403 status code if not signed in/incorrect.


