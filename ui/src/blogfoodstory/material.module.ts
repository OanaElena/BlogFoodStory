import {NgModule} from '@angular/core';
import {
  MAT_TOOLTIP_DEFAULT_OPTIONS,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatNativeDateModule, MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableDataSource,
  MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipDefaultOptions,
  MatTooltipModule
} from '@angular/material';
import {CdkTableModule} from "@angular/cdk/table";
import {PortalModule} from "@angular/cdk/portal";
import {OverlayModule} from "@angular/cdk/overlay";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {CdkStepperModule} from "@angular/cdk/stepper";
import {CdkTreeModule} from "@angular/cdk/tree";

export const isxTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 500,
  hideDelay: 0,
  touchendHideDelay: 300,
};

@NgModule({
  imports: [
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatChipsModule,
    MatSliderModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatRadioModule,
    MatRippleModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    CdkTableModule,
    MatTabsModule,
    PortalModule,
    OverlayModule,
    MatSortModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSnackBarModule,
    DragDropModule,
    CdkStepperModule,
    CdkTreeModule
  ],
  exports: [
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatChipsModule,
    MatSliderModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatRadioModule,
    MatRippleModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    CdkTableModule,
    MatTabsModule,
    PortalModule,
    OverlayModule,
    MatSortModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSnackBarModule,
    DragDropModule,
    CdkStepperModule,
    CdkTreeModule
  ],
  providers: [
    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: isxTooltipDefaults}
  ]
})
export class MaterialModule {
}
