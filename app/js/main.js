'use strict';
(function(){
  document.querySelector('#chat-btn button').addEventListener('click', function(){
    document.getElementById('chat-bot').className = 'active';
  });
  document.querySelector('#chat-bot button').addEventListener('click', function(){
    document.getElementById('chat-bot').className = '';
  });
})(window);