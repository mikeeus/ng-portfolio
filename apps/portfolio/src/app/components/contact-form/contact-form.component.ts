import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'portfolio-contact-form',
  template: `
    <form [formGroup]="contactForm"
      action="https://script.google.com/macros/s/AKfycbwNydJeY8xV4Hsp1e0aK-83WUP7IlQif2PM_oP-EWBI9N_uzTk/exec">
      <input type="text" formControlName="name" placeholder="Name" required>
      <div class="error" *ngIf="contactForm.get('name').touched && contactForm.get('name').hasError('required')">
        Name is required
      </div>
      
      <input type="email" formControlName="email" placeholder="Email" required>
      <div class="error" *ngIf="contactForm.get('email').touched && contactForm.get('email').hasError('required')">
        Email is required
      </div>
      <div class="error" *ngIf="contactForm.get('email').touched && contactForm.get('email').hasError('email')">
        Email is invalid
      </div>
      
      <textarea formControlName="content" placeholder="Message" required></textarea>
      <div class="error" *ngIf="contactForm.get('content').touched && contactForm.get('content').hasError('required')">
        Message is required
      </div>
      
      <input type="submit" value="Submit"
        [disabled]="contactForm.invalid || busy"
        (click)="submit()">

      <div class="success-message" *ngIf="message">{{ message }}</div>
      <div class="error-message" *ngIf="error">
        There was a problem sending your message, try
        <a href="mailto:itsmikias@gmail.com?Subject=Hello%20again"   
          target="_top">
          sending an email this way.
        </a>
      </div>
    </form>
  `,
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    content: ['', Validators.required]
  });
  message: string;
  busy = false;
  error: any;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  ngOnInit() {}

  submit() {
    this.busy = true;

    const url = "https://script.google.com/macros/s/AKfycbwNydJeY8xV4Hsp1e0aK-83WUP7IlQif2PM_oP-EWBI9N_uzTk/exec";
    this.http.post(url, this.contactForm.value, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .subscribe(res => {
        if (res['result'] === 'success') {
          this.message = 'Message successfuly sent!';
        }
        this.busy = false;
        this.contactForm.reset();
      }, err => {
        this.error = err;
        this.busy = false;
        this.contactForm.reset();
      })
  }
}
