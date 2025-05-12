import App from './components/app/app';
import './global.css';

const app = new App();
console.log('1');

function sum(a: number, b: number) {
  return a + b;
}
module.exports = sum;