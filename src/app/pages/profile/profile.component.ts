import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../../services/profile/profile.service'
// import { Observable} from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
	
  profile = <any>[];
  repos = <any>[];
  username:string

  	constructor(private profileService: ProfileService) {}

    async findProfile() {
      await this.profileService.updateProfile(this.username)

      this.profileService.getProfileInfo().then(profile => {
        console.log("Profile", profile)
      this.profile = profile
    })

      this.profileService.getProfileRepos().then(repos=> {
        this.repos = repos
      })
    }

  ngOnInit() {
  console.log("ngOnInit triggered")
  console.log('Profile', this.profile)
  }

}


// async onEnter() {
    //   this.lists = []
    //   console.log(this.name)
    //   this.lists = await this.chatbotservice.getList(this.name)
    //   console.log(this.lists)
    //   if (this.lists.length == 0){
     //   this.str = "invalid username"
    //   }
    // }

    // async field(){
    // this.lists = []
    // }