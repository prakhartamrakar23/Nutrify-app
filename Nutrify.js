function Home(){
  let maindiv=document.getElementById("main");
  let homeDiv=document.createElement('div');
  homeDiv.setAttribute("id","Home")
  homeDiv.setAttribute("class","");
  homeDiv.setAttribute("style","height:500px; width:100%; ");

  let imageDiv=document.createElement("img");
  imageDiv.setAttribute("src","foodhome.jpg");
  imageDiv.setAttribute("style","position: absolute; width:100%; height:100%;");

  //join us button
  let joinus=document.createElement("button");
  joinus.innerHTML=`<strong>Join us</stong>`;
  joinus.setAttribute("style","height:40px;width:100px;position:absolute;top:60%; left:25%; border-radius:10px; background-color:#FCF596;");
  joinus.setAttribute("class","text-success ")
  joinus.addEventListener('click',function(){
    maindiv.removeChild(homeDiv);
    createSignInForm();
  })

  //About us button
  let aboutus=document.createElement("button");
  aboutus.innerHTML=`<strong>About us</stong>`;
  aboutus.setAttribute("style","height:40px;width:100px;position:absolute;top:60%; left:40%; border-radius:10px; background-color:#FCF596;");
  aboutus.setAttribute("class","text-success ")
  aboutus.addEventListener('click',function(){
    maindiv.removeChild(homeDiv);
    About();
  })

//welcome note for user
  let welcomeHeading=document.createElement("h4");
  welcomeHeading.innerHTML=`<strong">Welcome to </strong><br> `
  welcomeHeading.setAttribute("style","  font-size: 60px;color: white; font-weight:900px;  position:absolute;top:10%; left:10%; right:60%;")

  let welcomeHeading2=document.createElement("marquee");
  welcomeHeading2.innerHTML=`
  <strong>Nutrify!</strong>`
  welcomeHeading2.setAttribute("style","  font-size: 60px;color: green; font-weight:900px;  position:absolute;top:20%; left:10%; right:60%;")
  
  let welcomeNote=document.createElement("p");
  welcomeNote.innerHTML=`<b class="text-warning">"Fuel Your Journey with Smart Calorie Tracking"</b><br><br
   Please click the on join us to move forward`;
  welcomeNote.setAttribute("style","position: absolute; left:10%; top:40%; right:50%; color: white; font-size: 20px;");
 
  homeDiv.appendChild(imageDiv);
  homeDiv.appendChild(joinus);
  homeDiv.appendChild(aboutus);
  homeDiv.appendChild(welcomeHeading);
  homeDiv.appendChild(welcomeHeading2);
  homeDiv.appendChild(welcomeNote);
 
  maindiv.appendChild(homeDiv);
}

//About section
function About(){
  let maindiv=document.getElementById("main");
  let aboutDiv=document.createElement('div');
  aboutDiv.setAttribute("id","aboutSection");
  aboutDiv.setAttribute("style","background-color:#C9E9D2; height:450px; width:900px; border-radius:15px; margin-left:250px;")
  aboutDiv.setAttribute("class"," d-flex flex-row mt-5 justify-content-center align-itmes-center");

  let firstcol=document.createElement("div");
  firstcol.setAttribute("class","col-md-6 d-flex flex-column");
  firstcol.setAttribute("style","height: 450px; background-color: #C9E9D2; width:30%;border-radius:5px;")

let aboutImage=document.createElement("img");
  aboutImage.setAttribute("src","https://media3.giphy.com/media/3ohzdXFDqrLfSORwHu/giphy.webp?cid=790b7611s9sl2szzl68o8txydgov2r1g9ujvi9pm4ayljxth&ep=v1_gifs_search&rid=giphy.webp&ct=g");
  aboutImage.setAttribute("class","d-flex justify-content-start m-1 ")
  aboutImage.setAttribute("style","height:450px; width: 100%; border-radius:5px;");
  firstcol.appendChild(aboutImage);
  aboutDiv.appendChild(firstcol);

  let secondcol=document.createElement("div");
  secondcol.setAttribute("class","col-md-6 d-flex flex-column");
  secondcol.setAttribute("style","height: 450px; width:70%;")

  let heading=document.createElement("h2");
  heading.innerHTML="<strong style='color: green;'>About Us</strong>";
  heading.setAttribute("class"," d-flex justify-content-center align-itmes-center mt-3");
  heading.setAttribute("style","text-align:center;")
  secondcol.appendChild(heading);

  let discription=document.createElement("p");
  discription.setAttribute("style","font-size:17px; font-weight:300px; padding: 2px;margin-left:5px; margin-top: 40px; position:relative;");
  discription.setAttribute("class","d-flex justify-content-evenly align-items-center  p-2")
  discription.innerHTML=`The Nutrify app is a simple and efficient tool designed to help you track your daily caloric intake and support your health goals. Whether you’re aiming to lose weight, maintain your current weight, or build muscle, our app provides personalized calorie recommendations based on the type of food that what food gives you how many calorie . With an easy-to-use interface, you can search your meals, monitor nutrients, and stay on top of your health journey—all in one convenient place.
  Our app tells us the amount of clories your food content(per 100gm)and also go for reccomended the exercises mention to burn calorie intake. First You have to sign-up then sig-in and you are ready to use the app.`
  

  
  secondcol.appendChild(discription); 
  
  
  aboutDiv.appendChild(secondcol);
  maindiv.appendChild(aboutDiv);
}

function createSignInForm() {
  let maindiv = document.getElementById("main");
 //maindiv.setAttribute("style"," width:100%; height: 100%; background-color:#F6FCDF;");
  let signInFormDiv = document.createElement("div");
  signInFormDiv.setAttribute("class", "signInForm");
  signInFormDiv.setAttribute("id", "signInFormDiv");
  signInFormDiv.setAttribute("style", "width: 600px; height: 400px; margin-top: 100px; margin-left:300px; border-radius:15px;background-color:#C9E9D2;");
  signInFormDiv.setAttribute("class","d-flex justify-content-evenly  align-items-center flex-column")

  let signInHeading = document.createElement("h5");
  signInHeading.textContent = "Sign In";

  // Username input for Sign In
  let usernameLabel = document.createElement("label");
  usernameLabel.textContent = "Username:"; 
  let usernameInput = document.createElement("input");
  usernameInput.setAttribute("onkeyup","handleSignIn();")
  usernameInput.setAttribute("type", "text");
  usernameInput.setAttribute("style","width:400px;")
  usernameInput.setAttribute("placeholder","Enter your name")
  usernameInput.setAttribute("id", "signInUsername");
  usernameInput.setAttribute("class", "form-control");
  let usernameSmall=document.createElement("small");
  usernameSmall.setAttribute("id","userErr");
  usernameSmall.style.color = "red";

  // Password input for Sign In
  let passwordLabel = document.createElement("label");
  passwordLabel.textContent = "Password:";
  let passwordInput = document.createElement("input");
  passwordInput.setAttribute("type", "password");
  passwordInput.setAttribute("id", "signInPassword");
  passwordInput.setAttribute("style","width:400px;")
  passwordInput.setAttribute("placeholder","Enter your password")
  passwordInput.setAttribute("class", "form-control");
  let passwordSmall=document.createElement("small");
  passwordSmall.setAttribute("id","passwordErr");
  passwordSmall.style.color="red";

  //button div
  let buttonDiv=document.createElement("div");
  buttonDiv.setAttribute("style","display:flex;");
  buttonDiv.setAttribute("class","justify-comtent-between align-items-center")
  
  
  // Sign In button
  let signInButton = document.createElement("button");
  signInButton.setAttribute("type", "button");
  signInButton.setAttribute("class", "btn btn-primary m-3");
  signInButton.textContent = "Sign In";
  signInButton.addEventListener("click", function (){
    handleSignIn();
  }); // Adding event listener for Sign In
  buttonDiv.appendChild(signInButton);

  
  // SignUp  button
  let signupButton = document.createElement("button");
  signupButton.setAttribute("type", "button");
  signupButton.setAttribute("class", "btn btn-primary m-3 d-flex");
  signupButton.textContent = "Sign Up";
  signupButton.addEventListener("click", function(){
    maindiv.removeChild(signInFormDiv);
    createSignUpForm();
  });
  buttonDiv.appendChild(signupButton); // Adding event listener for Sign In

  // Append elements to the Sign In form
  signInFormDiv.appendChild(signInHeading);
  signInFormDiv.appendChild(usernameLabel);
  signInFormDiv.appendChild(usernameInput);
  signInFormDiv.appendChild(usernameSmall);
  signInFormDiv.appendChild(passwordLabel);
  signInFormDiv.appendChild(passwordInput);
  signInFormDiv.appendChild(passwordSmall);
  signInFormDiv.appendChild(buttonDiv);

  // Append form to the main container
  maindiv.appendChild(signInFormDiv);
}

// Function to create the Sign Up form and store user data in localStorage
function createSignUpForm() {
  let maindiv = document.getElementById("main");
  let signUpFormDiv = document.createElement("div");
  signUpFormDiv.setAttribute("class", "signUpForm");
  signUpFormDiv.setAttribute("id", "signUpFormDiv");
  signUpFormDiv.setAttribute("style", "width: 600px; height: 410px; margin-top: 100px; margin-left:300px; border-radius:15px;background-color:#C9E9D2;");
  signUpFormDiv.setAttribute("class","d-flex justify-content-evenly align-items-center flex-column")

  let signUpHeading = document.createElement("h5");
  signUpHeading.textContent = "Sign Up";

  // Username input for Sign Up
  let usernameLabel = document.createElement("label");
  usernameLabel.textContent = "Username:";
  let usernameInput = document.createElement("input");
  usernameInput.setAttribute("type", "text");
  usernameInput.setAttribute("style","width:400px;")
  usernameInput.setAttribute("placeholder","Enter your name")
  usernameInput.setAttribute("id", "signUpUsername");
  usernameInput.setAttribute("onkeyup", " VaidateName()");
  usernameInput.setAttribute("class", "form-control");
  let usersmallTag=document.createElement("small");
  usersmallTag.setAttribute("id","userError");

  // Password input for Sign Up
  let passwordLabel = document.createElement("label");
  passwordLabel.textContent = "Password:";
  let passwordInput = document.createElement("input");
  passwordInput.setAttribute("type", "password");
  passwordInput.setAttribute("id", "signUpPassword");
  passwordInput.setAttribute("style","width:400px;")
  passwordInput.setAttribute("placeholder","Enter your password")
  passwordInput.setAttribute("onkeyup", "ValidatPassword()");
  passwordInput.setAttribute("class", "form-control");
  let smallTag=document.createElement("small");
  smallTag.setAttribute("id","passwordError");

  // Sign Up button
  let signUpButton = document.createElement("button");
  signUpButton.setAttribute("type", "button");
  signUpButton.setAttribute("class", "btn btn-primary mt-2");
  signUpButton.textContent = "Sign Up";
  signUpButton.addEventListener("click", function(){
    handleSignUp();
  }); // Adding event listener for Sign Up

  // Append elements to the Sign Up form
  signUpFormDiv.appendChild(signUpHeading);
  signUpFormDiv.appendChild(usernameLabel);
  signUpFormDiv.appendChild(usernameInput);
  signUpFormDiv.appendChild(usersmallTag);
  signUpFormDiv.appendChild(passwordLabel);
  signUpFormDiv.appendChild(passwordInput);
  signUpFormDiv.appendChild(smallTag);
  signUpFormDiv.appendChild(signUpButton);

  // Append form to the main container
  maindiv.appendChild(signUpFormDiv);
}

function VaidateName(){
  let username = document.getElementById("signUpUsername").value;
  userError.textContent = "";
  let status = true;
  let error=document.getElementById("userError");
  error.style.color  = "red"

  if (username.length==0 ) {
    // alert("Please fill out both fileds");
    status =false;
  error.textContent="User name is required"
}
}

function ValidatPassword(){

  let password = document.getElementById("signUpPassword").value;
  passwordError.textContent = "";
  let err = document.getElementById("passwordError")
  err.style.color  = "red"

  let status= true;
  if (password.length == 0) {
    err.textContent = "Password is required"
      status = false;
  }
  else if (password.length < 6 || password.length > 10) {
      status = false;
      err.textContent = "Password length must be between 6 to 10"
  }
 else if (!/[a-z]/.test(password)) {
    err.textContent = "Password must contain at least one lowercase letter.";
    status = false;
  } else if (!/[A-Z]/.test(password)) {
    err.textContent = "Password must contain at least one uppercase letter.";
    status = false;
  } else if (!/[0-9]/.test(password)) {
    err.textContent = "Password must contain at least one number.";
    status = false;
  } else if (!/[!@#$%^&*]/.test(password)) {
    err.textContent = "Password must contain at least one special character (!@#$%^&*).";
    status = false;
}
  else {
     err.textContent = ""
    }
  return status;
}

function handleSignUp(){

  let username = document.getElementById("signUpUsername").value;
  let password = document.getElementById("signUpPassword").value;

  if (!VaidateName() && !ValidatPassword()) return;

    let userData = {
        username: username,
        password: password
    };
    
    // Save user data to localStorage
    localStorage.setItem(username, JSON.stringify(userData));
    let maindiv = document.getElementById("main");
    let signUpFormDiv = document.getElementById("signUpFormDiv");
    maindiv.removeChild(signUpFormDiv);
    createSignInForm();
  

}

function handleSignIn() {
  let username = document.getElementById("signInUsername").value;
  let password = document.getElementById("signInPassword").value;

  // Check if the user exists in localStorage
  let storedUserData = localStorage.getItem(username);

  let userError=document.getElementById("userErr");
  let passError=document.getElementById("passwordErr")

  userError.textContent = "";
  passError.textContent = "";

  // Simple validation for empty fields
  if (username === '') {
      userError.textContent="User name is mandatory"
     //alert("Please fill in both fields!");
     return;
  }
   else if(password===''){
    passError.textContent="Password is mandatory"
    return;
  }

  // If user data doesn't exist in localStorage
  if (!storedUserData) {
     userError.textContent= "User does not exist! Please Sign Up first.";
      return;
  }
 

  storedUserData = JSON.parse(storedUserData);

  // Check if the password matches
  if (storedUserData.password === password) {
     //alert("Sign In successful! Welcome, " + username);
    
     HeaderComponent();
      let maindiv = document.getElementById("main");
      let signInFormDiv = document.getElementById("signInFormDiv");
     maindiv.removeChild(signInFormDiv);
  } else {
      alert("Incorrect password! Please try again.");
  }
}


function HeaderComponent(){
    let maindiv=document.getElementById("main");

    let productDiv = document.createElement("div");
    productDiv.setAttribute("id","productDiv");
    maindiv.appendChild(productDiv);
//maindiv style 
    maindiv.setAttribute("style","background-color:#F6FCDF;")
    let header=document.createElement("header");
    header.setAttribute("class"," p-2 justify-content-center align-items-center");
    header.setAttribute("style","height:auto;");
    let logoDiv=document.createElement("div");
    logoDiv.setAttribute("class","p-6 d-flex justify-content-center align-items-center");
    logoDiv.setAttribute("style","height:60px; width:50%; margin-left :250px;");
    //creating logo
    let logoText=document.createElement("p");
    logoText.innerHTML="<strong class='text-success'>Nutrify</strong>"
    logoText.setAttribute("class","d-flex justify-content-center align-items-center");
    logoText.setAttribute("style","font-size:50px;")
    logoDiv.appendChild(logoText);
    header.appendChild(logoDiv);
    //search bar
    let searchBar=document.createElement("div");
    searchBar.setAttribute("class","d-flex justify-content-center align-items-center mt-2 ");
    searchBar.setAttribute("style","height:auto; width:70%; flex-direction:column; margin-left:150px");
   
    let searchInput=document.createElement("input");
    searchInput.setAttribute("placeholder","search for calories in your food...");
    searchInput.setAttribute("style","height:30px;width:90%;");
    searchInput.addEventListener("input", (e) => filterData(e.target.value)); 
    searchBar.appendChild(searchInput);
    header.appendChild(searchBar);
    productDiv.appendChild(header);

    MiddleComponent();
}


function MiddleComponent() {
  let productDiv = document.getElementById("productDiv");

  let centerComponent = document.createElement("div");
  centerComponent.setAttribute("class", "d-flex col-md-6 flex-column container mt-2");
  centerComponent.setAttribute("style", "padding-bottom: 15px;");
  centerComponent.setAttribute("id", "card-component");

  let centerRow = document.createElement("div");
  centerRow.setAttribute("class", "row");
  centerRow.setAttribute("id", "data-container");
  centerRow.setAttribute("style","width:100%; margin-top:2px;")


  DataComponent(getData(), centerRow);
  centerComponent.appendChild(centerRow);
  productDiv.appendChild(centerComponent);
}


function DataComponent(data, centerRow) {
  
  centerRow.innerHTML = "";

  if(data.length>0) {
    let product=data[0];

    let alerts = [];

    // Sodium warning: if sodium is higher than 2300 mg
    if (product.sodium_mg > 2300) {
      alerts.push(`<b class="text-danger">Warning</b> : High sodium content!<b class="text-success"> ${product.sodium_mg} mg </b>. Consider reducing your intake.<b>
        High Blood Paitents should avoid eating this food.`);
    }

    // Sugar warning: if sugar is higher than 50g
    if (product.sugar_g > 50) {
      alerts.push(`<b class="text-danger">Warning</b> : High sugar content!<b class="text-success"> ${product.sugar_g} g.</b> Consider reducing your intake.<br>
        Sugar paitents should avoid eating this food`);
    }

    // If there are any alerts, display them at the top
    if (alerts.length > 0) {
      let alertDiv = document.createElement("div");
      alertDiv.setAttribute("class", "alert alert-warning");
      alertDiv.setAttribute("style", "background-color: #FFD700; color: #fff; margin-bottom: 20px;");
      alertDiv.innerHTML = alerts.join('<br>');
      centerRow.appendChild(alertDiv);
    }



    //upper heading

    let upperHeading=document.createElement("h4");
    upperHeading.innerHTML=`<strong class="">${product.name} has a total of &nbsp <strong class="text-success " >${product.calories}  Calories</strong>`
    upperHeading.setAttribute("class","d-flex justify-content-center align-items-center mt-2 mb-3")
    centerRow.appendChild(upperHeading);

    //itemcontainer maindiv
      let itemContainer = document.createElement("div");
      itemContainer.setAttribute("class", "d-flex justify-content-between align-items-start mt-2 p-2");
      itemContainer.setAttribute("style", "border:1px solid black;box-shadow:10px 10px 10px grey; width:100%; background-color:#f9f9f9;");

      

      // Nutritional Values Section
      let nutritionSection = document.createElement("div");
      nutritionSection.setAttribute("style", "width:45%;");

      let heading = document.createElement("h5");
      heading.textContent = "Nutritional Values";
      nutritionSection.appendChild(heading);

      let nutritionInfo = document.createElement("p");
      nutritionInfo.innerHTML = `
          <strong class="bg-dark text-white p-1">Serving Size per 100 Grams</strong><br><br>
          <strong style="color:green; font-size:20px;">${product.name}</strong><br><br>
          <b>Carbohydrates</b> :&nbsp;&nbsp;&nbsp;&nbsp;${product.carbohydrates_total_g} g<br>
          <b>Cholesterol:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;${product.cholesterol_mg} mg<br>
          <b>Saturated Fat:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${product.fat_saturated_g} g<br>
         <b> Total Fat:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${product.fat_total_g} g<br>
          <b>Fiber Content:</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${product.fiber_g} g<br>
         <b> Potassium:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${product.potassium_mg} mg<br>
         <b> Protein:</b> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;${product.protein_g} g<br>
          <b>Sodium:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    &nbsp;&nbsp;&nbsp;${product.sodium_mg} mg<br>
          <b>Sugar:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${product.sugar_g} g
      `;
      nutritionInfo.setAttribute("style","gap:20px; font-size:17px; margin-top:5px;")
      nutritionSection.appendChild(nutritionInfo);
      itemContainer.appendChild(nutritionSection);

      // Burn Calories Section
      let burnSection = document.createElement("div");
      burnSection.setAttribute("style", "width:50%;padding-left:2px; text-align:center;justify-content; border-left:1px solid black;");

      let burnHeading = document.createElement("h6");
      burnHeading.innerHTML = `To burn ${product.calories} calories you will have to <br>`;
      burnSection.appendChild(burnHeading);

      let activities = [
          { name: "Jog", duration: Math.round((product.calories / 229)*60),des:"you will have to jog for",icon: '<i class="fa-solid fa-person-running"></i>' },
          { name: "Do Power Yoga", duration: Math.round((product.calories / 223)*60),des:"you will have to do Power Yoga for", icon: "🧘" },
          { name: "Get a Gym Workout", duration: Math.round((product.calories /483)*60),des:"you will have to lift weight for", icon: '<i class="fa-solid fa-dumbbell"></i>' },
          { name: "Go for a Brisk Walk", duration: Math.round((product.calories / 294)*60),des:"you will have to do brisk walk for", icon: '<i class="fa-solid fa-person-walking"></i>' }
      ];

      activities.forEach(activity => {
          let activityInfo = document.createElement("p");
          activityInfo.innerHTML = `<strong style="font-weight: 300px;">${activity.icon}</strong> <strong style="color:green;">  ${activity.name}</strong><br>${activity.des} <b>${activity.duration}</b> minutes`;

          burnSection.appendChild(activityInfo);
      });

      itemContainer.appendChild(burnSection);
     centerRow.appendChild(itemContainer);
  }else{
     let noResults=document.createElement("p");
     noResults.textContent="No matching item found. Try a different food item.";
     noResults.setAttribute("style","text-align: center;color:red;");
     centerRow.appendChild(noResults);

  }
  
}

// Filter Data Function
function filterData(searchValue) {
  let data = getData();
  let filteredData = data.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()));
  let centerRow = document.getElementById("data-container");
  DataComponent(filteredData, centerRow);
}

// Load Data into Local Storage
function loadData() {
  let products = [
    {
      "name": "Vegetable Fried Rice",
      "calories": 220,
      "serving_size_g": 100,
      "fat_total_g": 7,
      "fat_saturated_g": 1,
      "protein_g": 4,
      "sodium_mg": 500,
      "potassium_mg": 150,
      "cholesterol_mg": 0,
      "carbohydrates_total_g": 37,
      "fiber_g": 2,
      "sugar_g": 1
  },
  {
    "name": "Samosa",
    "calories": 262,
    "serving_size_g": 100,
    "fat_total_g": 17,
    "fat_saturated_g": 4,
    "protein_g": 4,
    "sodium_mg": 420,
    "potassium_mg": 180,
    "cholesterol_mg": 9,
    "carbohydrates_total_g": 25,
    "fiber_g": 2,
    "sugar_g": 1
}
,{
  "name": "Jalebi",
  "calories": 150,
  "serving_size_g": 50,
  "fat_total_g": 7,
  "fat_saturated_g": 1,
  "protein_g": 1,
  "sodium_mg": 10,
  "potassium_mg": 10,
  "cholesterol_mg": 1,
  "carbohydrates_total_g": 30,
  "fiber_g": 0,
  "sugar_g": 20
}
,
{
  "name": "Poha",
  "calories": 180,
  "serving_size_g": 100,
  "fat_total_g": 5,
  "fat_saturated_g": 1,
  "protein_g": 4,
  "sodium_mg": 200,
  "potassium_mg": 100,
  "cholesterol_mg": 0,
  "carbohydrates_total_g": 30,
  "fiber_g": 3,
  "sugar_g": 1
}
,
{
  "name": "Maggi (Instant Noodles)",
  "calories": 345,
  "serving_size_g": 100,
  "fat_total_g": 15,
  "fat_saturated_g": 7,
  "protein_g": 6,
  "sodium_mg": 850,
  "potassium_mg": 100,
  "cholesterol_mg": 0,
  "carbohydrates_total_g": 47,
  "fiber_g": 2,
  "sugar_g": 2
}
,{
  "name": "Burger",
  "calories": 295,
  "serving_size_g": 100,
  "fat_total_g": 12,
  "fat_saturated_g": 5,
  "protein_g": 14,
  "sodium_mg": 500,
  "potassium_mg": 180,
  "cholesterol_mg": 30,
  "carbohydrates_total_g": 33,
  "fiber_g": 2,
  "sugar_g": 5
},{
  "name": "Sandwich",
  "calories": 250,
  "serving_size_g": 100,
  "fat_total_g": 8,
  "fat_saturated_g": 2,
  "protein_g": 7,
  "sodium_mg": 400,
  "potassium_mg": 150,
  "cholesterol_mg": 10,
  "carbohydrates_total_g": 35,
  "fiber_g": 2,
  "sugar_g": 4
}
,{
  "name": "Manchurian",
  "calories": 170,
  "serving_size_g": 100,
  "fat_total_g": 8,
  "fat_saturated_g": 1,
  "protein_g": 4,
  "sodium_mg": 550,
  "potassium_mg": 120,
  "cholesterol_mg": 0,
  "carbohydrates_total_g": 22,
  "fiber_g": 3,
  "sugar_g": 2
}
,{
  "name": "Pasta",
  "calories": 220,
  "serving_size_g": 100,
  "fat_total_g": 5,
  "fat_saturated_g": 1,
  "protein_g": 7,
  "sodium_mg": 150,
  "potassium_mg": 100,
  "cholesterol_mg": 10,
  "carbohydrates_total_g": 35,
  "fiber_g": 2,
  "sugar_g": 2
}
,{
  "name": "Veg Lollipop",
  "calories": 180,
  "serving_size_g": 100,
  "fat_total_g": 8,
  "fat_saturated_g": 1,
  "protein_g": 5,
  "sodium_mg": 450,
  "potassium_mg": 80,
  "cholesterol_mg": 0,
  "carbohydrates_total_g": 20,
  "fiber_g": 2,
  "sugar_g": 1
}
,{
  "name": "Choco Lava Cake",
  "calories": 360,
  "serving_size_g": 100,
  "fat_total_g": 18,
  "fat_saturated_g": 8,
  "protein_g": 5,
  "sodium_mg": 300,
  "potassium_mg": 200,
  "cholesterol_mg": 45,
  "carbohydrates_total_g": 50,
  "fiber_g": 3,
  "sugar_g": 35
}
,{
  "name": "ice cream ",
  "calories": 207,
  "serving_size_g": 100,
  "fat_total_g": 11,
  "fat_saturated_g": 7,
  "protein_g": 3,
  "sodium_mg": 80,
  "potassium_mg": 160,
  "cholesterol_mg": 44,
  "carbohydrates_total_g": 24,
  "fiber_g": 0,
  "sugar_g": 21
}
,
  {
    "name": "Salted Potato Chips",
    "calories": 550,
    "serving_size_g": 100,
    "fat_total_g": 35,
    "fat_saturated_g": 4,
    "protein_g": 6,
    "sodium_mg": 1100,
    "potassium_mg": 1200,
    "cholesterol_mg": 0,
    "carbohydrates_total_g": 50,
    "fiber_g": 4,
    "sugar_g": 0
},{
  "name": "Salted Pretzels",
  "calories": 380,
  "serving_size_g": 100,
  "fat_total_g": 3,
  "fat_saturated_g": 0,
  "protein_g": 8,
  "sodium_mg": 1200,
  "potassium_mg": 200,
  "cholesterol_mg": 0,
  "carbohydrates_total_g": 80,
  "fiber_g": 3,
  "sugar_g": 1
}
,{
  "name": "Milk Chocolate",
  "calories": 530,
  "serving_size_g": 100,
  "fat_total_g": 30,
  "fat_saturated_g": 18,
  "protein_g": 6,
  "sodium_mg": 60,
  "potassium_mg": 400,
  "cholesterol_mg": 20,
  "carbohydrates_total_g": 60,
  "fiber_g": 2,
  "sugar_g": 55
},{
  "name": "Salted Caramel Candy",
  "calories": 430,
  "serving_size_g": 100,
  "fat_total_g": 14,
  "fat_saturated_g": 9,
  "protein_g": 2,
  "sodium_mg": 700,
  "potassium_mg": 100,
  "cholesterol_mg": 10,
  "carbohydrates_total_g": 72,
  "fiber_g": 1,
  "sugar_g": 62
},
{
  "name": "Gummy Bears",
  "calories": 350,
  "serving_size_g": 100,
  "fat_total_g": 0,
  "fat_saturated_g": 0,
  "protein_g": 5,
  "sodium_mg": 45,
  "potassium_mg": 20,
  "cholesterol_mg": 0,
  "carbohydrates_total_g": 83,
  "fiber_g": 0,
  "sugar_g": 70
},
{
  "name": "Table Salt",
  "calories": 0,
  "serving_size_g": 100,
  "fat_total_g": 0,
  "fat_saturated_g": 0,
  "protein_g": 0,
  "sodium_mg": 38758,
  "potassium_mg": 8,
  "cholesterol_mg": 0,
  "carbohydrates_total_g": 0,
  "fiber_g": 0,
  "sugar_g": 0
}
,
{
  "name": "Dairy Milk Chocolate",
  "calories": 535,
  "serving_size_g": 100,
  "fat_total_g": 30,
  "fat_saturated_g": 19,
  "protein_g": 7,
  "sodium_mg": 60,
  "potassium_mg": 400,
  "cholesterol_mg": 24,
  "carbohydrates_total_g": 58,
  "fiber_g": 3,
  "sugar_g": 55
}
,
 {

      "name": "Butter Chicken",
      "calories": 240,
      "serving_size_g": 100,
      "fat_total_g": 15,
      "fat_saturated_g": 7,
      "protein_g": 12,
      "sodium_mg": 400,
      "potassium_mg": 240,
      "cholesterol_mg": 50,
      "carbohydrates_total_g": 8,
      "fiber_g": 1.2,
      "sugar_g": 2
  },
  {
      "name": "Paneer Butter Masala",
      "calories": 280,
      "serving_size_g": 100,
      "fat_total_g": 20,
      "fat_saturated_g": 8,
      "protein_g": 10,
      "sodium_mg": 350,
      "potassium_mg": 210,
      "cholesterol_mg": 40,
      "carbohydrates_total_g": 10,
      "fiber_g": 1.4,
      "sugar_g": 3
  },
  {
      "name": "Dal Makhani",
      "calories": 180,
      "serving_size_g": 100,
      "fat_total_g": 9,
      "fat_saturated_g": 3,
      "protein_g": 7,
      "sodium_mg": 300,
      "potassium_mg": 220,
      "cholesterol_mg": 10,
      "carbohydrates_total_g": 17,
      "fiber_g": 6,
      "sugar_g": 2
  },
  {
      "name": "Rogan Josh",
      "calories": 220,
      "serving_size_g": 100,
      "fat_total_g": 14,
      "fat_saturated_g": 5,
      "protein_g": 12,
      "sodium_mg": 360,
      "potassium_mg": 270,
      "cholesterol_mg": 50,
      "carbohydrates_total_g": 5,
      "fiber_g": 1,
      "sugar_g": 1
  },
  {
      "name": "Chole Bhature",
      "calories": 300,
      "serving_size_g": 100,
      "fat_total_g": 12,
      "fat_saturated_g": 2,
      "protein_g": 8,
      "sodium_mg": 420,
      "potassium_mg": 250,
      "cholesterol_mg": 0,
      "carbohydrates_total_g": 42,
      "fiber_g": 7,
      "sugar_g": 2
  },
  {
      "name": "Kadhi Pakora",
      "calories": 150,
      "serving_size_g": 100,
      "fat_total_g": 8,
      "fat_saturated_g": 2,
      "protein_g": 4,
      "sodium_mg": 300,
      "potassium_mg": 140,
      "cholesterol_mg": 5,
      "carbohydrates_total_g": 12,
      "fiber_g": 2,
      "sugar_g": 3
  },
  {
      "name": "Rajma",
      "calories": 130,
      "serving_size_g": 100,
      "fat_total_g": 3,
      "fat_saturated_g": 0.5,
      "protein_g": 6,
      "sodium_mg": 270,
      "potassium_mg": 300,
      "cholesterol_mg": 0,
      "carbohydrates_total_g": 20,
      "fiber_g": 7,
      "sugar_g": 2
  },
  {
      "name": "Dosa",
      "calories": 160,
      "serving_size_g": 100,
      "fat_total_g": 6,
      "fat_saturated_g": 1,
      "protein_g": 4,
      "sodium_mg": 300,
      "potassium_mg": 120,
      "cholesterol_mg": 0,
      "carbohydrates_total_g": 25,
      "fiber_g": 1,
      "sugar_g": 1
  },
  {
      "name": "Idli",
      "calories": 110,
      "serving_size_g": 100,
      "fat_total_g": 0.5,
      "fat_saturated_g": 0,
      "protein_g": 2,
      "sodium_mg": 260,
      "potassium_mg": 40,
      "cholesterol_mg": 0,
      "carbohydrates_total_g": 24,
      "fiber_g": 1,
      "sugar_g": 0.5
  }
,  

        {
          "name": "chicken breast",
          "calories": 165,
          "serving_size_g": 100,
          "fat_total_g": 3.6,
          "fat_saturated_g": 1,
          "protein_g": 31,
          "sodium_mg": 74,
          "potassium_mg": 256,
          "cholesterol_mg": 85,
          "carbohydrates_total_g": 0,
          "fiber_g": 0,
          "sugar_g": 0
        },
        {
          "name": "broccoli",
          "calories": 55,
          "serving_size_g": 100,
          "fat_total_g": 0.6,
          "fat_saturated_g": 0.1,
          "protein_g": 4.7,
          "sodium_mg": 33,
          "potassium_mg": 316,
          "cholesterol_mg": 0,
          "carbohydrates_total_g": 11.2,
          "fiber_g": 2.6,
          "sugar_g": 1.7
        },
        {
          "name": "salmon",
          "calories": 206,
          "serving_size_g": 100,
          "fat_total_g": 13,
          "fat_saturated_g": 3.1,
          "protein_g": 22,
          "sodium_mg": 59,
          "potassium_mg": 628,
          "cholesterol_mg": 63,
          "carbohydrates_total_g": 0,
          "fiber_g": 0,
          "sugar_g": 0
        },
        {
          "name": "quinoa",
          "calories": 120,
          "serving_size_g": 100,
          "fat_total_g": 1.9,
          "fat_saturated_g": 0.2,
          "protein_g": 4.1,
          "sodium_mg": 5,
          "potassium_mg": 318,
          "cholesterol_mg": 0,
          "carbohydrates_total_g": 21.3,
          "fiber_g": 2.8,
          "sugar_g": 0.9
        },
        {
          "name": "apple",
          "calories": 52,
          "serving_size_g": 100,
          "fat_total_g": 0.2,
          "fat_saturated_g": 0,
          "protein_g": 0.3,
          "sodium_mg": 1,
          "potassium_mg": 107,
          "cholesterol_mg": 0,
          "carbohydrates_total_g": 14,
          "fiber_g": 2.4,
          "sugar_g": 10.4
        },
        {
          "name": "tofu",
          "calories": 144,
          "serving_size_g": 100,
          "fat_total_g": 8,
          "fat_saturated_g": 1.2,
          "protein_g": 15.7,
          "sodium_mg": 7,
          "potassium_mg": 121,
          "cholesterol_mg": 0,
          "carbohydrates_total_g": 2.3,
          "fiber_g": 0.3,
          "sugar_g": 0.6
        },
        {
          "name": "sweet potato",
          "calories": 86,
          "serving_size_g": 100,
          "fat_total_g": 0.1,
          "fat_saturated_g": 0,
          "protein_g": 1.6,
          "sodium_mg": 55,
          "potassium_mg": 337,
          "cholesterol_mg": 0,
          "carbohydrates_total_g": 20.1,
          "fiber_g": 3,
          "sugar_g": 4.2
        },
        {
          "name": "ground beef",
          "calories": 250,
          "serving_size_g": 100,
          "fat_total_g": 20,
          "fat_saturated_g": 8,
          "protein_g": 26,
          "sodium_mg": 75,
          "potassium_mg": 270,
          "cholesterol_mg": 80,
          "carbohydrates_total_g": 0,
          "fiber_g": 0,
          "sugar_g": 0
        },
        {
          "name": "spinach",
          "calories": 23,
          "serving_size_g": 100,
          "fat_total_g": 0.4,
          "fat_saturated_g": 0.1,
          "protein_g": 2.9,
          "sodium_mg": 79,
          "potassium_mg": 558,
          "cholesterol_mg": 0,
          "carbohydrates_total_g": 3.6,
          "fiber_g": 2.2,
          "sugar_g": 0.4
        },
        {
          "name": "banana",
          "calories": 89,
          "serving_size_g": 100,
          "fat_total_g": 0.3,
          "fat_saturated_g": 0.1,
          "protein_g": 1.1,
          "sodium_mg": 1,
          "potassium_mg": 358,
          "cholesterol_mg": 0,
          "carbohydrates_total_g": 22.8,
          "fiber_g": 2.6,
          "sugar_g": 12.2
        },
        {
          "name": "cheddar cheese",
          "calories": 402,
          "serving_size_g": 100,
          "fat_total_g": 33,
          "fat_saturated_g": 21,
          "protein_g": 25,
          "sodium_mg": 621,
          "potassium_mg": 183,
          "cholesterol_mg": 105,
          "carbohydrates_total_g": 1.3,
          "fiber_g": 0,
          "sugar_g": 0.5
        },
        {
          "name": "brown rice",
          "calories": 111,
          "serving_size_g": 100,
          "fat_total_g": 0.9,
          "fat_saturated_g": 0.2,
          "protein_g": 2.6,
          "sodium_mg": 5,
          "potassium_mg": 143,
          "cholesterol_mg": 0,
          "carbohydrates_total_g": 23,
          "fiber_g": 1.8,
          "sugar_g": 0.4
        },
        {
          "name": "egg",
          "calories": 155,
          "serving_size_g": 100,
          "fat_total_g": 11,
          "fat_saturated_g": 3.1,
          "protein_g": 13,
          "sodium_mg": 126,
          "potassium_mg": 126,
          "cholesterol_mg": 373,
          "carbohydrates_total_g": 1.1,
          "fiber_g": 0,
          "sugar_g": 0.7
        }
      ,
        {
          "name": "margherita pizza",
          "calories": 285,
          "serving_size_g": 100,
          "fat_total_g": 10,
          "fat_saturated_g": 4,
          "protein_g": 12,
          "sodium_mg": 600,
          "potassium_mg": 200,
          "cholesterol_mg": 25,
          "carbohydrates_total_g": 36,
          "fiber_g": 2,
          "sugar_g": 3
        },
        {
          "name": "spaghetti carbonara",
          "calories": 400,
          "serving_size_g": 200,
          "fat_total_g": 20,
          "fat_saturated_g": 8,
          "protein_g": 14,
          "sodium_mg": 900,
          "potassium_mg": 350,
          "cholesterol_mg": 75,
          "carbohydrates_total_g": 45,
          "fiber_g": 3,
          "sugar_g": 2
        },
        {
          "name": "risotto",
          "calories": 250,
          "serving_size_g": 200,
          "fat_total_g": 8,
          "fat_saturated_g": 3,
          "protein_g": 8,
          "sodium_mg": 500,
          "potassium_mg": 300,
          "cholesterol_mg": 20,
          "carbohydrates_total_g": 40,
          "fiber_g": 2,
          "sugar_g": 1
        },
        {
          "name": "lasagna",
          "calories": 350,
          "serving_size_g": 200,
          "fat_total_g": 15,
          "fat_saturated_g": 7,
          "protein_g": 20,
          "sodium_mg": 800,
          "potassium_mg": 400,
          "cholesterol_mg": 70,
          "carbohydrates_total_g": 40,
          "fiber_g": 3,
          "sugar_g": 4
        }
      ,
        {
          "name": "paneer butter masala",
          "calories": 300,
          "serving_size_g": 200,
          "fat_total_g": 24,
          "fat_saturated_g": 15,
          "protein_g": 14,
          "sodium_mg": 800,
          "potassium_mg": 450,
          "cholesterol_mg": 60,
          "carbohydrates_total_g": 18,
          "fiber_g": 2,
          "sugar_g": 5
        },
        {
          "name": "biryani",
          "calories": 380,
          "serving_size_g": 200,
          "fat_total_g": 15,
          "fat_saturated_g": 6,
          "protein_g": 18,
          "sodium_mg": 900,
          "potassium_mg": 400,
          "cholesterol_mg": 50,
          "carbohydrates_total_g": 52,
          "fiber_g": 3,
          "sugar_g": 2
        },
        {
          "name": "dal tadka",
          "calories": 180,
          "serving_size_g": 200,
          "fat_total_g": 7,
          "fat_saturated_g": 1,
          "protein_g": 10,
          "sodium_mg": 500,
          "potassium_mg": 300,
          "cholesterol_mg": 0,
          "carbohydrates_total_g": 22,
          "fiber_g": 6,
          "sugar_g": 3
        },
        {
          "name": "aloo gobi",
          "calories": 150,
          "serving_size_g": 200,
          "fat_total_g": 8,
          "fat_saturated_g": 1,
          "protein_g": 4,
          "sodium_mg": 400,
          "potassium_mg": 500,
          "cholesterol_mg": 0,
          "carbohydrates_total_g": 18,
          "fiber_g": 5,
          "sugar_g": 2
        },
        {
          "name": "Bhindi Masala",
          "calories": 95,
          "serving_size_g": 100,
          "fat_total_g": 7,
          "fat_saturated_g": 1,
          "protein_g": 1.7,
          "sodium_mg": 300,
          "potassium_mg": 200,
          "cholesterol_mg": 0,
          "carbohydrates_total_g": 7,
          "fiber_g": 3,
          "sugar_g": 2
      },
      {
          "name": "Palak Paneer",
          "calories": 190,
          "serving_size_g": 100,
          "fat_total_g": 14,
          "fat_saturated_g": 7,
          "protein_g": 8,
          "sodium_mg": 280,
          "potassium_mg": 280,
          "cholesterol_mg": 25,
          "carbohydrates_total_g": 7,
          "fiber_g": 2.5,
          "sugar_g": 1
      },
      {
          "name": "Korma",
          "calories": 220,
          "serving_size_g": 100,
          "fat_total_g": 18,
          "fat_saturated_g": 9,
          "protein_g": 6,
          "sodium_mg": 270,
          "potassium_mg": 220,
          "cholesterol_mg": 30,
          "carbohydrates_total_g": 6,
          "fiber_g": 1.5,
          "sugar_g": 1
      },
      {
          "name": "Pindi Chole",
          "calories": 180,
          "serving_size_g": 100,
          "fat_total_g": 7,
          "fat_saturated_g": 1,
          "protein_g": 8,
          "sodium_mg": 420,
          "potassium_mg": 240,
          "cholesterol_mg": 0,
          "carbohydrates_total_g": 22,
          "fiber_g": 8,
          "sugar_g": 2
      },
      {
          "name": "Makki Ki Roti & Sarson Ka Saag",
          "calories": 270,
          "serving_size_g": 100,
          "fat_total_g": 10,
          "fat_saturated_g": 4,
          "protein_g": 6,
          "sodium_mg": 150,
          "potassium_mg": 220,
          "cholesterol_mg": 0,
          "carbohydrates_total_g": 35,
          "fiber_g": 7,
          "sugar_g": 3
      },
      {
          "name": "Baingan Bharta",
          "calories": 100,
          "serving_size_g": 100,
          "fat_total_g": 6,
          "fat_saturated_g": 1,
          "protein_g": 2,
          "sodium_mg": 200,
          "potassium_mg": 280,
          "cholesterol_mg": 0,
          "carbohydrates_total_g": 10,
          "fiber_g": 4,
          "sugar_g": 3
      },
      {
          "name": "Pav Bhaji",
          "calories": 190,
          "serving_size_g": 100,
          "fat_total_g": 9,
          "fat_saturated_g": 2,
          "protein_g": 4,
          "sodium_mg": 400,
          "potassium_mg": 220,
          "cholesterol_mg": 0,
          "carbohydrates_total_g": 24,
          "fiber_g": 4,
          "sugar_g": 3
      },
      {
          "name": "Tandoori Chicken",
          "calories": 140,
          "serving_size_g": 100,
          "fat_total_g": 4,
          "fat_saturated_g": 1,
          "protein_g": 25,
          "sodium_mg": 450,
          "potassium_mg": 300,
          "cholesterol_mg": 70,
          "carbohydrates_total_g": 2,
          "fiber_g": 0.5,
          "sugar_g": 1
      },
      {
          "name": "Litti Chokha",
          "calories": 170,
          "serving_size_g": 100,
          "fat_total_g": 6,
          "fat_saturated_g": 1,
          "protein_g": 4,
          "sodium_mg": 220,
          "potassium_mg": 200,
          "cholesterol_mg": 0,
          "carbohydrates_total_g": 25,
          "fiber_g": 5,
          "sugar_g": 1
      },
      {
          "name": "Sambar",
          "calories": 70,
          "serving_size_g": 100,
          "fat_total_g": 2,
          "fat_saturated_g": 0.5,
          "protein_g": 2.5,
          "sodium_mg": 200,
          "potassium_mg": 180,
          "cholesterol_mg": 0,
          "carbohydrates_total_g": 12,
          "fiber_g": 3,
          "sugar_g": 1
      },
      {
          "name": "Rasam",
          "calories": 50,
          "serving_size_g": 100,
          "fat_total_g": 1,
          "fat_saturated_g": 0.2,
          "protein_g": 2,
          "sodium_mg": 150,
          "potassium_mg": 120,
          "cholesterol_mg": 0,
          "carbohydrates_total_g": 10,
          "fiber_g": 1,
          "sugar_g": 1
      },
      {
          "name": "Hyderabadi Biryani",
          "calories": 210,
          "serving_size_g": 100,
          "fat_total_g": 8,
          "fat_saturated_g": 3,
          "protein_g": 7,
          "sodium_mg": 300,
          "potassium_mg": 170,
          "cholesterol_mg": 30,
          "carbohydrates_total_g": 26,
          "fiber_g": 2,
          "sugar_g": 1.5
      },
      {
          "name": "Uttapam",
          "calories": 150,
          "serving_size_g": 100,
          "fat_total_g": 4,
          "fat_saturated_g": 1,
          "protein_g": 5,
          "sodium_mg": 220,
          "potassium_mg": 110,
          "cholesterol_mg": 0,
          "carbohydrates_total_g": 24,
          "fiber_g": 1,
          "sugar_g": 2
      },
      {
          "name": "Pongal",
          "calories": 120,
          "serving_size_g": 100,
          "fat_total_g": 3,
          "fat_saturated_g": 1,
          "protein_g": 3,
          "sodium_mg": 250,
          "potassium_mg": 110,
          "cholesterol_mg": 0,
          "carbohydrates_total_g": 20,
          "fiber_g": 1,
          "sugar_g": 0.5
      },
      {
          "name": "Andhra Chicken Curry",
          "calories": 170,
          "serving_size_g": 100,
          "fat_total_g": 10,
          "fat_saturated_g": 2,
          "protein_g": 12,
          "sodium_mg": 400,
          "potassium_mg": 280,
          "cholesterol_mg": 45,
          "carbohydrates_total_g": 3,
          "fiber_g": 0.5,
          "sugar_g": 0.2
      },
      {
          "name": "Fish Moilee",
          "calories": 180,
          "serving_size_g": 100,
          "fat_total_g": 13,
          "fat_saturated_g": 6,
          "protein_g": 12,
          "sodium_mg": 350,
          "potassium_mg": 220,
          "cholesterol_mg": 45,
          "carbohydrates_total_g": 3,
          "fiber_g": 1,
          "sugar_g": 1
      },
      {
          "name": "Dhokla",
          "calories": 160,
          "serving_size_g": 100,
          "fat_total_g": 4,
          "fat_saturated_g": 0.5,
          "protein_g": 8,
          "sodium_mg": 150,
          "potassium_mg": 110,
          "cholesterol_mg": 0,
          "carbohydrates_total_g": 24,
          "fiber_g": 1.5,
          "sugar_g": 2
      },
      {
          "name": "Misal Pav",
          "calories": 280,
          "serving_size_g": 100,
          "fat_total_g": 11,
          "fat_saturated_g": 2,
          "protein_g": 7,
          "sodium_mg": 400,
          "potassium_mg": 250,
          "cholesterol_mg": 0,
          "carbohydrates_total_g": 34,
          "fiber_g": 5,
          "sugar_g": 3
      },
      {
        "name": "Mango",
        "calories": 60,
        "serving_size_g": 100,
        "fat_total_g": 0.4,
        "fat_saturated_g": 0.1,
        "protein_g": 0.8,
        "sodium_mg": 1,
        "potassium_mg": 168,
        "cholesterol_mg": 0,
        "carbohydrates_total_g": 15,
        "fiber_g": 1.6,
        "sugar_g": 14
    },
    {
        "name": "Orange",
        "calories": 47,
        "serving_size_g": 100,
        "fat_total_g": 0.1,
        "fat_saturated_g": 0.02,
        "protein_g": 0.9,
        "sodium_mg": 1,
        "potassium_mg": 181,
        "cholesterol_mg": 0,
        "carbohydrates_total_g": 12,
        "fiber_g": 2.4,
        "sugar_g": 9
    },
    {
        "name": "Apple",
        "calories": 52,
        "serving_size_g": 100,
        "fat_total_g": 0.2,
        "fat_saturated_g": 0,
        "protein_g": 0.3,
        "sodium_mg": 1,
        "potassium_mg": 107,
        "cholesterol_mg": 0,
        "carbohydrates_total_g": 14,
        "fiber_g": 2.4,
        "sugar_g": 10.4
    },
    {
        "name": "Grapes",
        "calories": 69,
        "serving_size_g": 100,
        "fat_total_g": 0.2,
        "fat_saturated_g": 0.1,
        "protein_g": 0.7,
        "sodium_mg": 2,
        "potassium_mg": 191,
        "cholesterol_mg": 0,
        "carbohydrates_total_g": 18,
        "fiber_g": 0.9,
        "sugar_g": 16
    },
    {
        "name": "Strawberry",
        "calories": 32,
        "serving_size_g": 100,
        "fat_total_g": 0.3,
        "fat_saturated_g": 0.1,
        "protein_g": 0.7,
        "sodium_mg": 1,
        "potassium_mg": 153,
        "cholesterol_mg": 0,
        "carbohydrates_total_g": 7.7,
        "fiber_g": 2,
        "sugar_g": 4.9
    },
    {
        "name": "Pineapple",
        "calories": 50,
        "serving_size_g": 100,
        "fat_total_g": 0.1,
        "fat_saturated_g": 0,
        "protein_g": 0.5,
        "sodium_mg": 1,
        "potassium_mg": 109,
        "cholesterol_mg": 0,
        "carbohydrates_total_g": 13,
        "fiber_g": 1.4,
        "sugar_g": 9.9
    },
    {
        "name": "Watermelon",
        "calories": 30,
        "serving_size_g": 100,
        "fat_total_g": 0.2,
        "fat_saturated_g": 0,
        "protein_g": 0.6,
        "sodium_mg": 1,
        "potassium_mg": 112,
        "cholesterol_mg": 0,
        "carbohydrates_total_g": 8,
        "fiber_g": 0.4,
        "sugar_g": 6
    },
    {
        "name": "Blueberry",
        "calories": 57,
        "serving_size_g": 100,
        "fat_total_g": 0.3,
        "fat_saturated_g": 0,
        "protein_g": 0.7,
        "sodium_mg": 1,
        "potassium_mg": 77,
        "cholesterol_mg": 0,
        "carbohydrates_total_g": 14,
        "fiber_g": 2.4,
        "sugar_g": 10
    },
    {
        "name": "Peach",
        "calories": 39,
        "serving_size_g": 100,
        "fat_total_g": 0.3,
        "fat_saturated_g": 0,
        "protein_g": 0.9,
        "sodium_mg": 0,
        "potassium_mg": 190,
        "cholesterol_mg": 0,
        "carbohydrates_total_g": 10,
        "fiber_g": 1.5,
        "sugar_g": 8.4
    },
    {
        "name": "Cherries",
        "calories": 63,
        "serving_size_g": 100,
        "fat_total_g": 0.2,
        "fat_saturated_g": 0,
        "protein_g": 1,
        "sodium_mg": 0,
        "potassium_mg": 222,
        "cholesterol_mg": 0,
        "carbohydrates_total_g": 16,
        "fiber_g": 2.1,
        "sugar_g": 12.8
    },
    {
        "name": "Kiwi",
        "calories": 61,
        "serving_size_g": 100,
        "fat_total_g": 0.5,
        "fat_saturated_g": 0.1,
        "protein_g": 1.1,
        "sodium_mg": 3,
        "potassium_mg": 312,
        "cholesterol_mg": 0,
        "carbohydrates_total_g": 15,
        "fiber_g": 3,
        "sugar_g": 9
    },
    {
        "name": "Pomegranate",
        "calories": 83,
        "serving_size_g": 100,
        "fat_total_g": 1.2,
        "fat_saturated_g": 0.1,
        "protein_g": 1.7,
        "sodium_mg": 3,
        "potassium_mg": 236,
        "cholesterol_mg": 0,
        "carbohydrates_total_g": 19,
        "fiber_g": 4,
        "sugar_g": 14
    },
    {
        "name": "Papaya",
        "calories": 43,
        "serving_size_g": 100,
        "fat_total_g": 0.3,
        "fat_saturated_g": 0.1,
        "protein_g": 0.5,
        "sodium_mg": 4,
        "potassium_mg": 182,
        "cholesterol_mg": 0,
        "carbohydrates_total_g": 11,
        "fiber_g": 1.7,
        "sugar_g": 8
    },
    {
        "name": "Guava",
        "calories": 68,
        "serving_size_g": 100,
        "fat_total_g": 0.6,
        "fat_saturated_g": 0.1,
        "protein_g": 2.6,
        "sodium_mg": 2,
        "potassium_mg": 417,
        "cholesterol_mg": 0,
        "carbohydrates_total_g": 14,
        "fiber_g": 5.4,
        "sugar_g": 8.9
    },
    {
        "name": "Lychee",
        "calories": 66,
        "serving_size_g": 100,
        "fat_total_g": 0.4,
        "fat_saturated_g": 0,
        "protein_g": 0.8,
        "sodium_mg": 0,
        "potassium_mg": 171,
        "cholesterol_mg": 0,
        "carbohydrates_total_g": 17,
        "fiber_g": 1.3,
        "sugar_g": 15
    },
    
  {
      "name": "Chicken Fried Rice",
      "calories": 290,
      "serving_size_g": 100,
      "fat_total_g": 10,
      "fat_saturated_g": 3,
      "protein_g": 10,
      "sodium_mg": 600,
      "potassium_mg": 300,
      "cholesterol_mg": 55,
      "carbohydrates_total_g": 40,
      "fiber_g": 1,
      "sugar_g": 1
  },
  {
      "name": "Shrimp Fried Rice",
      "calories": 330,
      "serving_size_g": 100,
      "fat_total_g": 12,
      "fat_saturated_g": 4,
      "protein_g": 15,
      "sodium_mg": 700,
      "potassium_mg": 350,
      "cholesterol_mg": 100,
      "carbohydrates_total_g": 35,
      "fiber_g": 1,
      "sugar_g": 1
  },
  {
      "name": "Egg Fried Rice",
      "calories": 250,
      "serving_size_g": 100,
      "fat_total_g": 8,
      "fat_saturated_g": 3,
      "protein_g": 9,
      "sodium_mg": 400,
      "potassium_mg": 200,
      "cholesterol_mg": 70,
      "carbohydrates_total_g": 36,
      "fiber_g": 1,
      "sugar_g": 1
  }
  
      // Add more products here...
  ];
  localStorage.setItem("productlist", JSON.stringify(products));
}

// Get Data from Local Storage
function getData() {
  let productList = localStorage.getItem("productlist");
  let a=JSON.parse(productList);
  console.log(a);
  return a;
}