/**
 *  Author: Xiaoyuze88
 *  Contact: xiaoyuze88@gmail.com
 *  Description: An simple BootStrap3 pagination plugin.
 *  GitHub link: https://github.com/xiaoyuze88/pagination
 *  License: MIT
 *  Version: 1.0
 *  Update date: 4/30/2015
 *
 */
+(function (factory) {
    if (typeof define === "function" && define.amd) {
        return define(['jquery'], factory);
    }
    else {
        return factory($);
    }
})(function ($) {
    'use strict';

    function Pagination(element, option) {

        this.$element = $(element);

        this.option = $.extend({}, Pagination.DEFAULT_OPTION, option);

        this._init();

        var $pagination = $(this._render());

        $pagination.appendTo(this.$element);
    }

    Pagination.DEFAULT_OPTION = {
        first: '&laquo;', //  <<
        prev: '&lsaquo;', //  <
        last: '&raquo;', //  >>
        next: '&rsaquo;', //  >
        visiblePageNum: 4,
        currentPage: 1,
        totalPage: 1,
        url: ''
    };

    // initialize options value
    Pagination.prototype._init = function () {

        var option = this.option;

        option.totalPage = parseInt(option.totalPage, 10);
        option.currentPage = parseInt(option.currentPage, 10);

        if (!option.currentPage || isNaN(option.currentPage)) {
            option.currentPage = option.currentPage;
        }
        else if (option.currentPage > option.totalPage) {
            option.currentPage = option.totalPage;
        }

    };

    Pagination.prototype._render = function () {
        var html = '',
            option = this.option;

        var disabledClassString = ' class="disabled"',
            disabledUrlString = 'javascript:;';

        html += '<ul class="pagination">';

        var firstPageLink, prevPageLink, 
            lastPageLink, nextPageLink,
            firstLinkClass = '',
            lastLinkClass = '';
            

        if(option.currentPage > 1) {
            firstPageLink = option.url + 1;
            prevPageLink = option.url + (option.currentPage - 1);
        }
        else {
            firstPageLink = prevPageLink = disabledUrlString;
            firstLinkClass = disabledClassString;
        }
        
        if(option.currentPage < option.totalPage) {
            lastPageLink = option.url + option.totalPage;
            nextPageLink = option.url + (option.currentPage + 1);
        }
        else {
            lastPageLink = nextPageLink = disabledUrlString;
            lastLinkClass = disabledClassString;
        }


        // if need to show first page link
        if (option.first) {
            html += '<li'+firstLinkClass+'>' +
                '<a href="' + firstPageLink + '" title="First Page">' +
                '<span>' + option.first + '</span>' +
                '</a>' +
                '</li>';
        }

        // prev page button
        html += '<li'+firstLinkClass+'>' +
            '<a href="' + prevPageLink + '">' +
            '<span>' + option.prev + '</span>' +
            '</a>' +
            '</li>';


        if (option.currentPage > option.visiblePageNum) {
            html += '<li>' +
                '<a href="' + firstPageLink + '">' +
                '<span>1</span>' +
                '</a>' +
                '</li>';
        }

        if (option.currentPage > option.visiblePageNum + 1) {
            html += '<li class="disabled">' +
                '<a href="' + disabledUrlString + '">' +
                '<span>...</span>' +
                '</a>' +
                '</li>';
        }

        for (var i = option.currentPage - option.visiblePageNum + 1; 
            i < option.currentPage + option.visiblePageNum; i++) {

            if (i <= 0 || i > option.totalPage) continue;

            if (option.currentPage === i) {
                html += '<li class="active">' +
                    '<a href="' + disabledUrlString + '">' +
                    '<span>' + option.currentPage + '</span>' +
                    '</a>' +
                    '</li>';
            }
            else {
                html += '<li>' +
                    '<a href="' + option.url + i + '">' +
                    '<span>' + i + '</span>' +
                    '</a>' +
                    '</li>';
            }
        }

        if ((option.totalPage - option.currentPage) > option.visiblePageNum) {
            html += '<li class="disabled">' +
                '<a href="' + disabledUrlString + '">' +
                '<span>...</span>' +
                '</a>' +
                '</li>';
        }
        if (option.totalPage - option.currentPage > option.visiblePageNum - 1) {
            html += '<li>' +
                    '<a href="' + option.url + option.totalPage + '">' +
                    '<span>' + option.totalPage + '</span>' +
                    '</a>' +
                    '</li>';
        }

        // if need to show last page button
        if (option.last) {
            html += '<li'+lastLinkClass+'>' +
                '<a href="' + lastPageLink + '">' +
                '<span>' + option.last + '</span>' +
                '</a>' +
                '</li>';
        }

        // next page button
        html += '<li'+lastLinkClass+'>' +
            '<a href="' + nextPageLink + '" title="Last page">' +
            '<span>' + option.next + '</span>' +
            '</a>' +
            '</li>';

        return html;
    };

    function Pluggin(option) {
        return this.each(function () {
            return new Pagination(this, option);
        });
    }


    $.fn.pagination = Pluggin;
    $.fn.pagination.Constructor = Pagination;
});
