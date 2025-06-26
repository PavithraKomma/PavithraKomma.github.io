const users = [];
const user = {};

const showLogin = () => {
  let str = `
    <div>
      <h1>Login Form</h1>
      <p><div id="dvMsg" style="color:red;"></div></p>
      <p><input type="text" id="txtEmail" placeholder="Email"></p>
      <p><input type="password" id="txtPass" placeholder="Password"></p>
      <p><button onclick='validateUser()'>Log In</button></p>
      <p><button onclick='showRegister()'>Create Account</button></p>
    </div>
  `;
  root.innerHTML = str;
};

const showRegister = () => {
  let str = `
    <h1>Register Form</h1>
    <p><input type="text" id="txtName" placeholder="Name"></p>
    <p><input type="text" id="txtEmail" placeholder="Email"></p>
    <p><input type="password" id="txtPass" placeholder="Password"></p>
    <button onclick='addUser()'>Register</button>
    <hr>
    <button onclick='showLogin()'>Already a Member? Login here...</button>
  `;
  root.innerHTML = str;
};

const showHome = () => {
  let str = `
    <h1>Welcome ${user.name}</h1>
    <hr>
    <p>
      <select id="txnType">
        <option value="">-- Select Transaction --</option>
        <option value="deposit">Deposit</option>
        <option value="withdraw">Withdraw</option>
      </select>
    </p>
    <p><input type="number" id="txtAmount" placeholder="Enter amount"></p>
    <p><button onclick="handleTransaction()">Submit</button></p>
    <button onclick='showLogin()'>Logout</button>
    <hr>
    <p><b>Current balance:</b> ₹${user.balance}</p>
    <p id="txnMsg" style="color:green;"></p>
  `;
  root.innerHTML = str;
};

const addUser = () => {
  const newUser = {
    name: document.getElementById("txtName").value,
    email: document.getElementById("txtEmail").value,
    pass: document.getElementById("txtPass").value,
    balance: 0
  };
  users.push(newUser);
  showLogin();
};

const validateUser = () => {
  let email = document.getElementById("txtEmail").value;
  let pass = document.getElementById("txtPass").value;

  const matchedUser = users.find(
    (e) => e.email === email && e.pass === pass
  );

  if (matchedUser) {
    Object.assign(user, matchedUser); 
    showHome();
  } else {
    document.getElementById("dvMsg").innerHTML = "Access Denied";
  }
};

const handleTransaction = () => {
  const type = document.getElementById("txnType").value;
  const amt = parseFloat(document.getElementById("txtAmount").value);
  const msgBox = document.getElementById("txnMsg");

  if (!type || isNaN(amt) || amt <= 0) {
    msgBox.style.color = "red";
    msgBox.innerText = "Please select a transaction type and enter a valid amount.";
    return;
  }

  if (type === "deposit") {
    user.balance += amt;
    msgBox.style.color = "green";
    msgBox.innerText = `Successfully deposited ₹${amt}`;
  } else if (type === "withdraw") {
    if (user.balance >= amt) {
      user.balance -= amt;
      msgBox.style.color = "green";
      msgBox.innerText = `Successfully withdrew ₹${amt}`;
    } else {
      msgBox.style.color = "red";
      msgBox.innerText = "Insufficient balance!";
    }
  }

  setTimeout(showHome, 1500); 
};