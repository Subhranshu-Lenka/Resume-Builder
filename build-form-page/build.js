

// general section data 
const name = document.getElementById("name");
const email = document.getElementById("email");
const headline = document.getElementById("headline");
const phone = document.getElementById("phone");
const city = document.getElementById("city");
const pincode = document.getElementById("pincode");


const nameField = document.querySelector(".name-field");
const headlineField = document.querySelector(".headline-field");
const detailsField = document.querySelector(".details-field");

const generalSaveBtn = document.getElementById("general-save");
generalSaveBtn.addEventListener("click", function () {
    validateData();
});

function validateData() {
    let token = true;
    if (name.value === "") {
        console.log("name field is mandatory");
        showError(name);
        token = false;
    }
    if (headline.value === "") {
        console.log("headline field is mandatory");
        showError(headline);
        token = false;
    }
    if (email.value === "") {
        console.log("email field is mandatory");
        showError(email);
        token = false;
    }
    if (phone.value === "") {
        console.log("phone field is mandatory");
        showError(phone);
        token = false;
    }

    if (token) {
        makeChanges();
    }
}

function makeChanges() {
    nameField.innerHTML = name.value;
    headlineField.innerHTML = headline.value;
    detailsField.innerHTML = `Ph: ${phone.value} <br> Email: ${email.value} <br> ${city.value}, ${pincode.value}`
}

function showError(node) {

    const errMessage = document.createElement("SPAN");

    errMessage.textContent = "This field is required.";
    errMessage.style.color = "red"; // Add some basic styles
    errMessage.style.fontSize = "12px";
    errMessage.style.display = "block"; // Ensure it's visible

    node.parentNode.insertBefore(errMessage, node.nextSibling)
    console.log(node);
}

// skill adder Btn function
const skillBtn = document.getElementById("skill-adder");
function addSkillBox() {
    console.log("in the add skill block");

    const newDiv = document.createElement("DIV");
    const newInput = document.createElement("INPUT");
    const newXbtn = document.createElement("BUTTON");

    newXbtn.textContent = "X";
    newXbtn.classList.add("remove-skill");

    // removing a skill
    newXbtn.addEventListener("click", (event) => {
        console.log("Removing a skill");
        event.target.parentNode.remove();
    })

    newDiv.classList.add("sec-wrap");
    newDiv.appendChild(newInput);
    newDiv.appendChild(newXbtn);

    skillBtn.parentNode.insertBefore(newDiv, skillBtn);
}


// adding qualification
const qualiAddBtn = document.getElementById("qualiAdder");
function addQualification() {
    console.log("in add qualification block");
    const newDiv = buildEdu(document.createElement("div"));
    qualiAddBtn.parentNode.insertBefore(newDiv, qualiAddBtn);
}

// this function builds all the internal strucure of the new qualificatioin div 
function buildEdu(node) {
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");

    let eduTitleDiv = document.createElement("div");
    eduTitleDiv = buildIn(eduTitleDiv);
    eduTitleDiv.firstChild.textContent = "Degree Title";

    let streamDiv = document.createElement("div");
    streamDiv = buildIn(streamDiv);
    streamDiv.firstChild.textContent = "Stream Name";

    let institutionDiv = document.createElement("div");
    institutionDiv = buildIn(institutionDiv);
    institutionDiv.firstChild.textContent = "Institution Name";

    let graduationYearDiv = document.createElement("div");
    graduationYearDiv = buildIn(graduationYearDiv);
    graduationYearDiv.firstChild.textContent = "Graduation Year";

    div1.classList.add("education");
    div2.classList.add("education");

    div1.appendChild(eduTitleDiv);
    div1.appendChild(streamDiv);

    div2.appendChild(institutionDiv);
    div2.appendChild(graduationYearDiv);

    // the div that needs to be returned
    node.appendChild(div1);
    node.appendChild(div2);

    return node;
}

// this function just build the label (span)  and input for each div and appends them to div
function buildIn(node) {
    node.classList.add("edu");
    let span = document.createElement("span");
    let input = document.createElement("input");
    node.appendChild(span);
    node.appendChild(input);

    return node;
}