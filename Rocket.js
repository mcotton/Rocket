RocketModel = Backbone.Model.extend({
    initialize: function(otions) {
        Backbone.View.prototype.initialize.apply(this, arguments);
    },

    // helper method to map functions to attributes
    get: function (attr) {
        if (typeof this[attr] == 'function') {
            return this[attr]();
        }
        return Backbone.Model.prototype.get.call(this, attr);
    }
});

RocketView = Backbone.View.extend({
  initialize: function(options){
    Backbone.View.prototype.initialize.apply(this, arguments);
  }
});

RocketCollection = Backbone.Collection.extend({
  initialize: function(options){
    Backbone.Collection.prototype.initialize.apply(this, arguments);
  }
});

RocketViewModal = Backbone.View.extend({
    initModal: function(element) {
        this.setElement(element);
        this.$el.on('hidden', function(){
            $(this).unbind();
            $(this).data('modal', null);
        });
    },
    openModal: function(){
        this.$el.find('.nav-tabs li,.tab-content .tab-pane').removeClass('active');
        this.$el.find('.nav-tabs li:first,.tab-content .tab-pane:first').addClass('active');
        this.$el.modal('show');
        utils.showTop();
    },
    closeModal: function(){
        this.$el.modal('hide');
    }
});