import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {  NgModule } from '@angular/core';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker'; 
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { FooterComponent } from './shared/common/footer/footer.component';
import { TapToTopComponent } from './shared/common/tap-to-top/tap-to-top.component';
import { FullscreenDirective } from './shared/directives/fullscreen.directive';
import { HoverEffectSidebarDirective } from './shared/directives/hover-effect-sidebar.directive';
import { SvgReplaceDirective } from './shared/directives/svgReplace.directive';
import { AuthenticationLayoutComponent } from './shared/layouts/authentication-layout/authentication-layout.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { HeaderComponent } from './shared/common/header/header.component';
import { PageHeaderComponent } from './shared/common/page-header/page-header.component';
import { SidebarComponent } from './shared/common/sidebar/sidebar.component';
import { SwitcherComponent } from './shared/common/switcher/switcher.component';

@NgModule({
    declarations: [
        PageHeaderComponent,
        SidebarComponent,
        MainLayoutComponent, AuthenticationLayoutComponent, SwitcherComponent, HeaderComponent , TapToTopComponent,
        FooterComponent
    ],
    exports: [
        PageHeaderComponent,
        SidebarComponent, SwitcherComponent, HeaderComponent, FooterComponent, TapToTopComponent
    ],
    imports: [
        CommonModule,
        RouterModule,   
        NgbModule,
        OverlayscrollbarsModule,
        ColorPickerModule,
        FormsModule, ReactiveFormsModule,
        RouterModule, FullscreenDirective,
        HoverEffectSidebarDirective,SvgReplaceDirective
    ]
})
export class SharedModule {}
