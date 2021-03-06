import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import{MatNativeDateModule} from '@angular/material';
// import{MatMomentDateModule} from '@angular/material';
@NgModule ({
    imports: [MatButtonToggleModule, MatIconModule, MatDialogModule, FormsModule, MatFormFieldModule, MatInputModule,MatDatepickerModule,MatNativeDateModule],
    exports: [MatButtonToggleModule, MatIconModule, MatDialogModule, FormsModule, MatFormFieldModule, MatInputModule,MatDatepickerModule,MatNativeDateModule],
})

export class MaterialModule {}