                                 /* QOOL.js module*/
                             /*Never leave your js file!
                             
            
                                        */
export class HTML{
    static query = (selector) => document.querySelector(selector);
    static queryAll = (selector) => document.querySelectorAll(selector);
    static id = (id) => document.getElementById(id);
    static tags= (t)=> document.getElementsByTagName(t);
    static htmlclass=(f)=>document.getElementsByClassName(f); 
    static contentW = (f,e)=>document.querySelector(f).innerHTML = e;
    static contentR = (f)=>document.querySelector(f).innerHTML;
    static contentWrite = (f,e)=>document.querySelector(f).innerHTML = e;
    static contentRead = (f)=>document.querySelector(f).innerHTML;
    
    
    static print=console.log;
    static println=console.log;
    static printerr=console.error;
    static printtb=console.table;
    static printcnt=console.count;

    static addId =({to,value})=> document.querySelector(to).setAttribute('id',value);
    static addClass =({to,value})=> document.querySelector(to).setAttribute('class',value);
    static addOther =({to,attr,value})=> document.querySelector(to).setAttribute(attr,value);
    static addClassAll =({to,value})=> document.querySelectorAll(to).setAttribute('class',value);
    static addOtherAll =({to,attr,value})=> document.querySelectorAll(to).setAttribute(attr,value);
    


    static makeChild({text,child,parent}) {
        let parentElement = document.querySelector(parent);
        let f = document.createElement(child);
        f.textContent = text;
        parentElement.appendChild(f);
        if (child=='' && parent==''){
            console.warn('Keeping child and parent parameter empty defaults to h1 as child and body as parent.')
        }
    }
    static loadTime() {
        console.time("PageLoadTime"); 
        window.addEventListener("load", () => {
            console.timeEnd("PageLoadTime");
        });
    }

    static hoverStart(element, callback) {
        document.querySelector(element).addEventListener('mouseover', callback);
    }
      
    static hoverEnd(element, callback) {
        document.querySelector(element).addEventListener('mouseout', callback);
    }
    static event({to, event,callback}) {
        document.querySelector(to).addEventListener(event, callback);
    }
      
    
    

    

}

export class CSS{                
    static bg({to,blend,pos,size,img,attach,color,clip,filter,origin}){
        
        document.querySelector(to).style.backgroundColor=color
        document.querySelector(to).style.backgroundBlendMode=blend
        document.querySelector(to).style.backgroundPosition=pos
        document.querySelector(to).style.backgroundSize=size
        document.querySelector(to).style.backgroundImage=img
        document.querySelector(to).style.backgroundAttachment=attach;
        document.querySelector(to).style.backgroundClip=clip;
        document.querySelector(to).style.backgroundOrigin=origin;
        document.querySelector(to).style.backdropFilter=filter;
    }

    static clipPath(e,g){
        document.querySelector(e).style.clipPath=g
    }
    static pointerEvents(e,g){
        document.querySelector(e).style.pointerEvents=g
    }
    static filter(e,g){
        document.querySelector(e).style.filter=g
    }
    static quotes(e,g){
        document.querySelector(e).style.quotes=g
    }
    static clip(e,g){
        document.querySelector(e).style.clip=g
    }
    static color({to,color,caretColor}){
        document.querySelector(to).style.color=color;
        document.querySelector(to).style.caretColor=caretColor
    }
    static opacity(e,g){
        document.querySelector(e).style.opacity=g
    }
    static lineHeight(e,g){
        document.querySelector(e).style.lineHeight=g
    }
    static listStyle(e,g){
        document.querySelector(e).style.listStyle=g
    }
    static all(e,g){
        document.querySelector(e).style.all=g
    }
    static imageRender(e,g){
        document.querySelector(e).style.imageRendering=g
    }
    static perspective(e,g){
        document.querySelector(e).style.perspective=g
    }
    static willChange(e,g){
        document.querySelector(e).style.willChange=g;
    }
    

    static shapeOutside(e,g){
        document.querySelector(e).style.shapeOutside=g;
    }

    static BoxEffect(e,g){
        document.querySelector(e).style.boxShadow=g;
    }
    static bgRepeat(e,g){
        if(g==true){
            document.querySelector(e).style.backgroundRepeat='repeat';
        }
        else if(g== false){
            document.querySelector(e).style.backgroundRepeat='no-repeat';
        }
        else{
            document.querySelector(e).style.backgroundRepeat=g;
        }
    }
    static display(e,g){
        document.querySelector(e).style.display=g;
    }
    static pos(e,g){
        document.querySelector(e).style.position=g;
    }
    static rotate(e,g){
        document.querySelector(e).style.rotate=g;
    }
    static scale(e,g){
        document.querySelector(e).style.scale=g;
    }

    static boxSize(e,g){
        document.querySelector(e).style.boxSizing=g;
    }
    static translate(e,g){
        document.querySelector(e).style.translate=g;
    }
    static aspectRatio(e,g){
        document.querySelector(e).style.aspectRatio=g;
    }
    static zIndex(e,g){
        document.querySelector(e).style.zIndex=g;
    }
    static visibility(e,g){
        document.querySelector(e).style.visibility=g;
    }
    static transform(e,g){
        document.querySelector(e).style.transform=g;
    }
    static contain(e,g){
        document.querySelector(e).style.contain=g;
    }
    static listStyle(e,g){
        document.querySelector(e).style.listStyle=g;
    }
    static transition(e,g){
        document.querySelector(e).style.transition=g;
    }
    static animation(e,g){
        document.querySelector(e).style.animation=g;
    }
    static float(e,g){
        document.querySelector(e).style.float=g;
    }
    static centerFlex(e,h){
        document.querySelector(e).style.display='flex';
        document.querySelector(e).style.justifyContent='center';
        document.querySelector(e).style.alignItems='center';
        document.querySelector(e).style.height=h;
    }
    static overflow({to,x,y,overflow}){
        document.querySelector(to).style.overflowX=x;
        document.querySelector(to).style.overflowY=y;
        document.querySelector(to).style.overflow=overflow;
    }
    static positionPositioning({to,top,bottom,right,left}){
        document.querySelector(to).style.bottom=bottom;
        document.querySelector(to).style.top=top;
        document.querySelector(to).style.right=right;
        document.querySelector(to).style.left=left;
    }
    static pp({to,top,bottom,right,left}){               //same as positionPositioning
        document.querySelector(to).style.bottom=bottom;
        document.querySelector(to).style.top=top;
        document.querySelector(to).style.right=right;
        document.querySelector(to).style.left=left;
    }

    
    static size({to,height,width,maxHeight,maxWidth}){
        document.querySelector(to).style.height=height;
        document.querySelector(to).style.width=width;
        document.querySelector(to).style.maxHeight=maxHeight;
        document.querySelector(to).style.maxWidth=maxWidth;
    }
    static cursor(to,type){
        document.querySelector(to).style.cursor=type;
        
    }
    static mask({to,maskImage,maskMode}){
        document.querySelector(to).style.maskImage=maskImage;
        document.querySelector(to).style.maskMode=maskMode;
        
    }
    static counter({to,increment,reset,content}){
        document.querySelector(to).style.counterReset=reset;
        document.querySelector(to).style.counterIncrement=increment;
        document.querySelector(to).style.content=content;
    }
    static textGradient({to,color1,color2,extra='transparent'}){
        document.querySelector(to).style.background = `-webkit-linear-gradient(${color1}, ${color2})`;
        document.querySelector(to).style.webkitBackgroundClip = 'text';
        document.querySelector(to).style.webkitTextFillColor = extra;
    }
    static userSelect(to,type){
        document.querySelector(to).style.userSelect=type;
        
    }
    static writingMode(to,type){
        document.querySelector(to).style.writingMode=type;
        
    }
    static outline(to,type){
        document.querySelector(to).style.outline=type;
        
    }
    static font({to,family,weight,size,style,color}){
        document.querySelector(to).style.fontFamily=family;
        document.querySelector(to).style.fontWeight=weight;
        document.querySelector(to).style.fontSize=size;
        document.querySelector(to).style.fontStyle=style;
        document.querySelector(to).style.color=color
    }
    static spacing({to,margin,padding}){

        document.querySelector(to).style.margin=margin;
        document.querySelector(to).style.padding=padding;
    }
    static border({to,size,style,color,radius}){
        document.querySelector(to).style.borderWidth=size;
        document.querySelector(to).style.borderStyle=style;
        document.querySelector(to).style.borderColor=color;
        document.querySelector(to).style.borderRadius=radius;
    }
    static word({wordBreak,to,wordSpacing,letterSpacing,whiteSpacing}){
        document.querySelector(to).style.wordSpacing=wordSpacing;
        document.querySelector(to).style.letterSpacing=letterSpacing;
        document.querySelector(to).style.whiteSpace=whiteSpacing;
        document.querySelector(to).style.wordBreak=wordBreak;
    }
    static text({to,align,decoration,shadow,orientation,transform,justify,wrap,tabSize}){
        document.querySelector(to).style.textAlign=align;
        document.querySelector(to).style.textDecoration=decoration;
        document.querySelector(to).style.textShadow=shadow;
        document.querySelector(to).style.textOrientation=orientation;
        document.querySelector(to).style.textTransform=transform;
        document.querySelector(to).style.textJustify=justify;
        document.querySelector(to).style.textWrap=wrap;
        document.querySelector(to).style.tabSize=tabSize;
    }
    static flex({to,display='flex',justifyContent,placeContent,alignItems,direction,flex,order,wrap}){
        document.querySelector(to).style.display=display;
        document.querySelector(to).style.justifyContent=justifyContent;
        document.querySelector(to).style.placeContent=placeContent;
        document.querySelector(to).style.alignItems=alignItems;
        document.querySelector(to).style.flexDirection=direction;
        document.querySelector(to).style.flex=flex;
        document.querySelector(to).style.order=order;
        document.querySelector(to).style.flexWrap=wrap;
    }
    static grid({to,display='grid',gridTemplate,gap,grid,justifyContent,placeContent,alignContent,placeItems}){
        document.querySelector(to).style.display=display; 
        document.querySelector(to).style.justifyContent=justifyContent;
        document.querySelector(to).style.placeContent=placeContent;
        document.querySelector(to).style.alignContent=alignContent;
        document.querySelector(to).style.gap=gap;
        document.querySelector(to).style.grid=grid;
        document.querySelector(to).style.gridTemplate=gridTemplate;
        document.querySelector(to).style.placeItems=placeItems;
    }
    static scroll({to,behavior,margin,padding,snapAlign,snapStop,snapType,timeline}){
        document.querySelector(to).style.scrollBehavior=behavior; 
        document.querySelector(to).style.scrollMargin=margin;
        document.querySelector(to).style.scrollPadding=padding;
        document.querySelector(to).style.scrollSnapAlign=snapAlign;
        document.querySelector(to).style.scrollSnapStop=snapStop;
        document.querySelector(to).style.scrollSnapType=snapType;
        document.querySelector(to).style.scrollTimeline=timeline;
    }
    static table({to,collapse,spacing,captionSide,layout,verticalAlign,emptyCells}){
        document.querySelector(to).style.borderCollapse=collapse; 
        document.querySelector(to).style.borderSpacing=spacing;
        document.querySelector(to).style.captionSide=captionSide;
        document.querySelector(to).style.tableLayout=layout;
        document.querySelector(to).style.verticalAlign=verticalAlign;
        document.querySelector(to).style.emptyCells=emptyCells;
        document.querySelector(to).style.scrollTimeline=timeline;
    }
    static scrollbar({to,color,gutter,width}){
        document.querySelector(to).style.scrollbarColor=color; 
        document.querySelector(to).style.scrollbarGutter=gutter;
        document.querySelector(to).style.scrollbarWidth=width;
    }
    static appearance(e,g){
        document.querySelector(e).style.appearance=g;
    }
    /*use this*/
    /*
    static appe(e,g){
        document.querySelector(e).style.aspectRatio=g;
    }
    static aspectRatio(e,g){
        document.querySelector(e).style.aspectRatio=g;
    }
    static aspectRatio(e,g){
        document.querySelector(e).style.aspectRatio=g;
    }
    static aspectRatio(e,g){
        document.querySelector(e).style.aspectRatio=g;
    }
    static aspectRatio(e,g){
        document.querySelector(e).style.aspectRatio=g;
    }
    */

}    
        

export class misc{
    static colorRand() {
        
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

    
        var hexR = r.toString(16).padStart(2, '0');
        var hexG = g.toString(16).padStart(2, '0');
        var hexB = b.toString(16).padStart(2, '0');

    
        var hexColor = '#' + hexR + hexG + hexB;

        return hexColor;
    }
    static isDivisible(x,y){
        if (x%y==0){
            return true
        }else{
            return false
        }
    }
    static intRand(start,end){
        return Math.floor(Math.random() * (end - start + 1)) + start;
    }

}
