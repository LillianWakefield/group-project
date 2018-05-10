$(document).ready(function() {
    var galleryJSON = sessionStorage.getItem('gallery');
    var gallery = JSON.parse(galleryJSON);
    function renderCutePics(galleryArray) {
        var finalHTML = '';

        galleryArray.forEach(function(currentPic) {
            finalHTML += '<div class="card" style="width: 18rem">';
            finalHTML += '<div class="card-body">';
            finalHTML += '<image class="card-img-top" src="' + currentPic + '">';
            finalHTML += '<div>No longer cute?</div>';
            finalHTML += '<button type="button" class="btn btn-danger">Delete</button>';
            finalHTML += '</div>';
            finalHTML += '</div>';

        });

        return finalHTML;

    }
    var galleryHTML = renderCutePics(gallery);
    $('.photo-container').html(galleryHTML);
});
