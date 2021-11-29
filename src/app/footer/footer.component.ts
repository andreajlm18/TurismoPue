import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  deferedPrompt: any;
  constructor() {}
  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e: any) {
    e.preventDefault();
    this.deferedPrompt = e;
  }
  open() {
    this.deferedPrompt.prompt();
    this.deferedPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === 'acepted') {
        let btn: any = document.getElementById('borrar');
        btn.style.display = 'none';
      } else {
        console.error('no se instalo');
      }
      this.deferedPrompt = null;
    });
  }
  ngOnInit(): void {}
}
