export const CardComponent = () => ({
  name: 'v-card',
  props: ['heading', 'subheading'],
  template: ({heading, subheading}) => `
  <div style="text-align: center; font-family: sans-serif">
    <h1>${heading}</h1>
    <p>${subheading}</p>
  </div>`
});