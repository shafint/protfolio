const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const barger = document.querySelector(".hamberger");
const main_barger = document.querySelector(".main_hamberger");
const menu = document.querySelector(".menu");
const popupNavbar = document.querySelector(".nav");
const colorChoiceBtn = document.querySelector(".color_setting_icons_parent");
const colorMenu = document.querySelector(".choice_color");
const color_items = document.querySelectorAll(".color_items");
const main_hamberger = document.querySelector(".main_hamberger");
const main_place1 = document.querySelector(".main_place1");
const main_place2 = document.querySelector(".main_place1");
const main_place3 = document.querySelector(".main_place1");
const more_about_me_modal = document.querySelectorAll(".more_about_me_modal");
const arrow_prnt = document.querySelector(".arrow_prnt");
const form = document.querySelector("form.conatact_form");
const more_khowing_items_numbers = document.querySelectorAll(
  ".more_khowing_items_numbers"
);
const modal_hamberger = document.querySelectorAll(".modal_hamberger");
const protfolio_items = document.querySelectorAll(".protfolio_items");
const protfolio_menus = document.querySelectorAll(".protfolio_menus li");
const faq_items = document.querySelectorAll(".faq_questions_items");
const main_menus = document.querySelectorAll(".main_menus");
//navbar

barger.addEventListener("click", () => {
  barger.classList.add("active");
  popupNavbar.classList.add("active");
  main_hamberger.classList.add("active");
});
main_hamberger.addEventListener("click", () => {
  barger.classList.remove("active");
  popupNavbar.classList.remove("active");
  main_hamberger.classList.remove("active");
});
main_menus.forEach((val, ind) => {
  val.addEventListener("click", () => {
    barger.classList.remove("active");
    popupNavbar.classList.remove("active");
    main_hamberger.classList.remove("active");
  });
});

//end

///rotating text
const textArray = ["Freelancer", "Designer", "Developer", "Student"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

//choice color js
colorChoiceBtn.addEventListener("click", () => {
  colorMenu.classList.toggle("active");
});
// color items alcick functions
const bg_colors = [
  "cyan",
  "spring_green",
  "green_Yellow",
  "lime_punch",
  "violet",
  "orange",
  "parle_golden_rod",
  "reset_default_yellow",
];
color_items.forEach((val, ind) => {
  val.addEventListener("click", () => {
    color_items.forEach((v, i) => {
      v.classList.remove("active");
    });
    localStorage.setItem("color", bg_colors[ind]);
    val.classList.toggle("active");
    let getBg = localStorage.getItem("color");
    document.body.setAttribute("class", getBg);
  });
});

document.body.setAttribute("class", localStorage.getItem("color"));

if (
  document.body.classList == "reset_default_yellow" ||
  document.body.classList == ""
) {
  color_items[7].classList.toggle("active");
} else if (document.body.classList == "cyan") {
  color_items[0].classList.add("active");
} else if (document.body.classList == "spring_green") {
  color_items[0].classList.add("active");
} else if (document.body.classList == "green_Yellow") {
  color_items[2].classList.add("active");
} else if (document.body.classList == "lime_punch") {
  color_items[3].classList.add("active");
} else if (document.body.classList == "violet") {
  color_items[4].classList.add("active");
} else if (document.body.classList == "orange") {
  color_items[5].classList.add("active");
} else if (document.body.classList == "parle_golden_rod") {
  color_items[6].classList.add("active");
}
document.addEventListener("scroll", () => {
  if (window.scrollY <= 0) {
    menu.classList.remove("active2");
  } else {
    menu.classList.add("active2");
  }
});

//modal open javascript

more_khowing_items_numbers.forEach((value, index) => {
  value.addEventListener("click", () => {
    more_about_me_modal.forEach((val, i) => {
      if (val != more_about_me_modal[index]) {
        val.classList.remove("active");
      } else {
        val.classList.add("active");
      }
    });
  });
});

// modal removing
modal_hamberger.forEach((val, i) => {
  val.addEventListener("click", () => {
    more_about_me_modal.forEach((v, i) => {
      more_about_me_modal[i].classList.remove("active");
    });
  });
});

//   protfolio click functionality
protfolio_menus.forEach((value, index) => {
  value.addEventListener("click", () => {
    protfolio_menus.forEach((val, i) => {
      if (val != protfolio_menus[index]) {
        val.classList.remove("active");
      } else {
        val.classList.add("active");
      }
    });

    protfolio_menus.forEach((v, i) => {
      if (index == 0) {
        protfolio_items.forEach((v, i) => {
          v.classList.remove("hidden");
        });
      } else if (index == 1) {
        protfolio_items.forEach((v, i) => {
          if (i == 0 || i == 2 || i == 8) {
            v.classList.remove("hidden");
          } else {
            v.classList.add("hidden");
          }
        });
      } else if (index == 2) {
        protfolio_items.forEach((v, i) => {
          if (i == 1 || i == 3 || i == 4 || i == 6 || i == 7) {
            v.classList.remove("hidden");
          } else {
            v.classList.add("hidden");
          }
        });
      } else if (index == 3) {
        protfolio_items.forEach((v, i) => {
          if (i == 5) {
            v.classList.remove("hidden");
          } else {
            v.classList.add("hidden");
          }
        });
      } else if (index == 4) {
        protfolio_items.forEach((v, i) => {
          if (i == 5) {
            v.classList.remove("hidden");
          } else {
            v.classList.add("hidden");
          }
        });
      }
    });
  });
});

// FAQ JAVASCRIPT TEXT

faq_items.forEach((val, ind) => {
  val.addEventListener("click", () => {
    faq_items.forEach((v, i) => {
      if (ind != i) {
        v.classList.remove("active");
      } else {
        if (v.classList.contains("active")) {
          v.classList.remove("active");
        } else {
          v.classList.add("active");
        }
      }
    });
  });
});

protfolio_items[3].addEventListener("click", () => {
  window.open("https://shafint.github.io/templet3/#");
});
protfolio_items[1].addEventListener("click", () => {
  window.open("https://shafint.github.io/Templet2/");
});
protfolio_items[5].addEventListener("click", () => {
  window.open("https://sm-chatapp.herokuapp.com");
});

protfolio_items[4].addEventListener("click", () => {
  window.open("https://shafint.github.io/Normal-templet/");
});

protfolio_items[2].addEventListener("click", () => {
  window.open("http://shafint.github.io/e-commerce");
});

protfolio_items[0].addEventListener("click", () => {
  window.open("http://shafint.github.io/Contact-Book");
});

protfolio_items[6].addEventListener("click", () => {
  window.open("https://shafint.github.io/Dashboard/");
});

protfolio_items[7].addEventListener("click", () => {
  window.open("https://shafint.github.io/mini-templet/");
});

protfolio_items[8].addEventListener("click", () => {
  window.open("https://shafint.github.io/darkmud-lightmud-Card/");
});

arrow_prnt.addEventListener("click", () => {
  window.scrollBy(0, 500);
});

// form functionalitiy

form.addEventListener("submit", (e) => {
  e.preventDefault();
 async function sentMail() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("textarea");
  //   const messegeBody = `Name: ${name}<br/>Email: ${email}<br/>Message: ${message}`;
  // const mailinfo=await Email.send({
  //     Host: "smtp.gmail.com",
  //     Username: "shafin323232@gmail.com",
  //     Password: "MD Shafin",
  //     To: "shafin3232@gmail.com",
  //     From: "shafin323232@gmail.com",
  //     Subject: "Messeges sent from your protfolio user",
  //     Body: messegeBody,
  //   })
  //   console.log(mailinfo)
        name.value = "";
        email.value = "";
        message.value = "";
        alert("Your Form submited successfully");
      
  }
  sentMail();
});

//logo click functions

const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
