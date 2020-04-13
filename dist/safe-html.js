
import { h, Component } from 'https://unpkg.com/@polight/brick/lib'

class SafeHtml extends Component {
  
  
  connected() {
    this.document.innerHTML = this.document.host.textContent
  }
}

export default customElements.define('safe-html', SafeHtml)
