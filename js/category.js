/**
 * Created with JetBrains WebStorm.
 * User: aadebuger
 * Date: 14-7-25
 * Time: 上午9:43
 * To change this template use File | Settings | File Templates.
 */
/**
 * Created with JetBrains WebStorm.
 * User: aadebuger
 * Date: 13-5-24
 * Time: 上午7:13
 * To change this template use File | Settings | File Templates.
 */
(function($)
{

    alert("hello13");
    var Category = Backbone.Model.extend({
        title:""

    })
    var CategoryCollection = Backbone.Collection.extend({
        model : Category

    });
    alert("hello1");
    var ListView = Backbone.View.extend({
        el: $('#content1'), // el attaches to existing element

        events: {
            "click a.destroy" : "clear",
            "click button.btn-success" : "clear",
            'click button#add': 'addOne'
        },
        initialize: function(){
            alert("init");
            _.bindAll(this, 'render', 'addItem'); // every function that uses 'this' as the current object should be in here

            this.counter = 0; // total number of items added thus far
        //     this.collectionv = new ContenthtmlCollection();
        //  this.collectionviewv = new Array();

            this.render();
        },


        render: function(){
            alert($(this.el))
            //    $(this.el).append("<button id='add'>Add list item</button>");
            //    $(this.el).append("<ul></ul>");
        },

        addItem: function(e){
            alert("addItem");
            e.preventDefault();
            this.counter++;
            //     $('ul', this.el).append("<li>hello world"+this.counter+"</li>");
            $('ul', this.el).append(" <li> <input  type=\"text\" value=\"\" />  <a class=\"destroy\"></a></li>");

        },
        addOne: function(e) {
            alert("addOne");
            e.preventDefault();
         /*
            var newcontenthtml = new Contenthtml({htmlurl:"html2.html"})
            var view = new ContenthtmlView({model:  newcontenthtml});
            var itemel  = view.render().el;
            alert("itemel="+itemel);
            $('ul', this.el).append(itemel);
            this.collectionv.add(newcontenthtml)
            this.collectionviewv.push( view);
            */
        },
        testSave: function(){
            testsave()
        },
        addTemplate: function(){
            testTemplate()
        },
        clear:function(e)
        {
            alert("clear");
            alert(e.target);
            alert(e.target.id);


            //     $(e.target).parent().remove();
        }
    });

   var categorylistview =  new ListView();

})(jQuery);