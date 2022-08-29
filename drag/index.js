var lis = document.querySelectorAll('li.can-drag-drop');

lis.forEach((el) => {
  el.addEventListener("click", function() {
    alert(el.textContent)
  });
});


var sortable = dragula([document.getElementById('menu-id')]);

sortable.on('drop', function(el, target, source, sibling){
  console.log(el)
  console.log(target)
  console.log(source)
  console.log(sibling)
})