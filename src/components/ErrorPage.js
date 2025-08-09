import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold text-orange-500 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 mb-6">
        The page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
