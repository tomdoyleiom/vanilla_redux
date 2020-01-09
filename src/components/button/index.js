function renderButton(button) {
  const component = document.createElement('button');
  component.setAttribute('id', button.id);
  component.innerHTML += button.name;
  component.addEventListener('click', () => {
    button.eventHandler();
  });
  return component;
}

export default renderButton;
