require.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(['jquery'], function($) {
    alert($().jquery);
})