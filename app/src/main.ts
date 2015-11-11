import 'platypus';
import 'platypusui';

import './app/app';

import './templatecontrols/footer/footer.tc';
import './templatecontrols/modal/modal.tc';
import './templatecontrols/navbar/navbar.tc';
import '../styles/variables.less';

document.getElementById('heavy-button').onclick = switchHeavy;
document.getElementById('medium-button').onclick = switchMedium;
document.getElementById('light-button').onclick = switchLight;
document.getElementById('default-button').onclick = switchDefault;

function switchHeavy() {
  document.getElementsByTagName('body')[0].style.backgroundColor = '@heavy-3'; 
  document.getElementsByTagName('body')[0].style.color = '@heavy-1';
}

function switchMedium() {
  document.getElementsByTagName('body')[0].style.backgroundColor = '@medium-3'; 
  document.getElementsByTagName('body')[0].style.color = '@medium-1'; 
}

function switchLight() {
  document.getElementsByTagName('body')[0].style.backgroundColor = '@light-3'; 
  document.getElementsByTagName('body')[0].style.color = '@light-1'; 
}

function switchDefault() {
  document.getElementsByTagName('body')[0].style.backgroundColor = '@default-4'; 
  document.getElementsByTagName('body')[0].style.color = '@default-1'; 
}