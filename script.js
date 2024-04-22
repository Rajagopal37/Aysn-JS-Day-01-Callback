function countdown(number, callback) {
    setTimeout(function() {
      callback(number);
      if (number > 1) {
        countdown(number - 1, callback);
      } else {
        setTimeout(function() {
          callback("Happy Independence Day!!!");
        }, 1000); 
      }
    }, 1000); 
  }

function updateCountdown(count) {
    document.getElementById('countdown').innerText = count;
  }

  // countdown(10, updateCountdown);