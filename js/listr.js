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

         // alert("hello120");

          $.getJSON("/rank", function(json){

           //   alert("JSON Data: " + json);
           //   alert( json.length);
              for ( i=0;i< json.length;i ++)
              {
$("#tableid").append("<li class='table-view-cell media'><a class='navigate-right'><img class='media-object pull-left' src='/uploads/"+ json[i]   +"' height='96'> <div class='media-body'> "+i+" </div></a>   </li>'");
              }
          });


      });

})(jQuery);