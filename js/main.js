jQuery(function ($) {
  var animate = true

  $.stellar()

  $('[data-footer]').hover(function () {
    if (animate) {
      animate = false

      $('body').animate({ scrollTop: $(document).height() }, 1000)
    }
  })

  $('[data-content]').hover(function () {
    setTimeout(function () { animate = true }, 5000)
  })
})
