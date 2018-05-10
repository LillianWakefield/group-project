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