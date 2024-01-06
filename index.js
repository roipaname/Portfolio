let tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  tablinks.forEach((tablink) => {
    tablink.classList.remove("active-link");
  });
  tabcontents.forEach((tabcontent) => {
    tabcontent.classList.remove("active-tab");
  });
}
tablinks.addEventListener("click", opentab());
