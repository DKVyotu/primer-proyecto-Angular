import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Observable } from 'rxjs';
import { USER } from '../../core/models';

@Component({
  selector: 'app-panel',
  standalone: false,
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent { 

  authuser: Observable <USER | null>  
  
  constructor(private AuthService: AuthService) { 
    this.authuser = this.AuthService.authuser;
  }

}
 