$(function () {

    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function () {
            return $(this).attr("src").replace(".svg", ".png");
        });
    }
    ;

    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Thank you!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    const openPopup = document.querySelector('.btn-form')
    const formPopup = document.querySelector('.form')
    const closePopup = document.querySelector('.close')
    const formContent = document.querySelector('.form_content')

    openPopup.addEventListener('click', (e) => {
        e.preventDefault()
        formPopup.classList.remove('hidden')
    })

    closePopup.addEventListener('click', () => {
        formPopup.classList.add('hidden')
    })

    $(".form").on('click', function (e) {
        if (e.target == this) $(".form").addClass('hidden');
    });
    $(function () {
        $('a[href^="#"]').on('click', function (event) {
            event.preventDefault();
            var sc = $(this).attr("href"),
                dn = $(sc).offset().top - 80;
            $('html, body').animate({
                scrollTop: dn
            }, 1000);
        });
    });
});