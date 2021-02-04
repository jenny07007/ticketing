import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../helpers/build-client";
import Headers from "../components/Header";

export default function AppComponent({ Component, pageProps, currentUser }) {
  return (
    <div>
      <Headers currentUser={currentUser} />
      <div className="container">
        <Component currentUser={currentUser} {...pageProps} />
      </div>
    </div>
  );
}

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");

  return {
    ...data,
  };
};
