alert(1)

$("#button").on("click", function () {
    //リストアップ
    //var images = [
        //['/ img / tentori_choju_1ten.jpg'],
        //['/ img / tentori_choju_2ten.jpg'],
        //['/ img / tentori_choju_3ten.jpg'],
        //['/ img / tentori_choju_5ten.jpg'],
        //['/ img / tentori_choju_7ten.jpg'],
        //['/ img / tentori_choju_10ten.jpg']
    //];
    //var imagearea = document.getElementById('#imagearea');

    //var num = Math.floor(Math.random() * 6);
    //img.scr = images[num];

    var num = Math.floor(Math.random() * 6);
    //console.log(num, "箱の中身")

    $("#imagearea").change(function () {

        if (num === 0) {
            console.log("1ten");
            $("#imagearea").attr('scr', "img/tentori_choju_1ten.jpg");
        }
    
        else if (num === 1) {
            console.log("2ten");
            $("#imagearea").attr('scr', "img/tentori_choju_2ten.jpg");
        }
    
        else if (num === 2) {
            console.log("3ten");
            $("#imagearea").attr('scr', "img/tentori_choju_3ten.jpg");
        }
    
        else if (num === 3) {
            console.log("5ten");
            $("#imagearea").attr('scr', "img/tentori_choju_5ten.jpg");
        }
    
        else if (num === 4) {
            console.log("7ten");
            $("#imagearea").attr('scr', "img/tentori_choju_7ten.jpg");
        }
    
        else if (num === 5) {
            console.log("10ten");
            $("#imagearea").attr('scr', "img/tentori_choju_10ten.jpg");
        }
    })
});