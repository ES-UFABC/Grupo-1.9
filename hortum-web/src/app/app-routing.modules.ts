import { LoginComponent } from './views/login/login.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; 
import { HomeComponent } from './views/home/home.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ProducersComponent } from './views/producers/producers.component';
import { CadastrarComponent } from './views/cadastrar/cadastrar.component';

const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "perfil",
        component: ProfileComponent
    },
    {
        path: "produtores",
        component: ProducersComponent
    },
    {
        path: "cadastro",
        component: CadastrarComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
