var account;
const CONTRACT_ADDRESS = "0xc7f263999ce1fa1e74bc11Fe006792810F5F319e";
const CONTRACT_ABI = [
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
];
const ORG_ABI = [
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
				"internalType": "uint256",
				"name": "id_",
				"type": "uint256"
			}
		],
		"name": "endVote",
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
					},
					{
						"internalType": "bool",
						"name": "over",
						"type": "bool"
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
		"inputs": [],
		"name": "getVoteId",
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
];

window.onload = function() {
    getMetamask();
    //document.getElementById("left-nav").style.display = "none";
    //document.getElementById("user-nav").style.display = "block";
    //document.getElementById("right-nav").style.display = "none";
	//document.getElementById("search-nav").style.display = "block";
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
            
            if (userBalance > 0) {
                let holder = document.getElementById("left-nav");
                let div = document.createElement("div");
                div.classList.add("row");
                div.style.top = "" + userTop + "px";
                let span = document.createElement("span");
                span.classList.add("row-title");
                let name = await orgContract.methods.name().call();
				name += " (" + await orgContract.methods.symbol().call() + ")";
				span.innerHTML = name;
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

			let holder = document.getElementById("right-nav");
			let div = document.createElement("div");
			div.classList.add("row");
			div.style.top = "" + adminTop + "px";
			let span = document.createElement("span");
			span.classList.add("row-title");
			let name = await orgContract.methods.name().call();
			name += " (" + await orgContract.methods.symbol().call() + ")";
			span.innerHTML = name;
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

document.getElementById("all").addEventListener("click", function() {
    document.getElementById("left-nav").style.display = "none";
    document.getElementById("right-nav").style.display = "none";
    document.getElementById("search-nav").style.display = "block";

	loadAll();
});

async function loadAll() {
	let web3 = new Web3(window.ethereum);
	let contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
	let orgCount = await contract.methods.totalOrgs().call();

	let userTop = 100;

	for (let i = 0; i < orgCount; i += 1) {
		let orgAddress = await contract.methods.getOrg(i).call();
		let orgContract = new web3.eth.Contract(ORG_ABI, orgAddress);
		
		let holder = document.getElementById("search-nav");
		let div = document.createElement("div");
		div.classList.add("row");
		div.style.top = "" + userTop + "px";
		let span = document.createElement("span");
		span.classList.add("row-title");
		let name = await orgContract.methods.name().call();
		name += " (" + await orgContract.methods.symbol().call() + ")";
		span.innerHTML = name;

		let description = document.createElement("span");
		description.classList.add("row-description");
		description.innerHTML = "Description";

		let input = document.createElement("input");
		input.setAttribute("placeholder", "Amount (ETH)");
		input.setAttribute("type", "text");
		input.classList.add("row-input");
		input.setAttribute("id", orgAddress + "-input");

		let button = document.createElement("div");
		button.classList.add("row-button");
		button.innerHTML = "Donate / Join";

		button.addEventListener("click", function() {
			donate(orgAddress, document.getElementById(orgAddress + "-input").value);
		});

		div.appendChild(span);
		div.appendChild(description);
		div.appendChild(input);
		div.appendChild(button);
		holder.appendChild(div);

		userTop += 55;
	}
}

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

    let tokens = await orgContract.methods.balanceOf(account).call();
    let symbol = await orgContract.methods.symbol().call();

    document.getElementById("holdings-wrapper").innerHTML =  "" + tokens + " " + symbol;
    document.getElementById("oaddress").innerHTML = "Organization Contract Address: " + con;

    let voteCount = await orgContract.methods.getVote(0).call();
}

async function loadAdmin(con) {

}

async function donate(address, amount) {
	console.log(address + " - " + amount);
	let web3 = new Web3(window.ethereum);
    let orgContract = new web3.eth.Contract(ORG_ABI, address);
	let weiAmount = amount * 10**18;

	await orgContract.methods.userMint().send({from: account, value: weiAmount})
	.on('confirmation', function (confirmationNumber, receipt) {
		window.location.reload();
	});
}