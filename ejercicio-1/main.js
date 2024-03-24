function sendForm(event) {
  event.preventDefault();

  const name = event.target.name.value;
  const lastName = event.target.lastName.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  const password2 = event.target.password2.value;

  const app = document.getElementById("app");
  if (password !== password2) {
    const error = document.createElement("p");
    error.textContent = "Las contraseñas no coinciden";
    app.appendChild(error);
    return;
  }

  const user = [
    {
      label: "Nombre",
      value: name,
    },
    {
      label: "Apellido",
      value: lastName,
    },
    {
      label: "Email",
      value: email,
    },
    {
      label: "Contraseña",
      value: password,
    },
    {
      label: "Repetir contraseña",
      value: password2,
    },
  ];

  const title = document.createElement("h1");
  title.innerHTML = `<h1 class="text-2xl title">
    Datos del usuario
</h1>`;
  app.appendChild(title);
  app.style.height = "auto";

  user.forEach((item) => {
    const container = document.createElement("div");
    container.innerHTML = `
            <div
                class="container__item"  
            > 
                <span
                    class="item__label"
                >${item.label}</span>
                <span
                    class="item__value"
                >${item.value}</span>
            </div>`;
    app.appendChild(container);
  });
}
