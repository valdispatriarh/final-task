# 🛍️ eCommerce Shop

This project is an eCommerce shop where users can search for products, add them to the cart, and make purchases.

## 🧰 Tech Stack

- ESLint  
- Prettier  
- Git  
- HTML5  
- CSS3  
- JavaScript / TypeScript  
- Webpack  
- Husky

## ⚙️ Installation
If you have project local in terminal use: 
```bash
git pull 

Next step in terminal is use:
```bash
npm install 
for install dependencies.

Next step in terminal is use:
```bash
npm run build

Deploy to GitHub Pages with 
```bash
npm run deploy


## 🐶 What is Husky?

Husky is a tool that lets you **run scripts automatically before certain Git actions** — like committing code or pushing to a repository. This helps enforce code quality by running checks **before bad code can be committed**.

In this project, Husky is configured to run the following tasks **before each commit**:

- ✅ **Prettier** formats your code (so it looks clean and consistent)
- 🔍 **ESLint** checks your code for common bugs and code style problems
- 🧪 **Tests** are run using `npm run test` to make sure everything still works

If any of these steps fail, the commit is **blocked** to prevent broken or badly formatted code from being added to the repository.

---

## 🔓 How to Skip Husky Checks (not recommended)

If you want to skip Husky pre-commit checks (e.g., in special situations), you can use the `--no-verify` flag:

```bash
git commit -m "your message" --no-verify