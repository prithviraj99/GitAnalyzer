/*This code is written by Prithvi Raj Vuppalapati*/

//Simple JQuery function
$(function(){
  $('#submitURL').on('click', function(e){
    e.preventDefault();
     //Break the input url in array format
    var requri   = $('#GitInput_form').val().split('/');
     //url for the github Api, requri[3] contain organisation or username, requri[4] contain repository name
    var repouri  = 'https://api.github.com/repos/'+requri[3]+'/'+requri[4];

    $.getJSON(repouri, function(json) {
      //validating response
      if(json.message == "Not Found" || $('#GitInput_form').val() == '') {
        $('#table').html("<h2>No data Found</h2>");
      }

      else {
        var openissues = json["open_issues_count"];//Get total no of open issues using the open_issues_count property
        var issuesInDay = 0;
        var issues7Ddays = 0;

        $('#item1').html(openissues);
        var currentdate = new Date();
        var newDatefor1day = new Date();
        newDatefor1day.setDate(currentdate.getDate() - 1);
        newDatefor1day = newDatefor1day.toISOString();//Date and Time for 1 day or 24 hours ago in ISO 8601 Format
        var newDatefor1week = new Date();
        newDatefor1week.setDate(currentdate.getDate() - 7);
        newDatefor1week =newDatefor1week.toISOString();//Date and Time for 1 week or 7 days ago in ISO 8601 Format

        $.getJSON(repouri+'/issues?since='+newDatefor1day,function(json){
             issuesInDay = json.length;// get no. of issues since 1 day using gitAPI
             $('#item2').html(issuesInDay);
            $.getJSON(repouri+'/issues?since='+newDatefor1week,function(json){
                issues7Ddays = json.length;// get no. of issues since 1 week using gitAPI
                $('#item3').html(issues7Ddays-issuesInDay);// issues between 1 week and 1 day
                $('#item4').html(openissues-issues7Ddays);// issues more than 1 week or 7 days
              });
        });

      } // end else statement
    }); // end getJSON Ajax call
  }); // end click event handler
});
