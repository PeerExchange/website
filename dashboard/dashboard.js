var account;
const CONTRACT_ADDRESS = "0xd2717316E2bddfF1dA3d73b3488EfC8525cBc3D0";
const CONTRACT_ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "orgAddress",
				"type": "address"
			}
		],
		"name": "newOrg",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getOrg",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalOrgs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const ORG_ABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "NewUser",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "Withdraw",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "adminMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "adminWithdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "option1_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "option2_",
				"type": "string"
			}
		],
		"name": "newVote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "userMint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "option_",
				"type": "bool"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol_",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "owner_",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "transferrable_",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_",
				"type": "uint256"
			}
		],
		"name": "getVote",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "option1",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "option2",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "option1Count",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "option2Count",
						"type": "uint256"
					}
				],
				"internalType": "struct PeerOrg.Vote",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "isAdmin",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

window.onload = function() {
    getMetamask();
    //document.getElementById("left-nav").style.display = "none";
    //document.getElementById("user-nav").style.display = "block";
    //document.getElementById("right-nav").style.display = "none";
}

async function getMetamask() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            account = accounts[0];
            document.getElementById("address").innerHTML = account;
            loadOrgs();
        } catch(error) {}

    } else {
        alert("Please install MetaMask to use");
        window.location.href = "../index.html";
    }
}

async function loadOrgs() {
    if (typeof window.ethereum !== 'undefined' && account != null) {
        let web3 = new Web3(window.ethereum);
        let contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        let orgCount = await contract.methods.totalOrgs().call();

        let adminTop = 60;
        let userTop = 60;

        for (let i = 0; i < orgCount; i += 1) {
            let orgAddress = await contract.methods.getOrg(i).call();
            let orgContract = new web3.eth.Contract(ORG_ABI, orgAddress);

            let userBalance = await orgContract.methods.balanceOf(account).call();
            let admin = await orgContract.methods.isAdmin(account).call();
            
            if (userBalance > 0) {
                let holder = document.getElementById("left-nav");
                let div = document.createElement("div");
                div.classList.add("row");
                div.style.top = "" + userTop + "px";
                let span = document.createElement("span");
                span.classList.add("row-title");
                span.innerHTML = await orgContract.methods.name().call();
                let span2 = document.createElement("span");
                span2.classList.add("row-link");
                span2.innerHTML = "View More ->";
                
                span2.addEventListener("click", function() {
                    document.getElementById("left-nav").style.display = "none";
                    document.getElementById("right-nav").style.display = "none";
                    document.getElementById("user-nav").style.display = "block";
                    loadUser(orgAddress);
                });

                div.appendChild(span);
                div.appendChild(span2);
                holder.appendChild(div);

                userTop += 55;
            }
            if (admin) {
                let holder = document.getElementById("right-nav");
                let div = document.createElement("div");
                div.classList.add("row");
                div.style.top = "" + adminTop + "px";
                let span = document.createElement("span");
                span.classList.add("row-title");
                span.innerHTML = await orgContract.methods.name().call();
                let span2 = document.createElement("span");
                span2.classList.add("row-link");
                span2.innerHTML = "Manage ->";

                span2.addEventListener("click", function() {
                    document.getElementById("left-nav").style.display = "none";
                    document.getElementById("right-nav").style.display = "none";
                    document.getElementById("admin-nav").style.display = "block";
                    loadAdmin(orgAddress);
                });

                div.appendChild(span);
                div.appendChild(span2);
                holder.appendChild(div);

                adminTop += 55;
            }
        }
    }
}

document.getElementById("all").addEventListener("click", function() {
    document.getElementById("left-nav").style.display = "none";
    document.getElementById("right-nav").style.display = "none";
    document.getElementById("search-nav").style.display = "block";
});

let backs = document.getElementsByClassName("back");
for (let i = 0; i < backs.length; i += 1) {
    backs[i].addEventListener("click", function() {
        document.getElementById("left-nav").style.display = "block";
        document.getElementById("right-nav").style.display = "block";
        document.getElementById("search-nav").style.display = "none";
        document.getElementById("user-nav").style.display = "none";
        document.getElementById("admin-nav").style.display = "none";
    })
}

async function loadUser(con) {
    let web3 = new Web3(window.ethereum);
    let orgContract = new web3.eth.Contract(ORG_ABI, con);

    let tokens = await orgContract.methods.balanceOf(con).call();
    let decimals = await orgContract.methods.decimals().call();
    let symbol = await orgContract.methods.symbol().call();

    let parsedTokens = tokens / (10 ** decimals);

    document.getElementById("holdings-wrapper").innerHTML =  "" + parsedTokens + " " + symbol;
    document.getElementById("oaddress").innerHTML = "Organization Contract Address: " + con;
}

async function loadAdmin(con) {

}