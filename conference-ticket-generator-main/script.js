const form = document.querySelector(".form");

const imageInput = document.querySelector("#upload-img");
const uploadIcon = document.querySelector(".upload-icon");
const dragDropMessage = document.querySelector(".drag-drop-message");
const actionBtns = document.querySelector(".action-buttons");
const uploadInfo = document.querySelector(".upload-info span");


const userName = document.querySelector("#full-name");
const email = document.querySelector("#email");
const githubUser = document.querySelector("#github-user");


const submitBtn = document.querySelector("input[type='submit']");

const generatedTicket = document.querySelector(".generated-ticket");

generatedTicket.style.display = "none";
actionBtns.style.display = "none";

let avatarDataURL = "";

imageInput.addEventListener("change", () => {
    if (Math.round(imageInput.files[0].size / 1024) > 500) {
        
        uploadInfo.textContent = "File too large. Please upload a photo under 500KB."
        
        uploadInfo.parentElement.style.color = "var(--Orange-700)";
        document.querySelector(".upload-info svg path").style.stroke = "red";
        
        imageInput.value = "";
    }else {
        uploadInfo.textContent = "Upload your photo (JPG or PNG, max size: 500KB).";
        uploadInfo.parentElement.style.color = "var(--Neutral-300)";
        document.querySelector(".upload-info svg path").style.stroke = "#D1D0D5";

        const reader = new FileReader();
        reader.readAsDataURL(imageInput.files[0]);
    
        reader.onloadend = () => {
            avatarDataURL = reader.result;
            uploadIcon.src = reader.result;
            dragDropMessage.style.display = "none";
            actionBtns.style.display = "block";
        };
    }

});

const removeImage = () => {
    avatarDataURL = "";
    imageInput.value = "";
    uploadIcon.src = "./assets/images/icon-upload.svg";
    actionBtns.style.display = "none";
    dragDropMessage.style.display = "block";
};

const changeImage = () => {
    imageInput.click();
};

const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
};

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if(!validateEmail(email.value)) {
        document.querySelector(".mail-info").style.display = "flex";
    } else {
        document.querySelector(".mail-info").style.display = "none";
        
        form.style.display = "none";
        generatedTicket.style.display = "block";
        
        
        const name = document.querySelector(".gradient-text");
        const mailAddress = document.querySelector(".email");
        const fullName = document.querySelector(".user-name");
        const gitUser = document.querySelector(".github-username");
        const avatar = document.querySelector(".avatar");
    
        name.textContent = userName.value;
        mailAddress.textContent = email.value;
        fullName.textContent = userName.value;
        gitUser.textContent = githubUser.value;
    
        avatar.src = avatarDataURL;
    }

});
