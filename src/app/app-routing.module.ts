import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ROUTES } from "@shared/constants/routes/routes.constant";

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule {}