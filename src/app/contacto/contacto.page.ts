import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// Arma el formulario y validar los datos
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; 
// Usamos Ionic para mostrar ventanas emergentes (alertas)
import { AlertController } from '@ionic/angular';
// Importamos uno por uno los elementos visuales de Ionic que usamos en el HTML
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonTextarea, 
  IonButton 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true, // Indica que este componente se autogestiona
  imports: [
    CommonModule, 
    ReactiveFormsModule, // Esto es vital para que el HTML entienda el formulario reactivo
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonItem, 
    IonLabel, 
    IonInput, 
    IonTextarea, 
    IonButton
  ]
})
export class ContactoPage implements OnInit {
  // Creamos la variable que va a controlar y guardar todo nuestro formulario
  public contactForm!: FormGroup; 

  // En el constructor preparamos las herramientas que vamos a usar más abajo
  constructor(
    private formBuilder: FormBuilder,       // Ayuda a crear los campos fácilmente
    private alertController: AlertController // Ayuda a lanzar el cuadro de texto en pantalla
  ) {} 

  // Esto se ejecuta automáticamente cuando la página carga por primera vez
  ngOnInit() {
    // Aquí programamos los campos que tendrá el formulario y sus reglas (validaciones)
    this.contactForm = this.formBuilder.group({
      // Configura condiciones minimas para llenar el formulario
      nombre: ['', [Validators.required, Validators.minLength(3)]], 
      email: ['', [Validators.required, Validators.email]],        
      mensaje: ['', [Validators.required, Validators.minLength(10)]] 
    });
  }

  // Esta función se activa cuando el usuario le da al botón de "Enviar Mensaje"
  async enviarFormulario() {
    // Si todos los campos cumplen las reglas que pusimos arriba, entramos al "if"
    if (this.contactForm.valid) {
      // Mostramos en la consola de la computadora los datos que escribió el usuario
      console.log('Datos del formulario capturados:', this.contactForm.value);
      
      // Creamos el cuadro de diálogo con su título, mensaje y botón
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Información enviada correctamente.',
        buttons: ['OK']
      });

      // Hacemos que el cuadro de diálogo aparezca en la pantalla
      await alert.present();

      // Limpiamos todos los campos del formulario para que quede vacío otra vez
      this.contactForm.reset();
    }
  }
}