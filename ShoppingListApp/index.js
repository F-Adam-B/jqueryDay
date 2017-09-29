// create function when adding an item

    $('button').click(function() {
        // call form element and apply submit method
       $('form').submit(function(event) {
        const newItem = $('.shopping-list').prepend('<li> does this work');
         newItem.addClass('shopping-item ');

          
           event.preventDefault();
    });

    $('.shopping-item-delete').click, (function() {
            $(this).remove();
    })
});





// create function to check and uncheck items when clicking 'check' button


// create function to permanently delete items from list