window.onload = function() {

    fetch('training.json')
 
    .then(function(response) {
       return response.json();
    })
   
    .then(function(json) {
 
       var tableCode = '<table><caption>Sample Plan</caption><thead><tr><th>Week</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th></tr></thead><tbody>';
 
      //NOTE: For readability, each item is on a new line ;-)
       for (var i = 0; i < json.length; i++) {
          tableCode += '<tr><td>' + 
          json[i].week + '</td><td>' + 
          json[i].monday + '</td><td>' + 
          json[i].tuesday + '</td><td>' + 
          json[i].wednesday + '</td><td>' +
          json[i].saturday + '</td><td>' +
          json[i].friday + '</td><td>' +
          json[i].saturday + '</td><td>' +
          json[i].sunday + '</td></tr>' ;
       }
 
       tableCode += '</tbody><tfoot><tr><td colspan="8">Source: <a href=https://www.halhigdon.com/training-programs/marathon-training/novice-1-marathon/>HalHigdon.com</a></td></tr></tfoot></table>';
 
       document.getElementById('trainingPlanSample').innerHTML = tableCode;
   })
 }
 