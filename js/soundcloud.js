var app = angular.module("soundcloud", [])
var scapi = "https://api.soundcloud.com/resolve.json?url="
var client = "&client_id=30cba84d4693746b0a2fbc0649b2e42c"

app.controller("descriptionController", ["$http", function($http) {
  var sc = this
  sc.submit = function() {
    var callURL = scapi + sc.url + client
    console.log(callURL)
    $http.get(callURL)
      .success(function(response) {
        sc.trackJSON = response
      })
      .error(function(response) {
        console.log(response)
      })
  }
}])
