import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Innovateq Assignment'

  /**
   We can create new components, service, modules with routing, environments by using commands like 
    ng g c <component_name> 
    ng g s <service_name>
    ng g m <module_name> -- routing
    ng g environments

    By follow this practice, we will have the .spec.ts file in which we can write the Unit test.  
   
    Further more, I enable the tree-shaking to get the better 
    performance. Those services, model files which are unused
    will be discard from production build.

    Angular Production Command
    ng build --configuration production --aot
    */
}
