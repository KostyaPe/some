$(document).ready(function () {

    var monthsAll = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

    var dateNow = new Date();
	
    var prevDay1 = new Date(dateNow);
    prevDay1.setHours(prevDay1.getHours() - 192);
	
    var prevDay2 = new Date(dateNow);
    prevDay2.setHours(prevDay2.getHours() - 168);

    var prevDay3 = new Date(dateNow);
    prevDay3.setHours(prevDay3.getHours() - 144);

    var prevDay4 = new Date(dateNow);
    prevDay4.setHours(prevDay4.getHours() - 120);

    var prevDay5 = new Date(dateNow);
    prevDay5.setHours(prevDay5.getHours() - 96);

    var prevDay6 = new Date(dateNow);
    prevDay6.setHours(prevDay6.getHours() - 72);

    var prevDay7 = new Date(dateNow);
    prevDay7.setHours(prevDay7.getHours() - 48);

    var prevDay8 = new Date(dateNow);
    prevDay8.setHours(prevDay8.getHours() - 24);
	

    //конструктор нужных подстановок дат
    var typeDate = function (obj, date) {
        $(obj).each(function () {
            $(this).text(date);
        });
    };
	
	typeDate('.date-js-1', (leadZero(prevDay1.getDate())+'.'+monthsAll[prevDay1.getMonth()]+'.'+prevDay1.getFullYear()) );
	typeDate('.date-js-2', (leadZero(prevDay2.getDate())+'.'+monthsAll[prevDay2.getMonth()]+'.'+prevDay2.getFullYear()) );
	typeDate('.date-js-3', (leadZero(prevDay3.getDate())+'.'+monthsAll[prevDay3.getMonth()]+'.'+prevDay3.getFullYear()) );
	typeDate('.date-js-4', (leadZero(prevDay4.getDate())+'.'+monthsAll[prevDay4.getMonth()]+'.'+prevDay4.getFullYear()) );
	typeDate('.date-js-5', (leadZero(prevDay5.getDate())+'.'+monthsAll[prevDay5.getMonth()]+'.'+prevDay5.getFullYear()) );
	typeDate('.date-js-6', (leadZero(prevDay6.getDate())+'.'+monthsAll[prevDay6.getMonth()]+'.'+prevDay6.getFullYear()) );
	typeDate('.date-js-7', (leadZero(prevDay7.getDate())+'.'+monthsAll[prevDay7.getMonth()]+'.'+prevDay7.getFullYear()) );
	typeDate('.date-js-8', (leadZero(prevDay8.getDate())+'.'+monthsAll[prevDay8.getMonth()]+'.'+prevDay8.getFullYear()) );
	typeDate('.nowyear', (dateNow.getFullYear()) );

	/*если одно число, то впереди будет 0*/
	function leadZero(n) {
		if (typeof(n) == "string") n = n * 1;
		return (n < 10 ? "0" : '') + n;
	}

});