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

// this function was supposed to be updating the state list from here but its refusing to work for now
document.addEventListener('DOMContentLoaded', function() {
    let states = ["Abia", "Imo", "Enugu", "Ebonyi", "Anambra"];
    let popover = document.querySelector('.popover ul');

    states.forEach(function(state) {
        let li = document.createElement('li');
        let h2 = document.createElement('h2');
        h2.textContent = state.charAt(0).toUpperCase() + state.slice(1);
        li.appendChild(h2);
        popover.appendChild(li);
    });
});
