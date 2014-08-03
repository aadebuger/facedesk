/**
 * Created with JetBrains WebStorm.
 * User: aadebuger
 * Date: 14-7-29
 * Time: 下午1:28
 * To change this template use File | Settings | File Templates.
 */

 (function($)
  {
  var  loginUser= Backbone.Model.extend({
        username:"",
        password:""

    })

    logininfoView = Backbone.View.extend({
        el:".ace-nav",
        events: {
            'click .rank_up img': 'rankUp',
            'click .rank_down img': 'rankDown',
            'click a.disqualify': 'disqualify',
            "click button.btn-success" : "modify",
            "click a#logout" : "logout"

        },

        initialize: function(){
//            this.listenTo(this.model, "change:votes", this.render);
            alert("new logininfoView init");
        alert( $("#nickname").html() );
            $("#nickname").html("<small>欢迎光临,</small> aadebuger");
        },
        modify:function(e)
        {
            alert("modify");

        },
        logout:function(e)
        {
            alert("logout");
        }
    });

    var myloginview = new logininfoView();
    alert("hello1");

      paginationView = Backbone.View.extend({
          el:".pagination",
          events: {
              'click .rank_up img': 'rankUp',
              'click .rank_down img': 'rankDown',
              'click a.disqualify': 'disqualify',
              "click button.btn-success" : "modify",
              "click button.btn-info" : "login"

          },

          initialize: function(){
//            this.listenTo(this.model, "change:votes", this.render);
              alert("newView init");
          },
          modify:function(e)
          {
              alert("modify");

          },
          login:function(e)
          {
              alert("login");
              zhvapp.myapp.trigger("change:votes")
          }
      });

})(jQuery);