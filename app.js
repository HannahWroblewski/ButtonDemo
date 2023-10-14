$('.one button').click(function () {
    $('.one span').replaceWith('Good Job!')
  });

  $('.two button').click(function () {
    $('.two').slideUp('')
  })

  $('.three button').click(function () {
    $('.three div').append('Boom! New Text!')
  });

$('.four button').click(function () {
    $('template').html()
    let a = $('template').html()
    $('.template-target').html($('template').html())
    // $('.template-target').html('a') <-- also works because a is defined above
})

 

$('.six button').click(function () {
    $('.six').css({
        'transform': 'rotate(180deg)'
    })
})

$('.seven button').click(function () {
    const newButton = $('<button class="disappearingButton">CLICK TO DISAPPEAR</button>')
    newButton
        .css('margin', '10px')
        .css('padding', '10px')

    newButton.click(function (){
        $(this).fadeOut()
    })

    $('.seven').append(newButton)

})