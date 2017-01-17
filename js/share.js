function share_facebook(e) {
var $e = $(e);
window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent($e.parent().data('url')), 'facebook-share-dialog', 'width=626,height=436');
return false;
}
function share_twitter(e) {
var $e = $(e);
window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent($e.parent().data('url')) + '&text=' + encodeURIComponent($e.parent().data('title')) + '&via=elperroverdebtt', 'twitter-share-dialog', 'width=550,height=420');
return false;
}