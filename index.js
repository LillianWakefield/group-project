$(document).ready(function() {
    function renderBoth(left,right){
        $('.card-left').append(left);
        $('.card-right').append(right);
    }
    $('.startButton').click(function(){
        if ($('#both-check').is(':checked')){
            $.get('https://dog.ceo/api/breeds/image/random', function(data){
            var dogPic = $('.card-left').append('<image src='+data.message+'/>');
            });
            var catPic = $('.card-right').append('<image src="http://thecatapi.com/api/images/get?format=src&type=jpg,png&size=med"/>')
        }
        else if($('#dogs-check').is(':checked')){
            $.get('https://dog.ceo/api/breeds/image/random', function(data){
                $('.card-left').append('<image src='+data.message+'/>');
            });
            $.get('https://dog.ceo/api/breeds/image/random', function(data){
                $('.card-right').append('<image src='+data.message+'/>');
            });   
        }
        else if ($('#cats-check').is(':checked')){
            $('.card-left').append('<image src="http://thecatapi.com/api/images/get?format=src&type=jpg,png&size=med"/>')
            $('.card-right').append('<image src="http://thecatapi.com/api/images/get?format=src&type=jpg,png&size=med"/>')
        }

    });
});  