import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/features/services/authService/auth-service.service';
import { SnackbarService } from 'src/app/features/services/snackBar/snackbar.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule, FormsModule],
})
export class LoginComponent {
  account = {
    account: 'admin',
    password: '12345678',
  };
  constructor(
    private router: Router,
    private authService: AuthServiceService,
    private snackbar: SnackbarService
  ) {}

  onSubmitForm() {
    if (this.account.account && this.account.password) {
      this.authService
        .getUser({
          account: this.account.account,
          password: this.account.password,
        })
        .subscribe({
          next: (results) => {
            const [user] = results;
            if (user) {
              this.authService.setRole = user?.account;
              this.router.navigate(['/table']);
            } else {
              this.snackbar.openSnackBar({
                message: 'user name or password invalid',
              });
            }
          },
        });
    }
  }
}
