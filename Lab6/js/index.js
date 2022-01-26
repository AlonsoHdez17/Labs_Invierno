$('.agregar').on('click',function(hola) {
    hola.preventDefault();
   // var check = $('<input type="button" value="Check" class="checar"/>');
   // var deletee = $('<input type="button" value="Delete" class="del"/>');
    var text = $('<p>'+$('#newText').val()+'</p>');
    var li = $('<li class="lis"></li>');
    li.append(text);
   // li.append(check);
   // li.append(deletee);
    $('.Lista').append(li);

    
});



$(".Lista").on('click','.del', function(){
     $(this).parent().remove()
   } )

   $(".Lista").on('click','.checar', function(){

    $(this).closest(".lis").toggleClass('chec')
   })
