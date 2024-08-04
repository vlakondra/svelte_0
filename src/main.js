import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
  props: {'name':document.body.innerHTML}
})
console.log(app)
export default app
