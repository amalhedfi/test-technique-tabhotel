import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  toggle:boolean[]
  myArray = [
    {
      'name': 'one',
      submenus:[
       { 'name':'one.one'}
      ]
    },
    {
      'name': 'two',
      'submenus': [
        {
          'name': 'two.one'
        },
        {
          'name': 'two.two',
          'submenus': [
            {
              'name': 'two.two.one'
            },
           
          ]
        },
        
      ]
    },
    
  
      ]
  

  constructor() {   this.toggle = this. myArray.map(i => false);}

  ngOnInit(): void {
  }
  show($event:any)
  {
    console.log($event);
    
  }

}
