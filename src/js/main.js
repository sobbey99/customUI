import $ from './lib/lib';

$('button').on('click',function() {
    $('div').eq(1).toggleClass('active');
});

function sayHello() {
    console.log('Hello');
}

$('div').click(function() {
    console.log($(this).index());
});

console.log($('div').eq(2).find('.some'));

console.log($('.some').closest('.findme'));

console.log($('.findme').siblings());

$('button').fadeIn(1800);