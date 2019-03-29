import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  /*  {path: 'atena', component: MainComponent,
      children: [
        {path: 'home', component: HomeComponent},
        {path: '', redirectTo: 'home', pathMatch: "full"}
      ]},
    {path: '**', redirectTo: 'atena'}*/
  // {path: "nomenclature-page", component: NomenclatureComponent},
  // {path: "playlist-page", component: PlaylistComponent},
  // {path: "youtube-page", component: YoutubeComponent},
  // {path: "youtube-search", component: SearchYoutubeComponent},
  {path: "home", component: HomeComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
