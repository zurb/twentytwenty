# Version 2.0.0-dev

**NOTE:** This is a work in progress. Once everything is stable I will tag a new release and post a link here!

TwentyTwenty is the best way to showcase the differences between 2 images! This fork is based off the original work I did at [ZURB](http://zurb.com).

After seeing this plugin featured on numerous sites such as [ProductHunt](https://www.producthunt.com/tech/twentytwenty) I've realized that I haven't given this plugin the attention it deserves. It's time to do some code cleanup, address outstanding issues, and add in some new functionality. In short here's what you can expect by the end of the year:

## Roadmap
  - [X] Use [gulp](http://gulpjs.com/) for builds
  - [X] Replace Ruby/Company with Libsass/Autoprefixer
  - [X] Replace all snake_case with camelCase
  - [ ] AngularJS support
  - [ ] See if `jquery.event.move` can be removed as a dependency
  - [ ] Test plugins with other popular frameworks
  - [ ] Address all bugs reported in original GitHub repo
  - [ ] Distribute through package managers such as [bower](http://bower.io)

Open up an issue if there's something else you'd like to see!

# Documentation

## Basic usage

Include the javascript and css files.

```html
<script src="js/jquery.min.js" type="text/javascript"></script>
<script src="js/jquery.event.move.js" type="text/javascript"></script>
<script src="js/jquery.twentytwenty.js" type="text/javascript"></script>
<link rel="stylesheet" href="css/twentytwenty.css" type="text/css" media="screen" />
``` 
You might need to change the paths to match your setup.


After including the files you are ready to create a container that holds two images:

```html
<div id="container1">
 <!-- The before image is first -->
 <img src="http://placehold.it/400x200&text=1" />
 <!-- The after image is last -->
 <img src="http://placehold.it/400x200&text=2" />
</div>
```

Now initialize the plugin on the window load:

```
$(window).load(function(){
  $("#container1").twentytwenty();
});
```

### Options


```js
$(window).load(function(){
  $(".twentytwenty-container").twentytwenty({
    defaultOffsetPct: 0.7, // How much of the before image is visible when the page loads
    orientation: 'vertical' // Orientation of the before and after images ('horizontal' or 'vertical')
  });
});
```

### Prevent FOUC

If you want to avoid a [FOUC](http://en.wikipedia.org/wiki/Flash_of_unstyled_content) you can append the `twentytwenty-container` class to your container like so:

```html
<div id="container1" class="twentytwenty-container">
 <!-- The before image is first -->
 <img src="http://placehold.it/400x200&text=1" />
 <!-- The after image is last -->
 <img src="http://placehold.it/400x200&text=2" />
</div>
```

### Multiple instances

If you want to use multiple instances of this plugin on a single page you can target the container class:

```js
$(window).load(function(){
  $(".twentytwenty-container").twentytwenty();
});
```

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
