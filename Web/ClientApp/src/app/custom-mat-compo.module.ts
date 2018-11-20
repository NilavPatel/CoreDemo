import { NgModule } from '@angular/core'
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule, MatGridListModule } from '@angular/material';

@NgModule({
    imports: [MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule, MatGridListModule],
    exports: [MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule, MatGridListModule]
}) export class MyMaterialComponentModule {

}

