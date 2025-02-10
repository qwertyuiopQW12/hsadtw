function changeTheme(theme) {
  if (theme === 'theme1') {
    document.body.style.background = "linear-gradient(to bottom, #6F2B7F, #333036)"; // لون مموج 1
  } else if (theme === 'theme2') {
    document.body.style.background = "linear-gradient(to bottom, #FEC107, #A50527)"; // لون مموج 2
  } else if (theme === 'theme3') {
    document.body.style.background = "linear-gradient(to bottom, #4CAF50, #2E7D32)"; // لون مموج 3
  }
}

function resetTheme() {
  document.body.style.background = "linear-gradient(to bottom, #0066cc, #003366)";
}