$(function() {
    $(.js-shopping-list-form).submit(event => {
        // stop the default form submission behavior
        event.preventDefault();
        const userItem = $(event.currentTarget).find(#shopping-list-entry);
        console.log(userItem;)
    }
}
)