function generateConfig() {
  const network = document.getElementById("network").value;
  const projectType = document.getElementById("projectType").value;

  const config = {
    network: network,
    projectType: projectType,
    rpcUrl: network === "mainnet"
      ? "https://rpc.endless.mainnet"
      : "https://rpc.endless.testnet",
    chainId: network === "mainnet" ? 999 : 998,
    createdAt: new Date().toISOString()
  };

  document.getElementById("output").textContent =
    JSON.stringify(config, null, 2);
}
