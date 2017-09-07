
$(document).ready(function(){
    $('#getUser').on('click',function(){
        var user_id = $('#user_id').val();
        $.ajax({
            type:'POST',
            url:'getData.php',
            dataType: "json",
            data:{user_id:user_id},
            success:function(data){
                if(data.status == 'ok'){
                    $('#userName').text(data.result.name);
                    $('#userEmail').text(data.result.email);
                    $('#userPhone').text(data.result.phone);
                    $('#userCreated').text(data.result.join_date);
                    $('.user-content').slideDown();
                }else{
                    $('.user-content').slideUp();
                    alert("User not found...");
                }
            }
        });
    });
});


//1     Kóðinn virkjast þegar skjalið er tilbúið
//2     Fall sem fer í gang þegar smellt er á ID getUser í html skjalinu
//3     Búum til breytuna user_id og setjum inní hana það sem er í ID user_id
//4     byrjum Ajax beiðni
//5     Hvaða týpa af beiðni erum við að biðja um
//6     Í hvaða url á að senda beiðnina
//7     Hvaða data týpu á serverin von á
//8     Hvaða gögn verða send á serverinn
//9     Þegar beiðnin hefur tekist að þá keyrist þetta fall og gögnin sem komu frá servernum eru í data
//10    Ef gildið í data.status er ok þá keyrist þessi if setning
//11-14 Setjum textann sem við fengum í php skjalinu í viðkomandi ID element
//15    SlideDown á class user-content
//16    else
//17    slideUP á class user-content
//18    pop up sem segir "user not found.."/**