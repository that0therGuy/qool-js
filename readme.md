***QOOL.js Documentation***

QOOL.js is a JavaScript library designed for people who are addicted to their javascript file. QOOL.js provides a better DOM manipulation experience than vanilla HTML/css/js. This documentation provides a comprehensive guide to all the built-in functions available in QOOL.js, categorized by their respective modules.
this is a work in progress btw

**HTML Module**
DOM Selection:

    query(selector): Selects the first element that matches the specified CSS selector.
    queryAll(selector): Selects all elements that match the specified CSS selector.
    id(id): Selects the element with the specified ID.
    tags(t): Selects all elements with the specified tag name.
    htmlclass(f): Selects all elements with the specified class name.

Content Manipulation:

    contentW(f, e): Sets the inner HTML content of the specified element.
    contentR(f): Retrieves the inner HTML content of the specified element.

Console Output:

    print, println: Logs messages to the console.
    printerr: Logs error messages to the console.
    printtb: Logs tabular data to the console.
    printcnt: Logs the number of times a particular message has been logged.

Attribute Manipulation:

    addId({to, value}): Adds an ID attribute to the specified element.
    addClass({to, value}): Adds a class attribute to the specified element.
    addOther({to, attr, value}): Adds a custom attribute to the specified element.
    addClassAll({to, value}): Adds a class attribute to all elements matching the specified selector.
    addOtherAll({to, attr, value}): Adds a custom attribute to all elements matching the specified selector.

Element Creation:

    makeChild({text, child, parent}): Creates a new child element with the specified text content and appends it to the specified parent element.

Event Handling:

    hoverStart(element, callback): Attaches a callback function to the mouseover event of the specified element.
    hoverEnd(element, callback): Attaches a callback function to the mouseout event of the specified element.
    event({to, event, callback}): Attaches a callback function to the specified event of the specified element.

Utility:

    loadTime(): Measures the time taken for the page to load

**Misc Module**
Utility Functions:

    colorRand(): Generates a random hexadecimal color.
    isDivisible(x, y): Checks if a number is divisible by another number.
    intRand(start, end): Generates a random integer within a specified range.

**CSS module**
notice:'e','f' in the below function parameters refer to the value query selector. All 'e' and 'to' must have a valid queryselector value. Same in some HTML functions.
'g' and 'h' are the values that are given to the css function.
one example :- 

filter('h1','blur(2px)')

PS: most of these functions have similiar names to their css property counnterparts, except a few, which will be highlighted below.

    bg({to,blend,pos,size,img,attach,color,clip,filter,origin})

    clipPath(e,g)

    pointerEvents(e,g)

    filter(e,g)

    quotes(e,g)

    clip(e,g)

    color({to,color,caretColor})

    opacity(e,g)

    lineHeight(e,g)

    listStyle(e,g)

    all(e,g)

    imageRender(e,g)

    perspective(e,g)

    willChange(e,g)

    shapeOutside(e,g)

    BoxEffect(e,g) -- same as 'box-shadow' in css

    bgRepeat(e,g)

    display(e,g)

    pos(e,g) -- same as 'property' in css

    rotate(e,g)

    scale(e,g)

    boxSize(e,g) -- same as 'box-sizing' in css

    translate(e,g)

    aspectRatio(e,g)

    zIndex(e,g)

    visibility(e,g)

    transform(e,g)

    contain(e,g)

    listStyle(e,g)

    transition(e,g)

    animation(e,g)

    float(e,g)

    centerFlex(e,h)

    overflow({to,x,y,overflow})

    positionPositioning({to,top,bottom,right,left}) -- same as 'top,bottom,left,right' in css

    pp({to,top,bottom,right,left}) -- same as 'top,bottom,left,right' in css

    size({to,height,width,maxHeight,maxWidth}) -- has all the sizing properties (except box sizing which has its own function)

    cursor(to,type)

    mask({to,maskImage,maskMode})

    counter({to,increment,reset,content})

    textGradient({to,color1,color2}) -- applies text gradient

    userSelect(to,type)

    writingMode(to,type)

    outline(to,type)

    font({to,family,weight,size,style,color})

    spacing({to,margin,padding}) -- same as 'margin,padding' in css

    border({to,size,style,color,radius})

    word({wordBreak,to,wordSpacing,letterSpacing,whiteSpacing}) -- same as 'wordBreak,to,wordSpacing,letterSpacing,whiteSpacing' in css

    text({to,align,decoration,shadow,orientation,transform,justify,wrap,tabSize})

    flex({to,display='flex',justifyContent,placeContent,alignItems,direction,flex,order,wrap})

    grid({to,display='grid',gridTemplate,gap,grid,justifyContent,placeContent,alignContent,placeItems})

    scroll({to,behavior,margin,padding,snapAlign,snapStop,snapType,timeline})

    table({to,collapse,spacing,captionSide,layout,verticalAlign,emptyCells})

    scrollbar({to,color,gutter,width})

    appearance(e,g)
