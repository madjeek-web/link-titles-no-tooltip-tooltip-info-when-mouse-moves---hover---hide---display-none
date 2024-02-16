fix bug 19/06/2022: if the test does not work, the solution is to put the script before the body closure tag. And JQU. 1.8 in the head.

# NEW TEST : OK
#@see: https://github.com/madjeek-web/link-titles-no-tooltip-tooltip-info-when-mouse-moves---hover---hide---display-none/blob/main/NEW%20TEST%20(%20OK%20)%20-%20FIX%20BUG%20-%20HTML%20WEBPAGE.html

![cats-fix-bug-link-tooltip](https://user-images.githubusercontent.com/83957788/174487486-de2ea0a2-22af-4062-b10f-d4c66f4c9b1a.jpg)

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

![cats-html-no-tooltip-link-hover-mouse](https://user-images.githubusercontent.com/83957788/174464323-8f396cc8-0c71-4818-a425-10c22b12ac8e.jpg)

## +add JQU. @see : https://blog.jquery.com/2012/11/13/jquery-1-8-3-released/ 
___

## COMBO WHITH :
## @see : https://github.com/madjeek-web/tooltips-display-none-img-hover-mouse


