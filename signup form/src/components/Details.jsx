import React from "react";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <section className="d-flex justify-content-between mt-3">
          <div>
            <h3>This is the details page</h3>
          </div>
          <div>
            <button onClick={() => navigate("/")}>LogOut</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Details;
