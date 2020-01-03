$("#js-shopping-list-form").submit(function (event) {
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


});

$('body').on('click', '.shopping-item-delete', function () {
  var deleteItem = $(this).closest('li').detach();

});



$('body').on('click', '.shopping-item-toggle', function () {
  var toggleItem = $(this).parent().siblings()[0];
  $(toggleItem).toggleClass('shopping-item__checked');

});