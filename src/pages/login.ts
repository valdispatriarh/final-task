import { validateEmail } from '../valid/validateEmail';

const LoginPage = (): Node => {
    const div = document.createElement('div');
    div.innerHTML = `
 <h1>Login</h1>
 <form id="form">
 <input type="text" id="email" placeholder="Enter email" />
 <p id="email-error" style="color: red;"></p>

 <input type="password" id="password" placeholder="Password" />
 <p id="password-error" style="color: red;"></p>

 <button type="submit">Login</button>
 </form>
 `;

    const emailInput = div.querySelector('#email') as HTMLInputElement;
    const emailError = div.querySelector('#email-error') as HTMLParagraphElement;

    emailInput.addEventListener('input', () => {
        const error = validateEmail(emailInput.value);
        emailError.textContent = error ?? '';
        emailInput.addEventListener('input', () => {
            const error = validateEmail(emailInput.value);
            emailError.textContent = error ?? '';
        });
    });

    return div;
};

export default LoginPage;
