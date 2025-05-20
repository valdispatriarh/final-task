const NotFoundPage = (): Node => {
    const div = document.createElement('div');
    div.innerHTML = `
    <h1>notFound</h1>
  `;
    return div;
};
export default NotFoundPage;
