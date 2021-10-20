import { ethers } from 'ethers';
import DAI from './artifacts/contracts/Dai.sol/DAI.json'
import Tournament from './artifacts/contracts/Tournament.sol/Tournament.json'


// Rinkeby Addresses
const daiAdderss = "0x0dAd81Be07C893a37256AeaFB1163EF738d9FdD6";
const tourAddress= "0xE26DA1FA773DB230dBA5a7191f801Ab8B69C97d4";
//old address
//const tourAddress = "0x5Ecb71EA5558D4474c8Bd60eC7a6a90660c873b5";

const tourPrice = "25000000000000000000";


// request access to the user's MetaMask account
async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

async function sendApprove() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(daiAdderss, DAI.abi, signer);
      const approve = await contract.approve(tourAddress,tourPrice);
      await approve.wait();
      console.log(`✅ ${tourPrice} Coins successfully Approved!`);
      console.log(`📍 Tournament address: ${tourAddress}`);
    }
}

async function checkApprove(){
    //need to check if the users approve..if he didint the app will crash..
}


async function buyTicket() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(tourAddress, Tournament.abi, signer);
      const buy = await contract.buyticket(tourPrice);
      await buy.wait();
      console.log(`🎫 Your Successfully bought a Ticket!`);
    }
}

async function buyTicket() {
  if (typeof window.ethereum !== 'undefined') {
    await requestAccount()
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const cid = await provider.getNetwork();
    console.log(cid);
    const signer = provider.getSigner();
    console.log(signer);
    const contract = new ethers.Contract(tourAddress, Tournament.abi, signer);
    const buy = await contract.buyticket(tourPrice);
    await buy.wait();
    console.log(`${tourPrice} Coins successfully Approved ${tourAddress}`);
  }
}

async function getTicketPrice(){
  if (typeof window.ethereum !== 'undefined') {
    await requestAccount()
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(tourAddress, Tournament.abi, signer);
    const price = await contract.getTicketPrice();
    //await price.wait();
    console.log(`Tournament Price: ${price} PIXI `);
    
  }
}

async function getDivisionSize(){
  if (typeof window.ethereum !== 'undefined') {
    await requestAccount()
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(tourAddress, Tournament.abi, signer);
    const divSize =  await contract.getDevisionSize();
    //await divSize.wait();
    console.log(`Division Size: ${divSize} `);
    
  }
}

