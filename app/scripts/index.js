var $ = require('jquery');
var _ = require('underscore');
var handlebars = require('handlebars');

var source = $('#album-template').html();
var template = handlebars.compile(source);

console.log(source);
console.log(template);

var albums = [{
    'title': 'Cat Album',
    'albumNumber': '12',
    'image': 'http://unsplash.it/200/200',
    isFav: true,
    'photos': [{'photoTitle': 'Fluffy'}, {'photoTitle': 'Brown'}, {'photoTitle': 'Black'}]
  },{
    'title': 'Dog Album',
    'albumNumber': '234',
    'image': 'http://unsplash.it/201/201',
    isFav: false,
    'photos': [{'photoTitle': 'Fluffy'}, {'photoTitle': 'Brown'}, {'photoTitle': 'Black'}]
}];

_.each(albums, function(album){
  var context = {
      title: album.title,
      image: album.image,
      owner: 'Dan'
  };

  $('#album-container').append(template(album));
});
