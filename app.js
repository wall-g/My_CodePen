const btn = document.querySelector(".run-btn");


btn.addEventListener('click', () => {
  var htmlCode = document.getElementById("htmlCode").innerText;
  var cssCode = "<style>"+document.getElementById("cssCode").innerText+"</style>";
  var jsCode = "<scri"+"pt>"+document.getElementById("jsCode").innerText+"</scri"+"pt>";
  var frame = document.getElementById("result").contentWindow.document;
  frame.open();
  frame.write(htmlCode+cssCode+jsCode);
  frame.close();
})