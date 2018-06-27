(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

(function () {
  document.querySelector('#chat-btn button').addEventListener('click', function () {
    document.getElementById('chat-bot').className = 'active';
  });
  document.querySelector('#chat-bot button').addEventListener('click', function () {
    document.getElementById('chat-bot').className = '';
  });
})(window);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUNBLENBQUMsWUFBVTtBQUNULFdBQVMsYUFBVCxDQUF1QixrQkFBdkIsRUFBMkMsZ0JBQTNDLENBQTRELE9BQTVELEVBQXFFLFlBQVU7QUFDN0UsYUFBUyxjQUFULENBQXdCLFVBQXhCLEVBQW9DLFNBQXBDLEdBQWdELFFBQWhEO0FBQ0QsR0FGRDtBQUdBLFdBQVMsYUFBVCxDQUF1QixrQkFBdkIsRUFBMkMsZ0JBQTNDLENBQTRELE9BQTVELEVBQXFFLFlBQVU7QUFDN0UsYUFBUyxjQUFULENBQXdCLFVBQXhCLEVBQW9DLFNBQXBDLEdBQWdELEVBQWhEO0FBQ0QsR0FGRDtBQUdELENBUEQsRUFPRyxNQVBIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJ3VzZSBzdHJpY3QnO1xyXG4oZnVuY3Rpb24oKXtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhdC1idG4gYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXQtYm90JykuY2xhc3NOYW1lID0gJ2FjdGl2ZSc7XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYXQtYm90IGJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGF0LWJvdCcpLmNsYXNzTmFtZSA9ICcnO1xyXG4gIH0pO1xyXG59KSh3aW5kb3cpOyJdfQ==
