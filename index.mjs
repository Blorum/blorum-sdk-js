import getStatus from "./modules/server/status.mjs";

class Blorum{
    constructor(address){
        this.address = address;
        console.log("Blorum client created with address: " + address);

        this.server = {
            status: () => getStatus(this.address)
        }
    }
    changeAddress(address){
        this.address = address;
    }
}

export default Blorum;