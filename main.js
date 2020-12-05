document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('form');

  form.addEventListener('submit', function() {
  	var query = document.getElementById('songName').value;
    chrome.tabs.create({url: "https://vk.com/audio?q=" + query});
 }, false);
}, false);