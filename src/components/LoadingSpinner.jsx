const LoadingSpinner = ({ loadingMsg }) => {
  return (
    <div className="d-flex my-4">
      <div
        className="spinner-border text-primary me-2 spinner-border-sm"
        aria-hidden="true"
        style={{ width: "1.5rem", height: "1.5rem" }}
      ></div>
      <p className="mb-0" role="status">
        {loadingMsg}
      </p>
    </div>
  );
};

export default LoadingSpinner;
