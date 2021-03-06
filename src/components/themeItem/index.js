import ThemeActions from '../../actions/themeActions';
import html from '../../utilities/html';
import store from '../../store';

// eslint-disable-next-line no-unused-vars
function handleSelectTheme(e) {
  const { selectTheme } = ThemeActions;
  const themeName = e.getAttribute('data-name');
  store.dispatch(selectTheme(themeName));
}

function themeItemComponent(theme) {
  // a place to store the result of calling component on children of themeItem
  const children = document.createElement('div');
  children.setAttribute('class', 'children');

  if (theme.children) {
    theme.children.forEach((child) => {
      children.appendChild(themeItemComponent(child));
    });
  }

  const template = html(/* html */
    `<div class="theme">
      <input class="theme-checkbox" type="checkbox" ${(theme.selected) ? 'checked' : ''}/>
      <span class="theme-name">${theme.name}</span>
    </div>
  `,
  );

  template.querySelector('.theme-name').addEventListener('click', () => {
    store.dispatch(ThemeActions.selectTheme(theme.name));
  });
  template.appendChild(children);
  return template;
}

function renderThemes(themes) {
  // clear rendered html first
  const container = document.createElement('div');

  if (themes) {
    themes.forEach((theme) => {
      container.appendChild(themeItemComponent(theme));
    });
  }

  return container;
}
window.handleSelectTheme = handleSelectTheme;
export default renderThemes;
