function renderButton(button, selected = false) {
  const component = document.createElement('button');
  component.setAttribute('id', button.id);
  component.classList.add('btn-primary');
  if (selected) {
    component.classList.add('focus');
  }
  component.innerHTML += button.name;
  component.addEventListener('click', () => {
    button.eventHandler();
  });
  return component;
}

export default renderButton;
