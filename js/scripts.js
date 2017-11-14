function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();
    var inputSide1 = parseInt($("#side-1").val());
    var inputSide2 = parseInt($("#side-2").val());
    var inputSide3 = parseInt($("#side-3").val());

    var newTriangle = new Triangle(inputSide1, inputSide2, inputSide3);

    if (newTriangle.side1 >= newTriangle.side2 + newTriangle.side3 || newTriangle.side2 >= newTriangle.side1 + newTriangle.side3 || newTriangle.side3 >= newTriangle.side2 + newTriangle.side1) {
      $(".output").text("That's not a triangle!");
    } else if (newTriangle.side1 === newTriangle.side2 && newTriangle.side2 === newTriangle.side3) {
      $(".triangle-type").text("n equilateral");
    } else if (newTriangle.side1 === newTriangle.side2 || newTriangle.side2 === newTriangle.side3 || newTriangle.side1 === newTriangle.side3) {
      $(".triangle-type").text("n isoceles");
    } else {
      $(".triangle-type").text(" scalene");
    }

    $(".output").show();
  });
});
