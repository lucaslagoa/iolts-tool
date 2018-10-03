import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { TransformIotsToDotComponent } from './transform-iots-to-dot/transform-iots-to-dot.component';
import { TransformDotToIotsComponent } from './transform-dot-to-iots/transform-dot-to-iots.component';
import { GenerateAutomataFromDotComponent } from './generate-automata-from-dot/generate-automata-from-dot.component';
const routes: Routes = [
  
    { path: '' , redirectTo: '/home' , pathMatch: 'full'},
    { path: 'home' , component: HomeComponent},
    { path: 'transform-iots-to-dot' , component: TransformIotsToDotComponent},
    { path: 'transform-dot-to-iots' , component: TransformDotToIotsComponent},
    { path: 'generate-automata-from-dot' , component: GenerateAutomataFromDotComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
