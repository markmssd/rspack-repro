import './render.css'
import { SparkLineChart } from '@shopify/polaris-viz';

console.log(SparkLineChart);

export function render() {
    const el = document.createElement('div')
    el.classList.add('text')
    document.getElementsByTagName('body')[0].appendChild(el)
    el.innerHTML = 'hello, world'
}