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

# Ways to do authentication 
1. Basic authentication using Username and passsword
2. Complicated(Using Google, etc,....)

## Authentication 
- Hashing: Hashing is conversion of input to a complicated format using a formulae or algorithm to keep it secured. **It is one way. One cannot change it to password again.** Example: We put username and password to sign in. It should ideally hit a DB where this should be stored. Now, these passwords are hashed. Why are these hashed? These are hashed so that if anyone tries accessing the DB, then he or she will not be able to see the password. Even if there is a breach of Data centers, it will keep the credentials safe. 
- Encryption: Encryption is done with a usage of a key. Whoever has this key can decrypt or encrypt the credential.
- JSON Web token: Comprises of 3 words-> JSON WEB TOKEN. 
- Local storage

# Fetch API, Authentication and Database
## Fetch API
- As the name suggest, it fetches something.
- Fetch APi fetches stuff from BackEnd.


