$(document).ready(function() {
    let searchform = {}; // search form database
    $(document).on('change', "input[type='checkbox']", function() {
        if (this.checked) {
            searchform[$(this).data('id')] = $(this).data('name');
        } else { // if unchecked
            delete searchform[$(this).data('id')];
        } // Amenities h4
        let name = []; 
        $.each(searchform, function(key, value) {
            name.push(key);
        });
        if (name.length === 0) {
            $('.amenities h4').html('&nbsp;');
        } else {
            $('.amenities h4').text(searchform.join(', '));
        }
        });
        }); // end of document
