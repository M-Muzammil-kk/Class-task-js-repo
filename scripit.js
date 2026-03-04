const ele=document.getElementById("head1")
ele.addEventListener("click",()=> {
  const elem=document.createElement(`h3`)
  elem.innerText=prompt(`enter a new task`)
  elem.style.margin="0px"
  document.querySelector(".div4") .appendChild (elem)
  
})
