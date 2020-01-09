import Theme from './Theme';

test('create a new theme with only a name', () => {
  const themeName = 'test theme';
  const myTheme = new Theme('test theme');
  expect(myTheme.name === themeName);
});

test('create a theme with 2 contacts', () => {
  const themeName = 'test theme';
  const contacts = ['person 1', 'person 2'];
  const myTheme = new Theme(themeName, contacts);
  expect(myTheme.contacts.length === 2);
});

test('create a theme with child', () => {
  const childTheme = new Theme('child theme');
  const myTheme = new Theme('test theme', [], [childTheme]);
  expect(myTheme.children.length === 1);
});

test('a themes child\'s parent is the theme', () => {
  const childTheme = new Theme('child theme');
  const myTheme = new Theme('test theme', [], [childTheme]);
  expect(myTheme.children[0].parent).toEqual(myTheme);
});

test('when I toggle a theme to false, its child is toggled to false', () => {
  // arrange
  const childTheme = new Theme('child theme');
  const myTheme = new Theme('test theme', [], [childTheme]);
  // act
  myTheme.toggleSelected(false);
  // assert
  expect(myTheme.selected === false);
  expect(myTheme.children[0].selected === false);
});

test('when I toggle a theme to true, all its children are toggled to true', () => {
  // arrange
  const childTheme1 = new Theme('child theme1');
  const childTheme2 = new Theme('child theme2');
  const myTheme = new Theme('test theme', [], [childTheme1, childTheme2]);
  // act
  myTheme.toggleSelected(true);
  // assert
  expect(myTheme.selected);
  expect(myTheme.children[0].selected).toBe(true);
  expect(myTheme.children[1].selected).toBe(true);
});
