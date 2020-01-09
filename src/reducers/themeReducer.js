function findTargetTheme(name, themes) {
  // while there are still themes and we haven't found the answer
  for (let i = 0; i < themes.length; i += 1) {
    // get the current theme
    const theme = themes[i];
    // check if it matches
    if (theme.name !== name) {
      // if the theme has children iterate them aswell
      if (theme.children) {
        // otherwise check its children
        const el = findTargetTheme(name, theme.children);
        if (el) {
          return el;
        }
      }
    } else {
      return theme;
    }
  }
  return null;
}

function selectTheme(state, payload) {
  const currentThemes = [...state];
  const targetTheme = findTargetTheme(payload, currentThemes);
  if (targetTheme != null) {
    if (targetTheme.selected) {
      targetTheme.selected = false;
    } else {
      targetTheme.selected = true;
    }
    targetTheme.children.forEach((child) => {
      // eslint-disable-next-line no-param-reassign
      child.selected = targetTheme.selected;
    });
    return [...currentThemes];
  }
  return state;
}

function themeReducer(state = [], action = {}) {
  switch (action.type) {
    case 'CLEAR_THEMES':
      return [];
    case 'ADD_THEME':
      return [...state, action.payload];
    case 'ADD_THEMES':

      return [...state, ...action.payload];
    case 'SELECT_THEME':
      selectTheme(state, action.payload);
      return state;
    default:
      return state;
  }
}

export default themeReducer;
