import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Opps!!!</h1>
      <h3>{err.error.message}</h3>
      <h3>Status Text: {err.statusText + ":" + err.status}</h3>
    </div>
  );
};

export default ErrorPage;
