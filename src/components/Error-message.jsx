const ErrorMessage = ({ children }) => {
  return (
    <div
      style={{
        width: "80%",
        margin:"auto",
        height:"8px",
        fontSize:"10px",
        borderRadius: "4px",
        backgroundColor: "orangered",
        textAlign: "center",
        color: "white",
      }}
    >
      {children}
    </div>
  );
};

export default ErrorMessage;
