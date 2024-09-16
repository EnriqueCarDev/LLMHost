import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiComponent } from './ai/ai.component';
import { DiscoverComponent } from './discover/discover.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'ai', component: AiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
