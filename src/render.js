import './render.css'
// import { SimpleBarChart } from '@shopify/polaris-viz'; // fails, because of https://github.com/Shopify/polaris-viz/blob/main/packages/polaris-viz/src/data/character-widths.json underneath
// console.log(SimpleBarChart);

console.log('៘'); // <-- fails, even if commented, as long as it's in the file

export function render() {
    const el = document.createElement('div')
    el.classList.add('text')
    document.getElementsByTagName('body')[0].appendChild(el)
    el.innerHTML = 'hello, world'
}