(function(module){

var foundItemsDirective = function()
{
  var ddo = {
    scope:{
      items:'<',
      removeItem : '&onRemove'
    },
    templateUrl:"items.html",
    controller: FoundItemsDirectiveController,
    controllerAs:'fidCtrl',
    bindToController : true,
    transclude : true

  };
  return ddo;

};

function FoundItemsDirectiveController()
{
    
};

module.directive('foundItems',foundItemsDirective);

}(angular.module('NarrowItDownApp')));
