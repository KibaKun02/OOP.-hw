class SmartPhone
{
    Brand;
    Model;
    OperatingSystem;
    Storage;
    Screensize;
    BatteryCapacity;
    CameraResolution;
    Processor;
    RAM;
    Charging;
    ShootingMode;
    Connectivity;
    CellularNetwork;
    SpecialAdvantages;
    

    constructor(Brand,Model,OperatingSystem,Storage,Screensize,BatteryCapacity,CameraResolution,Processor,RAM,Charging,ShootingMode,Connectivity,CellularNetwork,SpecialAdvantages){
        this.Brand=Brand;
        this.Model=Model;
        this.OperatingSystem=OperatingSystem;
        this.Storage=Storage;
        this.Screensize=Screensize;
        this.BatteryCapacity=BatteryCapacity;
        this.CameraResolution=CameraResolution;
        this.Processor=Processor;
        this.RAM=RAM;
        this.Charging=Charging;
        this.ShootingMode=ShootingMode;
        this.Connectivity=Connectivity;
        this.CellularNetwork=CellularNetwork;
        this.SpecialAdvantages=SpecialAdvantages;
        
    }
    
    IsGoodEnoughRAM(){
        return this.RAM >=6 ? "Yes":"No";
    };
    IsFastCharge(){
        return this.Charging >=22 ? "Yes":"No";
    };
    IsLongTimeBattery(){
        return this.BatteryCapacity >=5000 ? "Yes":"No";
    };
    TakePNight(){
        return this.ShootingMode.includes("Night") ? "Yes":"No";
    };
    IsTwoCard(){
        return this.CellularNetwork.includes("SIM2") ? "Two Sim card can use together" : "only one sim card can use";
    };
   
   
    Info() {
        return `
        Brand : ${this.Brand}
         Model : ${this.Model}
        Operating System :${this.OperatingSystem}
        Storage : ${this.Storage} GB
        Screensize : ${this.Screensize}
        BatteryCapacity : ${this.BatteryCapacity} Amh(Typical)
        CameraResolution :Back Camera ${this.CameraResolution[0]} MP Front Camera ${this.CameraResolution[1]}MP
        Processor  : ${this.Processor}
        RAM : ${this.RAM} GB
        Connectivity : ${this.Connectivity}
        Special Advantages: ${this.SpecialAdvantages}
        Charging: ${this.Charging}WSUPERVOOCTM, PD (9V/1.5A), QC (9V/1.5A)
        ShootingMode : ${this.ShootingMode}
        Is the phone is good enough to play game? :${this.IsGoodEnoughRAM()}
        Do ${this.Brand} has  the fast charging : ${this.IsFastCharge()}
        Is ${this.Brand} battery as strong as TECHO : ${this.IsLongTimeBattery()}
        Can I take the photo at night? :${this.TakePNight()}
        Can ${this.Brand} use the two sim card together?: ${this.IsTwoCard()}
         `
    };
   
}
let takingPhoto = document.getElementById("takephoto");
takingPhoto.addEventListener("click",()=>{
    let photoStorage = parseFloat(prompt("Enter your photo storage"));
    let photoRamusage = parseFloat(prompt("Enter your photo RAM storage"));
    if(photoStorage<=newProduct.Storage && photoRamusage<=newProduct.RAM){
        console.log(`
        This is your available storage:
        Available Storage${newProduct.Storage - photoStorage}GB 
        Available RAM ${newProduct.RAM - photoRamusage}GB
        `);
        console.log(`you can take the photo`)
    }
        else{
            console.log("insufficient storage");     
        }
}

)

let applicationStoage = [];

let download = document.getElementById("download");
download.addEventListener("click",()=>{
  let app = parseFloat(prompt("Enter you are app storage"));
    let data = parseFloat(prompt("Enter your data storage"));  // please you decimal number when you put in the input
    let appRAM = parseFloat(prompt("enter your app RAM"));      // when you press 1 in prompt, it is worth 1GB
    let total = app + data;
    if (app<= newProduct.Storage && appRAM<=newProduct.RAM){
        console.log(`
        you can download this application.
        Available Storage ${newProduct.Storage - total} GB 
        Avaliable Storage ${newProduct.RAM - appRAM} GB
        `);
        console.log(`
        total : ${total}GB
        data  : ${data}GB
        app   : ${app}GB
        `);
        
    }
    else{
        console.log("need more space");
    }
})



const newProduct = new SmartPhone ("OPPO"," Find N2 Flip(CPH2437)","Android 13",256,"6.8inches",4300,[50+8,30],"Octa-core (1x3.20 GHz Cortex-X2 & 3x2.85 GHz Cortex-A710 & 4x1.80 GHz Cortex-A510)",8,44, ["Night"," Video", "Photo", "Portrait","Pro","Panorama","Movie","Slow-motion","Time-lapse","Sticker","Text Scanner","XPAN", "Google Lens"],["WLAN","Bluetooth","USB","Earphone","NFC"],["SIM1","SIM2"],["extra display 3.26 inches","Filp ability","USB type C","Earphone Type C"]);
console.log(newProduct.Info());