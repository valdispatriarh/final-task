import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import NotFoundPage from '../pages/not';

type Page = () => Node;

type Routes = {
    [key: string]: Page;
};

export const routes: Routes = {
    '/login': LoginPage,
    '/register': RegisterPage,
};

export const NotFound: Page = NotFoundPage;
