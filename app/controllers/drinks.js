import Ember from 'ember';

export default Ember.Controller.extend({
  canShowAddDrink: false,
  actions:{
    addDrink(drinkToBeAdded){
      this.get('model').pushObject(drinkToBeAdded);
      this.set('newDrink', "");
    },
    showAddDrink(){
      this.set("canShowAddDrink", true);
    },
    hideAddDrink(){
      this.set("canShowAddDrink", false);
    }
  }
});
