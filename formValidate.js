  
    $("#FormValidate").validate({
    rules:{
      name:{
      required: true,
      minlength: 3
      },
      email:{
        email:true
      },
      phone:{
        number:true,
        minlength: 10,
        maxlength: 10
      }
      },
      messages: {
        fname:{
        required: "Please enter a proper name",
        minlength: "Please, at least 3 characters are necessary"
      },
      email: "Please enter a valid mail id",
      phone: "Please enter a valid phone no",
      exp: "Please enter a valid work experience",
      msg: "Please enter a valid note"
    },

    submitHandler: function(form) {
      form.submit();
    }
});


$(document).ready(function() {    
$("#submit").click(function(){
  const Sname = $("#fname").val();
  const Semail = $("#email").val();
  const Sphone = $("#phone").val();
  const Expr  = $("#exp").val();
  console.log(Sphone);
 var Appendtext = "Student Name is" +Sname+ "and contact details are" +Semail+ "," +Sphone+ "and work experience is " +Expr+ "Next\n" 
  console.log(Appendtext);
  //$("#Output").text(Sname , Semail,  Sphone, Expr); 
  $(".Output").append("&#13;&#10;" + Appendtext);
  $("#fname").val("");
  $("#email").val("");
  $("#phone").val("");
  $("#exp").val("");

})
});

  