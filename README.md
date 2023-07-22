# ubc-booster

## Concern I (adrian) had
- What stops a user from pushing to the database directly (they just need a REST client and make requests to the API endpoint)? / Deny access to specific API endpoint
  - Possible fix:
    - Use a token system (like JWT) to authenticate users
    - Rate-limiting users
    - Rate-limit on user reg.
    - **shub recommends auth tokens in headers of request**
      - bro there would be some logic in the api right? Idk what ur getting at...
      - If ur making a generic api which u don't want to be abused u use jwt tokens to identify clients and rate limit that jwt token
      - If it's a sign up endpoint anyone can sign up use cors and rate limit by ip
      - **LOOK INTO JWT TOKENS**
        - [JWT Intro](https://jwt.io/introduction/)
        - [More JWT stuff](https://www.howtogeek.com/devops/what-are-json-web-tokens-jwts-why-do-apis-use-them/#:~:text=JWTs%20are%20frequently%20used%20for%20API%20authentication%20because,token%20is%20signed%20using%20the%20server%27s%20secret%20key)

- Possible features
  - [Show course info](https://ubcexplorer.io/api)