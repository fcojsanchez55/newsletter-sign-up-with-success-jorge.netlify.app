let inputField = document.querySelector(".inputField");
let emailError = document.querySelector(".emailError");
let labelField = document.querySelector(".labelField");
let button = document.querySelector(".btn");
let main = document.querySelector("main");
let body = document.querySelector("body");



button.addEventListener("click", () => {
  validEmail();
 
});


function validEmail() {
let regExt = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (
    !inputField.value.match(regExt)
  ) {
    emailError.innerHTML = "valid email required!";
    inputField.style.border = "1px solid #ff6257";
    inputField.style.backgroundColor = "rgb(255, 223, 220)"
    inputField.style.color = "#ff6257"
    return false;
  }

  main.style.display = 'none';



  body.innerHTML = `
        <article class="success">
      
          <div>
            <img src="assets/images/icon-success.svg" alt="">
          </div>
          <h3>
            Thanks for subscribing!
          </h3>
          <p>
            A confirmation email has been sent to
            <strong>${inputField.value}</strong>. Please open it and click the button inside to
            confirm your subscription.
          </p>
          <button class="dismissBtn">Dismiss message</button>

  </article>
  `

  let dismissBtn = document.querySelector(".dismissBtn");
  dismissBtn.addEventListener("click", () => {
    let article = document.querySelector(".success")

    article.remove();
    main.style.display = "block";
    body.appendChild(main)
    inputField.value = "";
    
  });
  
  return true;
  
}

