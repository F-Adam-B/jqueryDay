const STORE = [
    {name: "apples", checked: false},
    {name: "oranges", checked: false},
    {name: "milk", checked: true},
    {name: "bread", checked: false}
  ];
  
  function generateItemElement(item, itemIndex,) {
    return `
      <li class="js-item-index-element" data-item-index="${itemIndex}">
        <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle js-item-toggle">
              <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete js-item-delete">
              <span class="button-label">delete</span>
          </button>
        </div> 
      </li>`;
  };
  
  
  function generateShoppingItemsString(shoppingList) {
    console.log("Generating shopping list element");
  
    const items = shoppingList.map((item, index) => generateItemElement(item, index));
    
    return items.join("");
  }

 // user action >> change STORE >> rerender list
 // user action >> change DOM
  
  
  function renderShoppingList() {
    // render the shopping list in the DOM
    console.log('`renderShoppingList` ran');
    const shoppingListItemsString = generateShoppingItemsString(STORE);
  
    // insert that HTML into the DOM
    $('.js-shopping-list').html(shoppingListItemsString);
  }
  
  function addItemToShoppingList(itemName) {
    console.log(`Adding "${itemName}" to shopping list`);
    STORE.push({name: itemName, checked: false});
  }
  
  function handleNewItemSubmit() {
    $('#js-shopping-list-form').submit(function(event) {
      event.preventDefault();
      console.log('`handleNewItemSubmit` ran');
      const newItemName = $('.js-shopping-list-entry').val();
      $('.js-shopping-list-entry').val('');
      addItemToShoppingList(newItemName);
      renderShoppingList();
    });
  }
  
  function toggleCheckedForListItem(itemIndex) {
    console.log("Toggling checked property for item at index " + itemIndex);
    STORE[itemIndex].checked = !STORE[itemIndex].checked;
  }
  
  function getItemIndexFromElement(item) {
    const itemIndexString = $(item)
      .closest('.js-item-index-element')
      .attr('data-item-index');
    return parseInt(itemIndexString, 10);
  }
  
  function handleItemCheckClicked() {
    $('.js-shopping-list').on('click', `.js-item-toggle`, event => {
      console.log('`handleItemCheckClicked` ran');
      const itemIndex = getItemIndexFromElement(event.currentTarget);
      toggleCheckedForListItem(itemIndex);
      renderShoppingList();
    });
  }
  
  
  function handleDeleteItemClicked() {
      $('.js-shopping-list').on('click, .js-item-delete', event => {
        const itemIndex = getItemIndexFromElement(event.currentTarget);
        deleteListItem(itemIndex);
        renderShoppingList();
      })
    // Listen for when users want to delete an item and 
    // delete it
    
  }

  function deleteListItem(index) {
    STORE.splice(index, 1)
    // deletes list item form list
    console.log('`deleteListItem` ran')
  };


  // listens for click on shopping item titles.
  function handleShoppingItemClicked() {
    $('shopping-item').on('click', event => {
      const itemIndex = getItemIndexFromElement(event.currentTarget);
      // add edit title function(itemIndex);
      inputEndUserTitle(itemIndex);
    })
  }
  

  // replaces shoppint item text with text area for new title 
  function inputEndUserTitle(index) {
    const newTitle = $('<textarea />');
    $('.shopping-item').replaceWith(newTitle);
  }


  
  // $('#form').append('<button type = submit>Pin</button>').addClass('.button')
  
  // listens for click of 'In Cart' button and appends deleted items
  function clickUncheckedListItems() {
    $('#form secondchild').on('click', event => {
      //appends list of deleted items
      $('#form').append(deletedListItem);
    })
  }

  function handleShoppingList() {
    renderShoppingList();
    handleNewItemSubmit();
    handleItemCheckClicked();
    handleDeleteItemClicked();

  }
  
  $(handleShoppingList);
  