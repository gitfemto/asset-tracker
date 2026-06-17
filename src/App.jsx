import { useState } from "react";

function App() {
  const [assetName, setAssetName] = useState("");
  const [assetType, setAssetType] = useState("");

  const [assets, setAssets] = useState([
    { assetName: "DC01", assetType: "VM" },
    { assetName: "FGT01", assetType: "Firewall" }
  ]);

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
      <h1>IT Asset Tracker</h1>

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