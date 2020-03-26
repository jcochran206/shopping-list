//create html item shopping list
function createItem(item){
    return `<li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
    </li>`
}

//add item to go to shopping list 
function createList(){
    $("#js-shopping-list-form").on('submit' , function(e){
        e.preventDefault();
    
        let item = $("#shopping-list-entry").val();
        console.log(item);
        // push to list
        $(".shopping-list").append($(createItem(item)));
        $("#shopping-list-entry").val('');
    });
}

// delete item from list when hit delete 
function deleteItem(){
    $('.shopping-list').on('click', '.shopping-item-delete', function(e){
        e.preventDefault();
        $(e.target).closest('li').remove();
    });
}
//toggle line thru item 
function toggleItem(){
    $('.shopping-list').on('click', '.shopping-item-toggle', function(e){
        e.preventDefault();
        $(e.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
}


$(createList);
$(deleteItem);
$(toggleItem);