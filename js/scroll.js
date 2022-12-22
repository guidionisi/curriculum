const linksMenu = document.querySelectorAll('.menu-header li a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = this.getAttribute("href"); //pega o atributo href do link clicado
  const section = document.querySelector(href); //seleciona a seção que tem o valor de href

  //coloca a section na visão
  section.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}

linksMenu.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});
