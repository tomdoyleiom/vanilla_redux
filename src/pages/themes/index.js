/* eslint-disable operator-linebreak */
import Button from '../../models/Button';
import Theme from '../../models/Theme';
import ThemeActions from '../../actions/themeActions';
import renderButton from '../../components/button';
import renderThemes from '../../components/themeItem';
import store from '../../store';

/**
 * called whenever the page needs to be rendered
 */

function renderThemesPage(target = 'pageContainer') {
  // get the basic template HTML
  const pageTemplate =
  /* html */
  `
  <div class="themes-page">
  <div class="button-container">
  </div>
  
  <div id="content"></div>
  
  <div id="themes-container"></div>
  
  </div>
  `;

  // parse it as html
  const res = new DOMParser().parseFromString(pageTemplate, 'text/html');
  const element = [...res.body.children][0];

  // get the buttons
  const getThemes = new Button('Get Themes', 'get_themes', () => {
    const payload = new Theme('new region');
    store.dispatch(ThemeActions.getThemes(payload));
  });

  const clearThemes = new Button('Clear Themes', 'clear_themes', () => {
    store.dispatch(ThemeActions.clearThemes());
  });

  const addTheme = new Button('Add Themes', 'add_theme', () => {
    const payload = new Theme('new region');
    store.dispatch(ThemeActions.addTheme(payload));
  });
  // add the buttons to the button container
  const buttonContainer = element.querySelector('.button-container');

  buttonContainer.appendChild(renderButton(getThemes));
  buttonContainer.appendChild(renderButton(clearThemes));
  buttonContainer.appendChild(renderButton(addTheme));
  // get the page content (if there is any)
  const content = element.querySelector('#content');
  const { themes } = store.getState();
  content.innerHTML = `${themes ? themes.length : 0} themes`;
  const themesContainer = element.querySelector('#themes-container');
  themesContainer.innerHTML = '';
  const renderedThemes = renderThemes(themes);
  themesContainer.appendChild(renderedThemes);
  const targetElement = document.getElementById(target);
  targetElement.innerHTML = '';
  targetElement.appendChild(element);
}

export default renderThemesPage;
