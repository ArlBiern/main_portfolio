import NotFound from "./svg/NotFound";

function PageNotFound() {
  return (
    <div className="section">
      <div className="notFound_cnt">
        <div className="notFound_textCnt">
          <h2>404</h2>
          <h3>Page not found</h3>
        </div>
        <NotFound />
        <p className="notFound_info">Look's like you reached a dead end!</p>
        <p className="notFound_info">Please go back or go to the main site.</p>
      </div>
    </div>
  );
}

export default PageNotFound;
