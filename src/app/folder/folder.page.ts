import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonButtons, IonMenuButton, 
  IonTitle, IonContent, IonCard, IonCardHeader, 
  IonCardTitle, IonCardContent, IonAvatar, IonList, 
  IonItem, IonLabel, IonIcon 
} from '@ionic/angular/standalone'; // Importaciones de componentes
import { CommonModule } from '@angular/common'; // Necesario para *ngIf
import { addIcons } from 'ionicons'; // Para registrar iconos
import { 
  mailOutline, 
  logoWhatsapp, 
  locationOutline, 
  homeOutline, 
  personOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonHeader, IonToolbar, IonButtons, IonMenuButton, 
    IonTitle, IonContent, IonCard, IonCardHeader, 
    IonCardTitle, IonCardContent, IonAvatar, IonList, 
    IonItem, IonLabel, IonIcon
  ],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    // Registramos los iconos para que Ionic los pueda renderizar
    addIcons({ 
      mailOutline, 
      logoWhatsapp, 
      locationOutline, 
      homeOutline, 
      personOutline 
    });
  }

  ngOnInit() {
    // Obtenemos el nombre de la sección de la URL
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}