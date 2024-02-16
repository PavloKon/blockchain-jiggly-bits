import { ethers } from "ethers";

export const getContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contractABI = require("./contract_abi.json");
  const contract = new ethers.Contract(
    process.env.REACT_APP_ADDRESS,
    contractABI,
    signer
  );
  return contract;
};

export const getWalletBalance = async (walletAddress) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const balance = await provider.getBalance(walletAddress)
  const balanceInEth = ethers.utils.formatEther(balance)
  return parseFloat(balanceInEth).toFixed(4)
};
// export const contractBalance =async()=>{
//   const provider = new ethers.providers.Web3Provider(window.ethereum);
//   provider.on('block', () => {
//     provider.getBalance(process.env.REACT_APP_ADDRESS).then((balance) => {
//         if (!balance.eq(lastBalance)) {
//         lastBalance = balance
//         // convert a currency unit from wei to ether
//         const balanceInEth = ethers.utils.formatEther(balance)
//         console.log(`balance: ${balanceInEth} ETH`)
//         }
//     })
//   })
// }

export const connectWallet = async () => {
  const chainId = process.env.REACT_APP_CHAIN_ID;
  if (window.ethereum) {
    try {
      await window.ethereum.enable();
      const chain = await window.ethereum.request({ method: "eth_chainId" });
      if (parseInt(chain, 16) == chainId) {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (addressArray.length > 0) {
          return {
            address: addressArray[0],
            status: "👆🏽 Your wallet is connected to the site.",
          };
        } else {
          return {
            address: "",
            status: "😥 Connect your wallet account to the site.",
          };
        }
      } else {
        window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: chainId }],
        });
        return {
          address: "",
          status: "😥 Connect your wallet account to the site.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    console.log("new window");
    return {
      address: "",
      status: (
        <span style={{ color: "red !important" }}>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.(https://metamask.io/download.html)
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  const chainId = process.env.REACT_APP_CHAINID;

  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      const chain = await window.ethereum.request({
        method: "eth_chainId",
      });
      if (addressArray.length > 0 && chain === chainId) {
        return {
          address: addressArray[0],
          status: "👆🏽 You can mint new pack now.",
        };
      } else {
        return {
          address: "",
          status:
            "🦊 Connect to Metamask and choose the correct chain using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span style={{ color: "red" }}>
          <p>
            {" "}
            🦊{" "}
            {/* <a target="_blank" href={`https://metamask.io/download.html`}> */}
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.(https://metamask.io/download.html)
            {/* </a> */}
          </p>
        </span>
      ),
    };
  }
};
