/* eslint-disable operator-linebreak */
import Button from '../../models/Button';
import Theme from '../../models/Theme';
import ThemeActions from '../../actions/themeActions';
import html from '../../utilities/html';
import renderButton from '../../components/button';
import renderThemes from '../../components/themeItem';
import store from '../../store';

/**
 * called whenever the page needs to be rendered
 */

function renderThemesPage(target = 'pageContainer') {
  const pageTemplate = html`
  <div class="themes-page">
    <div class="button-container"></div>
    
    <div id="content"></div>
    
    <div id="themes-container"></div>
  </div>
  `;

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
  const buttonContainer = pageTemplate.querySelector('.button-container');

  buttonContainer.appendChild(renderButton(getThemes));
  buttonContainer.appendChild(renderButton(clearThemes));
  buttonContainer.appendChild(renderButton(addTheme));
  // get the page content (if there is any)
  const content = pageTemplate.querySelector('#content');
  const { themes } = store.getState();
  content.innerHTML = `${themes ? themes.length : 0} themes`;
  const themesContainer = pageTemplate.querySelector('#themes-container');
  themesContainer.innerHTML = '';
  const renderedThemes = renderThemes(themes);
  themesContainer.appendChild(renderedThemes);
  const targetElement = document.getElementById(target);
  targetElement.innerHTML = '';
  targetElement.appendChild(pageTemplate);
}

export default renderThemesPage;
