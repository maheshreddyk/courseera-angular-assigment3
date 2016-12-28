(function(module){


  var NarrowItDownController = function(MenuSearchService)
  {
    var model = this;
    model.items = [];
    model.searchTerm = "";
    model.errorMessage ="Nothing found";
    model.isSearched = 0; //To determine if user clicked the search button.. needed for directive transclude

    model.getMatchedMenuItems = function(searchTerm){

      if(searchTerm.length ==0)
      {
          model.isSearched = 1;
        return;
      }
      MenuSearchService.getMatchedMenuItems(searchTerm).then(function(result){ model.items = result;   model.isSearched = 1;},
                                                            function(error){ model.isSearched = 1; console.log(error)});

    //   then(function(response){
    //     model.items = [];
    //     for(var i =0 ; i<response.data.menu_items.length; i++){
    //       if(response.data.menu_items[i].description.indexOf(searchTerm)!=-1){
    //         model.items.push(response.data.menu_items[i]);
    //       }
    //     }
    //   }
    // ).catch(function(error){
    //   console.log(model.errorMessage, error);
    // });
  };

  model.removeItem = function(index){
    model.items.splice(index,1);
  }

}

NarrowItDownController.$inject = ['MenuSearchService'];
module.controller('NarrowItDownController', NarrowItDownController);

}(angular.module('NarrowItDownApp')));
