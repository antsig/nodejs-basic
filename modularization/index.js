const Tiger = require ('./Tiger'); // TODO 3 import class Tiger dari berkas Tiger.js.

const Wolf = require('./Wolf'); // TODO 4 import class Wolf dari berkas Wolf.js.
 
const fighting = (tiger, wolf) => {
  if(tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }
 
  if(wolf.strength > tiger.strength) {
    wolf.howl();
    return;
  }
 
  console.log('Tiger and Wolf have same strength');
}
 
const tiger = new Tiger();
const wolf = new Wolf();
 
fighting(tiger, wolf);