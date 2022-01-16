import ParticleSettings from "../components/ParticleSettings";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div style={{ position: "absolute" }}>
        <ParticleSettings />
      </div>
      <Component {...pageProps} />
      
    </div>
  );
}

export default MyApp;
