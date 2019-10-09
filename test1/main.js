require.config({
    paths: {
        jquery: 'test1/jquery-1.12.4'
    }
});
require(['jquery'], function($) {
    alert($().jquery);
})