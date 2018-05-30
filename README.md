## Basic usage

Include the javascript and css files.

```html
<script src="js/jquery-3.2.1.min.js" type="text/javascript"></script>
<script src="js/jquery.event.move.js" type="text/javascript"></script>
<script src="js/jquery.twentytwenty.js" type="text/javascript"></script>
<link rel="stylesheet" href="css/twentytwenty.css" type="text/css" media="screen" />
``` 
You might need to change the paths to match your setup.


After including the files you are ready to create a container that holds two images:

```html
<div id="container1">
 <!-- The before image is first -->
 <img src="http://placehold.it/400x200&amp;text=1" />
 <!-- The after image is last -->
 <img src="http://placehold.it/400x200&amp;text=2" />
</div>
```

Now initialize the plugin on the window load:

```
$(function(){
  $("#container1").twentytwenty();
});
```

### Options


```js
$(function(){
  $(".twentytwenty-container").twentytwenty({
    default_offset_pct: 0.7, // How much of the before image is visible when the page loads
    orientation: 'vertical', // Orientation of the before and after images ('horizontal' or 'vertical')
    before_label: 'January 2017', // Set a custom before label
    after_label: 'March 2017', // Set a custom after label
    no_overlay: true, //Do not show the overlay with before and after
    move_slider_on_hover: true, // Move slider on mouse hover?
    move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement. 
    click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
  });
});
```

### Prevent FOUC

If you want to avoid a [FOUC](http://en.wikipedia.org/wiki/Flash_of_unstyled_content) you can append the `twentytwenty-container` class to your container like so:

```html
<div id="container1" class="twentytwenty-container">
 <!-- The before image is first -->
 <img src="http://placehold.it/400x200&amp;text=1" />
 <!-- The after image is last -->
 <img src="http://placehold.it/400x200&amp;text=2" />
</div>
```

### Multiple instances

If you want to use multiple instances of this plugin on a single page you can target the container class:

```js
$(function(){
  $(".twentytwenty-container").twentytwenty();
});
```

# Build with SCSS

You can use SCSS to customise the TwentyTwenty styles. All you need to do is make sure you have NPM and Grunt installed. Then, clone the repository and run "npm install" to install all the required Grunt modules. Run "grunt develop" to compile your CSS file (the Gruntfile is also configured to watch for changes):

```bash
git clone git@github.com:zurb/twentytwenty.git
npm install
grunt develop
```

All default [Sass](http://sass-lang.com/) variables can be found in `scss/twentytwenty.scss`.

## Support

- IE8+
- Firefox (latest)
- Chrome
- Safari
- Android 
- iOS (iPhone, iPad)

## Dependencies

  * [jquery](http://jquery.com/)
  * [jquery.event.move](https://github.com/stephband/jquery.event.move)

## MIT Open Source License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
