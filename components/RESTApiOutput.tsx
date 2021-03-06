import { useEffect, useState } from "react";

interface RESTApiOutputProps {
  fetchFunction: Function;
  successStatusCode: number;
}

function RESTApiOutput({
  fetchFunction,
  successStatusCode,
}: RESTApiOutputProps) {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    const results = await fetchFunction();
    setResults(results);
  };

  useEffect(() => {
    setLoading(true);
    request();
    setLoading(false);
  }, []);

  if (results === null) return <div></div>;
  if (loading)
    return (
      <section className="fetch-results-section">
        <h3>Loading...</h3>
      </section>
    );
  else if (results.status === successStatusCode) {
    return (
      <section className="fetch-results-section">
        <Status status={results.status} />
        <ResultData header="Headers" data={results.headers} />
        <ResultData header="Data" data={results.data} />
        <ResultData header="Config" data={results.config} />
      </section>
    );
  } else {
    return (
      <section className="error-section">
        <h3>Error</h3>
        <p>
          <span>Error Message:</span> {results.statusText}
        </p>
      </section>
    );
  }
}

function ResultData({ header, data }: { header: string; data: any }) {
  return (
    <div className="card">
      <h5 className="card-header">{header}</h5>
      <div className="card-body">
        <pre className="card-body">{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}

function Status({ status }: { status: string }) {
  return (
    <div className="card">
      <h5 className="card-header">
        <span>Status:</span> {status}
      </h5>
    </div>
  );
}

export default RESTApiOutput;
