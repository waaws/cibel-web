module.exports = function() {
  var contentful = require('contentful');
  var spaceId = 'vuecvgfj013c';
  var accessToken = '6925775d5d11fb75a5c44f59704f065e1a27e32920f10ee3ed154ebfcd031f15';

  var productContentType = 'product';

  var client = contentful.createClient({
    space: spaceId,
    accessToken: accessToken
  });

  var factory = {};

  factory.getProducts = function(line) {
    return client.getEntries({
      'content_type': productContentType,
      'fields.linea': line
    });
  };

  factory.getProduct = function(id) {
    return client.getEntries({
      'content_type': productContentType,
      'fields.id': id
    });
  };

  return factory;
};
