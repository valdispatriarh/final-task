import './global.css';
import { initRouter, navigate } from './router/router';

const bodyTag = document.body;
bodyTag.innerHTML = `
  <nav>
    <a href="/login" data-link>Login</a>
    <a href="/register" data-link>Register</a>
  </nav>
  <main id="app"></main>
`;

document.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.matches('[data-link]')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
            navigate(href);
        }
    }
});

initRouter();
