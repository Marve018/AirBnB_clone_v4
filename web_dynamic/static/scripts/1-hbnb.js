$(document).ready(function(){
    let amenityIDs = [];
    $('input[type="checkbox"]').change(function(){
        let amenityID = $(this).data('id');
        if ($(this).is(':checked')){
            amenityIDs.push(amenityID);
        }else{
            let index = amenityIDs.indexOf(amenityID);
            if (index !== -1){
                amenityIDs.splice(index, 1)
            }
        }
        $('.amenities h4').text(amenityIDs.join(', '));
    })
})