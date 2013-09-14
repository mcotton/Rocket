
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
    constructor: function() {
        Backbone.View.prototype.constructor.apply(this, arguments)

        this.buildtemplateCache()
    },
    buildtemplateCache: function() {
        var proto = Object.getPrototypeOf(this)

        if(proto.templateCache) { return; }
        proto.templateCache = _.template(this.template)
    },
    render: function() {
        var data

        if(this.serializeData) {
            data = this.serializeData()
        }

        var renderedHTML = this.templateCache(data)
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
            data = { item: this.model }
        }

        return data
    }
})


Rocket.CollectionView = Rocket.BaseView.extend({
    serializeData: function() {
        var data

        if(this.collection) {
            data = { items: this.collection.models }
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
