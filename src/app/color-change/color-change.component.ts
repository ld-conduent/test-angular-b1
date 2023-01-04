import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-change',
  templateUrl: './color-change.component.html',
})
export class ColorChangeComponent {
  fillColor = 'rgb(255, 0, 0)';

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}
