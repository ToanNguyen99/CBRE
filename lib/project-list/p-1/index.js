function showHideMap() {
    var u = $('.canhcam-project-list-1 .map')
    var i = $('.canhcam-project-list-1 .map .hidemap')
    var s = $('.canhcam-project-list-1 .project .list-items .project-list .box')
    var a = $('.canhcam-project-list-1 .project .list-items .category .category-nav .list-style .showmap')
    var x = $('.canhcam-project-list-1 .project .list-items')
    i.on('click', function() {
        a.show()
        $('.map').hide('fast')
        x.css({
            'width': '100%'
        })
        if ($('.canhcam-project-list-1 .project .list-items .category .category-nav .list-style .list-2').hasClass('active') == true) {
            $('.canhcam-project-list-1 .col-mod').css({
                'flex': '0 0 20%',
                'max-width': "20%"
            })
        }
        $('.canhcam-project-list-1 .project .list-items .project-list').css({
            'height': 'auto',
            'overflow-y': 'initial'
        })
        $('.canhcam-pagination-1').show()

    })
    a.on('click', function() {
        $(this).hide()
        $('.canhcam-project-list-1 .map').show()
        x.css({
            'width': '60%'
        })
        if ($('.canhcam-project-list-1 .project .list-items .category .category-nav .list-style .list-2').hasClass('active') == true) {
            $('.canhcam-project-list-1 .col-mod').css({
                'flex': '0 0 33.3333333333%',
                'max-width': "33.3333333333%"
            })
        }
        $('.canhcam-project-list-1 .project .list-items .project-list').css({
            'padding-right': '5px',
            'margin-right': '1px'
        })
        $('.canhcam-project-list-1 .project .list-items .project-list').css({
            'height': '594px',
            'overflow-y': 'auto'
        })
        $('.canhcam-pagination-1').hide()


    })
}

function changeStyleList() {
    var i = $('.canhcam-project-list-1 .project .list-items .category .category-nav .list-style .nav-item')
    var x = $('.canhcam-project-list-1 .project .list-items .category .category-nav .list-style .list-1')
    var y = $('.canhcam-project-list-1 .project .list-items .category .category-nav .list-style .list-2')
    var m = $('.canhcam-project-list-1 .project .list-items .project-list')
    i.on('click', function() {
        i.removeClass('active')
        $(this).addClass('active')
    })
    x.on('click', function() {
        $('.canhcam-project-list-1 .col-mod').css({
            'flex': '0 0 100%',
            'max-width': "100%"
        })
        m.addClass('active')
    })
    y.on('click', function() {
        if ($('.canhcam-project-list-1 .map').is(':hidden') == true) {
            $('.canhcam-project-list-1 .col-mod').css({
                'flex': '0 0 20%',
                'max-width': "20%"
            })
        } else {
            $('.canhcam-project-list-1 .col-mod').css({
                'flex': '0 0 33.3333333333%',
                'max-width': "33.3333333333%"
            })
        }
        m.removeClass('active')
    })

}

function checkScroll() {
    if ($('.canhcam-project-list-1 .project .list-items .project-list .map').is(':hidden') == true) {
        console.log(1)
    } else {
        $('.canhcam-project-list-1 .project .list-items .project-list').css({
            'height': '594px',
            'overflow-y': 'auto'
        })
    }

}

function mobileModal() {
    $('.canhcam-project-list-1 .map-mobile .map-title .close').on('click', function() {
        $('.canhcam-project-list-1 .map-mobile').slideUp()
    })
    $('.canhcam-project-list-1 .filter-mobile .filter-title .close').on('click', function() {
        $('.canhcam-project-list-1 .filter-mobile').slideUp()
    })
    $('.canhcam-project-list-1 .project .list-items .project-list .project-style .nav .nav-item .mmap').on('click', function() {
        $('.canhcam-project-list-1 .map-mobile').slideDown()
    })
    $('.canhcam-project-list-1 .project .list-items .project-list .project-style .nav .nav-item .mfilter').on('click', function() {
        $('.canhcam-project-list-1 .filter-mobile').slideDown()
    })
}

function clearCheckbox() {
    $('.canhcam-project-list-1 .filter-mobile .clearcheck').on('click', function() {
        $('.canhcam-project-list-1 .filter-mobile .filter-content .filter-item .form-filter input[type=checkbox]').prop('checked', false);
    })
}
$(document).ready(function() {
    clearCheckbox()
    changeStyleList()
    showHideMap()
    mobileModal()
})