$(document).ready(function() {
  var populateRates = function (data) {
    var $ratesTableBody = $('.ratesTable > tbody');

    data.sort(function (a,b) {
      return parseFloat(b.apy) - parseFloat(a.apy);
    });

    data.forEach(function (bank) {
      $ratesTableBody.append('<tr' + (bank.name === 'URBank' ? ' class=urbank':'') + '><td class="bankName">' + bank.name + '</td><td class="apy">' + bank.apy + ' %</td><td class="earnings">$' + bank.earnings + '</td></tr>');
    });

  }

  // Get json for rates table
  var rates = $.get("/assets/js/code-test.json", populateRates);

  $('.tabPanels').tabsInit();

  $('#loginDisplay').on('click', function(event) {
    event.preventDefault();
    $('#loginModal').fadeIn('fast');
  });

  $('.modalClose').on('click', function(event) {
    event.preventDefault();
    $(this).parents('.modalWindow').hide();
  });
});
