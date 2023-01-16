import fetch from "node-fetch";

export default async function(address){
    const response = await fetch(address);
    let data = await response.json();
    return data;
}