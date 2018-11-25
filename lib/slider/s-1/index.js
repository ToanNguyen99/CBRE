function checkTab2() {
    $('.canhcam-slider-1 .banner-tabs a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        console.log(e)
    })
}

$(document).ready(function() {
    checkTab2()
});