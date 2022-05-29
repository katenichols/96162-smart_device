const mainScreenLink = document.querySelector('[data-main-screen-link]');

if (document.body.contains(mainScreenLink)) {
  mainScreenLink.addEventListener('click', (evt) => {
    evt.preventDefault();

    const blockID = mainScreenLink.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
