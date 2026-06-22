import { useState, useEffect } from "react";

function App() {
  const [assetName, setAssetName] = useState("");
  const [assetType, setAssetType] = useState("");
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetch("https://asset-mt-api-b4gmccerf9dhdaev.southeastasia-01.azurewebsites.net/api/GetAssets")
      .then((res) => res.json())
      .then((data) => setAssets(data))
      .catch((err) => console.error(err));
  }, []);

  const addAsset = () => {
    if (!assetName || !assetType) return;

    setAssets([
      ...assets,
      {
        assetName,
        assetType
      }
    ]);

    setAssetName("");
    setAssetType("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Taufik Asset Tracker</h1>

      <div>
        <input
          placeholder="Asset Name"
          value={assetName}
          onChange={(e) => setAssetName(e.target.value)}
        />

        <input
          placeholder="Asset Type"
          value={assetType}
          onChange={(e) => setAssetType(e.target.value)}
        />

        <button onClick={addAsset}>
          Add Asset
        </button>
      </div>

      <br />

      <table border="1">
        <thead>
          <tr>
            <th>Asset Name</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {assets.map((asset, index) => (
            <tr key={index}>
              <td>{asset.assetName}</td>
              <td>{asset.assetType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
