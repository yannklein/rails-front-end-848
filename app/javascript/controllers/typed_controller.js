import { Controller } from '@hotwired/stimulus'
import Typed from "typed.js"

export default class extends Controller {
  // static targets = [ 'test' ]

  connect() {
    console.log('Hello from typed_controller.js')
    // console.log(this.testTarget)

    new Typed(this.element, {
      strings: ["Hi 848!", "What's up?"],
      typeSpeed: 30
    });
  }
}