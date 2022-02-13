import { useSelector } from "react-redux";
import { providers } from "../../redux/reducers/basic";

function Providers() {
  const providersList = useSelector(providers);
  return (
    <div className="providers-list">
      Providers
      <hr />
      {providersList?.map((provider, index) => (
        <p> {provider.url} </p>
      ))}
    </div>
  );
}

export default Providers;
