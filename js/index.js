const months=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],
monthMin=["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"],
days=["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],
daysMin=["вс","пн","вт","ср","чт","пт","сб"],
seasons=["зима","весна","лето","осень"];
function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {
    const _counterLength = 1465;
    for (let counter = 0; counter < _counterLength; counter++) {
        innerDate(counter, 'date-');
        innerDate(counter, 'date')
    } 
    function innerDate(counter, dateType) {
        let newCounter;
        dateType === 'date-' ? newCounter = -counter : newCounter = counter;
        const _msInDay = 86400000, 
        _localDate = new Date(Date.now() + (newCounter * _msInDay)),
        _day = _localDate.getDate(),
        _month = _localDate.getMonth() + 1, 
        _year = _localDate.getFullYear(); 
        const dayDefault = addZero(_day), 
        monthDefault = addZero(_month), 
        defaultDate = dayDefault + '.' + monthDefault + '.' + _year; 
        const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); 
        for (let i = 0; i < nodeList.length; i++) {
            const dateFormat = nodeList[i].dataset.format;
            dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} 
        }
        function changeFormat(_day, _month, _year, format, counter) { 
            let innerFormat = format; 
            const testFormat = ["dd","mm","yyyy","year"], 
            dateFormat = { dd: _day, mm: addZero(_month), 
            yyyy: _year, year: getYearWithCounter(_year, counter), };
            for (let i = 0; i < testFormat.length; i++) { 
                let string = testFormat[i]; 
                let regExp = new RegExp(string); 
                innerFormat = innerFormat.replace(regExp, dateFormat[string]); 
            } 
            return innerFormat.split(' ').join(' ') 
        } 
        function getYearWithCounter(year, counter) {
            return year + counter
        } 
        function addZero(numb){
            return numb<10?'0'+numb:numb
        } 
        function changeFirstLetter(isBig,str){
            return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str}
}
if (document.body.classList.contains('ev-date')) {
    document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});
}

let blackbtn = document.querySelectorAll('.plus-18')
for (let i = 0; i < blackbtn.length; i++) {
    blackbtn[i].addEventListener('click', function (e) {
        document.querySelector('img[data-id="' + e.target.dataset.id + '"]').style.display = 'block'
        this.style.display = 'none'
    })
}

$(document).ready(function() {
    $('.boxes > div').click(function () {
        if ($(this).parent().hasClass('boxesfirsttry')) {
            $('.boxes').removeClass('boxesfirsttry');
            $(this).addClass('openbox');
            $(this).find('.try').hide();
            $(this).find('.opentry').show();
            setTimeout(function () {
                $('.sweet-overlay').show();
                $('.sweet-alert').show();
            },500);
        } else if ($(this).parent().hasClass('boxeslasttry')) {
            if (!$(this).hasClass('openbox')) {
                $(this).find('.try').hide();
                $(this).find('.opentry').show();
                $(this).find('.boxtext').css('display','block');
                $('.boxesContainer').removeAttr("id");
                $('.order_block').attr("id", 'order');
                setTimeout(function () {
                    $('.spin-result-wrapper').show();
                    setTimeout(function () {
                        $('.boxesContainer').slideUp(250);
                        setTimeout(function () {
                            $('.order_block').slideDown(250);
                        },500)
                    },500)
                },500);
            }
        }
    });

    $('#update').click(function () {
        $('.sweet-overlay').hide();
        $('.sweet-alert').hide();
        $('.boxes').addClass('boxeslasttry');
    });

    $('.pop-up-button').click(function (e) {
        e.preventDefault()
        $('.spin-result-wrapper').hide();
    })
});


function scrollto() {
    $(".scrollto").click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 80}, 1500);
        return false;
    });
}

scrollto()

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});