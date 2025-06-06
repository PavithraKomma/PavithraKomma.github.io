const showLogin = () => {
    let str=`
    <div class='App-Container'>
    <h1>Login Form</h1>
    <p><input type="text" id="txtEmail" placeholder="mail"></p>
    <p><input type="password" id="txtPass" placeholder="password"></p>
    <p><button onclick='login()'>Log In</button></p>
    <p><button onclick='showRegister()'>Create Account</button></p>
    </div>
    `
    root.innerHTML = str
}

const showRegister = () => {
      let str=`
    <h1>Register Form</h1>
    <p><input type="text" id="txtName"></p>
     <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <button>Register</button>
    <p><button onclick='showLogin()'>Go back to Login</button></p> 
    `
    root.innerHTML = str
}

const login = () => {
    let email = document.getElementById('txtEmail')?.value || 'User';
    root.innerHTML = `<h1>Welcome, ${email}!</h1>`;
}

