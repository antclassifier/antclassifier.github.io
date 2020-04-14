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

// $(function () {
//     $('#upload').on('change', function () {
//         readURL(input);
//         console.log(5);
//     });
// });

/*  ==========================================
    SHOW UPLOADED IMAGE NAME
* ========================================== */
// var input = document.getElementById( 'upload' );
// console.log(7);
// var infoArea = document.getElementById( 'upload-label' );

// input.addEventListener( 'change', showFileName );
// function showFileName( event ) {
//     console.log(6);
//   var input = event.srcElement;
//   var fileName = input.files[0].name;
//   infoArea.textContent = 'File name: ' + fileName;
// }
