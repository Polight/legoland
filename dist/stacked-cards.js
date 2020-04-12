
import { h, Component } from 'https://unpkg.com/@polight/brick/lib'

class StackedCards extends Component {
  get vdom() {
    return ({ state }) => [
  ((state.cards).map((card) => (h("slot", {"name": card.name}, ""))))]
  }
  get vstyle() {
    return ({ state }) => h('style', {}, `
    root {
    display: block;
    position: relative;
  }
  root > * {
    position: absolute;
  }
  slot {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
  `)}
  init() {
    this.state = {
      cards: [],
      angle: 5,
    }
  }

  connected() {
    const children = Array.from(this.shadowRoot.host.children)
    this.state.cards = children.map((child, i) => {
      child.name = `card-${i}`
      child.slot = `card-${i}`
      child.style.transform = `rotate(${i * this.state.angle}deg)`
      child.style.position = 'absolute'
      child.style.zIndex = children.length - i
      child.classList.add('card')
      return child
    })
  }
}

export default customElements.define('stacked-cards', StackedCards)
