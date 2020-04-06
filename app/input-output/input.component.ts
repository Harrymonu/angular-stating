import {Component,Input,Output,EventEmitter}   from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'inputoutput',
    templateUrl:'input.output.html',
})

export class InputOutput{
    @Input() review:number
    fave:boolean=false
    @Input() favorite:string
    @Output()favoriteclicked:EventEmitter<string>=new EventEmitter<string>();

    notifyMessage():void{
        this.favoriteclicked.emit(`the favorite ${this.favorite} was saved`)
        this.fave=!this.fave
    }
    isSelected(fave:boolean):boolean{
        if(!fave || !this.fave) {
            return false;
          }
          if(fave) {
            return true;
          }
    }
}