this.onmessage = (ev)=>{
    console.log("Worker is working!");
    this.postMessage({"data":++ev.data.number,"typeof ev.data:":typeof ev.data.number,"name":"worker1"});
    
};