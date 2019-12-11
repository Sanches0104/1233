var elCollection = document.getElementsByClassName ('el');
console.dir (elCollection);
var elNodes = document.querySelectorAll ('.el');
console.dir (elNodes);
for (var i = 0; i < elCollection.length; i++) {
  var elem = elCollection[i];
  console.log (elem);
  elem.addEventListener ('click', function () {
    this.classList.toggle ('red');
  });
}
