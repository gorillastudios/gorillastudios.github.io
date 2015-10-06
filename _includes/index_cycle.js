$(document).ready(function() {
    var images = [
      'images/chicago/IMG_2167.jpg',
      'images/portfolio/0K6A7506.jpg',
      'images/posts/lunar-progression-tall.jpg',
      'images/portfolio/blue-sky-walk.jpg'
    ];
    var rand_image = images[Math.floor(Math.random() * images.length)];
    var my_site_image_folder_path  = '/';
    $('#marquee').css('background-image', 'url("' + my_site_image_folder_path + rand_image + '")');
});

