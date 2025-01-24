import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [MainPageComponent] //los componentes se declaran para que los pueda usar el modulo, y se exportan los componentes
                               //que se quieren que se usen cuando se exporte el modulo completo, o para que se muestren al mundo exterior
})
export class DbzModule { }
