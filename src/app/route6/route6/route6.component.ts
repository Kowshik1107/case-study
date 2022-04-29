import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.css'],
})
export class Route6Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onScroll(event: any) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'box');

    let divnumber = $('.div > .box').length + 1;
    newDiv.setAttribute('id', 'divnumber-' + divnumber);

    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.border = '1px solid grey';
    newDiv.style.backgroundColor = 'azure';
    newDiv.style.margin = 'auto';
    newDiv.style.marginTop = '2%';
    newDiv.style.display = 'flex';
    newDiv.style.justifyContent = 'center';
    newDiv.style.alignItems = 'center';

    let button = document.createElement('button');
    button.setAttribute('id', 'btnid');
    button.innerHTML = "<span style='font-weight:bold'>Click</span>";
    button.style.padding = '5px 20px';
    button.style.backgroundColor = 'lightgreen';
    button.style.cursor = 'pointer';
    button.addEventListener('click', () => this.buttonClicked(divnumber));

    newDiv.appendChild(button);

    let parentDiv: any = document.querySelector('.div');
    parentDiv.appendChild(newDiv);
  }

  buttonClicked(divnumber: any) {
    alert(`Button ${divnumber} is clicked`);
  }
}
