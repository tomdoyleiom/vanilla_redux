class Theme {
  constructor(name, contacts = [], children = []) {
    this.name = name;
    this.contacts = contacts;
    const local = this;

    if (children) {
      children.forEach((el) => {
        const child = el;
        child.parent = local;
      });
    }
    this.children = children;
  }

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
