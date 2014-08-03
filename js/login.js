/**
 * Created with JetBrains WebStorm.
 * User: aadebuger
 * Date: 14-7-29
 * Time: 下午1:28
 * To change this template use File | Settings | File Templates.
 */

 (function($)
  {
      var  app= Backbone.Model.extend({

      });
      var myapp = new app();
       var zhvapp = this;
      zhvapp.myapp = myapp;
  var  loginUser= Backbone.Model.extend({
        username:"",
        password:""

    })

    loginView = Backbone.View.extend({
        el:".login-box",
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
      testView = Backbone.View.extend({

          events: {

          },
          initialize: function(){
            this.listenTo(zhvapp.myapp, "change:votes", this.customevent);
              alert("newView init");
          },
          customevent:function(e)
          {
              alert('customevent');
          }
      });

      var myloginUser = new loginUser();
      var myloginview = new loginView({model: myloginUser});
      var mytestView = new testView();

       alert("hello1");

})(jQuery);