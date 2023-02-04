/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*========== MENU SHOW =============*/
// validate if constants exists

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*========== MENU HIDDEN =============*/
// validate if constants exists

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  //when we click oc  each nav__link, we remove the show-menu
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
  const header = document.getElementById("header");

  //makes the header stay after 50% scroll in height
  if (this.scrollY >= 50) {
    header.classList.add("bg-header");
  } else {
    header.classList.remove("bg-header");
  }
};

window.addEventListener("scroll", scrollHeader);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/

/*=============== CALCULATE JS ===============*/

const calculateForm = document.getElementById("calculate-form"),
  calculateCm = document.getElementById("calculate-cm"),
  calculateKg = document.getElementById("calculate-kg"),
  calculateMsg = document.getElementById("calculate-msg");

calculateForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (calculateCm.value === "" || calculateKg.value === "") {
    //ADD and remove color
    calculateMsg.classList.remove("color-green");
    calculateMsg.classList.add("color-red");

    //show message
    calculateMsg.textContent = "Fill the Height and Weight 😑";

    //remove message
    setTimeout(() => {
      calculateMsg.textContent = "";
    }, 5000);
  } else {
    //BMI formula
    const m = calculateCm.value * 0.3048,
      kg = calculateKg.value,
      bmi = (kg / (m * m)).toFixed(2);

    //show Health Status
    if (bmi < 18.5) {
      calculateMsg.textContent = "Your BMI is " + bmi + " and you are skinny😥";
      calculateMsg.classList.add("color-red");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      calculateMsg.textContent =
        "Your BMI is " + bmi + " and you are healthy 🥳";
      calculateMsg.classList.add("color-green");
    } else {
      calculateMsg.textContent =
        "Your BMI is " + bmi + " and you are overweight😥";
      calculateMsg.classList.add("color-red");
    }

    //To clear the input message
    calculateCm.value = "";
    calculateKg.value = "";

    //remove message
    setTimeout(() => {
      calculateMsg.textContent = "";
    }, 5000);
  }
});
/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById("contact-form"),
  contactMsg = document.getElementById("contact-msg"),
  contactUser = document.getElementById("contact-user");

const sendMEmail = (e) => {
  e.preventDefault();

  //check if the feilds are field were not

  if (contactUser.value === "") {
    contactMsg.classList.add("color-red");

    contactMsg.textContent = "Enter your email";

    setTimeout(() => {
      contactMsg.textContent = "";
    }, 3000);
  } else {
    //parameters are => serviceID, templateID, templateParams, publicKey
    emailjs
      .sendForm(
        "service_lcsgbns",
        "template_78e5l8a",
        "#contact-form",
        "p958wpEQzRz-fDTpz"
      )
      .then(() =>{
        //show color
        contactMsg.classList.add('color-green')
        contactMsg.textContent = "You Successfully registered"

        //remove message

        setTimeout(() => {
          contactMsg.textContent =""
        }, 4000);

        contactUser.value = " ";
      }, (error) =>{
        alert("Something went wrong......",error)
      })

      
  }
};

contactForm.addEventListener("submit", sendMEmail);
