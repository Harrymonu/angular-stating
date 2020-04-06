import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
name:'limitchar'

})

export  class TruncatePipe implements PipeTransform{

transform(input:String,limit:number)
{
if(input){
    return (input.length>length)?input.substr(0,limit)+'...':input;
}
}
    

}