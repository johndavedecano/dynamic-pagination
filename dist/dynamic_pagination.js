// Dynamic Pagination
// version 1.1, May 14th, 2011

(function($) {

    /**
     * Dynamic_Pagination
     */
    $.Dynamic_Pagination = function(element, options) {

        var defaults = {
              page : 1
            , count : 1
            , prev : '.prev .pagination-previous'
            , next : '.next .pagination-next'
            , tbox : '.pagination-counter-input'
            , ctex : '.pagination-pages-count'
            , change : function(data) {}
        };

        var plugin = this;

        var $element = $(element),
             element = element;

        plugin.settings = {}

        /**
         * Constructor
         */
        plugin.init = function() {

            plugin.settings = $.extend({}, defaults, options);

            $(plugin.settings.tbox).val(plugin.settings.page);

            $(plugin.settings.ctex).text(plugin.settings.count);

            $(plugin.settings.tbox).on('keypress', plugin.change_handler);

            $(plugin.settings.prev).on('click', plugin.prev);

            $(plugin.settings.next).on('click', plugin.next);

            plugin.check_pages(plugin.settings.page);
        }
        /**
         * update_count
         * @param  {[type]} count [description]
         * @return {[type]}       [description]
         */
        plugin.update_count = function(count) {

            plugin.settings.count = count;

            $(plugin.settings.ctex).text(plugin.settings.count);
        }

        /**
         * [update_page description]
         * @param  {[type]} page   [description]
         * @param  {[type]} action [description]
         * @return {[type]}        [description]
         */
        plugin.update_page = function(page, action) {

            plugin.settings.page = page;

            if (action == 'next') {

                plugin.next();

            } else {

                plugin.prev();
            }
        }
        /**
         * next
         * @return {Function} [description]
         */
        plugin.next = function() {

            var next = plugin.settings.page + 1;

            if (next <= plugin.settings.count) {

                $(plugin.settings.tbox).val(next);

                plugin.settings.page = next;

                plugin.check_pages(plugin.settings.page);

                plugin.settings.change(plugin.settings.page);

            } else {

                return false;
            }

        }
        /**
         * prev
         * @return {[type]} [description]
         */
        plugin.prev = function() {

            var prev = plugin.settings.page - 1;

            if (prev >= 1) {

                $(plugin.settings.tbox).val(prev);

                plugin.settings.page = prev;

                plugin.check_pages(plugin.settings.page);

                plugin.settings.change(plugin.settings.page);

            } else {

                return false;
            }
        }
        /**
         * change_handler
         * @param  {[type]} event [description]
         * @return {[type]}       [description]
         */
        plugin.change_handler = function(event) {

            if (event.which == 13) {

                var page = parseInt($(this).val());

                if (isNaN(page)) {

                    return false;

                } else if (page < 1 || page > plugin.settings.count) {

                    return false;

                } else if (page == plugin.settings.page) {

                    return false;

                } else {

                    plugin.settings.change(page);

                    plugin.check_pages(page);
                }
            }

        }
        /**
         * check_pages
         * @param  {[type]} page [description]
         * @return {[type]}      [description]
         */
        plugin.check_pages = function(page) {

            if (page <= 1) {

                $element.find(plugin.settings.prev).css('visibility', 'hidden');

            } else {

                $element.find(plugin.settings.prev).css('visibility', 'visible');
            }

            if (page >= plugin.settings.count) {

                $element.find(plugin.settings.next).css('visibility', 'hidden');

            } else {

                $element.find(plugin.settings.next).css('visibility', 'visible');
            }
        }

        plugin.init();
    }
    /**
     * Dynamic_Pagination
     * @param {[type]} options [description]
     */
    $.fn.Dynamic_Pagination = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('Dynamic_Pagination')) {
                var plugin = new $.Dynamic_Pagination(this, options);
                $(this).data('Dynamic_Pagination', plugin);
            }
        });
    }

})(jQuery);
