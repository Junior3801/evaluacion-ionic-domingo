import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { 
  IonApp, 
  IonSplitPane, 
  IonMenu, 
  IonContent, 
  IonList, 
  IonListHeader,
  IonNote, 
  IonMenuToggle, 
  IonItem, 
  IonIcon, 
  IonLabel, 
  IonRouterOutlet,
  IonRouterLink 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
// 1. IMPORTA LOS ÍCONOS ESPECÍFICOS QUE USARÁS
import { 
  homeOutline, 
  homeSharp, 
  personOutline, 
  personSharp, 
  mailOutline, 
  mailSharp 
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterLink, 
    RouterLinkActive, 
    IonApp, 
    IonSplitPane, 
    IonMenu,
    IonContent, 
    IonList, 
    IonListHeader, 
    IonMenuToggle, 
    IonItem, 
    IonIcon, 
    IonLabel,
    IonRouterLink, 
    IonRouterOutlet
  ],
})
export class AppComponent {
  public appPages = [
    // 2. CONFIGURA EL NOMBRE DEL ÍCONO ASOCIADO EN CADA PÁGINA
    { title: 'Inicio', url: '/folder/Inicio', icon: 'home' },
    { title: 'Información personal', url: '/folder/Informacion-personal', icon: 'person' },
    { title: 'Contacto', url: '/contacto', icon: 'mail' }
  ];

  constructor() {
    // 3. REGISTRA OFICIALMENTE LOS ÍCONOS EN EL CONSTRUCTOR
    addIcons({ 
      homeOutline, 
      homeSharp, 
      personOutline, 
      personSharp, 
      mailOutline, 
      mailSharp 
    });
  }
}