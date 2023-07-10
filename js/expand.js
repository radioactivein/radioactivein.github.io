
$('.edu-card').click(function() {
    clickToExapndCards($(this));
  });
  
  function clickToExapndCards($obj){
    var clickedElement = $obj;
    if (clickedElement.hasClass('expanded')) {
      clickedElement.find('.expand').hide('slow');
      clickedElement.removeClass('expanded');
      clickedElement.find('.icon12').style.transform='rotate(90deg)';
    } else {
       clickedElement.find('.expand').show('slow');
      clickedElement.addClass('expanded');
    }
    
  };

