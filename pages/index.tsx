import { useState } from "react";
import Button from "../components/Button";
import GetOutput from "../components/GetOutput";

function Home() {
  const [display, setDisplay] = useState(null);

  const btnSections = () => (
    <section className="btn-section">
      <Button className="get" text="GET" onClick={() => setDisplay("get")} />
    </section>
  );

  const resultSection = () => {
    if (display === "get") return <GetOutput />;
    else return null;
  };

  return (
    <main>
      <h1>Axios</h1>

      {btnSections()}
      {resultSection()}
    </main>
  );
}

export default Home;
