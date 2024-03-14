const nameField = document.querySelector(".name-field");
const headlineField = document.querySelector(".headline-field");
const detailsField = document.querySelector(".details-field");

const emailSpan = document.getElementById("email-field");
const phoneSpan = document.getElementById("phone-field");
const linkedinSpan = document.getElementById("linkedin-field");
const citySpan = document.getElementById("city-field");
const pincodeSpan = document.getElementById("pincode-field");


const generalInputs = document.querySelectorAll(".general input");
for (let i = 1; i < generalInputs.length; i++) {
    generalInputs[i].addEventListener('input', () => {
        switch (i) {
            case 1:
                nameField.innerText = generalInputs[i].value;
                break;
            case 2:
                emailSpan.innerText = generalInputs[i].value;
                break;
            case 3:
                headlineField.innerText = `${generalInputs[i].value}`;
                break;
            case 4:
                phoneSpan.innerText = `   ${generalInputs[i].value}`;
                break;
            case 5:
                linkedinSpan.innerText = `   ${generalInputs[i].value}`;
                break;
            case 6:
                citySpan.innerText = `   ${generalInputs[i].value}`;
                break;
            case 7:
                pincodeSpan.innerText = `   ${generalInputs[i].value}`;
                break;
        }
    });
}

// profile description
const summaryTextarea = document.querySelector("#summary-textbox");
summaryTextarea.addEventListener("input", () => {
    const summaryPara = document.querySelector(".summary-block p");
    summaryPara.innerText = summaryTextarea.value;
})


// skill adder Btn function
const skillBtn = document.getElementById("skill-adder");
function addSkillBox() {
    console.log("in the add skill block");

    const newDiv = document.createElement("DIV");
    const newInput = document.createElement("INPUT");
    const newXbtn = document.createElement("BUTTON");

    newXbtn.textContent = "X";
    newXbtn.classList.add("remove-skill");

    newDiv.classList.add("sec-wrap");
    newInput.type = "text";
    newDiv.appendChild(newInput);
    newDiv.appendChild(newXbtn);

    skillBtn.parentNode.insertBefore(newDiv, skillBtn);

    const preview = createSkillPreview(newInput);

    // removing a skill
    newXbtn.addEventListener("click", (event) => {
        console.log("Removing a skill");
        event.target.parentNode.remove();
        preview.remove();
    })

    newInput.focus();
}

const skillBlock = document.querySelector(".skill-block");
function createSkillPreview(inputNode) {
    const skillSpan = document.createElement("span");
    skillSpan.classList.add("skill-preview");

    inputNode.addEventListener("input", () => {
        if (inputNode.value === "") {
            skillSpan.style.display = "none";
        }
        else {
            skillSpan.style.display = "inline";
            skillSpan.innerText = `${inputNode.value}`;
        }

    })

    skillBlock.appendChild(skillSpan);
    return skillSpan;
}

// adding qualification
const qualiAddBtn = document.getElementById("qualiAdder");
const qualificationsDiv = document.querySelector(".qualifications");
qualiAddBtn.addEventListener("click", addQualification);

// this function builds all the internal strucure of the new qualificatioin div 
function addQualification() {

    const field = document.createElement("fieldset");
    field.classList.add("edu-field");

    const crossBtn = document.createElement("legend");
    crossBtn.style.color = "red";
    crossBtn.textContent = "X";
    crossBtn.style.textAlign = "right";
    crossBtn.style.cursor = 'pointer';
    field.appendChild(crossBtn);

    const degtTitle = document.createElement("p");
    degtTitle.textContent = "Degree Title";
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    degtTitle.appendChild(titleInput);

    const streamName = document.createElement("p");
    streamName.textContent = "Stream Name";
    const streamInput = document.createElement("input");
    streamInput.type = "text";
    streamName.appendChild(streamInput);

    const instituteName = document.createElement("p");
    instituteName.textContent = "Institution Name";
    const instituteInput = document.createElement("input");
    instituteInput.type = "text";
    instituteName.appendChild(instituteInput);

    const graduationYear = document.createElement("p");
    graduationYear.textContent = "Graduation Year";
    const gradYearInput = document.createElement("input");
    gradYearInput.type = "month";
    graduationYear.appendChild(gradYearInput);

    field.appendChild(degtTitle)
    field.appendChild(streamName)
    field.appendChild(instituteName)
    field.appendChild(graduationYear)

    qualificationsDiv.appendChild(field);

    const preview = createQualificationPreview(field);

    crossBtn.addEventListener("click", () => {
        console.log("education remover button")
        field.remove();
        preview.remove();
    })
}

const qualSection = document.querySelector(".academic-block")
function createQualificationPreview(node) {
    const inputs = node.querySelectorAll("input");

    console.log("in the create qualification preview");

    const previewDiv = document.createElement("div");
    previewDiv.classList.add("preview-div");
    const courseTitle = document.createElement("p");
    const details = document.createElement("p");

    const instituteName = document.createElement("span");
    const streamName = document.createElement("span");
    const gradYear = document.createElement("span");
    details.appendChild(instituteName);
    details.appendChild(streamName);
    details.appendChild(gradYear);


    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', () => {
            switch (i) {
                case 0:
                    courseTitle.innerText = inputs[i].value;
                    break;
                case 1:
                    streamName.innerText = `|    ${inputs[i].value}     `;
                    break;
                case 2:
                    instituteName.innerText = `${inputs[i].value}`;
                    break;
                case 3:
                    gradYear.innerText = `|     Graduation Year:  ${inputs[i].value}`;
            }
        });
    }

    previewDiv.appendChild(courseTitle)
    previewDiv.appendChild(details)

    qualSection.appendChild(previewDiv)

    console.log("ending of the preview");

    return previewDiv;

}


// ai function - work experience
const addWorkExperienceButton = document.getElementById('add-work-experience');
const workExperiencesDiv = document.getElementById('work-experiences');
let workCounter = 0;
addWorkExperienceButton.addEventListener('click', () => {
    // Create a new work experience element
    const experience = document.createElement('fieldset');
    experience.classList.add('work-experience');

    const crossBtn = document.createElement("legend");
    crossBtn.style.color = "red";
    crossBtn.textContent = "X";
    crossBtn.style.textAlign = "right";
    crossBtn.style.cursor = 'pointer';
    experience.appendChild(crossBtn);

    workCounter++;

    // Add input fields for details
    const companyLabel = document.createElement('p');
    companyLabel.textContent = 'Company Name:';
    const companyInput = document.createElement('input');
    companyInput.type = 'text';
    companyInput.name = 'company';
    companyLabel.appendChild(companyInput);

    const positionLabel = document.createElement('p');
    positionLabel.textContent = 'Position:';
    const positionInput = document.createElement('input');
    positionInput.type = 'text';
    positionInput.name = 'position';
    positionLabel.appendChild(positionInput);

    const startDateLabel = document.createElement('p');
    startDateLabel.textContent = 'Start Date:';
    const startDateInput = document.createElement('input');
    startDateInput.type = 'date';
    startDateInput.name = 'startDate';
    startDateLabel.appendChild(startDateInput);

    const endDateLabel = document.createElement('p');
    endDateLabel.textContent = 'End Date:';
    const endDateInput = document.createElement('input');
    endDateInput.type = 'date';
    endDateInput.name = 'endDate';
    endDateLabel.appendChild(endDateInput);

    const descriptionLabel = document.createElement('p');
    descriptionLabel.textContent = 'Description:';
    const descriptionInput = document.createElement('textarea');
    descriptionInput.name = 'description';
    descriptionLabel.appendChild(descriptionInput);

    // Append input fields and button to the experience element
    experience.appendChild(companyLabel);
    experience.appendChild(positionLabel);
    experience.appendChild(startDateLabel);
    experience.appendChild(endDateLabel);
    experience.appendChild(descriptionLabel);


    // Append the experience element to the work experiences div
    workExperiencesDiv.appendChild(experience);

    const preview = createWorkPreview(experience);

    crossBtn.addEventListener('click', () => {
        workCounter--;
        experience.remove();
        preview.remove();
        if (workCounter === 0) {
            workSection.classList.add("additional");
        }
    });
});

const workSection = document.querySelector(".work-exp");
function createWorkPreview(node) {
    workSection.classList.remove("additional");

    const inputs = node.querySelectorAll("input");

    console.log("in the create work preview section!!")

    const previewDiv = document.createElement("div");

    previewDiv.classList.add("preview-div");

    const companyName = document.createElement("p");
    const workPosition = document.createElement('p');
    const duration = document.createElement('p');
    const companyDesc = document.createElement("p");
    const startspan = document.createElement("span");
    const endspan = document.createElement("span");
    duration.appendChild(startspan);
    duration.appendChild(endspan);


    // adding event listener to each input
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', () => {
            switch (i) {
                case 0:
                    companyName.innerText = inputs[i].value;
                    break;
                case 1:
                    workPosition.innerText = inputs[i].value;
                    break;
                case 2:
                    startspan.innerText = `Start date: ${inputs[i].value}`; // Update only start date
                    break;
                case 3:
                    endspan.innerText = `- End Date: ${inputs[i].value}`; // Update end date
                    break;
            }
        });
    }

    node.querySelector("textarea").addEventListener("input", () => {
        companyDesc.innerText = node.querySelector("textarea").value;
    })

    previewDiv.appendChild(companyName);
    previewDiv.appendChild(workPosition);
    previewDiv.appendChild(duration);
    previewDiv.appendChild(companyDesc);

    workSection.appendChild(previewDiv)

    console.log("end of create work preview !!")

    return previewDiv;
}



// project
const addProjectButton = document.getElementById('add-project');
const projectsDiv = document.getElementById('projects');
let projectCounter = 0;

addProjectButton.addEventListener('click', () => {

    const project = document.createElement('fieldset');
    project.classList.add('project');
    projectCounter++;

    const crossBtn = document.createElement("legend");
    crossBtn.style.color = "red";
    crossBtn.textContent = "X";
    crossBtn.style.textAlign = "right";
    crossBtn.style.cursor = 'pointer';
    project.appendChild(crossBtn);

    // Add input fields for details
    const nameLabel = document.createElement('p');
    nameLabel.textContent = 'Project Name:';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameLabel.appendChild(nameInput);

    const linkLabel = document.createElement('p');
    linkLabel.textContent = 'Project Link:';
    const linkInput = document.createElement('input');
    linkInput.type = 'text';
    linkLabel.appendChild(linkInput);

    const descriptionLabel = document.createElement('p');
    descriptionLabel.textContent = 'Description:';
    const descriptionInput = document.createElement('textarea');
    descriptionLabel.appendChild(descriptionInput);

    // Append input fields and button to the project element
    project.appendChild(nameLabel);
    project.appendChild(linkLabel);
    project.appendChild(descriptionLabel);

    // Append the project element to the projects div
    projectsDiv.appendChild(project);

    const preview = createProjectPreview(project)

    crossBtn.addEventListener('click', () => {
        projectCounter--;
        project.remove();
        preview.remove();
        if (projectCounter === 0) {
            projectBlock.classList.add("additional");
        }
    });

});

const projectBlock = document.querySelector(".project-block");
function createProjectPreview(node) {
    projectBlock.classList.remove("additional");
    const inputs = node.querySelectorAll("input");
    const previewDiv = document.createElement("div");

    previewDiv.classList.add("preview-div");

    const projName = document.createElement("p");
    const projLink = document.createElement("a");
    const projDesc = document.createElement("p");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', () => {
            switch (i) {
                case 0:
                    projName.innerText = inputs[i].value;
                    break;
                case 1:
                    projLink.innerText = `${inputs[i].value}`;
                    projLink.href = `${inputs[i].value}`
                    break;
            }
        });
    }

    node.querySelector("textarea").addEventListener("input", () => {
        projDesc.innerText = node.querySelector("textarea").value;
    })

    previewDiv.appendChild(projName)
    previewDiv.appendChild(projLink)
    previewDiv.appendChild(projDesc)

    projectBlock.appendChild(previewDiv)
    return previewDiv;
}



// certificate section
const addCertificateBtn = document.getElementById("add-certificate");
const certificatesDiv = document.getElementById("certificates");
let certificateCounter = 0;

addCertificateBtn.addEventListener("click", () => {

    const certificate = document.createElement("fieldset");
    certificate.classList.add("certificate")
    certificateCounter++;

    const crossBtn = document.createElement("legend");
    crossBtn.style.color = "red";
    crossBtn.textContent = "X";
    crossBtn.style.textAlign = "right";
    crossBtn.style.cursor = 'pointer';
    certificate.appendChild(crossBtn);

    // input and fields
    const nameLabel = document.createElement("p");
    nameLabel.textContent = "Certification Name";
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'certificateName';

    nameLabel.appendChild(nameInput);

    const issuingOrgLabel = document.createElement('p');
    issuingOrgLabel.textContent = 'Issuing Organization';
    const issuingOrgInput = document.createElement('input');
    issuingOrgInput.type = 'text';
    issuingOrgInput.name = 'issuingOrg';

    issuingOrgLabel.appendChild(issuingOrgInput);

    const certificateLinkLabel = document.createElement('p');
    certificateLinkLabel.textContent = 'Confirmation Link';
    const certificateLinkInput = document.createElement('input');
    certificateLinkInput.type = 'text';
    certificateLinkInput.name = 'certificateLink';

    certificateLinkLabel.appendChild(certificateLinkInput);

    // const removeButton = document.createElement('button');
    // removeButton.textContent = 'Remove certificate';


    certificate.appendChild(nameLabel)
    certificate.appendChild(issuingOrgLabel)
    certificate.appendChild(certificateLinkLabel)
    // certificate.appendChild(removeButton);

    certificatesDiv.appendChild(certificate);

    const preview = createCertificatePreview(certificate);

    crossBtn.addEventListener('click', () => {
        certificateCounter--;
        certificate.remove();
        preview.remove();

        if (certificateCounter === 0) {
            certificateBlock.classList.add("additional");
        }
    });
})

const certificateBlock = document.querySelector(".certificate-block");

function createCertificatePreview(node) {
    certificateBlock.classList.remove("additional")
    const inputs = node.querySelectorAll("input");
    const previewDiv = document.createElement("div");

    previewDiv.classList.add("preview-div");

    const certiName = document.createElement("p");
    const certiIssuer = document.createElement("p");
    const certiLink = document.createElement("a");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', () => {
            switch (i) {
                case 0:
                    certiName.innerText = inputs[i].value;
                    break;
                case 1:
                    certiIssuer.innerText = inputs[i].value;
                    break;
                case 2:
                    certiLink.innerText = `${inputs[i].value}`;
                    certiLink.href = `${inputs[i].value}`
                    break;
            }
        });
    }

    previewDiv.appendChild(certiName)
    previewDiv.appendChild(certiIssuer)
    previewDiv.appendChild(certiLink)

    certificateBlock.appendChild(previewDiv)
    return previewDiv;
}
const generateCVbtn = document.getElementById("generate-cv");

generateCVbtn.addEventListener("click", function () {
    const previewElement = document.querySelector(".preview");

    const clonedPreview = previewElement.cloneNode(true);
    const printWindow = window.open();
    const styleLinks = document.querySelector("#style1-link");

    if (styleLinks.href && styleLinks.href.startsWith(window.location.origin)) {
        const newLink = printWindow.document.createElement("link");
        newLink.href = styleLinks.href;
        newLink.rel = "stylesheet";
        printWindow.document.head.appendChild(newLink);
    }

    if (printWindow) {
        printWindow.document.body.appendChild(clonedPreview);
    }
    else {
        console.log("failed to create the print window")
    }
    if (printWindow) {
        printWindow.focus();
    }
    setTimeout(() => {
        printWindow.print();
    }, 500)
    // // Optional: Close the separate print window after printing
    // if (printWindow) {
    //     printWindow.close();
    // }
})