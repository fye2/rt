VanillaTilt.init(document.querySelectorAll(".discord-profile"), {
  max: 10,
  speed: 400,
  glare: true,
  "max-glare": 0.3,
});

fetch(`https://testeee-rtqe.onrender.com/api/user/${userId}`)
  .then(res => res.json())
  .then(data => {
    // Atualiza avatar
    if (data.avatarURL) {
      document.getElementById("discord-avatar").src = data.avatarURL;
    }

    // Atualiza status
    const statusImg = document.getElementById("status-img");

    const statusToImage = {
      online: "images/online.png",
      idle: "images/idle.png",
      dnd: "images/dnd.png",
      offline: "images/off.png",
      invisible: "images/off.png"
    };

    // Se a API retornou status, troca a imagem
    if (data.status && statusToImage[data.status]) {
      statusImg.src = statusToImage[data.status];
    }
  })
  .catch(() => {
    console.log("Erro ao buscar usuário");
  });
