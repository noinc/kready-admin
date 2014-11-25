/* ==========================================================================

    Project: Ready for Kindergarden
    Author: XHTMLized
    Last updated: Mon Nov 24 2014 21:28:38

   ========================================================================== */

(function($) {

  'use strict';

  var App = {

    /**
     * Init Function
     */
    init: function() {
      this.bootstrapTabs();
      this.bootstrapSelectIE8Fix();
      this.datepicker();
      this.sidenav();
      this.editField();
      this.filterDropdown();
      this.filtersHandler();
    },

    bootstrapTabs: function() {
      $('.tabs-main a').on('click', function(e) {
        e.preventDefault();
        $(this).tab('show');
      });
    },

    // https://github.com/silviomoreto/bootstrap-select/issues/769#issue-46365318
    bootstrapSelectIE8Fix: function() {
      Object.keys = Object.keys || function(
        o, // object
        k, // key
        r // result array
      ) {
        // initialize object and result
        r = [];
        // iterate over object keys
        for (k in o) {
          // fill result array with non-prototypical keys
          r.hasOwnProperty.call(o, k);
          r.push(k);
        }

        // return result
        return r;
      };
    },

    datepicker: function() {
      $('.date').datepicker({
        todayHighlight: true,
        orientation: 'bottom'
      });
//      console.log($('.date'));
    },

    sidenav: function() {
      var $sidenav = $('.sidenav');
      var $brand = $('.brand');

      $('.nav-toggler').on('click', function() {
        $(this).toggleClass('active');
        $sidenav.toggleClass('active');
        $brand.toggleClass('active');
      });
    },

    editField: function() {
      $('.editable').on('click', '.edit', function() {
        var $edit = $(this);
        var $heading = $edit.parent();
        var $input = $('<input class="form-control pull-left editable-input" type="text" placeholder="' + $heading.text() + '">');

        $heading.before($input);
        $heading.text('').append($edit);
        $heading.addClass('editing');
        $input.trigger('focus');

        $input.on('blur keydown', function(e) {
          if (e.keyCode === 13 || e.keyCode === 9 || e.type === 'blur') {
            var $this = $(this);
            $heading.text($this.val()).append($edit);
            $heading.removeClass('editing');
            $this.remove();
          }
        });
      });
    },

    filterDropdown: function() {
      $('.table-filters .dropdown-menu').on('click', function(e) {
        e.stopPropagation();
      });
    },

    filtersHandler: function() {
      var $filters = $('.filters');
      var $filtersList = $filters.find('ul');

      $filters
        .on('click', 'li .icon', function() {
          $(this).parent().remove();
        })
        .on('click', '.clear', function() {
          $filtersList.find('li').remove();
        });
    }

  };

  $(function() {
    App.init();
  });

})(jQuery);
