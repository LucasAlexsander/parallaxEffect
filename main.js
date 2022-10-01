$(document).ready(() => {

    if($(window)[0].innerWidth <= 758) {
        
        $('#textos').css({
            'top': 35 + (scroll/15) + '%',
            'left': 40 + '%'
        })
        
        $('#lua').css({
            'display': 'none',
            'transform': 'rotate(' + 190 + 'deg)'
        })

    } else {
        $('#lua').css('display', 'block');

        $(window).scroll(function(e) {
            let scroll = e.currentTarget.pageYOffset;
            /* Parallax in Texto */
            $('#textos').css({
                'top': 35 + (scroll/15) + '%',
                'left': 40 + (scroll/15) + '%'
            })
            /* Parallax Effect in lua */
            let rotacaoLua = (20 + scroll / 2);
            $('#lua').css({
                'transform': 'rotate(' + (15 + scroll / 2) + 'deg)'
            })
            /* Desaparece a lua quando saimos do inicio */
            if (rotacaoLua >= 190) {
                $('#lua').css('display', 'none')
            } else {
                $('#lua').css('display', 'block')
            }
            /* Desaparece o texto quando saimos do inicio */
            if($('#textos').css('top') >= "70%" && $('#textos').css('left') >= "65%") {
                $('#textos').css('display', 'none');
            } else {
                $('#textos').css('display', 'block');
            }
        })
    }    
    
    /* Abrir o menu */
    $('#button').on('click', () => {
        if($('#menuNav').css('display') == 'none') {
            $('#menuNav').css('display', 'flex')
        } else {
            $('#menuNav').css('display', 'none')
        }
    })
})
