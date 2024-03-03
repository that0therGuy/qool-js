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
(they are named so because i have a habbit of naming things... bad) please co-operate :)
one example :- 

filter('h1','blur(2px)')

    bg({to, blend, pos, size, img, attach, color, clip, filter}): Sets various background properties such as color, image, blend mode, position, size, attachment, clip, and filter.

    clipPath(e, g): Sets the clipping path for the specified element.

    pointerEvents(e, g): Sets the pointer events property for the specified element.

    filter(e, g): Applies filter effects to the specified element.


    quotes(e, g): Sets quotation marks for the specified element.

    clip(e, g): Clips the content of the specified element.

    color(e, g): Sets the color of the specified element.

    opacity(e, g): Sets the opacity level of the specified element.

    lineHeight(e, g): Sets the line height of the specified element.

    listStyle(e, g): Sets the list style for the specified element.

    all(e, g): Sets all CSS properties for the specified element.

    imageRender(e, g): Sets the image rendering for the specified element.

    perspective(e, g): Sets the perspective property for the specified element.

    willChange(e, g): Sets the will-change property for the specified element.

    shapeOutside(e, g): Sets the shape outside for the specified element.

    BoxEffect(e, g): Sets the box shadow for the specified element.

    bgRepeat(e, g): Sets the background repeat property for the specified element.

    display(e, g): Sets the display property for the specified element.

    pos(e, g): Sets the position property for the specified element.

    rotate(e, g): Rotates the specified element.

    scale(e, g): Scales the specified element.

    boxSize(e, g): Sets the box sizing property for the specified element
    
    translate(e, g): Translates the specified element.

    aspectRatio(e, g): Sets the aspect ratio property for the specified element.

    zIndex(e, g): Sets the z-index property for the specified element.

    visibility(e, g): Sets the visibility property for the specified element.

    transform(e, g): Sets the transform property for the specified element.

    contain(e, g): Sets the contain property for the specified element.

    transition(e, g): Sets the transition property for the specified element.

    float(e, g): Sets the float property for the specified element.

    centerFlex(e, h): Centers the specified element using flexbox and sets its height.

    overflow({to, x, y, overflow}): Sets the overflow properties for the specified element.

    size({to, height, width}): Sets the height and width for the specified element.

    cursor({to, type}): Sets the cursor type for the specified element.

    userSelect(to, type): Sets the user select property for the specified element.

    writingMode(to, type): Sets the writing mode property for the specified element.

    font({to, family, weight, size, style, color}): Sets the font properties for the specified element.

    spacing({to, margin, padding}): Sets the margin and padding for the specified element.

    border({to, size, style, color, radius}): Sets the border properties for the specified element.

    word({wordBreak, to, wordSpacing, letterSpacing, whiteSpacing}): Sets word-related properties for the specified element.

    text({to, align, decoration, shadow, orientation, transform, justify, wrap}): Sets text-related properties for the specified element.

    flex({to, display='flex', justifyContent, placeContent, alignItems, direction, flex, order, wrap}): Sets flexbox properties for the specified element.

    grid({to, display='grid', gridTemplate, gap, grid, justifyContent, placeContent, alignContent, placeItems}): Sets grid properties for the specified element.

    scroll({to, behavior, margin, padding, snapAlign, snapStop, snapType, timeline}): Sets scroll-related properties for the specified element.

    scrollbar({to, color, gutter, width}): Sets scrollbar properties for the specified element.
    appearance(e, g): Sets the appearance property for the specified element.

    + many more (im tired writing)
