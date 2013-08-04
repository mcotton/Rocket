
var Rocket = {}


Rocket.Model = Backbone.Model.extend({
    // helper method to map functions to attributes
    get: function (attr) {
        if (typeof this[attr] == 'function') {
            return this[attr]();
        }
        return Backbone.Model.prototype.get.call(this, attr);
    }

});

Rocket.BaseView = Backbone.View.extend({

    render: function() {
        var data

        if(this.serializeData) {
            data = this.serializeData()
        }

        var renderedHTML = _.template(this.template, data)
        this.$el.html(renderedHTML)

        if(this.onRender) {
            this.onRender();
        }

    }

});

Rocket.ModelView = Rocket.BaseView.extend({
    serializeData: function() {
        var data

        if(this.model) {
            data = this.model.toJSON()
        }

        return data
    }
})


Rocket.CollectionView = Rocket.BaseView.extend({
    serializeData: function() {
        var data

        if(this.collection) {
            data = this.collection.toJSON()
        }

        return data
    }
})


Rocket.Collection = Backbone.Collection.extend({

});

Rocket.Router = Backbone.Router.extend({
    initialize: function() {
        this.bind('all', this.before_filter)
    },

    before_filter: function(route) {

    }
});
