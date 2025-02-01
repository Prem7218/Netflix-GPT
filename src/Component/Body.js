import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const preventManualRefresh = (event) => {
      if (event.key === "F5" || (event.ctrlKey && event.key === "r")) {
        event.preventDefault();
        alert("Manual refresh is disabled!");
      }
    };

    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "Are you sure you want to leave?";
    };

    window.addEventListener("keydown", preventManualRefresh);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("keydown", preventManualRefresh);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const closeAlert = () => {
    setShowAlert(false);
  };

  const AppLayout = () => {
    return (
      <div>
        {showAlert && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)", // Center the alert box
              width: "50%", // 60% of the original page width
              backgroundColor: "#f9f9f9",
              border: "1px solid #e3e3e3",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              zIndex: 9999, // Ensure the alert box is on top
            }}
          >
            {/* Close Button in the top-left corner of the alert box */}
            <button
              onClick={closeAlert}
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                backgroundColor: "#d32f2f",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "8px 15px",
                fontSize: "14px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#b71c1c")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#d32f2f")}
            >
              Close
            </button>

            {/* Embed iframe */}
            <iframe
              id="corsIframe"
              src="https://cors-anywhere.herokuapp.com/corsdemo"
              style={{
                width: "100%",
                height: "110px", // Adjust the height as needed
                border: "1px solid #d3d3d3",
                borderRadius: "10px",
                marginTop: "50px", // Add space between the iframe and the close button
              }}
              title="CORS Demo"
            ></iframe>
          </div>
        )}
        <Outlet />
      </div>
    );
  };

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Login /> },
        { path: "/browse", element: <Browse /> },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
