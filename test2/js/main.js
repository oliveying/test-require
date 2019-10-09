require.config({
  baseUrl: 'js'
});
require(['selector'], function(query) {
    var els = query('.wrapper');
    var test = query('#wrapper');
    console.log(test)
});