var transformSupported = function () {
  var prefixes = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform']
  var div      = document.createElement('div')

  for (var i = 0; i < prefixes.length; i++)
    if (div && div.style[prefixes[i]] !== undefined) return true

  return false
}

jQuery(function ($) {
  var animate = true

  $.stellar({
    positionProperty: transformSupported() ? 'transform' : 'position'
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
