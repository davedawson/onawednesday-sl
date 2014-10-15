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
        $( 'div#lazyjson' ).lazyjson({
            api: {
                uri: '/posts.json'
            },
            pagination: {
    				active: true,
    				pages: 2,
    				count: 10,
    				lazyLoad: true
    			},
        });


      }
    };

    oaw.loadInterviews();
});
