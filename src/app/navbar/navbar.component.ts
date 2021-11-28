import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  declare button: any;
  ngOnInit(): void {
    //   this.button = document.getElementById('notify');
    //   this.button = document.addEventListener('click', function (e) {
    //     Notification.requestPermission().then(function (result) {
    //       if (result === 'granted') {
    //         randomNotification();
    //       }
    //     });
    //   });
    // }
  }
}
// function randomNotification() {
//   var notifTitle = 'Noticiacion';
//   var notifBody = 'Te invitamos a conocer nuestro contenido';
//   var notifImg = 'assets/img/logo.png';
//   var options = {
//     body: notifBody,
//     icon: notifImg,
//   };
//   var notif = new Notification(notifTitle, options);
//   setTimeout(randomNotification, 40000);
// }
