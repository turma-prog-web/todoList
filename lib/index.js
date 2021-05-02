import Components from './components/index.js';

const getElementAttrs = (element, propKeys = []) =>
  propKeys.reduce((acc, key) => ({...acc, [key]: element.getAttribute(key)}), {});

const registryComponents = (components = []) => components.forEach(defineTag)

const defineTag = (componentFunction) => {
  const {name, props, template} = componentFunction();
  const tags = [...document.getElementsByTagName(name)];
  tags.forEach(tag => {
    const attrs = getElementAttrs(tag, props)
    tag.innerHTML = template(attrs);
  })
} 

export const createApp = () => {
  registryComponents(Components)
}
