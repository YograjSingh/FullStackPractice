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
- **Hashing:** Hashing is conversion of input to a complicated format using a formulae or algorithm to keep it secured. **It is one way. One cannot change it to password again by doing reverse engineering.** Example: We put username and password to sign in. It should ideally hit a DB where this should be stored. Now, these passwords are hashed. Why are these hashed? These are hashed so that if anyone tries accessing the DB, then he or she will not be able to see the password. Even if there is a breach of Data centers, it will keep the credentials safe. 
- **Encryption:** Encryption is done with a usage of a **key/password**. Whoever has this key can decrypt or encrypt the credential.
- **JSON Web token:** 
  - Comprises of 3 parts-header, payload and signature. 
  - Kinda gibberish.
  - Takes JSON as a input.
  - Creates a token at the end using the input.
  - So, if anyone has this token, he or she can access retrieve the input contents given.
  - Conversion from token to JSON could be done, but verification could only be done by the server to whom the request is sent.
  - Example: 
      1. We have a JSON objecy which we pass to a method (Example: jwt.encode()).
      2. Now, this long string we pass to jwt.verify(). Here, we also pass the password.
      3. So, for example we send a request to some server, we will send this long string, and then the server will run a verification method(for example, jwt.verify()) and will have two parameters- long string and the password which server uses to hash it. From this, they get the original object and then they let us access what we want to access.
- **Local Storage:** Giving a very high level idea here. It allows to store key value pairs. Basically, we don't need to send a authentication request to a particular server everytime, if we have a token or something which allows us to verify ourselves in local storage. Modern web browsers give this feature wher we can have something stored and reduces the repetition of authentication with the server.


## Why use JWT over encryption or hashing?
It saves a DB call and fast of course.

# Fetch API, Authentication and Database
## Fetch API
- As the name suggest, it fetches something.
- Fetch APi fetches stuff from BackEnd.


# Connection to Databases
Various types of Databases:
- Graph DBs
- Vector DBs
- SQL DB
- NoSQl DB

### A bit about DB
MongoDB lets you create a database.
In each DB, it lets you create tables(also called collections).
In each tables, it lets you dup JSON data
Schemaless
Scales well and is a decent choice for most use cases.

### How to connect to DB?
1. Express lets us create an HTTP server.
2. JSONWebTokens library lets us create JWT
3. Mongoose lets us connect to the DB.(helps, read write to DB)


