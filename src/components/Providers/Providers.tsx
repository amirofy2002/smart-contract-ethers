import { useDispatch, useSelector } from "react-redux";
import { providers, selectProvider } from "../../redux/reducers/basic";

function Providers() {
  const providersList = useSelector(providers);
  const dispatch = useDispatch();
  return (
    <div className="providers-list">
      Providers
      <hr />
      {providersList?.map((provider, index) => (
        <p
          className="cursor"
          onClick={() => {
            var r = window.confirm(
              "Are you sure you want to select this provider?"
            );
            if (r) {
              dispatch(selectProvider(provider));
            }
          }}
        >
          {provider.url} {provider?.selected ? " (selected) " : ""}
        </p>
      ))}
    </div>
  );
}

export default Providers;
