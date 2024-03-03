import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-citizen-login',
  templateUrl: './citizen-login.page.html',
  styleUrls: ['./citizen-login.page.scss'],
})
export class CitizenLoginPage {
  errorMessage: any;

  constructor(private authService: AuthService, private router: Router,private alertController:AlertController) {}

  email: string = '';
  password: string = '';
  login() {
    const credentials = { email: this.email, password: this.password };
    this.authService.login(credentials).subscribe(
      () => {
        this.presentSuccessAlert()
      },
      (error) => {
        this.errorMessage = error.message; // Display error message to the user
      }
    );
  }


  async presentSuccessAlert() {
    const alert = await this.alertController.create({
      header:'Success',
      message: 'Login successful !',
      // cssClass: 'success-alert',
    });

    await alert.present();

    setTimeout(() => {
      alert.dismiss()
      
    }, 2000);
    await alert.onDidDismiss()
    this.router.navigate(['/dashbord']);
  }
}
