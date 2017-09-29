// create function when adding an item
// put in seperate function
    $('button').click(function() {
        // call form element and apply submit method
       $('form').submit(function(event) {
        const newItem = $('.shopping-list').prepend(`<li>
            <span class="shopping-item">${newItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`
        });
        event.preventDefault(); 
        // newItem.addClass('shopping-item ');   
        
    });
// delete shopping item after clicking delete
    $('button.shopping-item-delete').click(function() {
            $(this).closest('li').remove();
    })

// // strikethrough list item once check button clicked

//     $('shopping-item-toggle').click(function() {
//         $('shopping-item').addClass('.shopping-item__checked');
    
// });





// create function to check and uncheck items when clicking 'check' button


// create function to permanently delete items from list