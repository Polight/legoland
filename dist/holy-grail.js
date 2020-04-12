
import { h, Component } from 'https://unpkg.com/@polight/brick/lib'

class HolyGrail extends Component {
  get vdom() {
    return ({ state }) => [
  h("slot", {"name": `header`}, ""),
  h("main", {}, [
    h("slot", {"name": `left`}, ""),
    h("slot", {"name": `center`}, ""),
    h("slot", {"name": `right`}, "")
]),
  h("slot", {"name": `footer`}, "")]
  }
  get vstyle() {
    return ({ state }) => h('style', {}, `
    root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  main {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
  }
  slot {
    display: block;
  }
  slot[name="center"] {
    flex-grow: 1;
  }
  slot[name="left"],
  slot[name="right"] {
    width: 25%;
  }
  `)}
  
}

export default customElements.define('holy-grail', HolyGrail)
