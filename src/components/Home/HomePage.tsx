import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentWallet } from "../../redux/reducers/basic";

function HomePage() {
  const wallet = useSelector(currentWallet);
  const navigate = useNavigate();
  return (
    <div className="home-page-container">
      Home Page
      <br />
      {wallet?.address}
      <button
        onClick={() => {
          navigate("/wallet");
        }}
      >
        {" "}
        Create Wallet{" "}
      </button>
      <button
        onClick={() => {
          navigate("/providers");
        }}
      >
        Providers
      </button>
    </div>
  );
}

export default HomePage;
