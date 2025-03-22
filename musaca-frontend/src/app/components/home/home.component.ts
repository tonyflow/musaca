import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  followedAcademies = [
    {
      name: 'Berklee',
      logoURL: 'https://www.berklee.edu/sites/default/files/d7/bcm/Berklee_block_red.gif?fv=BoLTXnCB'
    },
    {
      name: 'New School',
      logoURL: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/The_New_School_logo.png'
    },
    {
      name: 'Juliard',
      logoURL: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Juilliard_School_logo.svg'
    },
    {
      logoURL: 'https://aec-music.eu/storage/members/logo-amsterdam_20160616120748.jpg'
    },
    {
      logoURL: 'https://scontent.fzrh2-2.fna.fbcdn.net/v/t39.30808-6/462802102_1341703953917603_6162563021130414127_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=PRXbKkPi6BUQ7kNvgEAwksK&_nc_oc=AdmHDjPLnw2kybWVP5bx-5P9DxZM8R3LGtCAeNWTcfpdZp31egrzh5zQWtr60GOWE4cR794ijXyCiXSxrh-itv6j&_nc_zt=23&_nc_ht=scontent.fzrh2-2.fna&_nc_gid=7LGDOFRYeDvA6iZ_GZLdEA&oh=00_AYEQ8Yx665kLbYCluQtpjM4Rr9-AN6Z_AzJCtMk9B67Zhg&oe=67E4F6C0'
    },
    {
      logoURL: 'https://aec-music.eu/storage/members/hfmhannseislerberlinlogo600dpicmyk_20200624103358.jpg'
    },
    {
      logoURL: 'https://api.free-apply.com/img/logo/f20541b3-0157-4b0a-b099-c4713efe9983?w=150&h=150&fit=crop&s=41c28ba2a99aeaef99e76cb928ce8672'
    },
    {
      logoURL: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Logo_Hochschule_f%C3%BCr_Musik_und_Theater_M%C3%BCnchen_.png'
    },
    {
      logoURL: 'https://scontent.fzrh2-2.fna.fbcdn.net/v/t39.30808-6/292507348_543451967156893_277224269525265594_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WwYDEY2HawAQ7kNvgEpINIY&_nc_oc=AdmDrbUkhW0zkhUfnGJFSBpoqvQGVXsJxs02mnBUb8GFiLU-QUKrS7idfqZwsIWk3sDpy7Djis8n-lUsfT4f7hgl&_nc_zt=23&_nc_ht=scontent.fzrh2-2.fna&_nc_gid=d9G038zc_IgON_dgSq5JKA&oh=00_AYF2bsBD6BAY8NmbXBw2S6DNqcII0E-jvbqfK2h5IVBiOg&oe=67E4EE42'
    }
  ]

  currentThumbnail = {
    url: 'https://www.wassilykandinsky.net/images/works/370.jpg?version=7'
  }

  currentTrack = {
    trackName: 'Sample Track',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  }

  public latestTracks = [
    {
      id: 1,
      trackName: 'Master of puppets',
      artist: 'Metallica'
    },
    {
      id: 1,
      trackName: 'Kind of Blue',
      artist: 'Miles Davies'
    },
    {
      id: 1,
      trackName: 'Love Supreme',
      artist: 'John Coltrane'
    }
  ]

  constructor(private http: HttpClient, private router: Router) {
  }

  onLogout() {
    this.router.navigate(["login"]).then((result) => {
      console.log("Login Successful");
    })
  }

}
