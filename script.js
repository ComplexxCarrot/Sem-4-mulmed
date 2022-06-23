  function goToPart1(){
    var element = document.getElementById('part1');
    var headerOffset = 50;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
  }
  
  function goToPart2(){
    var element = document.getElementById('part2');
    var headerOffset = 50;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
  }

  function goToPart3(){
    var element = document.getElementById('part3');
    var headerOffset = 50;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
  }

  function goToPart4(){
    var element = document.getElementById('part4');
    var headerOffset = 50;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
  }

  function goToPart5(){
    var element = document.getElementById('part5');
    var headerOffset = 50;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
  }

  function showAnswer() {
    document.getElementById("hide").style.display = "block";
  }