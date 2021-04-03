{
  let persons = [
    {
      name: "admin",
      email: "admin@gmail.com",
      type: "front end",
      password: "admin1234",
    },
    {
      name: "password",
      email: "password@gmail.com",
      type: "back end",
      password: "password1234",
    },
    {
      name: "sudarshan",
      email: "sudarshan@gmail.com",
      type: "designer",
      password: "sudarshan1234",
    },
  ];
  let form = document.querySelector(".signup");
  let form2 = document.querySelector(".login");

  // handle submit func
  let handleSubmit = (event) => {
    event.preventDefault();
    let person = {};
    let formval = event.target;
    // name validation
    if (formval.name.value.length === 0 || formval.name.value.length > 15) {
      formval.name.classList.add("invalid");
      formval.name.classList.remove("valid");

      formval.name.nextElementSibling.innerText =
        "name should be 6-15 char long";
    } else {
      formval.name.classList.remove("invalid");
      formval.name.nextElementSibling.innerText = "";
      person.name = formval.name.value;
      formval.name.classList.add("valid");
    }
    // email validation
    if (
      formval.email.value.length < 5 ||
      formval.email.value.includes("@") === false ||
      formval.email.value.length > 41
    ) {
      formval.email.classList.add("invalid");
      formval.email.classList.remove("valid");

      formval.email.nextElementSibling.innerText =
        "email should be 6-41 char long and must contain @ symbol";
    } else {
      formval.email.classList.remove("invalid");
      formval.email.nextElementSibling.innerText = "";
      person.email = formval.email.value;
      formval.email.classList.add("valid");
    }

    // type validation

    if (formval.type.value.length === 0) {
      formval.type.classList.add("invalid");
      formval.type.classList.remove("valid");

      formval.type.nextElementSibling.innerText = "Type must be selected";
    } else {
      formval.type.classList.remove("invalid");
      formval.type.nextElementSibling.innerText = "";
      person.type = formval.type.value;
      formval.type.classList.add("valid");
    }

    // password validation
    if (formval.password.value.length < 9) {
      formval.password.classList.add("invalid");
    } else {
      let passwordspan = document.querySelector(".password-span");
      passwordspan.innerText = "";
      formval.password.classList.remove("invalid");
      formval.password.classList.remove("valid");

      formval.password.nextElementSibling.innerText = "";
      person.password = formval.password.value;
      formval.password.classList.add("valid");
    }
    // if all are valid push person into persons
    if (
      formval.name.classList.contains("valid") ||
      formval.email.classList.contains("valid") ||
      formval.type.classList.contains("valid") ||
      formval.password.classList.contains("valid")
    ) {
      persons.push(person);
      console.log(person);
      alert("Your form is submitted");
      formval.name.value = "";
      formval.email.value = "";
      formval.type.value = "";
      formval.password.value = "";
    }
  };

  let signupUI = () => {
    form.innerHTML = "";

    let namefieldset = document.createElement("fieldset");
    let namelabel = document.createElement("label");
    namelabel.for = "name";
    let nameinput = document.createElement("input");
    nameinput.type = "text";
    nameinput.name = "name";
    nameinput.id = "name";
    nameinput.placeholder = "Your Name";
    let namespan = document.createElement("span");
    namespan.setAttribute("data-name", "name");
    namefieldset.append(namelabel, nameinput, namespan);

    let emailfieldset = document.createElement("fieldset");
    let emaillabel = document.createElement("label");
    emaillabel.for = "email";
    let emailinput = document.createElement("input");
    emailinput.type = "email";
    emailinput.name = "email";
    emailinput.id = "email";
    emailinput.placeholder = "Your email";
    let emailspan = document.createElement("span");
    emailspan.setAttribute("data-name", "email");
    emailfieldset.append(emaillabel, emailinput, emailspan);

    let typefieldset = document.createElement("fieldset");
    let typeselect = document.createElement("select");
    typeselect.name = "type";
    typeselect.id = "type";
    let typeoption1 = document.createElement("option");
    typeoption1.id = "type-placeholder";
    typeoption1.value = "";
    typeoption1.disabled = true;
    typeoption1.selected = true;
    typeoption1.innerText = "I would describe my user type as";
    let typeoption2 = document.createElement("option");
    typeoption2.value = "front end";
    typeoption2.innerText = "Front end developer";
    let typeoption3 = document.createElement("option");
    typeoption3.value = "back end";
    typeoption3.innerText = "Back end developer";
    let typeoption4 = document.createElement("option");
    typeoption4.value = "designer";
    typeoption4.innerText = "Designer";
    typeselect.append(typeoption1, typeoption2, typeoption3, typeoption4);
    let typespan = document.createElement("span");
    typefieldset.append(typeselect, typespan);

    let passwordfieldset = document.createElement("fieldset");
    let passwordlabel = document.createElement("label");
    passwordlabel.for = "password";
    let passworddiv = document.createElement("div");
    passworddiv.classList.add("flex");
    let passwordinput = document.createElement("input");
    passwordinput.type = "password";
    passwordinput.name = "password";
    passwordinput.id = "password";
    passwordinput.placeholder = "Your password";
    passwordinput.classList.add("flex-90", "pass-input");
    let passworda = document.createElement("a");
    passworda.href = "#";
    passworda.classList.add("flex-10", "pass-eye");
    let passwordi = document.createElement("i");
    passwordi.classList.add("fas", "fa-eye");
    passworda.append(passwordi);
    passworda.addEventListener("click", () => {
      if (passwordinput.type === "password") {
        passwordinput.type = "text";
      } else if (passwordinput.type === "text") {
        passwordinput.type = "password";
      }
    });
    passworddiv.append(passwordinput, passworda);
    let passwordspan = document.createElement("span");
    passwordspan.setAttribute("data-name", "password");
    passwordspan.innerText = "Minimum 8 characters";
    passwordspan.classList.add("password-span");
    passwordfieldset.append(passwordlabel, passworddiv, passwordspan);

    let signupbutton = document.createElement("button");
    signupbutton.type = "submit";
    signupbutton.id = "form-btn";
    signupbutton.innerText = "SignUp";

    form.append(
      namefieldset,
      emailfieldset,
      typefieldset,
      passwordfieldset,
      signupbutton
    );
    form.addEventListener("submit", handleSubmit);
  };

  let handleLogIn = (event) => {
    event.preventDefault();

    let inputperson = {};
    inputperson.email = event.target.loginemail.value;
    inputperson.password = event.target.loginpassword.value;
    console.log(inputperson);

    let matchedPerson = persons.filter((e) => {
      if (e.email == inputperson.email && e.password == inputperson.password) {
        return "true";
      }
    });
    console.log(matchedPerson);
    if (matchedPerson.length != 0) {
      alert("login sucessfull");
    } else {
      alert("invalid credentials");
    }
  };
  let loginUI = () => {
    form2.innerHTML = "";
    let loginemailfieldset = document.createElement("fieldset");
    let loginemaillabel = document.createElement("label");
    loginemaillabel.innerText = "Enter your Email:";
    loginemaillabel.for = "loginemail";
    let loginemailinput = document.createElement("input");
    loginemailinput.type = "email";
    loginemailinput.name = "loginemail";
    loginemailinput.id = "loginemail";
    loginemailinput.placeholder = "Enter email";
    let loginemailspan = document.createElement("span");
    loginemailspan.setAttribute("data-name", "email");
    loginemailfieldset.append(loginemaillabel, loginemailinput, loginemailspan);

    let loginpasswordfieldset = document.createElement("fieldset");
    let loginpasswordlabel = document.createElement("label");
    loginpasswordlabel.for = "loginpassword";
    loginpasswordlabel.innerText = "Enter your Password:";

    let loginpassworddiv = document.createElement("div");
    loginpassworddiv.classList.add("flex");
    let loginpasswordinput = document.createElement("input");
    loginpasswordinput.type = "password";
    loginpasswordinput.name = "loginpassword";
    loginpasswordinput.id = "loginpassword";
    loginpasswordinput.placeholder = "Enter password";
    loginpasswordinput.classList.add("flex-90", "pass-input");
    let loginpassworda = document.createElement("a");
    loginpassworda.href = "#";
    loginpassworda.classList.add("flex-10", "pass-eye");
    let loginpasswordi = document.createElement("i");
    loginpasswordi.classList.add("fas", "fa-eye");
    loginpassworda.append(loginpasswordi);
    loginpassworda.addEventListener("click", () => {
      if (loginpasswordinput.type === "password") {
        loginpasswordinput.type = "text";
      } else if (loginpasswordinput.type === "text") {
        loginpasswordinput.type = "password";
      }
    });
    loginpassworddiv.append(loginpasswordinput, loginpassworda);
    let loginpasswordspan = document.createElement("span");
    loginpasswordspan.setAttribute("data-name", "password");
    loginpasswordspan.innerText = "Minimum 8 characters";
    loginpasswordspan.classList.add("password-span");
    loginpasswordfieldset.append(
      loginpasswordlabel,
      loginpassworddiv,
      loginpasswordspan
    );
    let loginsignupbutton = document.createElement("button");
    loginsignupbutton.type = "submit";
    loginsignupbutton.id = "form-btn";
    loginsignupbutton.innerText = "SignIn";
    form2.append(loginemailfieldset, loginpasswordfieldset, loginsignupbutton);
    form2.addEventListener("submit", handleLogIn);
  };

  loginUI();
  signupUI();

  let switchForm = document.querySelectorAll(".color-pri");
  let signindiv = document.querySelector(".sign-in-div");
  let signupdiv = document.querySelector(".sign-up-div");

  switchForm.forEach((e) => {
    e.addEventListener("click", () => {
      signindiv.classList.toggle("disable");
      signupdiv.classList.toggle("disable");
    });
  });
}
