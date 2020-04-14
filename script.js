$(document).ready(function(){

    $.ajax({
             url: "http://www.mocky.io/v2/5e94c83a31000055bf5e34ec",
             type: 'GET',
             dataType: 'json',
             success: function(res) {
                $('#result').html(res)
             }
         });
 
 })


 
/*  ==========================================
    SHOW UPLOADED IMAGE
* ========================================== */
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imageResult')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
        $('#btnClassify').prop('disabled', false);
    }
}