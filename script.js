function randImage(){
    $.getJSON('https://some-random-api.ml/img/fox', function(data){
        var element = document.getElementById('div');
        element.innerHTML = '<img src="' + data['link'] + '" />';
    });
}