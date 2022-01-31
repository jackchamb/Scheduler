
$(document).ready(function() {
    $('.saveBtn').on('click', function() {
        var desc = $(this).siblings('.textarea').val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, desc);
    })
    function StoreTime() {
        var timeIs = moment().hour();
        $('.time-block').each(function() {
            var timeinfo = parseInt($(this).attr('id').split('am, pm')[1]);
            if (timeinfo < timeIs) {
                $(this).removeclass('future');
                $(this).removeclass('present');
                $(this).addclass('past');

            }
            else if (timeinfo === timeIs) {
                $(this).removeclass('past');
                $(this).removeclass('future');
                $(this).addclass('present');
            }
            else {
                $(this).removeclass('present');
                $(this).removeclass('past');
                $(this).addclass('future');
            }
        })
    }

    $('8am .description').val(localStorage.getItem('8am'));
    $('9am .description').val(localStorage.getItem('9am'));
    $('10am .description').val(localStorage.getItem('10am'));
    $('11am .description').val(localStorage.getItem('11am'));
    $('12pm .description').val(localStorage.getItem('12pm'));
    $('1pm .description').val(localStorage.getItem('1pm'));
    $('2pm .description').val(localStorage.getItem('2pm'));
    $('3pm .description').val(localStorage.getItem('3pm'));
    $('4pm .description').val(localStorage.getItem('4pm'));
    $('5pm .description').val(localStorage.getItem('5pm'));
    $('6pm .description').val(localStorage.getItem('6pm'));
    $('7pm .description').val(localStorage.getItem('7pm'));
    $('8pm .description').val(localStorage.getItem('8pm'));
    $('9pm .description').val(localStorage.getItem('9pm'));
    $('10pm .description').val(localStorage.getItem('10pm'));
    $('11pm .description').val(localStorage.getItem('11pm'));
    $('12am .description').val(localStorage.getItem('12am'));
    StoreTime();

})

var today = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').html(today);