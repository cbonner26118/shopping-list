$("#js-shopping-list-form").submit(function(event){
    const addedItem = $('#shopping-list-entry').val();
    
    $('.shopping-list').append(`<li>
    <span class="shopping-item">${addedItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
    event.preventDefault();
    $('#shopping-list-entry').val('');
    
    deleteItems();
});
 function deleteItems() {
    $('.shopping-item-delete').on('click', function() {
        var deleteItem = $(this).closest('li').detach();

    });
};
deleteItems();

$('.shopping-item-toggle').on('click', function() {
    const checkedItem = $('.shopping-item');
    $(checkedItem).toggleClass(function () {
        
    });
});