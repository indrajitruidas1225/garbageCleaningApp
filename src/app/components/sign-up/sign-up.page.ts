import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/service/signup.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage {
  name: string = '';
  email: string = '';
  password: string = '';
  address: string = '';
  mobileNumber: string = '';
  dob: string = '';
  constructor(private signupService: SignupService,private alertController:AlertController) {}

  register() {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password,
      address: this.address,
      mobileNumber: this.mobileNumber,
      dob: this.dob,
    };

    this.signupService.signUp(userData).subscribe(
      (response) => {
        // Handle successful registration
        console.log('User registered successfully:', response);
        this.presentSignupSuccessAlert()
      },
      (error) => {
        // Handle registration error
        console.error('Registration failed:', error);
      }
    );
  }


  async presentSignupSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Signup Successful',
      message: 'Your account has been created successfully.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
