/* Theme Name: The Project - Responsive Website Template
 * Author:HtmlCoder
 * Author URI:http://www.fangying
 * Author e-mail:fangying@gmail.com
 * Version:1.1.0
 * Created:March 2015
 * License URI:http://support.wrapbootstrap.com/
 * File Description: Place here your custom scripts
 */

$('#submit-post-comment').click(function() {
  var name = $('#name4').val();
  var subject = $('#subject4').val();
  var message = $('#message4').val();

  if (name.length > 0 && subject.length > 0 && message.length > 0) {
    Email.send(
        'customerservice@australiapetindustry.com',
        'customerservice@australiapetindustry.com', subject, message,
        {token: '91e674e7-db5c-438a-bf2d-642282b1309e'});

    alert('Thanks for your review!');
    location.reload();
  }

  return false;
});

var _hmt = _hmt || [];
(function() {
var hm = document.createElement('script');
hm.src = 'https://hm.baidu.com/hm.js?98f5111831c175c78f0e54e7af2b63e8';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(hm, s);
})();