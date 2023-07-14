
$('.edu-card').click(function() {
    clickToExapndCards($(this));
  });
  
  function clickToExapndCards($obj){
    var clickedElement = $obj;
    if (clickedElement.hasClass('expanded')) {
      clickedElement.find('.expand').hide('.5s');
      clickedElement.removeClass('expanded');
      
    } else {
       clickedElement.find('.expand').show('.5s');
      clickedElement.addClass('expanded');
    }
    
  };


