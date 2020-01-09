class Theme {
  constructor(name, contacts = [], children = []) {
    this.name = name;
    this.contacts = contacts;
    const local = this;

    if (children) {
      children.forEach((el) => {
        const child = new Theme(el.name, el.contacts, el.children);
        child.parent = local;
      });
    }
    this.children = children;
  }

  // for some reason we're losing this :(
  toggleSelected(value = null) {
    const toToggle = this;
    if (value == null) {
      if (toToggle.selected === true) {
        toToggle.selected = false;
      } else {
        toToggle.selected = true;
      }
    } else {
      toToggle.selected = value;
    }

    if (toToggle.children) {
      toToggle.children.forEach((child) => {
        child.toggleSelected(toToggle.selected);
      });
    }
  }
}

export default Theme;
