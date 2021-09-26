import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './View/main/main.component';
import { VideoPageComponent } from './View/video-page/video-page.component';

const routes: Routes = [{ path: '', component: VideoPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
