console.log('funguju!');

// ADDING CLASS CURRENT SO THAT LINKS KEEP YELLOW COLOR WHILE ON THE PAGE
window.onload = () => {
  const menuLinks = document.querySelectorAll('.menu__pages a');
  menuLinks.forEach((link) => {
    console.log(link.pathname, window.location.pathname);
    if (link.pathname === window.location.pathname) {
      link.classList.add('current');
    }
  });
};
