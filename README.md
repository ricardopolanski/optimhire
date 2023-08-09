# Code Challenge

### Requirements

## Test Scenarios

### Test 1: User Sign Up, Login, and Logout

1. Open the Demoblaze website.
2. Sign up as a new user.
3. Validate that attempting to sign up with the same user displays a modal.
4. Log in with valid credentials.
5. Log out from the account.
6. Attempt to log in with invalid user credentials and validate the behavior.

### Test 2: Adding and Managing Items in Cart

1. Log in with valid credentials.
2. Navigate to the "Phones" section.
3. Click on any phone to view details.
4. Add the selected phone to the cart.
5. Repeat steps 3-4 for another phone.
6. Go to the cart and remove one item.
7. Place an order and populate the order modal.

### Test 3: Placing an Order and Validating Information

1. Log in with valid credentials.
2. Navigate to the "Phones" section.
3. Click on any phone to view details.
4. Add the selected phone to the cart.
5. Repeat steps 3-4 for another phone.
6. Go to the cart and remove one item.
7. Place an order and populate the order modal.
8. Validate that charged information is correct, and other details in the confirmation popup are accurate.

### 🚨🚨🚨 Test 4: Validating Main and Sub-Category Items - The requirements aren't clear and it wasn't developed

1. Log in with valid credentials.
2. Go to the main categories level page (category tab on the left).
3. Visit each sub-category level.
4. Validate that the main category level page contains all items from subcategories.


## Pre-requisites

1. Node JS
2. Optional: Json-formatter for Native Reporter option (depends on your OS: [json-formatter](https://github.com/cucumber/json-formatter))
3. Clone this repository to your local machine:
   ```sh
   git clone https://github.com/ricardopolanski/optimhire.git
   ```

## Install the project

1. Install project dependencies:
   ```sh
   npm i

### 🏃🏽‍♀️ Run the tests:

1. Standard Execution

```bash
  npm run cypress:run
```

2. Open Cypress App to execute tests in headful mode

```bash
  npx cypress open
```

### Project structure
<pre>
cypress
├── downloads
├── e2e
│   ├── pages                   - Page Objects
│   │   ├── OrderPage.js
│   │   └── SignUpPage.js
│   └── step_definitions        - Step Definitions
│       ├── placeOrder.js
│       └── signUP.js
├── fixtures                    - Page Elements and data
│   ├── cartData.json
│   ├── loginPage.json
│   └── signUpData.json
├── screenshots
│   
├── support
│   ├── commands.js
│   ├── e2e.js
│   ├── generateRandom.js       - Generate Random User and Password
│   └── login.js                - Login helper
└── videos
</pre>