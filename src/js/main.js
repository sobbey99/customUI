import $ from './lib/lib';

// $('button').on('click',function() {
//     $('div').eq(1).toggleClass('active');
// });


// $('div').click(function() {
//     console.log($(this).index());
// });

// console.log($('div').eq(2).find('.some'));

// console.log($('.some').closest('.findme'));

// console.log($('.findme').siblings());

// $('button').fadeIn(1800);

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(1000);
});


$('[data-counter="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(1000);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});