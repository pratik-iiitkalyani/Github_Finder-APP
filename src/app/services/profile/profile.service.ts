import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

// import { profile } from '../../pages/profile/profile.component'
import { map } from "rxjs/operators";
// import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
	
	private username: string;
	private clientId = 'Iv1.403f9ac7cc3378df';
	private clientSecret = '02e9c997a112ebd3ade698b68f7bd95a0d06d93e';
  constructor(private http : HttpClient) { 
  }

  
  async getProfileInfo() {

   	return this.http.get('https://api.github.com/users/'+this.username + '?client_id=' + this.clientId
       + '&client_secret=' + this.clientSecret).toPromise()
   }

   // we can also use that method

   // public getProfileInfo(): Observable<any> {
   // return this.http.get('https://api.github.com/users/'+this.username + '?client_id=' + this.clientId
   //     + '&client_secret=' + this.clientSecret)
   //    }


  async getProfileRepos() {
     return this.http.get('https://api.github.com/users/'+this.username + '/repos?client_id=' + this.clientId
       + '&client_secret=' + this.clientSecret).toPromise()
   }

   async updateProfile(username:string) {
     this.username = username

   }
   
}
