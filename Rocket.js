RocketModel = Backbone.Model.extend({
    // helper method to map functions to attributes
    get: function (attr) {
        if (typeof this[attr] == 'function') {
            return this[attr]();
        }
        return Backbone.Model.prototype.get.call(this, attr);
    }

});

RocketView = Backbone.View.extend({

});

RocketCollection = Backbone.Collection.extend({

});

