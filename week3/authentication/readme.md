# Autentication
- **Dumb Way:** Asking the user to send username and password in all future requests.
- **A little better way**
    1. Give the user back a token on Signup/Signin.
    2. Ask the user to send back the token in all the future requests.
    3. When the user logs out, ask the user to forget the token(or revoke it from the back end)


## In simple terms
- First time, when we login/signup, a request is sent to the server. We then, get a token from the server which is further used.
- Whenever we send a send request or a post request to any website, we will send a **TOKEN** along with the request.
- Somehow the server will validate it. More on this later...


# Fetch API, Authentication and Database
## Fetch API
- As the name suggest, it fetches something.
- Fetch APi fetches stuff from BackEnd.


