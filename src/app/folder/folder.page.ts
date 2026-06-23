import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; 
// Importamos TODOS los componentes de Ionic requeridos por tu interfaz
import { 
  IonHeader, 
  IonToolbar, 
  IonButtons, 
  IonMenuButton, 
  IonTitle, 
  IonContent, 
  IonIcon, 
  IonItem, 
  IonLabel,
  IonAvatar, 
  IonList,
  IonCard,        // <-- AGREGADO
  IonCardHeader,  // <-- AGREGADO
  IonCardTitle,   // <-- AGREGADO
  IonCardContent  // <-- AGREGADO
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  // Registramos todo el ecosistema visual para solucionar los errores de compilación
  imports: [
    CommonModule,
    IonHeader, 
    IonToolbar, 
    IonButtons, 
    IonMenuButton, 
    IonTitle, 
    IonContent, 
    IonIcon, 
    IonItem, 
    IonLabel,
    IonAvatar, 
    IonList,
    IonCard,        // <-- DECLARADO
    IonCardHeader,  // <-- DECLARADO
    IonCardTitle,   // <-- DECLARADO
    IonCardContent  // <-- DECLARADO
  ],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') || '';
  }
}