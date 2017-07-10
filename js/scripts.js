
$(document).ready(function(){
  $("#formOne").submit(function(event){
    var answer1 = $("input#name1").val();
    var answer2 = $("input#name2").val();
    var answer3 = $("input#name3").val();
    var answer4 = $("input#name4").val();

    var array = [answer1, answer2, answer3, answer4];
    var newArray = [];
    newArray.push(array[0], array[1], array[2], array[3])


    $("#list").prepend("<li>"+newArray[0]+"</li>"+"<li>"+newArray[1]+"</li>"+"<li>"+newArray[2]+"</li>"+"<li>"+newArray[3]+"</li>");

    event.preventDefault();
  });
});
