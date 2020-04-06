import {Directive,ElementRef,Renderer} from '@angular/core';

@Directive({selector:'[myHighlight]'})

export class HighLiteDirective{
    constructor(el:ElementRef,renderer:Renderer)
    {
        renderer.setElementStyle(el.nativeElement,'backgroundColor',"yellow");
    }
}