jQuery(function ($) {
  var animate = true

  $.stellar({
    positionProperty: 'transform'
  })

  $('[data-footer]').on('mouseenter', function () {
    if (animate) {
      $('html, body').animate({ scrollTop: $(document).height() }, 1000, function () {
        animate = false
      })
    }
  })

  $(document).on('affixed-top.bs.affix', '[data-footer]', function () {
    animate = true
  })
})
