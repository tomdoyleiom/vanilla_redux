export default function html(template) {
  const res = new DOMParser().parseFromString(template, 'text/html');
  const element = [...res.body.children][0];
  return element;
}
