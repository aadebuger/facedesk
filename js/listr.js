/**
 * Created with JetBrains WebStorm.
 * User: aadebuger
 * Date: 14-7-29
 * Time: 下午1:28
 * To change this template use File | Settings | File Templates.
 */

 (function($)
  {

      $(document).ready(function(){

          alert("hello120");

          $.getJSON("/rank", function(json){

              alert("JSON Data: " + json);
          });


      });

})(jQuery);