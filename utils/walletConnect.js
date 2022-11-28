let metamask = typeof window !== "undefined" && window.ethereum;
let phantom = typeof window !== "undefined" && window.solana;


export const connectMeta = async () => {
  try {
    if (!metamask) return alert("Please Install MetaMask");

    const accounts = await metamask.request({
      method: "eth_requestAccounts",
    });

    if (accounts.length) {
      localStorage.setItem("address", accounts[0])
    }
  } catch (error) {
    console.error(error);
  }
};

export const connectPhantom = async () => {
  try {
    if (!phantom) return alert("Please Install Phantom");

    const resp = await window.solana.connect();

    if (resp) {
      const publicAddress = `0x${resp.publicKey.toString()}`;
      localStorage.setItem("address", publicAddress)
    }
  } catch (error) {
    console.error(error);
  }
};