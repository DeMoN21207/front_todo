import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from '@angular/material/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatTabsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSelectModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatIconModule

  ],
  exports: [CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatTabsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSelectModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatIconModule
  ]
})
export class MaterialModule {
}
