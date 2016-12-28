(function(module){

  var MenuSearchService = function($http, ApiBasePath)
  {


    var getMatchedMenuItems = function(searchTerm){
       return $http({method: "GET",
              url: ApiBasePath +"menu_items.json"})
              .then(function(response){
                var foundItems = [];
                for(var i =0 ; i<response.data.menu_items.length; i++){
                  if(response.data.menu_items[i].description.indexOf(searchTerm)!=-1){
                    foundItems.push(response.data.menu_items[i]);
                  }
                }
                return foundItems;
              }

            ).catch(function(error){
              console.log("errorMessage:", error);
              return [];
            });;
    };

    return {
      getMatchedMenuItems :getMatchedMenuItems
    };

  }

 MenuSearchService.$inject=['$http', 'ApiBasePath'];
 module.factory('MenuSearchService', MenuSearchService);

}(angular.module('NarrowItDownApp')));
