import { Component } from '@angular/core';

import { TraduccionPage } from '../traduccion/traduccion';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TraduccionPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
