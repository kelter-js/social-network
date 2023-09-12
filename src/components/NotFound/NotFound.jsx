const NotFound = () => (
  <div className="page-main container">
    <div className="page-main__not-found">
      <h1>Страница не найдена</h1>

      <div style={{ marginTop: 20 }}>
        <span>
          Проверьте ссылку или начните{" "}
          <a href={window.location.origin}>сначала</a>.{" "}
        </span>
      </div>
    </div>
  </div>
);

export default NotFound;
