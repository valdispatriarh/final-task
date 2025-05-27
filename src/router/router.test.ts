/**
 * @jest-environment jsdom
 */

import { router, navigate, initRouter } from './router';

jest.mock('./routes', () => ({
    routes: {
        '/login': () => {
            const el = document.createElement('div');
            el.textContent = 'Login Page';
            return el;
        },
        '/register': () => {
            const el = document.createElement('div');
            el.textContent = 'Register Page';
            return el;
        },
    },
    NotFound: () => {
        const el = document.createElement('div');
        el.textContent = '404 Not Found';
        return el;
    },
}));

describe('router system', () => {
    let app: HTMLElement;

    beforeEach(() => {
        app = document.createElement('div');
        app.id = 'app';
        document.body.appendChild(app);
    });

    afterEach(() => {
        document.body.innerHTML = '';
        jest.restoreAllMocks();
    });

    test('should render Login Page if route is /login', () => {
        window.history.pushState({}, '', '/login');
        router();
        expect(app.textContent).toBe('Login Page');
    });

    test('should render Register Page if route is /register', () => {
        window.history.pushState({}, '', '/register');
        router();
        expect(app.textContent).toBe('Register Page');
    });

    test('should render NotFound page for unknown route', () => {
        window.history.pushState({}, '', '/unknown');
        router();
        expect(app.textContent).toBe('404 Not Found');
    });

    test('navigate should change the path and render correct page', () => {
        const pushSpy = jest.spyOn(window.history, 'pushState');
        navigate('/register');
        expect(pushSpy).toHaveBeenCalledWith({}, '', '/register');
        expect(app.textContent).toBe('Register Page');
    });

    test('initRouter should add popstate and DOMContentLoaded listeners', () => {
        const windowSpy = jest.spyOn(window, 'addEventListener');
        const documentSpy = jest.spyOn(document, 'addEventListener');

        initRouter();

        expect(windowSpy).toHaveBeenCalledWith('popstate', router);
        expect(documentSpy).toHaveBeenCalledWith('DOMContentLoaded', router);
    });
});
