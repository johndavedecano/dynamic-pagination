# Dynamic Pagination
A very flexible dynamic pagination user interface utility. 

![alt tag](https://raw.githubusercontent.com/johndavedecano/dynamic-pagination/master/dist/dynamic_menu.png)

# Installation
```
bower install dynamic-pagination --save
```
# Mark Up
```
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/css/normalize.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/css/foundation.min.css">
    <link rel="stylesheet" type="text/css" href="../dist/dynamic_pagination.css">
</head>
<body>
    <div class="pagination">
        <div class="row collapse">
          <div class="small-2 columns prev">
          <a href="#"><span class="pagination-previous">PREV</span></a>
          </div>
          <div class="small-8 columns">
            <span class="pagination-counter">Page<input type="text" value="1" class="pagination-counter-input">of <span class="pagination-pages-count">1</span></span>
          </div>
          <div class="small-2 columns next">
            <a href="#"><span class="pagination-next">NEXT</a>
          </div>
        </div>
    </div>
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script type="text/javascript" src="../dist/dynamic_pagination.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $('.pagination').Dynamic_Pagination({ count : 100 });
        });
    </script>
</body>
</html>
```

# API
update_count - Updates the selected paginations count
```
var pagination = $('.pagination').data('Dynamic_Pagination');
pagination.update_count(100);
```
update_page - Updates the selected paginations current page
```
var pagination = $('.pagination').data('Dynamic_Pagination');
pagination.update_page('next');
```
# Events
change - This will be the handler when current page is changed.
```
    $('.pagination').Dynamic_Pagination({ count : 100 , change: function(page) {
        // send the page number to the ajax request
    }});
```

