fix bug 19/06/2022: if the test does not work, the solution is to put the script before the body closure tag. And JQU. 1.8 in the head.

# NEW TEST : OK
#@see: https://github.com/madjeek-web/link-titles-no-tooltip-tooltip-info-when-mouse-moves---hover---hide---display-none/blob/main/NEW%20TEST%20(%20OK%20)%20-%20FIX%20BUG%20-%20HTML%20WEBPAGE.html

```html
<body>
<main role="main">
<a title="Da Title" href="#">Da Link</a>
</main>
<script type="application/javascript" defer="defer" src="https://yoursite.org/file-js/link-titles-no-tooltip-js-minify.js"></script>
</body>
```
____

# link-titles-no-tooltip-tooltip-info-when-mouse-moves---hover---hide---display-none
link titles, no tooltip / tooltip info, when mouse moves - hover - hide - display-none - solution -black hat - seo important titles - hack - JavaScript + jQuery 1.8.3

```js
$('a').hover(function(e) {

    $(this).attr('data-title', $(this).attr('title'));
    $(this).removeAttr('title');

  },
  function(e) {

    $(this).attr('title', $(this).attr('data-title'));

  });
```
```html
<body>
    <main role="main">
      
        <a title="Da Title" href="#">Da Link</a>

    </main>
  </body>
```

## +add JQU. @see : https://blog.jquery.com/2012/11/13/jquery-1-8-3-released/ 
___

## COMBO WHITH :
## @see : https://github.com/madjeek-web/tooltips-display-none-img-hover-mouse


