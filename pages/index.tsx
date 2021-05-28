import { useState } from "react";
import Button from "../components/Button";
import RESTApiOutput from "../components/RESTApiOutput";
import { customHeaders } from "../helper/custom-headers";
import { deleteTodos } from "../helper/delete";
import { errorHandling } from "../helper/error-handling";
import { getTodos } from "../helper/get";
import { multipleRequests } from "../helper/multiple-requests";
import { postTodos } from "../helper/post";
import { transform } from "../helper/transform";
import { updateTodos } from "../helper/update";

function Home() {
  const [display, setDisplay] = useState(null);

  const btnSections = () => (
    <section className="btn-section">
      <Button
        key="get"
        className="get"
        text="GET"
        onClick={() => setDisplay("get")}
      />
      <Button
        key="post"
        className="post"
        text="POST"
        onClick={() => setDisplay("post")}
      />
      <Button
        key="update"
        className="update"
        text="Put / Patch"
        onClick={() => setDisplay("update")}
      />
      <Button
        key="delete"
        className="delete"
        text="Delete"
        onClick={() => setDisplay("delete")}
      />
      <Button
        key="multi-fetch"
        className="multi-fetch"
        text="Simultaneous"
        onClick={() => setDisplay("multi-fetch")}
      />
      <Button
        key="custom-headers"
        className="custom-headers"
        text="Custom Headers"
        onClick={() => setDisplay("custom-headers")}
      />
      <Button
        key="transform"
        className="transform"
        text="Transform"
        onClick={() => setDisplay("transform")}
      />
      <Button
        key="error-handling"
        className="error-handling"
        text="Error Handling"
        onClick={() => setDisplay("error-handling")}
      />
    </section>
  );

  const resultSection = () => {
    if (display === "get")
      return (
        <RESTApiOutput
          key="get"
          successStatusCode={200}
          fetchFunction={getTodos}
        />
      );
    else if (display === "post")
      return (
        <RESTApiOutput
          key="post"
          successStatusCode={201}
          fetchFunction={postTodos}
        />
      );
    else if (display === "update")
      return (
        <RESTApiOutput
          key="update"
          successStatusCode={200}
          fetchFunction={updateTodos}
        />
      );
    else if (display === "delete")
      return (
        <RESTApiOutput
          key="delete"
          successStatusCode={200}
          fetchFunction={deleteTodos}
        />
      );
    else if (display === "multi-fetch")
      return (
        <RESTApiOutput
          key="multi-fetch"
          successStatusCode={200}
          fetchFunction={multipleRequests}
        />
      );
    else if (display === "custom-headers")
      return (
        <RESTApiOutput
          key="custom-headers"
          successStatusCode={201}
          fetchFunction={customHeaders}
        />
      );
    else if (display === "transform")
      return (
        <RESTApiOutput
          key="transform"
          successStatusCode={201}
          fetchFunction={transform}
        />
      );
    else if (display === "error-handling")
      return (
        <RESTApiOutput
          key="error-handling"
          successStatusCode={200}
          fetchFunction={errorHandling}
        />
      );
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
