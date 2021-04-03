{
  let persons = [];
  let form = document.querySelector("form");

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
      alert("Your form is submitted");
      formval.name.value = "";
      formval.email.value = "";
      formval.type.value = "";
      formval.password.value = "";
    }
  };

  let defaultUI = () => {
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
  };
  form.addEventListener("submit", handleSubmit);

  defaultUI();
}
