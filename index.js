$(document).ready(function() {
    var cuteImg = "";
    function renderCute() {
        if ($('#both-check').is(':checked')){
            $.get('https://dog.ceo/api/breeds/image/random', function(data){
            $('#card-left').attr('src', data.message);
            });
            
            $('#card-right').attr('src', "http://thecatapi.com/api/images/get?format=src&type=jpg,png&size=med"+ new Date().getTime())
        }
        else if($('#dogs-check').is(':checked')){
            $.get('https://dog.ceo/api/breeds/image/random', function(data){
                $('#card-left').attr('src', data.message);;
            });
            $.get('https://dog.ceo/api/breeds/image/random', function(data){
                $('#card-right').attr('src', data.message);;
            });   
        }
        else if ($('#cats-check').is(':checked')){
            $('#card-left').attr('src', "http://thecatapi.com/api/images/get?format=src&type=jpg,png&size=med"+ new Date().getTime())
            $('#card-right').attr('src', "http://thecatapi.com/api/images/get?format=src&type=jpg,png&size=med"+ new Date().getTime()) 
        }
    }
    //Renders images to the screen when page first loads.
    $.get('https://dog.ceo/api/breeds/image/random', function(data){
            $('#card-left').attr('src', data.message);
            });
            
            $('#card-right').attr('src', "http://thecatapi.com/api/images/get?format=src&type=jpg,png&size=med"+ new Date().getTime())
    //Depending on the user preference, loads images to screen with submit button.
    $('.startButton').click(function(){
        renderCute();
        
    });
    $('.cute-container').on("click", '.pick-left', function() {
        var galleryJSON = sessionStorage.getItem('gallery');
        var gallery = JSON.parse(galleryJSON);
        if (gallery === null) {
            gallery = [];
        };
        gallery.push(document.getElementById("card-left").src);
        galleryJSON = JSON.stringify(gallery);
        sessionStorage.setItem('gallery', galleryJSON);
        console.log("Check left.");
        renderCute();
    });
    $('.cute-container').on("click", '.pick-right', function() {
        var galleryJSON = sessionStorage.getItem('gallery');
        var gallery = JSON.parse(galleryJSON);
        if (gallery === null) {
            gallery = [];
        };
        gallery.push(document.getElementById("card-right").src);
        galleryJSON = JSON.stringify(gallery);
        sessionStorage.setItem('gallery', galleryJSON);
        console.log("Check right.");
        renderCute();
    });
});  