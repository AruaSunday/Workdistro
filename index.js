const submit = async () => {
  let fname = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  console.log("god");
  try {
    const data = await fetch(
      `https://workdistro-mqpp.onrender.com/api/wait-list`,
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json", // specify the content type
          // other headers if needed
        },
        body: {
          name: fname,
          email,
        },
      }
    );
    console.log(data);
    // console.log("it");
    // const response = await data.json();
    // console.log(response, "u");
  } catch (error) {
    console.log(error, "err");
  }
};
document.querySelectorAll(".wait").forEach((item) => {
  console.log(item);
  item.addEventListener("click", () => {
    submit();
  });
});
