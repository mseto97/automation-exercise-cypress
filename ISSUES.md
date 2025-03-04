# Issues

- Issue 1
  - Description: Sign up form is not strict with the values it accepts into its fields ie.
      - Mobile number accepts letters
      - Email can accept unlikely formats ie person@f
  - Found by: exploratory testing
  - Reproducible: Yes
      - Navigate to https://automationexercise.com/signup and try values


- Issue 2:
  - Description: Email field is disabled on the https://automationexercise.com/signup page
  - Found by: Exploratory
  - Reproducible: Yes. 
      - Navigate to https://automationexercise.com/
      - Click singup/login link in top nav bar
      - Enter name and email into the New User Signup! fields and click Sign up
    This may be intentional, but worth flagging  


- Issue 3: '.' is included in Billing ang and Shipping information when Title was not selected during sign up
  - Description: When you sign up a new user and do not select a title (Mr, Mrs) when you go to check out, on the Billing and Shipping information
      includes a . before the name ie '. Danny Devito'
  - Found by: while coding
  - Reproducible: Yes. 
      - Create a new user, and do not select Mr or Mrs title
      - Add products to cart
      - Initiate checkout process
      - When reviewing order you will see extra . before name


- Issue 4: Card payment fields no not have any sort of validation
  - Description: When entering card details during checkout, there is no field validation on the fields
      ie, you can enter 'f' into the expiry month and it is ok
  - Found by: Exploratory
  - Reproducible: Yes. 
      - Login
      - Add products to cart and initiate check out to the card entry
      - You can enter data such as "g" into each field and it will successfully submit