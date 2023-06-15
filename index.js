
$("#btn").on('click',()=>{
    $.ajax({
        method:"get",
    
        url:"https://dog.ceo/api/breeds/image/random",
        data:{

        },
        success:function(data){
            console.log(data);

            $("#img").attr("src",data.message);
        }
    }).fail(()=>{

    })

    



})

