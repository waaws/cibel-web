module.exports = ['$scope', '$compile', function($scope, $compile) {
  var client = contentful.createClient({
    space: 'vuecvgfj013c',
    accessToken: '6925775d5d11fb75a5c44f59704f065e1a27e32920f10ee3ed154ebfcd031f15'
  });

  client.getEntry('1Bc8syx66AcIYyiaamUgSK')
  .then(function(entry) {
    $scope.entries = entry;
    console.log('Entry:', entry);
  });
}];
