# pagination
Simple pagination Bootstrap 3 plugin, helps to generate the BoosStrap's pagination dynamical.

## USAGE

#### First
Since we depend on BootStrap3, you should include Jquery and Bootstrap first, then include `pagination-bootstrap3.js` in your HTML file.

#### Then
Use it like any other BootStrap pluggin:  

    $("selector").pagination(options);
    

## OPTIONS

### currentPage (Number) (Required)
It's your current page number

### totalPage (Number) (Required)
How pages you have

### url (String) (Required)
The url your page should be linked to.
E.g: If your page's url is like `http://someurl/?page=xx` , so you need to put 'http://someUrl/?page=' in here.
Or your url is like `http://someurl/news/id/xx`, you need to put `http://someurl/news/id/`.

### first (String) (Optional)
First page link's string, default '<<'.
If you don't need this, set it to an empty string `''`;

### last (String) (Optional)
Last page link's string, default '>>'.
If you don't need this, set it to an empty string `''`;

### prev (String) (Optional)
Prev page link's string, default `<`.

### next (String) (Optional)
Next page link's string, default `<`.

### visiblePageNum (Number) (Optional)
Deside how many pages' link should be shown. Default `4`.

## EXAMPLE

If you have a container like:

    <!--html-->
    <div class="pagination-wrapper"></div>

And you have 100 pages, and it's now at 9.

    //javascript
    $(".pagination-wrapper").pagination({
        currentPage: page,
        totalPage: 100,
        url: '?page='
    });
