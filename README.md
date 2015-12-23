# Version 2.0.0-dev

**NOTE:** This is a work in progress. Once everything is stable I will tag a new release and post a link here!

TwentyTwenty is the best way to showcase the differences between 2 images! This fork is based off the original work I did at [ZURB](http://zurb.com).

After seeing this plugin featured on numerous sites such as [ProductHunt](https://www.producthunt.com/tech/twentytwenty) I've realized that I haven't given this plugin the attention it deserves. It's time to do some code cleanup, address outstanding issues, and add in some new functionality. In short here's what you can expect by the end of the year:

## Roadmap
  - [X] Use [webpack](https://webpack.github.io/) for builds
  - [X] Replace Ruby/Compass with Libsass/Autoprefixer
  - [X] Replace all snake_case with camelCase
  - [X] AngularJS support
  - [ ] See if `jquery.event.move` can be removed as a dependency
  - [ ] Test plugins with other popular frameworks
  - [ ] Address all bugs reported in original GitHub repo
  - [ ] Distribute through package managers such as [bower](http://bower.io)

Open up an issue if there's something else you'd like to see!

# Documentation

## AngularJS (NEW)

**Note:** This is an alpha release of the directive. Any feedback is greatly appreciated!

Include the javascript and css files.

```html
<script src="js/angular.js" type="text/javascript"></script>
<script src="js/angular-touch.js" type="text/javascript"></script>
<script src="js/angular-twentytwenty.js" type="text/javascript"></script>
<link rel="stylesheet" href="css/twentytwenty.css" type="text/css" media="screen" />
```

You might need to change the paths to match your setup.

Then add the `tt` module as a dependency to your application module:

```js
angular.module('MyApp', ['tt']);
```

And then you can use the `twentytwenty` directive like so:

```html
<twentytwenty
  before="img/<BEFORE_IMAGE>.jpg" 
  after="img/<AFTER_IMAGE>.jpg">
</twentytwenty>
```

### Dependencies

  * [angular (~> 1.4)](https://angularjs.org/)
  * [angular-touch](https://docs.angularjs.org/api/ngTouch)

## jQuery

### Basic usage

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

#### Options


```js
$(window).load(function(){
  $(".twentytwenty-container").twentytwenty({
    defaultOffsetPct: 0.7, // How much of the before image is visible when the page loads
    orientation: 'vertical' // Orientation of the before and after images ('horizontal' or 'vertical')
  });
});
```

#### Prevent FOUC

If you want to avoid a [FOUC](http://en.wikipedia.org/wiki/Flash_of_unstyled_content) you can append the `twentytwenty-container` class to your container like so:

```html
<div id="container1" class="twentytwenty-container">
 <!-- The before image is first -->
 <img src="http://placehold.it/400x200&text=1" />
 <!-- The after image is last -->
 <img src="http://placehold.it/400x200&text=2" />
</div>
```

#### Multiple instances

If you want to use multiple instances of this plugin on a single page you can target the container class:

```js
$(window).load(function(){
  $(".twentytwenty-container").twentytwenty();
});
```

### Dependencies

  * [jquery](http://jquery.com/)
  * [jquery.event.move](https://github.com/stephband/jquery.event.move)

## Support

- IE8+
- Firefox (latest)
- Chrome
- Safari
- Android 
- iOS (iPhone, iPad)
