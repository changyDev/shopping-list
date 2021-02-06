$(function addItem() {
    $('#js-shopping-list-form').submit(event => {
        //Stop the default form submission behavior.
        event.preventDefault();

        //Ensures something is being entered
        if($('#shopping-list-entry').val()){
            const userItem = $(event.currentTarget).find('input[name="shopping-list-entry"]').val();
            $('ul').append(
                
                //Experiment code to try and make it look prettier
                /**'<li><span class="shopping-item">' + userItem + '</span></li>' +
                $('.shopping-item-controls').last().clone() + '<li>' **/

                //This adds the container that contains the 'check' and 'delete' buttons.
                //However, this looks so ugly and not flexible, need help finding a more efficient way
                //also there is no space between the buttons using this method
                '<li><span class="shopping-item">' + userItem + 
                '</span><div class="shopping-item-controls"><button class="shopping-item-toggle">' +
                '<span class="button-label">check</span></button><button class="shopping-item-delete">' +
                '<span class="button-label">delete</span> </button></div></li>'
            );
            //Emtpies out the text form
            $("input:text").val("");
        }
    });
})

$(function strikeThrough() {
    $('ul').on('click', 'span', function() {
        $(this).closest('li').toggleClass('shopping-item__checked');
    });
})

$(function deleteItem() {
    $('ul').on('click', '.shopping-item-delete', function() {
        $(this).closest('li').remove();
    });
})

//$(addItem);
//$(strikeThrough);