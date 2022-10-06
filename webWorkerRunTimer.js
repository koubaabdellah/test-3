// this file houses the timer
// its a plain counter which keeps returning
// it accepts the user time stamp, threshold and maximum time
// keeps checking for time elapsed and based on the time elapsed sends an update back

let counter = 0;

let userTimeStampValue = 0;
let threshHoldTime = 0;
let maximumUserWaitTime = 0;
let timeExpired = '';

function runTimer() {
  counter = counter + 1000;
 
  self.addEventListener('message', function(e) {
    // Send the message back.
    userTimeStampValue = parseInt(e.data.userTimeStampValue);
    threshHoldTime = parseInt(e.data.threshHoldTime);
    maximumUserWaitTime = parseInt(e.data.maximumUserWaitTime);
    if (e.data.timeExpired !== '' && e.data.timeExpired !== undefined) {
      timeExpired = false;
    }
  }, false);


  if((counter > 1000) && ((userTimeStampValue + counter) - maximumUserWaitTime) >= 0){
    postMessage({threshHold:true, counter: counter, timeExpired: true});
  } else if((counter > 1000) && ((userTimeStampValue + counter) - threshHoldTime) >= 0){
      postMessage({threshHold:true, counter: counter});
  }

  setTimeout(runTimer, 1000);
}

runTimer();
