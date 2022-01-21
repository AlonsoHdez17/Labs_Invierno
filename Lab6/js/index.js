/*$(".agregar").on('click',function() {

    let super = $("<div>")
    super.text(super)
    $("Lista").append(super)
      <button class = "check"> check </button>
      <button class = "delete"> delet </button>

    
})*/

$('.agregar').click(function(e){
    e.preventDefault();
    var check = $('<input type="button" value="Check" class="checar"/>');
    var deletee = $('<input type="button" value="Delete" class="del"/>');
    var text = $('<p>'+$('#newText').val()+'</p>');
    var li = $('<li class="lis"></li>');
    li.append(text);
    li.append(check);
    li.append(deletee);
    $('.Lista').append(li);
});
//<button class = "check"> check </button>
//<button class = "delete"> delet </button>


$(".Lista").on('click','.del', function(){
     $(this).parent().remove()
   } )

   $(".Lista").on('click','.checar', function(){

    $(this).prev().toggleClass('chec')
   })