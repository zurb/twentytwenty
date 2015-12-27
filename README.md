# Version 2.0.0-dev

**NOTE:** This is a work in progress. Once everything is stable I will tag a new release and post a link here!

TwentyTwenty is the best way to showcase the differences between 2 images! This fork is based off the original work I did at [ZURB](http://zurb.com).

After seeing this plugin featured on numerous sites such as [ProductHunt](https://www.producthunt.com/tech/twentytwenty) I've realized that I haven't given this plugin the attention it deserves. It's time to do some code cleanup, address outstanding issues, and add in some new functionality. In short here's what you can expect by the end of the year:

## Roadmap
  - [X] Use [webpack](https://webpack.github.io/) for builds
  - [X] Replace Ruby/Compass with Libsass/Autoprefixer
  - [X] Replace all snake_case with camelCase
  - [X] AngularJS support
  - [X] See if `jquery.event.move` can be removed as a dependency
  - [ ] Test plugins with other popular frameworks
  - [ ] Address all bugs reported in original GitHub repo
  - [ ] Distribute through package managers such as [bower](http://bower.io)
  - [ ] Publish to a CDN to make it easy to get started

Open up an issue if there's something else you'd like to see!

# Documentation

## AngularJS (NEW)

**Note:** This is an alpha release of the directive. Any feedback is greatly appreciated!

Include the javascript and css files.

```html
<script src='js/angular.js' type='text/javascript'></script>
<script src='js/angular-touch.js' type='text/javascript'></script>
<script src='js/angular-twentytwenty.js' type='text/javascript'></script>
<link rel='stylesheet' href='css/twentytwenty.css' type='text/css' media='screen' />
```

You might need to change the paths to match your setup.

Then add the `tt` module as a dependency to your application module:

```js
angular.module('MyApp', ['tt']);
```

And then you can use the `twentytwenty` directive like so:

```html
<twentytwenty
  before='img/<BEFORE_IMAGE>.jpg' 
  after='img/<AFTER_IMAGE>.jpg'>
</twentytwenty>
```

### Dependencies

  * [angular (~> 1.4)](https://angularjs.org/)

## jQuery

### Basic usage

Include the javascript and css files.

```html
<script src='js/jquery.min.js' type='text/javascript'></script>
<script src='js/jquery.twentytwenty.js' type='text/javascript'></script>
``` 
You might need to change the paths to match your setup.


After including the files you are ready to create a container that holds two images:

```html
<div class='twentytwenty-container'>
 <img src='img/<BEFORE_IMAGE>.jpg' />
 <img src='img/<AFTER_IMAGE>.jpg' />
</div>
```

Now initialize the plugin:

```
$(function(){
  $('.twentytwenty-container').twentytwenty();
});
```

#### Options


```js
$(function() {
  $('.twentytwenty-container').twentytwenty({
    defaultOffsetPct: 0.7, // How much of the before image is visible when the page loads
    orientation: 'vertical' // Orientation of the before and after images ('horizontal' or 'vertical')
  });
});
```

### Multiple Instances

If you want to load multiple instances with different settings, you can initialize them like so:

```html
<div id='container1' class='twentytwenty-container'>
 <img src='img/<BEFORE_IMAGE>.jpg' />
 <img src='img/<AFTER_IMAGE>.jpg' />
</div>

<div id='container2' class='twentytwenty-container'>
 <img src='img/<BEFORE_IMAGE>.jpg' />
 <img src='img/<AFTER_IMAGE>.jpg' />
</div>
```

And then:

```js
$(function() {
  $('#container1').twentytwenty({
    defaultOffsetPct: 0.9
  });

$('#container1').twentytwenty({
    orientation: 'vertical'
  });
});
```


### Dependencies

  * [jquery](http://jquery.com/)

## Support

- IE8+
- Firefox (latest)
- Chrome
- Safari
- Android 
- iOS (iPhone, iPad)

# Special thanks to our supporters

[![BrowserStack](https://s3.amazonaws.com/assets.markhay.es/browser_stack_logo.png)](https://www.browserstack.com/)
