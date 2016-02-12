import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    addIngredient(){
      let model = this.get('model');
      let proportion = this.store.createRecord('proportion');
      model.get('proportions').pushObject(proportion);
    }
  }
});
