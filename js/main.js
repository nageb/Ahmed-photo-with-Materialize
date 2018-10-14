$(document).ready(function() {
    

    // control menu trigger
    $('.sidenav').sidenav();


    // Use Zoom With Images Box
    $('.materialboxed').materialbox();

    // Work Parallax
    $('.parallax').parallax();


    // Turn On Tabs
    $('.tabs').tabs();


    // Work Datepicker
    $('.datepicker').datepicker({
    	disableWeekends: true
    });


    // Inishialize Tooltip
    $('.tooltipped').tooltip();


    // Deal With Second Tooltip
    $('.tooltipped-2').tooltip({
    	position: 'right'
    });

    // Inishialize Smoth Scroll With Scrollspy
    $('.scrollspy').scrollSpy({
    	throttle: 500
    });


});