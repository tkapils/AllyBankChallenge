/*

I designed this plugin with the thought process of it being flexible with little markup needed.
A user will call the tabsInit() function on a ul element and it will grab all the panels associated with it.
this allows for the user to style the tabs as they wish. It also allows for multiple tab sets on
the same page without interference.

*/

(function($) {
  $.fn.tabsInit = function () {
    var tabs = this.find('li');
    var firstTab = $(tabs[0]);
    var panels = [];

    firstTab.addClass('active');

    tabs.each(function(index, el) {
      var $this = $(this);
      var a = $this.find('a');
      var panel = a.attr('href');

      panels.push($(panel));

      a.on('click', function(event) {
        event.preventDefault();
        tabs.removeClass('active');
        panels.forEach(function (panel) {
          $(panel[0]).hide();
        });
        $this.addClass('active');
        $(panel).show();
      });
    });

    $(panels[0][0]).show();

    return this;
  }
})(jQuery);
