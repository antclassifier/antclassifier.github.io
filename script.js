function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imageResult')
                .attr('src', e.target.result);
            var b64 = reader.result.replace(/^data:.+;base64,/, '');
            // $(document).ready(function(){
            //     $.ajax({
            //         url: "http://localhost:8088/ant/details",
            //         data: b64,
            //         type: 'GET',
            //         dataType: 'json',
            //         success: function(res) {
            //         $('#result').html(res)
            //         }
            //     }); 
            // })
        };
        reader.readAsDataURL(input.files[0]);
        $('#btnClassify').prop('disabled', false);
    }
}