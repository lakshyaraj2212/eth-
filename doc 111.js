/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nftCollection = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (id, name, eyeColor, country , state) {
    let newNFT ={
        id: id,
        name: name,
        eyeColor: eyeColor,
        country: country,
        state: state,
    }
    nftCollection.push(newNFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let m = 0; m < nftCollection.length; m++){
        let nft = nftCollection[m];
        console.log("NFT ID: " + nft.id + " ,Name:" + nft.name + " ,Eye Color:" + nft.eyeColor + " ,Country:" + nft.country + " ,State:" + nft.state) ;
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total no of NFT: " + nftCollection.length);
}

mintNFT(1, "Lakshyaraj", "Black", "india", "rajasthan")
mintNFT(2, "Amit", "hazel", "india", "punjab")


// call your functions below this line
listNFTs();
getTotalSupply();
