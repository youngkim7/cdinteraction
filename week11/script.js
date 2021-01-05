console.log("hi");

document.querySelector("#scroll-to-top").addEventListener("click",scrollToTop);


function scrollToTop(){
  console.log('hello!');
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
});
}