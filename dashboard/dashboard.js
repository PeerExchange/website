var account;
window.onload = function() {
    if (typeof window.ethereum !== 'undefined') {
        getMetamask();
    } else {
        alert("Please install MetaMask to use");
    }
}

async function getMetamask() {
    try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        account = accounts[0];
        window.location.href = "./portal/index.html";
    } catch(error) {}
}