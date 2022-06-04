export interface Business {
    
        cid : string,
        crc : number,
        ica: [
          {
            asn: [
                number
            ],
            iid: number,
            itp: number,
            spn: number
          }
        ],
        imx: number,
        key: string,
        mid: string,
        qmx: number
        
     }