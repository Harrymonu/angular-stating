import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl:'app.component.html'
})
export class AppComponent { 

  name:string="i have started Angular";
  inputsearch:string='';
}
