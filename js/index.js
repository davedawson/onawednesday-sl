  /*
*************************************************

JavaScript Functions
Requires jQuery

Created by Cottleston Pie

*************************************************
*/

jQuery(document).ready(function() {

  var oaw = {
      loadInterviews: function(){
        // $( 'div#lazyjson' ).lazyjson({
        //     api: {
        //         uri: '/posts.json'
        //     },
        //     pagination: {
    		// 		active: true,
    		// 		pages: 1,
    		// 		count: 8,
    		// 		lazyLoad: true,
        //     effect: 'fadeIn',
        //     delay: 00
    		// 	},
        // });
        $( 'div#lazyjson' ).lazyjson({

            // Fire the first API call on page load
            loadOnInit: true,

            /*----------------------
             * Templating
             *---------------------*/

            // The template element's ID prefix (e.g. "#template-lazyjson" for $('#lazyjson').lazyjson())
            // templatePrefix: 'template-',

            // The loader element, will also accept a jQuery object
            loader: '<div class="thumbnail loading"><div class="loader" title="0"><svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve"><path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/><path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="1.2s" repeatCount="indefinite"/></path></svg></div></div>',

            // The URL or path to the loader image to assign to the loader object
            loaderImg: null,

            // Element displayed when results don't exist, will also accept a jQuery object
            noResults: '<p id="lj-noresponse" style="text-align:center;padding:20px; clear:both;"></p>',

            // Text to display in default noResults element
            noResultsText: 'No Results Found',

            /*----------------------
             * Effects
             *---------------------*/

            // The delay between display of animated results
            delay: 50,

            // Set an animation for result display, currently accepts 'slideDown' and 'fadeIn'
            effect: 'fadeIn',

            /*----------------------
             * Pagination
             *---------------------*/

            pagination: {

                // Turn pagination on or off
                active: true,

                // The # of pages to load on init
                pages: 1,

                // The # of results to load per page
                count: 4,

                // Append results to container without replacing current set
                appendResults: false,

                /*
                Load Events
                */

                // Activate lazy load, overrides other load events
                lazyLoad: true,

                // jQuery selector for next result set button
                nextBtn: 'a.next',

                // jQuery selector for previous result set button
                prevBtn: 'a.previous',

                // Set a custom load event (click, blur, focus, hover, etc.)
                loadOnEvent: null,

                // jQuery selector for the custom event target
                loadOnTarget: null
            },

            /*----------------------
             * API
             *---------------------*/

            api: {

                // The API endpoint, local or remote
                uri: '/posts.json',

                // GET or POST request
                httpMethod: 'GET',

                // Force JSONP on local requests
                forceJSONP: false,

                // Send pagination vars to API in AJAX request
                pagination: false,

                // Set key of current page # param sent in API request
                pagesKey: 'page',

                // Set key of limit param sent in API request
                limitKey: 'limit',

                // Set key of offset param sent in API request
                offsetKey: 'offset',

                // Additional params to send with each request
                params: {}
            },

            /*----------------------
             * Debug
             *---------------------*/

            // Turn debug mode on or off
            debug: false,

            /*----------------------
             * Callbacks
             *---------------------*/

            // Fires after load event
            afterLoad: function (res) {}
        });
      },
      loadInterviews: function(){
        // $( 'div#lazyjson' ).lazyjson({
        //     api: {
        //         uri: '/posts.json'
        //     },
        //     pagination: {
        // 		active: true,
        // 		pages: 1,
        // 		count: 8,
        // 		lazyLoad: true,
        //     effect: 'fadeIn',
        //     delay: 00
        // 	},
        // });
        $( 'div#lazyjson' ).lazyjson({

            // Fire the first API call on page load
            loadOnInit: true,

            /*----------------------
             * Templating
             *---------------------*/

            // The template element's ID prefix (e.g. "#template-lazyjson" for $('#lazyjson').lazyjson())
            // templatePrefix: 'template-',

            // The loader element, will also accept a jQuery object
            loader: '<div class="thumbnail loading"><div class="loader" title="0"><svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve"><path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/><path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="1.2s" repeatCount="indefinite"/></path></svg></div></div>',

            // The URL or path to the loader image to assign to the loader object
            loaderImg: null,

            // Element displayed when results don't exist, will also accept a jQuery object
            noResults: '<p id="lj-noresponse" style="text-align:center;padding:20px; clear:both;"></p>',

            // Text to display in default noResults element
            noResultsText: 'No Results Found',

            /*----------------------
             * Effects
             *---------------------*/

            // The delay between display of animated results
            delay: 50,

            // Set an animation for result display, currently accepts 'slideDown' and 'fadeIn'
            effect: 'fadeIn',

            /*----------------------
             * Pagination
             *---------------------*/

            pagination: {

                // Turn pagination on or off
                active: true,

                // The # of pages to load on init
                pages: 1,

                // The # of results to load per page
                count: 4,

                // Append results to container without replacing current set
                appendResults: false,

                /*
                Load Events
                */

                // Activate lazy load, overrides other load events
                lazyLoad: true,

                // jQuery selector for next result set button
                nextBtn: 'a.next',

                // jQuery selector for previous result set button
                prevBtn: 'a.previous',

                // Set a custom load event (click, blur, focus, hover, etc.)
                loadOnEvent: null,

                // jQuery selector for the custom event target
                loadOnTarget: null
            },

            /*----------------------
             * API
             *---------------------*/

            api: {

                // The API endpoint, local or remote
                uri: '/posts.json',

                // GET or POST request
                httpMethod: 'GET',

                // Force JSONP on local requests
                forceJSONP: false,

                // Send pagination vars to API in AJAX request
                pagination: false,

                // Set key of current page # param sent in API request
                pagesKey: 'page',

                // Set key of limit param sent in API request
                limitKey: 'limit',

                // Set key of offset param sent in API request
                offsetKey: 'offset',

                // Additional params to send with each request
                params: {}
            },

            /*----------------------
             * Debug
             *---------------------*/

            // Turn debug mode on or off
            debug: false,

            /*----------------------
             * Callbacks
             *---------------------*/

            // Fires after load event
            afterLoad: function (res) {}
        });
      }

    };

    oaw.loadInterviews();
});
