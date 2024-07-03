let perror = document.querySelector(".error");
let waitlistscroll = document.querySelector("#movetowaitlist");
console.log(waitlistscroll, document.getElementById("movetowaitlist"));
let waitlisttarget = document.querySelector("#waitlisttarget");
console.log(waitlisttarget);

let hello = document.querySelector(".hello");

hello.addEventListener("click", () => {
  hello.style.display = "red";
});

console.log(hello);

const submit = async () => {
  let fname = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let interest = document.getElementById("interest").value;
  let number = document.getElementById("number").value;

  try {
    perror.textContent = "";
    const response = await fetch(
      `https://workdistro-mqpp.onrender.com/api/wait-list/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json", // specify the content type
          // other headers if needed
        },
        body: JSON.stringify({
          name: fname,
          interest: interest,
          email: email,
          phone_number: number,
        }),
      }
    );
    console.log(response);
    // Check if the response status is OK (200-299)
    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    if (response.ok) {
      return true;
    }
  } catch (error) {
    error = error.message;
    if (error == 400) {
      perror.textContent = "Please,Ensure that you filled all inputs";
    } else if (error == 450) {
      perror.textContent = "Please ensure that your form  details is valid";
    } else if (error == 409) {
      perror.textContent = "You have joined the waitlist already with " + email;
    } else if (error == 500) {
      perror.textContent =
        "It seems there is an issue with our server, recheck your details and try again";
    } else {
      perror.textContent =
        "An error occured, Please recheck your details and try again";
    }
  }
};

console.log("ehn");
waitlistscroll.addEventListener("click", () => {
  // console.log("no");
});

document.querySelectorAll(".wait").forEach((item) => {
  console.log(item);
  item.addEventListener("click", (e) => {
    if (!item.classList.contains("no")) {
      e.preventDefault();
    }

    console.log(perror);
    submit()
      .then((e) => {
        if (e) {
          alert(
            "You have joined our waitlist, check your mail we sent you a message"
          );
        }
      })
      .catch((e) => {
        perror = "An unknown error occured, try again";
      });
  });
});
