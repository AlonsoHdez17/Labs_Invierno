$(document).ready(function() {
    // Start your code from here
    let animals = ["dog","cat","rabbit","hamster","frog"]
    for (let i = 0; i< animals.length;i++){
        let a = $("<button>")
        a.addClass("animal-button")
        a.attr("data-type",animals[i])
        a.text(animals[i])
        $("#animal-buttons").append(a)
    }


    $("#animal-buttons").on("click", ".animal-button", function() {
    $("#animals").empty()
    let search = $(this).attr("data-type")
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dc6zaTOxFJmzC&limit=10";
    
    $.ajax({
        url: queryURL
    })
    
    .then (function(response){
     let results = response.data
        for (let i = 0; i < results.length; i++){

        let animalDiv = $("<div class= \"animal-item\">")

        let rating = results[i].rating

        let p = $("<p>").text("Rating: " + rating)

        let animalImage = $("<img>")
        animalImage.attr("src",results[i].images.fixed_height_still.url)
        animalImage.attr("data-still",results[i].images.fixed_height_still.url)
        animalImage.attr("data-animate",results[i].images.fixed_height.url )
        animalImage.attr("data-state","still")
        animalDiv.append(p)
        animalDiv.append(animalImage)
    $("#animals").append(animalDiv)


     }
     $("#animals").on("click", ".animal-item", function() {
        animalImage.attr("src",results[i].images.fixed_height.url )
        animalImage.attr("data-state","animate")

     })

    }) 
    //alert(queryURL)

    })
     

    $('#add-animal').on('click',function(hola) {
        hola.preventDefault();
        var text = $('<p>'+$('#animal-input').val()+'</p>');
        var li = $('<div class="button,input"></div>');
        li.append(text);
        $('.animals').append(li);
    
        
    })

    });