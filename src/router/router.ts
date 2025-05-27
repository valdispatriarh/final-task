import { routes, NotFound } from './routes';

type Page = () => Node;

export function router() {
    const path: string = window.location.pathname;
    const page: Page = routes[path] || NotFound;
    const app = document.getElementById('app') as HTMLElement;
    app.innerHTML = '';
    app.appendChild(page());
}

export function navigate(path: string) {
    window.history.pushState({}, '', path);
    console.log('1');
    router();
}

export function initRouter() {
    window.addEventListener('popstate', router);
    document.addEventListener('DOMContentLoaded', router);
}
