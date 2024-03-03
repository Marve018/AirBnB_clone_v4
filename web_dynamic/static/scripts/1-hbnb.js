$(document).ready(function() {
    let checkedAmenities = [];

    function updateAmenities() {
        let amenitiesText = checkedAmenities.join(', ');
        $('.amenities h4').text(amenitiesText);
    }

    $('input[type="checkbox"]').change(function() {
        let amenityID = $(this).data('id');
        let amenityName = $(this).data('name');

        if ($(this).is(':checked')) {
            checkedAmenities.push(amenityName);
        } else {
            let index = checkedAmenities.indexOf(amenityName);
            if (index !== -1) {
                checkedAmenities.splice(index, 1);
            }
        }

        updateAmenities();
    });
});
