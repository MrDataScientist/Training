var message = 'Hello!';
  for (var i=0;i<10;i++) {
document.getElementById('foo').onclick = function(){alert(message)};
message = 'Goodbye!';
}
