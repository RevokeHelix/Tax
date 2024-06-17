
const clickButton = () => {
    return new Promise((resolve) => {
        // Select the button that contains the span with specific text
        var button = Array.from(document.querySelectorAll('.gi-button')).find(btn => 
            btn.querySelector('.gi-button__text') && btn.querySelector('.gi-button__text').textContent.trim() === '+ הוספת שורה');

        // Click the button if it exists
        if (button) {
            button.click();
            resolve();
        } else {
            console.log('Button not found');
            resolve();
        }
    });
}

const triggerChangeEvent = (element) => {
        const event = new Event('input', { bubbles: true });
        element.dispatchEvent(event);
}
    
const EnterValue = (name, price, currency) => {
    return new Promise((resolve) => {
        console.log("Running EnterValue with name:", name, "price:", price, "currency:", currency);
        
        const descriptionInput = document.getElementById('mobile-income-item-description');
        descriptionInput.value = name;
        triggerChangeEvent(descriptionInput);
        
        const quantityInput = document.getElementById('mobile-income-item-quantity');
        quantityInput.value = '1';  // Since the quantity is always 1 as per your description
        triggerChangeEvent(quantityInput);
        
        const priceInput = document.getElementById('mobile-income-item-price');
        priceInput.value = price;
        triggerChangeEvent(priceInput);
    
        // Assuming you have a way to select the currency from a dropdown or similar element
        resolve();
    });
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

const delayInMilliseconds = 10;

const Validate = () => {
    return new Promise((resolve) => {
        var addButton = Array.from(document.querySelectorAll('.gi-button.gi-button--primary.gi-button--md.gi-button--full')).find(btn => btn.textContent.trim() === 'הוספה');
        if (addButton) {
            addButton.click();
            resolve();
        } else {
            console.log('Button not found');
            resolve();
        }
    });
}

const wait = () => {
    console.log("next");
}

const addItem = async (name, price, currency) => {
    await clickButton();
    await new Promise(resolve => setTimeout(resolve, 100)); // Delay to ensure the form is ready
    await EnterValue(name, price, currency);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Extra delay to ensure form is ready for validation
    await Validate();
}

const csvData = `
תאריך,סוג עבודה,מבצע,מחיר לקוח,הערות,MP,הושלם
12/22/23,.dwg,Long,$150,"Self Esteem Brands Waunakee, WI - Self Esteem Brands (Anytime Fitness) #691",https://my.matterport.com/show/?m=3HzCEg52Z1g,כן
12/27/23,.dwg,Long,$65,"Focus Naugatuck, CT - Focus(Carvel) #5069",https://my.matterport.com/show/?m=GXiNWwjszUn,כן
12/28/23,.dwg,Long,$65,"Focus Bronx, NY - Focus(Carvel) #1491",https://my.matterport.com/show/?m=EkkTXMofwP9,כן
12/28/23,.dwg,Long,$65,"Baskin Robbins Gladstone, OR - Baskin Robbins PC 361824",https://my.matterport.com/show/?m=R5tzUoTPZeb,כן
12/28/23,.dwg,Long,$65,"Focus Flushing, NY - Focus(Carvel)",https://my.matterport.com/show/?m=opZajyngJie,כן
12/27/23,.dwg,Long,$400,"Rent-A-Center Shawnee, KS - Rent-A-Center - #01489 - Shops at Shawnee","Shawnee, KS - Rent-A-Center - #01489 - Shops at Shawnee (#15325)
Shawnee, KS - Rent-A-Center - #01489 - Shops at Shawnee (#15323)",כן
12/29/23,.dwg,Long,"$1,000","Burlington Vauxhall, NJ - Burlington",https://my.matterport.com/show/?m=BUTgcm3rbiR,כן
1/5/24,.dwg,Long,"$1,000","Wing Snob Delavan, WI - Wing Snob",https://my.matterport.com/show/?m=QPf668egPkS,כן
1/4/24,.dwg,Long,$130,"UPS Pasadena, CA - UPS #4359",https://my.matterport.com/show/?m=G5hSUqBUBMU,כן
1/4/24,.dwg,Long,$130,"UPS Livermore, CA - UPS #0476",https://my.matterport.com/show/?m=5KzJSho6dY4,כן
1/5/24,.dwg,Long,$150,"US Renal Care Pearlridge, HI #1233",https://my.matterport.com/show/?m=MpoENvXUJGL,כן
1/5/24,.dwg,Long,$400,Fresenius Clinic #1298 - 107 Pacific Ave Jersey City NJ 07304 USA - 1-1-24,https://my.matterport.com/show/?m=mqZLkmMzjdY,כן
1/4/24,.dwg,Long,$150,"Self Esteem Brands Excelsior, MN - Self Esteem Brands (Anytime Fitness) #4345",https://my.matterport.com/show/?m=aQU2YqMHqP8,כן
1/3/24,.dwg,Long,"$1,000","Burlington Fresno, CA - Burlington",https://my.matterport.com/show/?m=TvYkr6JgDpo,כן
1/3/24,.dwg,Long,$150,Fresenius Clinic #4804 - 95 Lake Shore Dr Kuttawa KY 42055 USA -  12-3-23,https://my.matterport.com/show/?m=rDeVfErZWEo,כן
1/4/24,.dwg,Long,$130,"UPS Fresno, CA - UPS #7838",https://my.matterport.com/show/?m=aJg8U42ZS8a,כן
1/4/24,.dwg,Long,$65,"Focus Eastchester, NY - Focus(Carvel) #2313",https://my.matterport.com/show/?m=3rugG77Em7G,כן
1/4/24,.dwg,Long,$65,"Focus Marlboro, NJ - Focus(Carvel) #1443",https://my.matterport.com/show/?m=TdfE5Uf9oyb,כן
1/4/24,.dwg,Long,$65,"Focus Middle Island, NY - Focus(Carvel) #792",https://my.matterport.com/show/?m=GLXXa4BWxE7,כן
1/4/24,.dwg,Long,$65,"Focus Williamsburg, VA - Focus(Auntie Anne’s) #VA138",https://my.matterport.com/show/?m=dWJDde9saxq,כן
1/5/24,.dwg,Long,$65,"Focus East Rockaway, NY - Focus(Carvel) #2325",https://my.matterport.com/show/?m=FzuAdZEJ6Cz,כן
1/5/24,.dwg,Long,$65,"Focus Forest Hills, NY - Focus(Carvel) #1426",https://my.matterport.com/show/?m=HevF4yx6UHG,כן
1/8/24,.dwg,Long,$150,"US Renal Care Marlton, NJ #1113",https://my.matterport.com/show/?m=5WN5FCukpEL,כן
1/8/24,.dwg,Long,$250,"US Renal Care Liberty Dialysis Dimond, AK #0313",https://my.matterport.com/show/?m=eyPzMtcbvry,כן
1/8/24,.dwg,Long,$150,"US Renal Care East Fort Worth, TX #1102",https://my.matterport.com/show/?m=BW9CVeaJ2cf,כן
1/8/24,.dwg,Long,$600,"Burlington Chicago, IL -Burlington","https://my.matterport.com/show/?m=QmFHFnaUtBC
https://my.matterport.com/show/?m=apvjDB43zJj
",כן
1/10/24,.dwg,Long,$130,"UPS South San Francisco, CA - UPS #1468",https://my.matterport.com/show/?m=XvRvLLvo62B,כן
1/11/24,.dwg,Long,$150,"Heartland McKinney, TX - 1780 Virginia St. (OrthodonTEX)",https://my.matterport.com/show/?m=FJoS3zeU5kw,כן
1/9/24,.dwg,Long,$600,"Burlington Greendale, WI - Burlington",https://my.matterport.com/show/?m=2kcAo8JV47F,כן
1/9/24,.dwg,Long,$65,"Baskin Robbins Northport, NY - Baskin Robbins PC 361784",https://my.matterport.com/show/?m=fSjfPEkDvpy,כן
1/10/24,.dwg,Long,$65,"Focus West Caldwell, NJ - Focus(Carvel) #1524",https://my.matterport.com/show/?m=rrQXyz1qR9s,כן
1/10/24,.dwg,Long,$65,"Focus East Orange, NJ - Focus(Carvel) #2686",https://my.matterport.com/show/?m=WzKibfHdxH1,כן
1/10/24,.dwg,Long,$150,"Self Esteem Brands Kirkland, WA -Self Esteem Brands (Anytime Fintess) #3227",https://my.matterport.com/show/?m=ME3tAuUBwv1,כן
1/8/24,.dwg,Long,$65,"Hugo Boss Flushing, NY - Hugo Boss (Macy's) Flushing (expansion)",https://my.matterport.com/show/?m=UN8MgMPUPa3,כן
1/8/24,.dwg,Long,$65,"Hugo Boss Manhasset, NY - Hugo Boss (Macy's) Manhasset",https://my.matterport.com/show/?m=7nzPSc87bFK,כן
1/8/24,.dwg,Long,$65,"Hugo Boss Queens, NY - Hugo Boss (Macy's) Queens Center",https://my.matterport.com/show/?m=bsXFqajZghF,כן
1/9/24,.dwg,Long,$65,"Hugo Boss Costa Mesa, CA - Hugo Boss (Macy’s) South Coast Plaza",https://my.matterport.com/show/?m=4Lw3gF9jpr6,כן
1/10/24,.dwg,Long,$65,"Hugo Boss Santa Clara, CA - Hugo Boss(Macys) - Vally Fair CA",https://my.matterport.com/show/?m=bFKFix4x7Xw,כן
1/10/24,.dwg,Long,$65,"Hugo Boss San Francisco, CA - Hugo Boss (Macys) Union Square",https://my.matterport.com/show/?m=JhnnAET3wi3,כן
1/12/24,.dwg,Long,$200,"UPS Norman, OK - UPS #2347",https://my.matterport.com/show/?m=KTvFzgAVzDZ,כן
1/12/24,.dwg,Long,$150,"Self Esteem Brands Omaha, NE - Self Esteem Brands (Anytime Fitness) #2539",https://my.matterport.com/show/?m=NDWDhRqVBb5,כן
1/11/24,.dwg,Long,"$1,000","Burlington Garden Grove, CA - Burlington","https://my.matterport.com/show/?m=iBSFroahE3J 
https://my.matterport.com/show/?m=s4SGfEtitdx ",כן
1/12/24,.dwg,Long,$150,"Self Esteem Brands Reno, NV - Self Esteem Brands (Anytime Fitness) #1440",https://my.matterport.com/show/?m=WoxyBMS5DQ8,כן
1/12/24,.dwg,Long,$130,"UPS Oklahoma City, OK - UPS #4818",https://my.matterport.com/show/?m=eBCVf4SaUnM,כן
1/12/24,.dwg,Long,$300,Fresenius North Catawba Clinic #102009 - 1240 U.S. Hwy 70 SW Newton NC 28658 USA - 1-10-23,https://my.matterport.com/show/?m=5vfNkQ2qc5L,כן
1/11/24,.dwg,Long,"$1,000","Burlington Mesa, AZ - Burlington","https://my.matterport.com/show/?m=DruZy7Zk8re
https://my.matterport.com/show/?m=FyCoMRd5YTJ ",כן
1/12/24,.dwg,Long,$600,"Burlington New Orleans, LA - Burlington",https://my.matterport.com/show/?m=AWrDv5aWxf5,כן
1/12/24,.dwg,Long,$600,"Burlington Chicago, IL - Burlington (Clark St)","https://my.matterport.com/show/?m=2xRAqHdb8Cf 
https://my.matterport.com/show/?m=VHq5o9JFDMM ",כן
1/15/24,.dwg,Long,$150,Fresenius Clinic #8561 - 395 Stone Ave Paris TX 75460 USA - 1-12-24,https://my.matterport.com/show/?m=zmYycjF1uQz,כן
1/16/24,.dwg,Long,$600,"Burlington Leesburg, VA - Burlington",https://my.matterport.com/show/?m=VfEQsT7Pv4q,כן
1/16/24,.dwg,Long,$600,"Burlington Norfolk, VA - Burlington",https://my.matterport.com/show/?m=LVbh7S5Jwtt,כן
1/12/24,.dwg,Long,$600,"Burlington Phoenix, AZ - Burlington",https://my.matterport.com/show/?m=1rU6Rp4Uzi2,כן
1/11/24,.dwg,Long,$65,"Focus Hartsdale, NY - Focus(Carvel) #1473",https://my.matterport.com/show/?m=Vnf89KmEV4M,כן
1/11/24,.dwg,Long,$65,"Focus New York, NY - Focus(Carvel) #1528",https://my.matterport.com/show/?m=C6qCZXnbRBH,כן
1/15/24,.dwg,Long,$150,"Self Esteem Brands Omaha, NE - Self Esteem Brands (Anytime Fitness) #0122",https://my.matterport.com/show/?m=YPu4rLmFn5y,כן
1/16/24,.rvt,Abhi,$250,"Maverik St. George, UT - Maverik #370",https://my.matterport.com/show/?m=9Wqg74Fp1Z2,כן
1/16/24,.dwg,Long,$130,"UPS Houston, TX - UPS #4340",https://my.matterport.com/show/?m=tCTFEruR1oh,כן
1/17/24,.dwg,Long,"$1,000","Burlington Mesa, AZ - Burlington Hampton Ave",https://my.matterport.com/show/?m=AWHCp3YV4eu,כן
1/17/24,.dwg,Long,$600,"Burlington Dyersburg, TN - Burlington",https://my.matterport.com/show/?m=X7XeVLSZH78,כן
1/12/24,.dwg,Long,$230,"US Bank Los Angeles, CA, CA Compton Denovo - US Bank",https://my.matterport.com/show/?m=FAf1UVxBbH1,כן
1/11/24,.dwg,Long,$350,"Odom Architects Winnsboro, LA - Odom Architects",https://my.matterport.com/show/?m=iyuAkxeyG8y,כן
1/12/24,.dwg,Long,$450,"US Bank Denver, CO, CRE #5606, Denver - CO Nat'l Bk Tower - US Bank",https://my.matterport.com/show/?m=SWK5rRTpeHG,כן
1/17/24,.dwg,Long,$150,Fresenius Clinic #100673 - 1760 Barron St Oxford MS 38655 USA - 1-14-24,https://my.matterport.com/show/?m=Axf4d2sHGtJ,כן
1/18/24,.dwg,Long,$150,"Heartland Melbourne, FL - Melbourne Family Dental",https://my.matterport.com/show/?m=jfVxHfocN9d,כן
1/17/24,.dwg,Long,$130,"UPS San Diego, CA - UPS #6012",https://my.matterport.com/show/?m=v4knNuzyAZV,כן
1/18/24,.dwg,Long,$150,"Heartland Allen, TX - Suncreek Family Dentistry (1950007)",https://my.matterport.com/show/?m=tq9PCNfH8H4,כן
1/16/24,.rvt,Abhi,"$2,050","Odex Lihue Kauai, HI - Odex Lihue",https://my.matterport.com/show/?m=qMMj5W3UGmY,כן
1/12/24,.dwg,Long,$350,"US Bank Los Angeles, CA, CRE #8862 - US Bank",https://my.matterport.com/show/?m=SoeG6FTSTvN,כן
1/15/24,.dwg,Long,$150,"Self Esteem Brands Gretna, NE - Self Esteem Brands (Anytime Fitness) #244",https://my.matterport.com/show/?m=c7pVTrsXwpD,כן
1/18/24,.dwg,Long,$150,"Self Esteem Brands Omaha, NE - Self Esteem Brands (Anytime Fitness) #3122",https://my.matterport.com/show/?m=iAhjqaf5jNj,כן
1/19/24,.dwg,Long,$65,"Baskin Robbins Louisville, KY - Baskin Robbins PC #360560",https://my.matterport.com/show/?m=DZXxi5Jnni5,כן
1/18/24,.dwg,Long,$65,"Focus Bellevue, NE - Focus(Cinnabon) #5224",https://my.matterport.com/show/?m=sm1fkTRRM4G,כן
1/18/24,.dwg,Long,$300,Fresenius Garfield Heights Home - 9729 Granger Rd Garfield Heights OH 44125 USA - 1-14-24,https://my.matterport.com/show/?m=9jJ8DqZHJsr,כן
1/19/24,.dwg,Long,$65,"US Renal Care Pearlridge, HI #1233 - Storage Room",https://my.matterport.com/show/?m=isC6jwuqFnn,כן
1/22/24,.dwg,Long,$65,"Focus Stratford, CT - Focus(Carvel)",https://my.matterport.com/show/?m=3x2xSJqcEm2,כן
1/22/24,.dwg,Long,$65,"Focus Hyattsville, MD - Focus(Cinnabon) #6205",https://my.matterport.com/show/?m=nbQVcWbjqdK,כן
1/22/24,.dwg,Long,$65,"Sbarro Humble, TX - Deerbrook Mall",https://my.matterport.com/show/?m=PKAqk3DVVy5,כן
1/22/24,.dwg,Long,$65,"Focus Lincoln, NE - Focus (Cinnabon) #5219",https://my.matterport.com/show/?m=faUidgDC3Cb,כן
1/22/24,.dwg,Long,$150,"Self Esteem Brands Burleson, TX - Self Esteem Brands (Anytime Fitness) #931",https://my.matterport.com/show/?m=htpgmCu2KQt,כן
1/23/24,.dwg,Long,$150,"Self Esteem Brands Denver, CO - Self Esteem Brands (Anytime Fitness) #4147",https://my.matterport.com/show/?m=HYXFiRJUAGx,כן
1/23/24,.dwg,Long,$150,"Self Esteem Brands Glendale, AZ - Self Esteem Brands (Anytime Fitness) #2810",https://my.matterport.com/show/?m=oBHLQ7pVMbK,כן
1/23/24,.dwg,Long,$150,"Self Esteem Brands Spokane, WA - Self Esteem Brands (Anytime Fitness) #505",https://my.matterport.com/show/?m=YHQMbkpGzgm,כן
1/23/24,.dwg,Long,$150,"Self Esteem Brands Gonzales, LA - Self Esteem Brands (Anytime Fitness) #1509",https://my.matterport.com/show/?m=ZGrB1e3EcnH,כן
1/15/24,.dwg,Long,$400,"US Bank Phoenix, AZ, CRE 7439, Phoenix - 35th & Southern",https://my.matterport.com/show/?m=wCJb2QdsrnV,כן
1/23/24,.dwg,Long,$130,"UPS Bennet, CO - UPS #6325",https://my.matterport.com/show/?m=PisGcp3etQM,כן
1/23/24,.dwg,Long,$130,"UPS Van Nuys, CA - UPS #7902",https://my.matterport.com/show/?m=cbEUykM8uF4,כן
1/23/24,.dwg,Long,$130,"UPS Honolulu, HI - UPS #2184",https://my.matterport.com/show/?m=3JXvprqgLVw,כן
1/23/24,.dwg,Long,$130,"UPS Bakersfield, CA - UPS # 2179",https://my.matterport.com/show/?m=fP7F2AcR5tL,כן
1/23/24,.dwg,Long,$130,"UPS Delano, CA - UPS #6623",https://my.matterport.com/show/?m=nNWpWu7QqAC,כן
1/23/24,.dwg,Long,$150,"Self Esteem Brands Seattle, WA - Self Esteem Brands (Anytime Fitness) #2818",https://my.matterport.com/show/?m=A4A9B5PdYYG,כן
1/24/24,.dwg,Long,$150,"Self Esteem Brands Mirage, AZ - Self Esteem Brands (Anytime Fitness) #260",https://my.matterport.com/show/?m=m7Jf1z9uuDS,כן
1/16/24,.dwg,Long,$660,"US Bank Pueblo, CO, CRE #5660, Pueblo - Regency",https://my.matterport.com/show/?m=r7bsYArvuFX,כן
1/24/24,.dwg,Long,$65,"Sbarro Jacksonville, NC - Sbarro",https://my.matterport.com/show/?m=WkdxjManeej,כן
1/24/24,.dwg,Long,$65,"Focus North Platte, NE - Focus (Cinnabon) Cinnabon #105991 - Pump & Pantry #39 105991",https://my.matterport.com/show/?m=HXQ1xE25Eoe,כן
1/23/24,.dwg,Long,$130,"UPS Windsor, CO - UPS #4205",https://my.matterport.com/show/?m=R3jBjKec1fj,כן
1/24/24,.dwg,Long,$130,"UPS Newark, CA - UPS #7935",https://my.matterport.com/show/?m=AMX1u6kgPCM,כן
1/24/24,.dwg,Long,$130,"UPS McBh Kaneohe Bay, HI - UPS #6074",https://my.matterport.com/show/?m=G9rM7tZed92,כן
1/24/24,.dwg,Long,$130,"Rent-A-Center Philadelphia, PA - Rent-A-Center #02076",https://my.matterport.com/show/?m=epywcxWNsdg,כן
1/24/24,.dwg,Long,$130,"UPS Helena, MT - UPS #4489",https://my.matterport.com/show/?m=cmcXniKuXUT,כן
1/28/24,.dwg,Long,$150,"Self Esteem Brands Othello, WA - Self Esteem Brands (Anytime Fitness) #1323",https://my.matterport.com/show/?m=CbQpG45kXU6,כן
1/28/24,.dwg,Long,$250,Fresenius Clinic # TBD - 10655 Eastex Fwy Houston TX 77093 - 1-24-24,https://my.matterport.com/show/?m=g8NSX5tFpUq,כן
1/24/24,.dwg,Long,$65,"Focus Woodburn, OR - Focus (Cinnabon) #101510",https://my.matterport.com/show/?m=rBZtQXRCg6h,כן
1/24/24,.dwg,Long,$400,"Heartland Suwanee, GA - Heartland",https://my.matterport.com/show/?m=koTxQCWJLSq,כן
1/26/24,.dwg,Long,$250,Fresenius Clinic #3372 - 2032 Industrial Dr Annapolis MD 21401 USA - 1-21-24,https://my.matterport.com/show/?m=7HkfKtMiKf3,כן
1/22/24,.dwg,Long,$750,"US Renal Care West LA, CA #0619",https://my.matterport.com/show/?m=uoRGqoBr7qo,כן
1/23/24,.dwg,Long,$165,"Sun Holdings Duncanville, TX - Sun Holdings(Papa John's)",https://my.matterport.com/show/?m=Lwvezn1VvG5,כן
1/23/24,.dwg,Long,$600,"Burlington Los Angeles, CA - Burlington",https://my.matterport.com/show/?m=spTSSm2gQq7,כן
1/23/24,.rvt,Abhi,$385,"Flynn Gig Harbor, WA - Flynn (Panera) #2259",https://my.matterport.com/show/?m=LLzdbcRhrGn,כן
1/28/24,.dwg,Long,$130,"UPS Lincoln, NE - UPS #7929",https://my.matterport.com/show/?m=2ApJ2HgeD7N,כן
1/28/24,.dwg,Long,$65,"Focus Northport, NY - Focus(Carvel) #4054",https://my.matterport.com/show/?m=mj1VPkPyn2N,כן
1/23/24,.dwg,Long,$350,"Nouria Energy Windham, NH - Nouria Energy",https://my.matterport.com/show/?m=quXDNxdmRnN,כן
1/28/24,.dwg,Long,$65,"Focus Torrance, CA - Focus (Cinnabon) #100786",https://my.matterport.com/show/?m=wPkiMYwQM7A,כן
1/25/24,.rvt,Abhi,$430,"Flynn Kansas City, MO - Flynn (Panera) #2380",https://my.matterport.com/show/?m=fVRdcrXXv54,כן
1/30/24,.dwg,Long,$200,"Sun Holdings Denham Springs, LA - Arby's",https://my.matterport.com/show/?m=KxGLYkTj98J,כן
1/30/24,.dwg,Long,$200,"Sun Holdings Lafayette, LA - Arby's",https://my.matterport.com/show/?m=oEafHaNGJph,כן
1/23/24,.dwg,Long,"$1,000","Burlington Massapequa, NY - Burlington",https://my.matterport.com/show/?m=ZQQn2mwosBH,כן
1/23/24,.dwg,Long,"$1,000","Burlington Miami, FL - Burlington - Coral Way",https://my.matterport.com/show/?m=GLrNjAjfZDP,כן
1/23/24,.rvt,Abhi,$450,"Flynn Monaca, PA - Flynn (Panera) #2331",https://my.matterport.com/show/?m=vCeouk6mVVa,כן
1/23/24,.rvt,Abhi,$450,"Flynn Pleasant Hills, PA - Flynn (Panera) #2307",https://my.matterport.com/show/?m=oeoQ7gc2EH4,כן
1/28/24,.dwg,Long,$450,"Flynn Shawnee, KS - Flynn (Panera) #2377",https://my.matterport.com/show/?m=xQA4NXQ3XPD,כן
1/25/24,.dwg,Long,"$1,000","Burlington Modesto, CA - Burlington",https://my.matterport.com/show/?m=c5hGTUTUu6i,כן
1/27/24,.dwg,Long,"$1,000","Burlington Mayaguez, PR - Burlington",https://my.matterport.com/show/?m=oABYFLfXf5v,כן
1/31/24,.dwg,Long,$150,"Self Esteem Brands New Market, MN - Self Esteem Brands (Anytime Fitness) #1786",https://my.matterport.com/show/?m=xebay32UaaN,כן
2/2/24,.dwg,Long,$400,Fresenius Clinic #6334 - 700 E Iron Ave Salina KS 67401 USA - 1-28-24,https://my.matterport.com/show/?m=T5Qx41Qsh5L,כן
2/2/24,.dwg,Long,$300,Fresenius Clinic #C771 formerly #1646 - 335 Mid Rivers Mall Dr St Peters MO 63376 USA - 1-28-24,https://my.matterport.com/show/?m=bq3W7ez2SMy,כן
2/2/24,.dwg,Long,$65,"Baskin Robins Williamsburg, VA - Baskin Robins PC 360979",https://my.matterport.com/show/?m=cfqDyRkbN85,כן
1/23/24,.rvt,Abhi,$450,"Flynn Huntingdon, PA - Flynn (Panera) #2327",https://my.matterport.com/show/?m=oRjiwGJS4cV,כן
2/2/24,.dwg,Long,$130,"UPS San Diego, CA - UPS #5394",https://my.matterport.com/show/?m=8jcXAr9L2PG,כן
2/2/24,.dwg,Long,$130,"UPS Alpine, CA - UPS #19105",https://my.matterport.com/show/?m=MsqPVwqAuBG,כן
1/31/24,.rvt,Abhi,$450,"Flynn Lacey, WA - Flynn(Panera) #2253",https://my.matterport.com/show/?m=3qJFB4weMax,כן
1/28/24,.dwg,Long,"$1,000","Burlington Holyoke, MA - Burlington",https://my.matterport.com/show/?m=b2ZNxpovmqe,כן
1/31/24,.rvt,Abhi,$450,"Flynn Wichita, KS - Flynn (Panera) #2390",https://my.matterport.com/show/?m=ZK9VdkNvTe3,כן
1/25/24,.dwg,Long,$300,"Darden Palm Beach Gardens, FL - Darden",https://my.matterport.com/show/?m=ixyCMAoL8iM,כן
2/2/24,.rvt,Abhi,$250,"Rocky Mountain Chocolate Factory Lutz, FL - Rocky Mountain Chocolate Factory",https://my.matterport.com/show/?m=7wTR17afE7a,כן
2/2/24,.dwg,Long,$250,Fresenius Clinic #4666 - 3516 Richmond Cir Grand Island NE 68803 USA - 1-28-24,https://my.matterport.com/show/?m=2ZKFyYoTrMm,כן
1/27/24,.dwg,Long,$230,"US Bank Lincoln, NE, CRE #7725, Lincoln - Main (9th Floor)","Lincoln, NE, CRE #7725, Lincoln - Main (9th Floor) - US Bank
Lincoln, NE, CRE #7725, Lincoln - Main (Exteriors) - US Bank",כן
2/2/24,.dwg,Long,$750,"US Renal Care West LA, CA #0619 - ceiling plan",https://my.matterport.com/show/?m=uoRGqoBr7qo,כן
2/5/24,.dwg,Long,$150,"Self Esteem Brands Hondo, TX - Self Esteem Brands (Anytime Fitness) #4752",https://my.matterport.com/show/?m=NjNn4G18s7T,כן
2/5/24,.dwg,Long,$150,"Self Esteem Brands Liberty Lake, WA - Self Esteem Brands (Anytime Fitness) #1038",https://my.matterport.com/show/?m=N36q3NJCt5A,כן
1/31/24,.rvt,Abhi,$450,"Flynn Topeka, KS - Flynn (Panera) #2388",https://my.matterport.com/show/?m=oB22NWsyM8w,כן
2/3/24,.rvt,Abhi,$450,"Flynn Olathe, KS - Flynn (Panera) #2375",https://my.matterport.com/show/?m=xqzZgM1NcBV,כן
2/4/24,.rvt,Abhi,$450,"Flynn Bridgeville, PA - Flynn (Panera) #2342",https://my.matterport.com/show/?m=PBK16erw6zD,כן
1/30/24,.dwg,Long,$100,"Hugo Boss Pointe-Claire, QC - Hugo Boss (Hudson Bay Company) Point Claire","Sales Floor
Stockroom",כן
1/30/24,.dwg,Long,$100,"Hugo Boss Miami, FL - Hugo Boss (Macy's) - Dadeland (WHS)","Sales Floor
Stockroom",כן
1/30/24,.dwg,Long,$100,"Hugo Boss Toronto, ON - Hugo Boss (Hudson Bay Company) Fariview","Sales Floor
Stockroom",כן
1/31/24,.dwg,Long,$100,"Hugo Boss Richmond Hill, ON - Hugo Boss (Hudson Bay Company) - Richmond Hill","Sales Floor
Stockroom",כן
2/1/24,.dwg,Long,$65,"Hugo Boss Charlotte, NC - Hugo Boss (Macy’s) Southpark (NC)",https://my.matterport.com/show/?m=ndQSqFsw7pC,כן
2/2/24,.dwg,Long,$65,"Hugo Boss San Francisco, CA - Hugo Boss (Macy's) Union Square",https://my.matterport.com/show/?m=sRLwiq46q2E,כן
2/3/24,.dwg,Long,$100,"Hugo Boss Friendswood, TX - Hugo Boss(Macy’s) Baybrook Mall","Sales Floor 
Stockroom",כן
2/3/24,.dwg,Long,$100,"Hugo Boss Humble, TX - Hugo Boss(Macy’s) Deerbrook Mall (TX)","Sales Floor 
Stockroom",כן
2/3/24,.dwg,Long,$100,"Hugo Boss Sarasota, FL - Hugo Boss (Macy’s) The Mall at University Town Center (FL)",Sales Floor and Stockroom,כן
2/4/24,.dwg,Long,$100,"Hugo Boss Newport Beach, CA - Hugo Boss (Macy’s) Fashion Island, Newport Beach","Sales Floor
Stockroom",כן
2/4/24,.dwg,Long,$100,"Hugo Boss Metarie, LA - Hugo Boss(Macy's) Lakeside Shopping Center (LA)",Sales Floor and Stockroom,כן
2/4/24,.dwg,Long,$100,Hugo Boss Burbank CA - Hugo Boss (Macy's) Burbank Town Center,"Sales Floor
Stockroom",כן
2/4/24,.dwg,Long,$100,"Hugo Boss Los Angeles, CA - Hugo Boss (Macy’s) Downtown Los Angeles Plaza","Sales Floor
Stockroom",כן
2/4/24,.dwg,Long,$100,"Hugo Boss Warwick, RI - Hugo Boss (Macy’s) Warwick Mall","Sales Floor
Stockroom",כן
2/4/24,.dwg,Long,$100,"Hugo Boss West Nyack, NY - Hugo Boss(Macy's) Palisades Center","Sales Floor 
Stockroom",כן
2/4/24,.dwg,Long,$65,"Hugo Boss Atlanta, GA - Hugo Boss (Macy's) Lenox Square",Sales Floor,כן
2/7/24,.dwg,Long,$600,"Burlington McAllen, TX - Burlington",https://my.matterport.com/show/?m=836YMnErMt3,כן
2/3/24,.dwg,Long,$100,"Hugo Boss Lakewood, CA - Hugo Boss (Macy’s) Lakewood Center (CA)","Sales Floor 
Stockroom",כן
2/4/24,.dwg,Long,$100,"Hugo Boss Morrow, GA - Hugo Boss (Macy’s) Southlake Mall (GA)","Sales Floor 
Stockroom",כן
2/4/24,.dwg,Long,$100,"Hugo Boss Kennesaw, GA - Hugo Boss(Macy’s) Town Center at Cobb","Sales Floor 
Stockroom",כן
2/4/24,.dwg,Long,$100,"Hugo Boss Clackmas, OR - Hugo Boss(Macy's) Clackamas Town Center",Sales Floor and Stockroom,כן
2/4/24,.dwg,Long,$100,"Hugo Boss Louisville, KY - Hugo Boss(Macy's) Oxmoor Center","Sales Floor 
Stockroom",כן
2/4/24,.dwg,Long,$100,"Hugo Boss Las Vegas, NV - Hugo Boss(Macy's) Downtown Summerlin","Sales Floor 
Stockroom",כן
2/5/24,.dwg,Long,$100,"Hugo Boss San Mateo, CA - Hugo Boss(Macy's) Hillsdale Shopping Center (CA)","Sales Floor 
Stockroom",כן
2/5/24,.dwg,Long,$100,"Hugo Boss Daly City, CA - Hugo Boss(Macy's) Serramonte Center","Sales Floor 
Stockroom",כן
2/4/24,.dwg,Long,$100,"Hugo Boss Saugus, MA - Hugo Boss (Macy’s) Square One Mall",Sales Floor and Stockroom,כן
2/5/24,.dwg,Long,$65,"Hugo Boss Laval, QC - Hugo Boss",https://my.matterport.com/show/?m=U9Dw6czjgPc,כן
2/8/24,.dwg,Long,$100,"Hugo Boss Hyattsville, MD - Hugo Boss(Macy's) The Mall at Prince George's","Sales Floor
Stockroom",כן
2/4/24,.dwg,Long,$100,"Hugo Boss Whitehall, PA - Hugo Boss(Macy's) Lehigh Valley Mall","Sales Floor 
Stockroom",כן
2/8/24,.dwg,Long,$100,"Hugo Boss Bowie, MD - Hugo Boss(Macy's) Bowie Town Center","Sales Floor
Stockroom",כן
2/8/24,.dwg,Long,$65,"Hugo Boss Arlington, VA - Hugo Boss (Macy's) Fashion CTR at Pentagon City",Sales Floor,כן
2/8/24,.dwg,Long,$100,"Hugo Boss Frisco, TX - Hugo Boss (Macy's)","Sales Floor
Stockroom",כן
2/8/24,.dwg,Long,$65,"Hugo Boss Orlando, FL - Hugo Boss (Macy’s) Orlando Millenia",Sales Floor,כן
2/9/24,.dwg,Long,$100,"Hugo Boss North York, ON - Hugo Boss (Hudson Bay Company) Yorkdale","https://my.matterport.com/show/?m=w9cCVM3jYDi
https://my.matterport.com/show/?m=B3ncX4UWvS8 ",כן
2/9/24,.dwg,Long,$100,"Hugo Boss Mississauga, ON - Hugo Boss (Hudson Bay Company) Mississauga","https://my.matterport.com/show/?m=RPj7KWF3R46
https://my.matterport.com/show/?m=U1AdC2Dn1ai ",כן
2/9/24,.dwg,Long,$100,"Hugo Boss Edmonton, AB - Hugo Boss (Hudson Bay Company) South Gate","https://my.matterport.com/show/?m=UGj6CZo2g58 
https://my.matterport.com/show/?m=6Q98E9ivT5m ",כן
2/9/24,.dwg,Long,$100,"Hugo Boss Montreal, QC - Hugo Boss (Hudson Bay Company) Montreal DT","https://my.matterport.com/show/?m=JoxfPghDQgR 
https://my.matterport.com/show/?m=i6vWMi83LEw ",כן
2/9/24,.dwg,Long,$100,"Hugo Boss Richmond, BC - Hugo Boss (Hudson Bay Company) Richmond","https://my.matterport.com/show/?m=LoqfLfX86Do
https://my.matterport.com/show/?m=gJFkfzRw9pg ",כן
2/9/24,.dwg,Long,$600,"Burlington San Antonio, TX - Burlington",https://my.matterport.com/show/?m=GL2zpeFgReQ,כן
2/9/24,.dwg,Long,$300,"Barnes & Noble College Emmitsburg, MD - Barnes & Noble College #344",https://my.matterport.com/show/?m=GkgGHr9Hecr,כן
2/10/24,.dwg,Long,$150,"Self Esteem Brands Elgin, TX - Self Esteem Brands (Anytime Fitness)",https://my.matterport.com/show/?m=PH5RXN9466u,כן
2/7/24,.dwg,Long,$400,Fresenius Clinic # 002766 - 416 E Calhoun St Anderson SC 29621- 1-28-24,"Main Floor and Basement
Water Room",כן
2/8/24,.dwg,Long,$600,Fresenius Clinic #1060 - 33 Irving Pl New York NY 10003 USA - 1-23-24,https://my.matterport.com/show/?m=Nau5tTkC6eQ,כן
2/9/24,.dwg,Long,$215,"Sun Holdings Edinburg, TX - Sun Holdings (Papa Johns)",https://my.matterport.com/show/?m=ZMnBqyoX6Pt,כן
2/10/24,.dwg,Long,$150,"Self Esteem Brands Cedar Rapids, IA - Self Esteem Brands (Anytime Fitness) #2241",https://my.matterport.com/show/?m=q4giyPu4S3d,כן
2/10/24,.dwg,Long,$150,"Self Esteem Brands Evergreen, CO - Self Esteem Brands (Anytime Fitness) #4263",https://my.matterport.com/show/?m=xmoWUUkQmE7,כן
2/10/24,.dwg,Long,$150,"Self Esteem Brands Great Bend, KS - Self Esteem Brands (Anytime Fitness) #1587 or #1119",https://my.matterport.com/show/?m=QmnwF94AsV9,כן
2/5/24,.dwg,Long,$350,"Flynn Somers Point, NJ - Flynn(Wendy's)",https://my.matterport.com/show/?m=h6e5KSChRBQ,כן
2/9/24,.dwg,Long,$65,"Focus National Harbor, MD - Focus(Auntie Anne's) #MD158",https://my.matterport.com/show/?m=XzLCVdRBrC7,כן
2/11/24,.dwg,Long,$300,Fresenius Clinic #8827 - 8360 W Sahara Ave Las Vegas NV 89117 USA - 2-8-24,https://my.matterport.com/show/?m=jRTtre7i8LH,כן
2/11/24,.dwg,Long,$250,Fresenius Clinic #9017 - 10205 N 110th Ave E Owasso OK 74055 USA - 2-4-24,https://my.matterport.com/show/?m=EegojiP2rHp,כן
2/11/24,.dwg,Long,$250,Fresenius Clinic #9458 - 110 S Park Dr Brownwood TX 76801 USA - 2-4-24,https://my.matterport.com/show/?m=sp1jjH91vE3,כן
2/9/24,.rvt,Abhi,$450,"Flynn Bothell, WA - Flynn (Panera) #2028",https://my.matterport.com/show/?m=iLgtmU9ntFW,כן
2/9/24,.dwg,Long,$65,"Focus Bloomington, MN - Focus(Cinnabon) #7802",https://my.matterport.com/show/?m=vgG7uCbZ8SC,כן
2/9/24,.dwg,Long,$390,"Emmy Squared Pizza Greenwich, CT - Emmy Squared Pizza","https://my.matterport.com/show/?m=1Fi2Kt7zGPH 
https://my.matterport.com/show/?m=5SnjAmWFi6H ",כן
2/9/24,.dwg,Long,$130,"UPS Houston, TX - UPS #1759",https://my.matterport.com/show/?m=QPw8yfwvFQf,כן
2/9/24,.dwg,Long,$130,"UPS Redding, CA - UPS #19063",https://my.matterport.com/show/?m=mw2QhziAnn4,כן
2/9/24,.dwg,Long,$130,"UPS Flowood, MS - UPS #4428",https://my.matterport.com/show/?m=mXSLFnjtMY2,כן
2/13/24,.dwg,Long,$150,"Brinker Charleston, WV - Brinker(Chili's)",https://my.matterport.com/show/?m=iTyBawuDhuB,כן
2/9/24,.dwg,Long,$130,"UPS Manvel, TX - UPS #7930",https://my.matterport.com/show/?m=hEf1mniRmr5,כן
2/9/24,.dwg,Long,$130,"UPS Issaquah, WA - UPS #6405",https://my.matterport.com/show/?m=eNUykm7DVXU,כן
2/14/24,.dwg,Long,$600,"Burlington Anaheim, CA - Burlington - Brookhurst Center - Rite Aid","https://my.matterport.com/show/?m=oXarYiZdUe1 
https://my.matterport.com/show/?m=23PQ2g8FkZc 
",כן
2/9/24,.dwg,Long,$130,"UPS Tyler, TX - UPS #2104",https://my.matterport.com/show/?m=SSFBRZ1q5kZ,כן
2/9/24,.dwg,Long,$130,"UPS Tyler, TX - UPS #3615",https://my.matterport.com/show/?m=MhZMkA5g37e,כן
2/10/24,.dwg,Long,$65,"Baskin Robbins Byhalia, MS - Baskin Robbins PC 344376",https://my.matterport.com/show/?m=QDbQqk27Nxa,כן
2/10/24,.dwg,Long,$65,"Focus San Luis Obispo, CA - Focus(Jamba) #1",https://my.matterport.com/show/?m=QcjQzeSBpi6,כן
2/10/24,.dwg,Long,$65,"Baskin Robbins Kansas City, MO - Baskin Robbins PC 353736",https://my.matterport.com/show/?m=mgf5XykKv4P,כן
2/13/24,.dwg,Long,$150,"Self Esteem Brands Hermosa Beach, CA - Self Esteem Brands (Anytime Fitness). #2373 #2851",https://my.matterport.com/show/?m=yxRujSGLaBk,כן
2/16/24,.dwg,Long,$150,"Self Esteem Brands Troutdale, OR - Self Esteem Brands (Anytime Fitness) #4707",https://my.matterport.com/show/?m=FgRxSUifu3c,כן
2/14/24,.dwg,Long,$65,"Focus Cincinnati, OH - Focus (Auntie Anne’s) OH-123 - Kenwood Towne Center",https://my.matterport.com/show/?m=mduK6wk9Z73,כן
2/13/24,.dwg,Long,$65,"Baskin Robbins Vicksburg, MS - Baskin Robbins PC 352985",https://my.matterport.com/show/?m=dvrw86QixWg,כן
2/13/24,.dwg,Long,$65,"US Bank Los Angeles, CA, Community Room - US Bank",https://my.matterport.com/show/?m=E53viy4k2Si,כן
2/14/24,.dwg,Long,$150,"US Renal Care Streamwood, IL #269",https://my.matterport.com/show/?m=N3a8xSf3xz9,כן
2/16/24,.dwg,Long,$150,Heartland Associated Dental Care Providers - Campbell, https://my.matterport.com/show/?m=6S1Ftsh1GzR,כן
2/10/24,.dwg,Long,$550,Fresenius Clinic #2271 - 7558 Annapolis Rd Hyattsville MD 20784 USA - 2-6-24,https://my.matterport.com/show/?m=EQ4W3Xn6CTD,כן
2/10/24,.dwg,Long,$900,"US Bank Portland, OR, CRE # 8626, OR Portland Hollywood",https://my.matterport.com/show/?m=7SGS1td2Lw7,כן
2/10/24,.dwg,Long,$65,"Focus El Paso, TX - Focus(Cinnabon) Auntie Anne’s TX190 and Cinnabon #866",https://my.matterport.com/show/?m=E7mxwghbMXG,כן
2/15/24,.dwg,Long,$130,"UPS Edmonds, OK - UPS #3150",https://my.matterport.com/show/?m=JNxy4iUiMfa,כן
2/15/24,.dwg,Long,$130,"UPS Biloxi, MS - UPS #6373",https://my.matterport.com/show/?m=Tzg7Fa5ctYu,כן
2/13/24,.dwg,Long,$100,"Hugo Boss Aventura, FL - Hugo Boss (Macy's) - Aventura (WHS)","https://my.matterport.com/show/?m=ortAtVwzDE8 
https://my.matterport.com/show/?m=QvnZ9Njfeyo ",כן
2/14/24,.dwg,Long,$130,"UPS Broken Arrow, OK - UPS #18672",https://my.matterport.com/show/?m=ynMXN3ACnkA,כן
2/15/24,.dwg,Long,$100,"Hugo Boss Laval, QC - Hugo Boss (Hudson Bay Company) Carrefour","https://my.matterport.com/show/?m=PFW5d8LiKHZ 
https://my.matterport.com/show/?m=pNCPQ8E7CUG ",כן
2/15/24,.dwg,Long,$65,"Hugo Boss Columbia, SC - Hugo Boss (Belk) - Columbiana",https://my.matterport.com/show/?m=SJC9m2aDuX9,כן
2/16/24,.dwg,Long,$515,"US Bank Avon, CO, CRE #5113, CO Avon - US Bank",https://my.matterport.com/show/?m=ZpxMwJbauZr,כן
2/20/24,.rvt,Abhi,$450,"HMS Host Fort Myers, FL - HMS Host",https://my.matterport.com/show/?m=x6pRjsVkREg,כן
2/20/24,.dwg,Long,$130,"UPS Oxnard, CA - UPS #7702",https://my.matterport.com/show/?m=2p12k2oKMXB,כן
2/20/24,.dwg,Long,$150,"Emmy Squared Pizza Nashville, TN - Emmy Squared Pizza",https://my.matterport.com/show/?m=kHNqAXPCvK3,כן
2/13/24,.dwg,Long,$100,"Hugo Boss Raleigh, NC - Hugo Boss(Macy's) Crabtree Valley Mall","https://my.matterport.com/show/?m=iRvhRU7HCtx 
https://my.matterport.com/show/?m=KbKhRguXDPh ",כן
2/20/24,.dwg,Long,$65,"Baskin Robbins Monterey, CA - Baskin Robbins PC 361187",https://my.matterport.com/show/?m=QHr5dGsnEyg,כן
2/21/24,.dwg,Long,$65,"Hugo Boss Birmingham, AL - Hugo Boss (Boss) Belk - The Summit Birmingham",https://my.matterport.com/show/?m=F4SH8Dg4zUR,כן
2/21/24,.dwg,Long,$65,"Hugo Boss Huntsville, AL - Hugo Boss (Boss) Belk - Huntsville Bridge Street",https://my.matterport.com/show/?m=y15D4sxkJUG,כן
2/21/24,.dwg,Long,$65,"Hugo Boss Riverside, CA - Hugo Boss (Macy’s)",https://my.matterport.com/show/?m=4ex7ojZa1JR,כן
2/21/24,.dwg,Long,$150,"Heartland Mitchellville, MD - Smiles Dentistry of Mitchellville",https://my.matterport.com/show/?m=nxuEje81vfV,כן
2/23/24,.dwg,Long,$100,"Hugo Boss Toronto, ON - Hugo Boss (Hudson Bay Company) Queen Street","https://my.matterport.com/show/?m=MLnwZLrKft7 
https://my.matterport.com/show/?m=pHV5XCyVAZA",כן
2/21/24,.dwg,Long,$130,"UPS Houston, TX - UPS #6376",https://my.matterport.com/show/?m=Dzn1J7hvWbg,כן
2/21/24,.dwg,Long,$250,Fresenius Clinic #4466 - 621 Radam Ln Austin TX 78745 USA - 2-4-24,https://my.matterport.com/show/?m=HbFQdLavhFZ,כן
2/22/24,.dwg,Long,$250,Fresenius Clinic #2104 - 304 Q St Springfield OR 97477 USA - 2-18-24,https://my.matterport.com/show/?m=ktRmKrXodcc,כן
2/22/24,.dwg,Long,$150,"Self Esteem Brands Paragould, AR - Self Esteem Brands (Anytime Fitness) #1162",https://my.matterport.com/show/?m=tECev91abx2,כן
2/22/24,.dwg,Long,$65,"Baskin Robbins Oklahoma City, OK - Baskin Robbins PC# 347250",https://my.matterport.com/show/?m=9SCYtkzXC4S,כן
2/22/24,.dwg,Long,$130,"UPS Columbus, NE - UPS #10138",https://my.matterport.com/show/?m=qUS2A8QTyr5,כן
2/23/24,.dwg,Long,$130,"UPS Rancho Cucamonga, CA - UPS #6476",https://my.matterport.com/show/?m=r3bUD75i2K4,כן
2/23/24,.dwg,Long,$130,"UPS Boulder, CO - UPS #7904",https://my.matterport.com/show/?m=FKV936Studt,כן
2/16/24,.dwg,Long,$500,"Odum Architects Auburn,  AL - Odum Architects - Auburn McAlisters",https://my.matterport.com/show/?m=n1KtSuDMphT,כן
2/20/24,.dwg,Long,$450,"Odom Architects Richland, MS - Odom Architects - Richland Town Center",https://my.matterport.com/show/?m=DYCs5g56kZc,כן
2/22/24,.dwg,Long,$250,Fresenius Clinic #4670 - 3875 Foothills Rd Las Cruces NM 88011 USA - 2-18-24,https://my.matterport.com/show/?m=pvswQQw5FTM,כן
2/22/24,.dwg,Long,$250,Fresenius Clinic #4237 -1110 N Quincy Ave Ottumwa IA 52501 USA - 2-20-24,https://my.matterport.com/show/?m=ESg5AvyKw5e,כן
2/23/24,.dwg,Long,$130,"UPS Sacramento, CA - UPS #5111",https://my.matterport.com/show/?m=x2ru83k6VLo,כן
2/15/24,.dwg,Long,$450,"Odom Architects El Paso, TX - Odom Architects",https://my.matterport.com/show/?m=2dTADm7QrY1,כן
2/22/24,.dwg,Long,$600,"Burlington Moline, IL - Burlington",https://my.matterport.com/show/?m=Qk3fQiq9E5z,כן
2/22/24,.dwg,Long,$300,Fresenius Clinic #4902 -2525 S Telshor Blvd Las Cruces NM 88011 USA - 2-18-24,https://my.matterport.com/show/?m=3GWFwxsvDya,כן
2/26/24,.dwg,Long,$130,"UPS American Canyon, CA - UPS #4264",https://my.matterport.com/show/?m=tmC8tTQs6Jd,כן
2/26/24,.dwg,Long,$65,"Baskin Robbins Napa, CA - Baskin Robbins PC 353158",https://my.matterport.com/show/?m=16snDWHFkAj,כן
2/21/24,.dwg,Long,"$1,000","Burlington Newburgh, NY - Burlington",https://my.matterport.com/show/?m=Kc4x8rt21Lz,כן
2/27/24,.dwg,Long,$715,"Darden Naples, FL - Eddie V's - Darden",https://my.matterport.com/show/?m=ppQ2hh1cpHW,כן
2/23/24,.dwg,Long,$165,"US Bank Des Moines, IA, CRE #3826, 503 - Des Moines - Ingersoll",https://my.matterport.com/show/?m=VzPXThqiazK,כן
2/27/24,.dwg,Long,$250,"US Renal Care Mansfield, TX #1264",https://my.matterport.com/show/?m=VDwj779wiYQ,כן
2/27/24,.dwg,Long,$65,"Focus Canton, MI - Focus(Carvel) #3278",https://my.matterport.com/show/?m=GHyqeGVUjMa,כן
2/27/24,.dwg,Long,$150,"Self Esteem Brands Tarzana, CA - Self Esteem Brands (Anytime Fitness)",https://my.matterport.com/show/?m=GwxwR87zpYc,כן
2/27/24,.dwg,Long,$65,"Baskin Robbins Lodi, CA - Baskin Robbins PC #360132",https://my.matterport.com/show/?m=MUgSk9UiQyg,כן
2/27/24,.dwg,Long,$150,"Self Esteem Brands Minnetonka, MN - Self Esteem Brands (Anytime Fitness)",https://my.matterport.com/show/?m=4RVsc2K8V2t,כן
2/27/24,.dwg,Long,$150,"Self Esteem Brands Anna, TX - Self Esteem Brands (Anytime Fitness) #3459",https://my.matterport.com/show/?m=bAYDdnYZ8j4,כן
2/27/24,.dwg,Long,$65,"Baskin Robbins Hayward, CA - Baskin Robbins - PC#331439",https://my.matterport.com/show/?m=jLkfdr5xeF2,כן
2/27/24,.dwg,Long,$65,"Baskin Robbins Portland, OR - Baskin Robbin’s PC #360702",https://my.matterport.com/show/?m=K1Aj9PyQPfU,כן
2/27/24,.dwg,Long,$65,"Baskin Robbins Pittsburg, CA - Baskin Robbins - PC #336276",https://my.matterport.com/show/?m=4Ff8C66XhFe,כן
2/27/24,.dwg,Long,$65,"Baskin Robbins Rio Rancho, NM - Baskin Robbins - PC #353785",https://my.matterport.com/show/?m=m5jJmkekhpd,כן
2/27/24,.dwg,Long,$150,Fresenius Clinic #9432 - 6546 Weatherfield Ct Maumee OH 43537 USA - 2-26-24,https://my.matterport.com/show/?m=iwYb63dgKVk,כן
2/27/24,.dwg,Long,$250,Fresenius Clinic #7102 - 3011 Ceres Ave Chico CA 95973 USA - 2-25-24,https://my.matterport.com/show/?m=otmubjo7VXZ,כן
2/29/24,.rvt,Abhi,$250,"Maverik Salt Lake City, UT - Maverik #326",https://my.matterport.com/show/?m=f2eB6bW1JeN,כן
2/26/24,.dwg,Long,$350,"Flynn Elkton, MD - Flynn (Wendy's)",https://my.matterport.com/show/?m=rwEbubbc6vx,כן
2/26/24,.dwg,Long,$65,"Hugo Boss Raleigh, NC - Hugo Boss (Belk) Crabtree",https://my.matterport.com/show/?m=hJwzxAR23on,כן
2/28/24,.dwg,Long,$350,"Flynn Garden City, ID - Glenwood - Flynn (Arby's)",https://my.matterport.com/show/?m=2qNW8ixHD6h,כן
2/29/24,.dwg,Long,$130,"UPS Vancouver, WA - UPS #18850",https://my.matterport.com/show/?m=ERUrios5fVe,כן
2/29/24,.dwg,Long,$130,"UPS Soquel, CA - UPS #6455",https://my.matterport.com/show/?m=YMa9krjJbor,כן
3/1/24,.dwg,Long,$400,"US Bank St. Louis, MO, CRE #6375, Crestwood - US Bank",https://my.matterport.com/show/?m=A1JsD1EiHFa,כן
3/1/24,.dwg,Long,$530,"US Bank Cincinnati, OH, CRE #2128, Springdale  - US Bank",https://my.matterport.com/show/?m=L31Gkobdn6F,כן
3/1/24,.rvt,Abhi,$250,"Maverik Mount Pleasant, UT - Maverik #208",https://my.matterport.com/show/?m=kFfA3YE3cdz,כן
3/2/24,.dwg,Long,$130,"UPS Simi Valley, CA - UPS #4440",https://my.matterport.com/show/?m=Sa4BXkbDV9v,כן
3/2/24,.dwg,Long,$130,"UPS Arvada, CO - UPS #2024",https://my.matterport.com/show/?m=weX36dDbgeY,כן
3/2/24,.dwg,Long,$130,"UPS Santa Clarita, CA - UPS #6401",https://my.matterport.com/show/?m=rqn3nqVh51f,כן
3/2/24,.dwg,Long,$130,"UPS Rosenberg, TX - UPS #5972",https://my.matterport.com/show/?m=rkLbTT7V8Uw,כן
3/2/24,.dwg,Long,$130,"Rent-A-Center Freeport, IL - Rent-A-Center - #1385 Southgate Market",https://my.matterport.com/show/?m=pC3Km5BkgoK,כן
3/2/24,.dwg,Long,$130,"UPS Turlock, CA - UPS  #7933",https://my.matterport.com/show/?m=uAtXGEGywWD,כן
3/2/24,.dwg,Long,$100,"US Bank Latonia, KY, CRE #4482, (9030 - Latonia - Winston - 4482) - US Bank Wifi",https://my.matterport.com/show/?m=vQQ4LrroUiG,כן
3/3/24,.dwg,Long,$165,"US Bank Post Falls, ID, CRE #5935, (3710 - Post Falls - E Seltice - 5935) US Bank Wifi",https://my.matterport.com/show/?m=De9VYk9bS56,כן
3/3/24,.dwg,Long,$100,"US Bank St. Louis, MO, CRE #6556, (8415 - St. Louis - Oakville - 6556)- US Bank Wifi",https://my.matterport.com/show/?m=EN7Pv2s2VVL,כן
3/3/24,.dwg,Long,$200,"US Bank Sappington, MO, CRE #6505, (8412 - St. Louis - Sunset Hills - 6505) - US Bank Wifi",https://my.matterport.com/show/?m=25zhWgG4ihm,כן
3/3/24,.dwg,Long,$100,"US Bank Sappington, MO, CRE #6506, (8416 - St. Louis - Tesson Ferry - 6506) - US Bank Wifi",https://my.matterport.com/show/?m=5Wik39LpcPp,כן
2/29/24,.dwg,Long,$400,"US Bank Shakopee, MN, CRE #1301",https://my.matterport.com/show/?m=a7w1FrGAJ5e,כן
3/2/24,.dwg,Long,$230,"US Bank Seattle, WA, CRE #8323, (3310 - Seattle - Northgate - 8323) - US Bank Wifi",https://my.matterport.com/show/?m=UTGGvjGZwvW,כן
3/4/24,.dwg,Long,$200,"US Bank Elsmere, KY, CRE #4454, (9008 - Elsmere - Dixie Hwy - 4454) - US Bank",https://my.matterport.com/show/?m=UfCzdaRHwLA,כן
3/4/24,.dwg,Long,$300,"US Bank Alton, IL, CRE #4133, (8499 - Alton - Upper - 4133) - US Bank Wifi",https://my.matterport.com/show/?m=9fLRvv6EJFv,כן
3/4/24,.dwg,Long,$200,"US Bank Auburn, WA, CRE #8173, (3439 - Auburn - 15th Street - 8173) US Bank Wifi",https://my.matterport.com/show/?m=pTjVDtwNPvJ,כן
2/29/24,.dwg,Long,$130,"UPS Oakland, CA - UPS #1821",https://my.matterport.com/show/?m=LbGk9EnZJhe,כן
3/4/24,.dwg,Long,$265,"US Bank Florence, KY, CRE #4459, (9035 - Florence - Hwy 42 - 4459) - US Bank Wifi",https://my.matterport.com/show/?m=ocJYkQfRHFu,כן
3/4/24,.dwg,Long,$100,"US Bank Glen Carbon, IL, CRE #4189 (8496 - Glen Carbon - Hwy 159 - 4189) US Bank Wifi",https://my.matterport.com/show/?m=ueCTNjba2RU,כן
2/29/24,.dwg,Long,$100,"Focus Greenville, SC - Focus(Schlotzkys)",https://my.matterport.com/show/?m=sYFifsGr3dW,כן
3/1/24,.dwg,Long,$250,Fresenius Clinic # 8661 - 450 Malabar Rd Palm Bay FL 32909 USA - 2-25-24,https://my.matterport.com/show/?m=r9BLGqQuEmM,כן
3/5/24,.dwg,Long,$130,"UPS Citrus Heights, CA - UPS #2503",https://my.matterport.com/show/?m=CFPtJmThQ3g,כן
3/6/24,.dwg,Long,$130,"UPS Cameron Park, CA - UPS #1726",https://my.matterport.com/show/?m=JeSJNXmsf4r,כן
2/29/24,.dwg,Long,$600,"US Bank Western Woods, OH, CRE # 2134",https://my.matterport.com/show/?m=tvebjSxpQr8,כן
3/5/24,.dwg,Long,$500,"US Bank Chicago, IL, CRE #4153 (2301 - Chicago - Belmont - 4153) US Bank Wifi",https://my.matterport.com/show/?m=snTcwM2XiRf,כן
3/5/24,.dwg,Long,$250,Fresenius Clinic #1895 - 2940 Ginnala Dr Loveland CO 80538 USA - 3-3-24,https://my.matterport.com/show/?m=1nFSkfbBTiM,כן
3/6/24,.dwg,Long,$100,"US Bank Des Plaines, IL, CRE #4108 (942 - Des Plaines - Oakton - 4108) US Bank #",https://my.matterport.com/show/?m=wERA7APVzSy,כן
3/6/24,.dwg,Long,$100,"US Bank Gahanna, OH, CRE #2230 (8582 - Gahanna - Hamiiton - 2230) US Bank Wifi",https://my.matterport.com/show/?m=BSGQWeXNwvf,כן
2/29/24,.dwg,Long,$65,"Baskin Robbins Las Vegas, NV - Baskin Robbins PC# 361870",https://my.matterport.com/show/?m=68Fy8BKuDcP,כן
3/4/24,.dwg,Long,$150,"Self Esteem Brands San Antonio, TX - Self Esteem Brands (Anytime Fitness) #2221",https://my.matterport.com/show/?m=HeUWswNLp2a,כן
3/6/24,.dwg,Long,$150,"Self Esteem Brands Ennis, TX - Self Esteem Brands (Anytime Fitness) #3577",https://my.matterport.com/show/?m=Eh6vaqRuaiM,כן
3/5/24,.dwg,Long,$100,"US Bank Cincinnati, OH, CRE #2101 (27 - Cincinnati - Madeira - 2101) US Bank Wifi",https://my.matterport.com/show/?m=Lf7aSfzX6q9,כן
3/5/24,.dwg,Long,$100,"US Bank Cincinnati, OH, CRE #2107 (28 - Cincinnati - Montgomery - 2107) US Bank Wifi",https://my.matterport.com/show/?m=nnX4N1ex3Ei,כן
3/5/24,.dwg,Long,$100,"US Bank Mason, OH, CRE #2289 (4068 - Mason - Deerfield - 2289) US Bank Wifi",https://my.matterport.com/show/?m=QXTWYwuFG3u,כן
3/6/24,.dwg,Long,$100,"US Bank Bullhead City, AZ, CRE #7530 (5283 - Bullhead City - 7530) US Bank Wifi",https://my.matterport.com/show/?m=nqiPNWwDBBM,כן
3/6/24,.dwg,Long,$100,"US Bank Lacey, WA, CRE #8242 (3417 - Lacey - Martin - 8242) US Bank Wifi",https://my.matterport.com/show/?m=6HNorH3PkfF,כן
3/6/24,.dwg,Long,$100,"US Bank Fairfield, OH, CRE #2218 (2341 - Fairfield - Patterson - 2218) US Bank Wifi",https://my.matterport.com/show/?m=xAdN92wxw9P,כן
3/6/24,.dwg,Long,$600,"Burlington Pittsfield, MA - Burlington",https://my.matterport.com/show/?m=GXxVnM6adhb,כן
2/29/24,.dwg,Long,$600,"US Bank Colerain Hills, OH, CRE # 2081",https://my.matterport.com/show/?m=Wx9UKaBmFPf,כן
3/2/24,.dwg,Long,$330,"US Bank Madisonville, KY, CRE #4526, Madisonville- East Cntr Office - US Bank",https://my.matterport.com/show/?m=2yavFKEiKpy,כן
3/4/24,.dwg,Long,$450,"US Bank Oak Park, IL, CRE #4228, (2313 - Oak Park - Oak Park Avenue - 4228) - US Bank Wifi",https://my.matterport.com/show/?m=C8LuQ47TsAM,כן
3/5/24,.dwg,Long,$165,"US Bank Portland, OR, CRE #8628 (3178 - Portland - Interstate & Going - 8628) US Bank Wifi",https://my.matterport.com/show/?m=NTsUesxgMCP,כן
3/5/24,.dwg,Long,$100,"US Bank Woodland, WA, CRE # 8396 (3340 - Woodland - Goerig - 8396) US Bank Wifi",https://my.matterport.com/show/?m=YdscSeH6NkQ,כן
3/5/24,.dwg,Long,$100,"US Bank St. Louis, MO, CRE # 6289 (8362 - St. Louis - Maryland Heights - 6289) US Bank Wifi",https://my.matterport.com/show/?m=BzN6FFQc8xx,כן
3/5/24,.dwg,Long,$100,"US Bank Creve Coeur, MO, CRE #6297 (8405 - Creve Coeur - Olive Blvd - 6297) US Bank Wifi",https://my.matterport.com/show/?m=Ps1ocpdGjB3,כן
3/6/24,.rvt,Abhi,$250,"Maverik Cedar City, UT - Maverik #348",https://my.matterport.com/show/?m=xZ5MaBhwmYS,כן
3/7/24,.dwg,Long,$100,"US Bank Batavia, OH, CRE #2043 (59 - Batavia - Eastgate Cincinnati - 2043) US Bank Wifi",https://my.matterport.com/show/?m=fMhCNfFU2Xu,כן
3/7/24,.dwg,Long,$200,"US Bank Alexandria, KY, CRE #4420 (9039 - Alexandria - Alexandria Pike - 4420) US Bank Wifi",https://my.matterport.com/show/?m=JGKduSrGos9,כן
3/5/24,.dwg,Long,$150,"US Bank Kent, WA, CRE #8236 (3486 - Kent - N. 4th - 8236) US Bank Wifi",https://my.matterport.com/show/?m=zTXGzM5Lpy3,כן
3/7/24,.dwg,Long,$165,"US Bank Kent, WA, CRE #8235 (3440 - Kent - Covington - 8235) US Bank Wifi",https://my.matterport.com/show/?m=YmGvFEzdq1X,כן
3/8/24,.dwg,Long,$100,"US Bank Hillsboro, OR, CRE #8734 (4663 - Hillsboro - Orenco Station - 8734) US Bank Wifi",https://my.matterport.com/show/?m=yMYibXLNRvn,כן
3/8/24,.dwg,Long,$100,"US Bank Las Vegas, NV, CRE #5753 (4526 - Las Vegas - Peccole Ranch - 5753) US Bank Wifi",https://my.matterport.com/show/?m=wrPNZQAC8Qp,כן
2/29/24,.dwg,Long,$400,"US Bank Apple Valley, MN, CRE #1300",https://my.matterport.com/show/?m=inKqBHDiMgk,כן
3/8/24,.dwg,Long,$165,"US Bank St. Charles, MO, CRE #6525 (8363 - St. Charles - Harvester - 6525) US Bank Wifi",https://my.matterport.com/show/?m=wF9JqRZFkb3,כן
3/11/24,.dwg,Long,$150,"Heartland Deerfield Beach, FL - North Broward Dental Care (1450417)",https://my.matterport.com/show/?m=WLMEGQS6iKd,כן
3/4/24,.dwg,Long,$165,"US Bank Augusta, KY, CRE #4423 (229 - Augusta - Main Street - 4423) US Bank Wifi","https://my.matterport.com/show/?m=KMYXVNBLH5Q 
https://my.matterport.com/show/?m=ANi6bcMmy3u",כן
3/7/24,.dwg,Long,$130,"UPS Sacramento, CA - UPS #4601",https://my.matterport.com/show/?m=eq5Q2xU6udn,כן
3/8/24,.dwg,Long,$130,"UPS Tulsa, OK - UPS #6429",https://my.matterport.com/show/?m=rsxcto9G9qf,כן
3/8/24,.dwg,Long,$100,"US Bank Hillsboro, OR, CRE #8550 (3254 - Hillsboro - North Hillsboro - 8550) US Bank Wifi",https://my.matterport.com/show/?m=UyYQdLrhcmP,כן
3/12/24,.dwg,Long,$65,"Armocida Fort Leonard Wood, MO - Armocida - Anthony’s Pizza",https://my.matterport.com/show/?m=3fzt1qdKr8k,כן
3/11/24,.dwg,Long,$150,"US Bank Ferguson, MO, CRE #6396 (8384 - Ferguson - Florissant - 6396) US Bank Wifi",https://my.matterport.com/show/?m=NK6A4LQRYNj,כן
3/11/24,.dwg,Long,$165,"US Bank Coeur d'Alene, ID, CRE #5882 (3685 - Coeur d'Alene - Government Way - 5882) US Bank Wifi",https://my.matterport.com/show/?m=YrE9KFryBMK,כן
3/12/24,.dwg,Long,$100,"US Bank Beaverton, OR, CRE #8495 (3235 - Beaverton - Greenway - 8495) US Bank Wifi",https://my.matterport.com/show/?m=hRq42CPGdu2,כן
3/8/24,.dwg,Long,$150,"Brinker (Chili's) Wyoming, MI - Brinker (Chili’s) CH1868 - Wyoming MI-Chili's",https://my.matterport.com/show/?m=aXTRmPJYibf,כן
3/2/24,.dwg,Long,$65,"Focus Charlotte, NC - Focus (Auntie Anne’s) NC129",https://my.matterport.com/show/?m=5uUTt1JGD2h,כן
3/12/24,.dwg,Long,$300,"US Bank Seattle WA, CRE #8338 (3337 - Seattle - White Center - 8338) US Bank Wifi",https://my.matterport.com/show/?m=Ja5gFN6eju3,כן
3/5/24,.dwg,Long,$130,"US Bank Hurricane, UT, CRE #5703 (3929 - Hurricane - W. State - 5703) US Bank Wifi",https://my.matterport.com/show/?m=LK3m1fs49Uo,כן
3/7/24,.dwg,Long,$200,"US Bank Renton, WA, CRE #8291 (3401 - Renton - Renton Hills - 8291) US Bank Wifi",https://my.matterport.com/show/?m=4CNfGBpTbJV,כן
3/8/24,.dwg,Long,$65,"Baskin Robbins Anchorage, AK - Baskin Robbins PC #336654",https://my.matterport.com/show/?m=Fyzk75bskz3,כן
3/8/24,.dwg,Long,$150,"US Bank Hillsboro, OR, CRE #8547 (3225 - Hillsboro - Tanasbourne - 8547) US Bank Wifi",https://my.matterport.com/show/?m=GhAUZAt3RPf,כן
3/8/24,.dwg,Long,$100,"US Bank Las Vegas, NV, CRE #5314 (7111 - Las Vegas - Ft Apache - 5314) US Bank Wifi",https://my.matterport.com/show/?m=zFPHJck4wP6,כן
3/8/24,.dwg,Long,$200,"US Bank Palatine, IL, CRE #4232 (2284 - Palatine - Rand Road - 4232) US Bank Wifi",https://my.matterport.com/show/?m=mN6oobX8Q4R,כן
3/12/24,.dwg,Long,$100,"US Bank Cincinnati, OH, CRE #2124 (9 - Cincinnati - Queensgate - 2124) US Bank Wifi",https://my.matterport.com/show/?m=NE9rPnhs7dk,כן
3/12/24,.dwg,Long,$200,"US Bank Camas, WA, CRE #8197 (3427 - Camas - NE Adams - 8197) US Bank Wifi",https://my.matterport.com/show/?m=Ma16VMQUMAg,כן
3/12/24,.dwg,Long,$165,"US Bank Columbus, OH, CRE #2170 (708 - Columbus - Cleveland Avenue - 2170) US Bank Wifi",https://my.matterport.com/show/?m=xc27DQDZBoE,כן
3/11/24,.dwg,Long,$200,"US Bank Bellefontaine Neighbors, MO, CRE #6343 (8359 - St. Louis - Bissell Hills - 6343) US Bank Wifi",https://my.matterport.com/show/?m=zyyD8fR7Eh3,כן
3/12/24,.dwg,Long,$100,"US Bank Florissant, MO, CRE #6397 (8382 - Florissant - Hwy 67-Lindberg - 6397) US Bank Wifi",https://my.matterport.com/show/?m=pgKSapo9ryf,כן
3/12/24,.dwg,Long,$100,"US Bank Las Vegas, NV, CRE #5376 (4060 - Las Vegas - Marcello Marketpl - 5376) US Bank Wifi",https://my.matterport.com/show/?m=iZfKkceCFeX,כן
3/12/24,.dwg,Long,$100,"US Bank Portland, OR, CRE #8607 (3193 - Portland - 39th & Salmon - 8607) US Bank Wifi",https://my.matterport.com/show/?m=tLAb4qpuirN,כן
3/12/24,.dwg,Long,$150,"US Bank Portland, OR, CRE #8744 (3175 - Portland - Lloyd Center - 8744) US Bank Wifi",https://my.matterport.com/show/?m=b3bcmrZPVbJ,כן
3/12/24,.dwg,Long,$100,"US Bank St Peters, MO, CRE #6566 (8376 - St. Peters - Mexico Road - 6566) US Bank Wifi",https://my.matterport.com/show/?m=HW1fbGvfZGZ,כן
3/12/24,.dwg,Long,$415,"US Bank Park Forest, IL, CRE #4233 (2294 - Park Forest - Indianwood Blvd - 4233) US Bank Wifi",https://my.matterport.com/show/?m=ScgWWdXZ8Ub,כן
3/13/24,.dwg,Long,$100,"US Bank Cleveland, OH, CRE #2166 (9171 - Cleveland - Wilson Mills - 2166) - US Bank Wifi",https://my.matterport.com/show/?m=WCgFCxfkVnj,כן
3/13/24,.dwg,Long,$100,"US Bank Cleveland, OH, CRE #2495 (9149 - Cleveland - Church Square - 2495) - US Bank Wifi",https://my.matterport.com/show/?m=hC6yFJYGL8X,כן
3/13/24,.dwg,Long,$100,"US Bank Bellevue, WA, CRE #8179 (3321 - Bellevue - Highlands - 8179) US Bank Wifi",https://my.matterport.com/show/?m=ZwbGqUTuzmD,כן
3/13/24,.dwg,Long,$100,"US Bank Bellevue, WA, CRE #8178 (3441 - Bellevue - Factoria - 8178) US Bank Wifi",https://my.matterport.com/show/?m=onfsmzSYFvT,כן
3/14/24,.dwg,Long,$100,"US Bank Florissant, MO, CRE #6398 (8378 - Florissant - Waterford Hwy 67 - 6398) US Bank Wifi",https://my.matterport.com/show/?m=y9k6uJDqm8T,כן
3/13/24,.dwg,Long,$150,"US Bank Willoughby, OH, CRE #2415 (410 - Willoughby - Erie - 2415) - US Bank Wifi",https://my.matterport.com/show/?m=my3iz6SqakY,כן
3/14/24,.dwg,Long,$100,"US Bank Bothell, WA, CRE #8192 (3420 - Bothell - Canyon Park - 8192) US Bank Wifi",https://my.matterport.com/show/?m=QiUFZTmFng9,כן
3/6/24,.dwg,Long,$150,"Heartland Memphis, TN - American Family Dentistry - Memphis Polar (SN2122100 - 6300010)","Memphis, TN - American Family Dentistry - Memphis Polar (SN2122100 - 6300010) #101 
Memphis, TN - American Family Dentistry - Memphis Polar (SN2122100 - 6300010) #103",כן
3/7/24,.dwg,Long,$200,"US Bank Granite City, IL, CRE #4195 (8497 - Granite City - Nameoki Road - 4195) US Bank Wifi",https://my.matterport.com/show/?m=ynsL5h2HXZw,כן
3/8/24,.dwg,Long,$150,"US Bank Wheeling, IL, CRE #4270 (2274 - Wheeling - Wheeling Road - 4270) US Bank Wifi",https://my.matterport.com/show/?m=m1pTEF8vSwM,כן
3/12/24,.dwg,Long,$600,"Burlington Spokane, WA (Franklin Park Shopping Center - BBB)",https://my.matterport.com/show/?m=KJJ1AHcMwrX,כן
3/13/24,.dwg,Long,$150,"Sun Holdings Orlando, FL - Sun Holdings(McAllisrer’s Deli)",https://my.matterport.com/show/?m=rELoQqmq3kL,כן
3/13/24,.dwg,Long,$300,"Heartland Countryside, IL - Countryside Dental Group (SN2122518 - 1000076)",https://my.matterport.com/show/?m=5bYcWYk1JqP,כן
3/7/24,.dwg,Long,$235,"US Bank Cincinnati, OH, CRE #2108 (14 - Cincinnati - Mount Healthy - 2108) US Bank Wifi",https://my.matterport.com/show/?m=WMjTqUHagYC,כן
3/8/24,.dwg,Long,$85,"US Bank St. Charles, MO, CRE #6526 (8375 - St. Charles - Kisker - 6526) US Bank Wifi",https://my.matterport.com/show/?m=oo7QGLgV19S,כן
3/13/24,.dwg,Long,$85,"US Bank Portland, OR, CRE #8615 (3236 - Portland - Cedar Mill - 8615) US Bank Wifi",https://my.matterport.com/show/?m=mp6eAxbNE7t,כן
3/14/24,.dwg,Long,$650,"Wings Etc. Fort Wayne, IN - Wings Etc.","https://my.matterport.com/show/?m=NbF73Tj9rYF 
https://my.matterport.com/show/?m=kvNVgFt62kL ",כן
3/7/24,.dwg,Long,$190,"US Bank Renton, WA, CRE #8292 (3315 - Renton - S. Second - 8292) US Bank Wifi",https://my.matterport.com/show/?m=ynJiuZ1KQsk,כן
3/8/24,.dwg,Long,$150,"US Bank O'Fallon, MO, CRE #6479 (8374 - O'Fallon - O'Fallon Square - 6479) US Bank Wifi",https://my.matterport.com/show/?m=y76JxDxnHvd,כן
3/13/24,.dwg,Long,$65,"Baskin Robbins San Jose, CA - Baskin Robbins PC 361158",https://my.matterport.com/show/?m=RP7pLBLae4i,כן
3/13/24,.dwg,Long,$65,"Baskin Robbins Pueblo, CO - Baskin Robbins PC353643",https://my.matterport.com/show/?m=8NY8kniAvxr,כן
3/13/24,.dwg,Long,$65,"Focus Palm Desert, CA - Focus (Jamba) #1458",https://my.matterport.com/show/?m=QiZPHF8bZWE,כן
3/14/24,.dwg,Long,$65,"Hugo Boss Santa Clara, CA - Hugo Boss (Macy's) - Valley Fair (CA)",https://my.matterport.com/show/?m=H57xyS5Vift,כן
3/13/24,.dwg,Long,$150,Fresenius Clinic # 8433 - 1531 US-380 Graham TX 76450 USA - 3-10-24,https://my.matterport.com/show/?m=ENTx1xPCFQS,כן
3/14/24,.dwg,Long,$85,"US Bank Lake Oswego, OR, CRE #8702 (Lake Oswego - Lake Pl Shopping - 8702) US Bank Wifi",https://my.matterport.com/show/?m=42fqf9cJhJZ,כן
3/14/24,.dwg,Long,$150,"US Bank Portland, OR, CRE #8613 (3177 - Portland - Burlingame - 8613) US Bank Wifi",https://my.matterport.com/show/?m=wzsmmQs52ew,כן
3/14/24,.dwg,Long,$170,"US Bank Mundelein, IL, CRE #4215 (2281 - Mundelein - Lake Street - 4215) US Bank Wifi",https://my.matterport.com/show/?m=kgzBrRW9JHz,כן
3/11/24,.dwg,Long,$130,"UPS Austin, TX - UPS #2002",https://my.matterport.com/show/?m=orXnrac5uSh,כן
3/11/24,.dwg,Long,$130,"UPS Santa Cruz, CA - UPS #1426",https://my.matterport.com/show/?m=ZNAJRvFM9VS,כן
3/14/24,.dwg,Long,$400,Fresenius Clinic #3885 - 1126 Slide Rd ste 4a Lubbock TX 79416 USA - 3-10-24,https://my.matterport.com/show/?m=9ecHz7FESvT,כן
3/15/24,.dwg,Long,$85,Fresenius Clinic #1284 - 401 Francia St A101 San Juan PR - 2-15-24,https://my.matterport.com/show/?m=DeMJ6Ya5atq,כן
3/12/24,.dwg,Long,$170,"US Bank Lake St Louis, MO, CRE #6449 (8377 - Lake St. Louis - Lake St. Louis - 6449) US Bank Wifi",https://my.matterport.com/show/?m=MZkDp2ZQExH,כן
3/12/24,.dwg,Long,$500,"US Bank Franklin, TN - Cool Springs CRE # 2825 - US Bank",https://my.matterport.com/show/?m=avCV1u3nXxE,כן
3/14/24,.dwg,Long,$85,"US Bank Puyallup, WA, CRE #8282 (3436 - Puyallup - South Hill 39th Ave - 8282) US Bank Wifi",https://my.matterport.com/show/?m=ufFWZqiJLro,כן
3/14/24,.dwg,Long,$85,"US Bank Whitehall, OH, CRE #2412 (8581 - Whitehall - Great Eastern - 2412) US Bank Wifi",https://my.matterport.com/show/?m=LyUuM4mQcNL,כן
3/15/24,.dwg,Long,$150,"US Bank Union, MO, CRE #6574 (8369 - Union - Oak - 6574) US Bank Wifi",https://my.matterport.com/show/?m=LF6E7da4vcN,כן
3/15/24,.dwg,Long,$150,"US Bank Cincinnati, OH, CRE #2131 (11 - Cincinnati - University - 2131) US Bank Wifi",https://my.matterport.com/show/?m=NraMcXny9XR,כן
3/11/24,.dwg,Long,$295,"US Bank Cambridge, OH, CRE #2061 (773 - Cambridge - Wheeling (Main) - 2061) US Bank Wifi",https://my.matterport.com/show/?m=bMKYZS6yj8g,כן
3/12/24,.dwg,Long,$210,"US Bank Homewood, IL, CRE #4729 (4288 - Homewood - Dixie - 4729) US Bank Wifi",https://my.matterport.com/show/?m=k2MhMXafJs8,כן
3/12/24,.dwg,Long,$85,"US Bank Las Vegas, NV, CRE #5316 (7110 - Las Vegas - Lake Mead - 5316) US Bank Wifi",https://my.matterport.com/show/?m=kzwjH5pda4F,כן
3/14/24,.dwg,Long,$150,"US Bank Puyallup, WA, CRE #8281 (3474 - Puyallup - S Meridian - 8281) US Bank Wifi",https://my.matterport.com/show/?m=RXae76UY739,כן
3/19/24,.dwg,Long,$130,"UPS San Francisco, CA - UPS #5402",https://my.matterport.com/show/?m=5kfrzDAfN65,כן
3/15/24,.dwg,Long,$150,"Fresenius Clinic #1214 - 200 C. Dr. Vidal ste 10, Humacao, 00791, Puerto Rico - 2-19-24",https://my.matterport.com/show/?m=pR1jQVxGVWo,כן
3/19/24,.dwg,Long,$170,"US Bank Cincinnati, OH, CRE #2080 (12 - Cincinnati - Clifton - 2080) US Bank Wifi",https://my.matterport.com/show/?m=8L4ScZzwyuk,כן
3/19/24,.dwg,Long,$125,"US Bank Cleveland, OH, CRE #2145 (9156 - Cleveland - Clark 25th - 2145) US Bank Wifi",https://my.matterport.com/show/?m=7soqjiMkWMf,כן
3/19/24,.dwg,Long,$85,"US Bank Bonney Lake, WA, CRE #8191 (3422 - Bonney Lake - 8191) US Bank Wifi",https://my.matterport.com/show/?m=MmRmwcNrqCZ,כן
3/19/24,.dwg,Long,$600,"Burlington Algonquin, IL - Burlington",https://my.matterport.com/show/?m=7GqaWpTDUvv,כן
3/20/24,.dwg,Long,$130,"UPS Littleton, CO - UPS #0519",https://my.matterport.com/show/?m=GSjsj5osnVB,כן
3/20/24,.dwg,Long,$130,"UPS Rogers, AR - UPS #1753",https://my.matterport.com/show/?m=XicytbJffM8,כן
3/20/24,.dwg,Long,$130,"UPS Phoenix, AZ - UPS #4750",https://my.matterport.com/show/?m=Bv1JYygXVQU,כן
3/20/24,.dwg,Long,$130,"UPS Mandeville, LA - UPS #2446",https://my.matterport.com/show/?m=h7td2s1wFLs,כן
3/19/24,.dwg,Long,$150,"US Bank Cleveland, OH, CRE #2156 (416 - Cleveland - Lorain 98th - 2156) US Bank Wifi",https://my.matterport.com/show/?m=kEefx2beUji,כן
3/19/24,.dwg,Long,$130,"US Bank Elyria, OH, CRE #2209 (459 - Elyria - Midway Blvd - 2209) US Bank Wifi",https://my.matterport.com/show/?m=TmyacG2PAQJ,כן
3/19/24,.dwg,Long,$150,"US Bank Strongsville, OH, CRE #2380 (9978 - Strongsville - Pearl Road - 2380) US Bank Wifi",https://my.matterport.com/show/?m=BMdR14vne5F,כן
3/19/24,.dwg,Long,$130,"US Bank Doylestown, OH, CRE #2201 (9273 - Doylestown - Portage - 2201) US Bank Wifi",https://my.matterport.com/show/?m=6QNQSQef6sg,כן
3/19/24,.dwg,Long,$125,"US Bank St. Louis, MO, CRE #6562 (8686 - St. Louis - Tucker Blvd - 6562) US Bank Wifi",https://my.matterport.com/show/?m=7U8qfhuAede,כן
3/19/24,.dwg,Long,$125,"US Bank Coeur d'Alene, ID, CRE #5881 (3627 - Coeur d'Alene - Fourth Street - 5881) US Bank Wifi",https://my.matterport.com/show/?m=QCc9FsmNC9m,כן
3/14/24,.dwg,Long,$65,"Baskin Robbins Lafayette, LA - Baskin Robbins PC 360958",https://my.matterport.com/show/?m=icz89rs1VL8,כן
3/19/24,.dwg,Long,$130,"US Bank North Olmsted, OH, CRE #2332 (9976 - North Olmsted - Country Club - 2332) US Bank Wifi",https://my.matterport.com/show/?m=BKi1rp4KLVU,כן
3/19/24,.dwg,Long,$85,"US Bank Spanaway, WA, CRE #8343 (3438 - Spanaway - Pacific - 8343) US Bank Wifi",https://my.matterport.com/show/?m=cy73BiGa2oC,כן
3/20/24,.dwg,Long,$125,"US Bank Spokane Valley, WA, CRE #8079 (3365 - Spokane Valley - Appleway - 8079) US Bank Wifi",https://my.matterport.com/show/?m=t2zWSW4tkJd,כן
3/20/24,.dwg,Long,$150,"US Bank Lynnwood, WA, CRE #8250 (3343 - Lynnwood - Forty-Fourth - 8250) US Bank Wifi",https://my.matterport.com/show/?m=tZD9yQvQCcs,כן
3/20/24,.dwg,Long,$65,"Baskin Robbins Euless, TX - Baskin Robbins PC 346436",https://my.matterport.com/show/?m=LAmTRFxWGX8,כן
3/22/24,.dwg,Long,$65,"Hugo Boss Springfield, VA - Hugo Boss - Springfield (VA) Sales Floor",https://my.matterport.com/show/?m=c8KM5431Kdp,כן
3/20/24,.dwg,Long,$65,"Focus Warwick, RI - Focus (Auntie Anne’s) R103",https://my.matterport.com/show/?m=JqnvL3B1daP,כן
3/15/24,.dwg,Long,$150,"US Bank Spokane, WA, CRE #8351 (3362 - Spokane - Lincoln Heights - 8351) US Bank Wifi",https://my.matterport.com/show/?m=GiCnSGw8Akv,כן
3/15/24,.dwg,Long,$170,"US Bank Spokane, WA, CRE #8352 (3360 - Spokane - Manito - 8352) US Bank Wifi",https://my.matterport.com/show/?m=pQsEWbLkTa3,כן
3/25/24,.dwg,Long,$130,"UPS Mill Creek, WA - UPS #2355",https://my.matterport.com/show/?m=2srwKUkXESd,כן
3/14/24,.dwg,Long,$150,"US Bank Kenmore, WA, CRE #8319 (3347 - Kenmore - 8319) US Bank Wifi",https://my.matterport.com/show/?m=B2whcvv5oPK,כן
3/14/24,.dwg,Long,$250,"US Bank Crystal Lake, IL, CRE #4164 (2271 - Crystal Lake - Commonwealth Dr - 4164) US Bank Wifi",https://my.matterport.com/show/?m=jUvUPe88thx,כן
3/21/24,.dwg,Long,$85,"US Bank Fremont, OH, CRE #2226 (684 - Fremont - Potter Village - 2226) US Bank Wifi",https://my.matterport.com/show/?m=AsBD9zsjibq,כן
3/22/24,.dwg,Long,$170,"US Bank Cincinnati, OH, CRE #2112 (8515 - Cincinnati - Norwood - 2112) US Bank Wifi",https://my.matterport.com/show/?m=puWGmNLsPwA,כן
3/22/24,.dwg,Long,$170,"US Bank Bolingbrook, IL, CRE #4141 (2369 - Bolingbrook - Bolingbrook Dr - 4141) US Bank Wifi",https://my.matterport.com/show/?m=nwQ5LbNwGcu,כן
3/22/24,.dwg,Long,$150,"US Bank Bedford, OH, CRE #2048 (9145 - Bedford - Broadway - 2048) - US Bank Wifi",https://my.matterport.com/show/?m=KMWLjHYF1Aa,כן
3/13/24,.dwg,Long,$750,"Taylor Construction Phoenix, AZ - Taylor Construction",https://my.matterport.com/show/?m=pfBue35BwTc,כן
3/20/24,.dwg,Long,$150,"Self Esteem Brands Gig Harbor, WA - Self Esteem Brands (Anytime Fitness) #1369",https://my.matterport.com/show/?m=CcBTo7SxNxu,כן
3/15/24,.dwg,Long,$85,"US Bank Portland, OR, CRE #8605 (3216 - Portland - 23rd & Lovejoy - 8605) US Bank Wifi",https://my.matterport.com/show/?m=wLtxt6KgL7T,כן
3/15/24,.dwg,Long,$150,"US Bank Columbus, OH, CRE #2183 (9375 - Columbus - Kingsdale - 2183) US Bank",https://my.matterport.com/show/?m=yUXpPh9RLFU,כן
3/15/24,.dwg,Long,$85,"US Bank Columbus, OH, CRE #2181 (9280 - Columbus - Henderson Road - 2181) US Bank Wifi",https://my.matterport.com/show/?m=TPBdnWpjMSu,כן
3/19/24,.dwg,Long,$450,"Odom Architects Lumberton, TX - Odom Architects",https://my.matterport.com/show/?m=Wo33MqTtHYR,כן
3/20/24,.dwg,Long,$300,"Heartland Nashville, TN - Advanced Dental Health Center (SN2121901)",https://my.matterport.com/show/?m=B1cStPg3kwJ,כן
3/21/24,.dwg,Long,$130,"US Bank Sandusky, OH, CRE #2360 (685 - Sandusky - Perkins - 2360) US Bank Wifi",https://my.matterport.com/show/?m=ZokQCVc1Njd,כן
3/21/24,.dwg,Long,$375,"US Bank Lawrenceburg, IN, CRE #4345 (9056 - Lawrenceburg - Walnut - 4345) US Bank Wifi",https://my.matterport.com/show/?m=WKYM3hfif1S,כן
3/21/24,.dwg,Long,$150,"US Bank Skokie, IL, CRE #4790 (4360 - Skokie - Dempster - 4790) US Bank Wifi",https://my.matterport.com/show/?m=Pzzvb5xGL5N,כן
3/21/24,.dwg,Long,$250,"US Bank Northlake, IL, CRE #4225 (2333 - Northlake - North Avenue - 4225) US Bank Wifi",https://my.matterport.com/show/?m=1eXsWRfqBUU,כן
3/21/24,.dwg,Long,$85,"US Bank Niles, IL, CRE #4223 (2253 - Niles - West Dempster - 4223) US Bank Wifi",https://my.matterport.com/show/?m=iRsg2pcyaRz,כן
3/21/24,.dwg,Long,$85,"US Bank Las Vegas, NV, CRE #5784 (3772 - Las Vegas - East Tropicana - 5784) US Bank Wifi",https://my.matterport.com/show/?m=B5JWPVKkkud,כן
3/21/24,.dwg,Long,$170,"US Bank Circleville, OH, CRE #2139 (9373 - Circleville - East Main - 2139) US Bank Wifi",https://my.matterport.com/show/?m=ojV3akn9LS6,כן
3/22/24,.dwg,Long,$85,"US Bank Pickerington, OH, CRE #2344 (9371 - Pickerington - Stonecreek - 2344) US Bank Wifi",https://my.matterport.com/show/?m=aqeQd4ZcBkA,כן
3/22/24,.dwg,Long,$65,"Focus Burwell, NE - Focus(Cinnabon) - Pump & Pantry #22/Cinnabon #6606",https://my.matterport.com/show/?m=FkaCu6WxFh4,כן
3/22/24,.dwg,Long,$65,"Baskin Robbins Mt. Pleasant, SC - Baskin Robbins PC 361971",https://my.matterport.com/show/?m=Zf4WG5ouaiY,כן
3/22/24,.dwg,Long,$250,Fresenius Clinic #9077 - 803 W Broadway St West Plains MO 65775 USA - 3-17-24,https://my.matterport.com/show/?m=NepqvR9cx6S,כן
3/22/24,.dwg,Long,$65,"Focus Kennesaw, GA - Focus(Carvel) Swirl",https://my.matterport.com/show/?m=AmhnuJRtvJz,כן
3/26/24,.dwg,Long,$250,Fresenius Clinic #6885 - 7927 Ostrow St San Diego CA 92111 USA - 3-24-24,https://my.matterport.com/show/?m=kwuTUVnkn5f,כן
3/21/24,.dwg,Long,$215,"US Bank Port Clinton, OH, CRE #2347 (683 - Port Clinton - East 2nd - 2347) US Bank Wifi",https://my.matterport.com/show/?m=xtXsM6qeTqr,כן
3/22/24,.dwg,Long,$150,"US Bank Cornelius, OR, CRE #8516 (3252 - Cornelius - Adair - 8516) US Bank Wifi",https://my.matterport.com/show/?m=K5mAhXXGvwL,כן
3/22/24,.dwg,Long,$215,"US Bank Portland, OR, CRE #8604 (3192 - Portland - 181st & Glisan - 8604) US Bank Wifi",https://my.matterport.com/show/?m=efzBpfDK8Uz,כן
3/25/24,.dwg,Long,$150,"US Renal Care Hyattsville, MD - #0158",https://my.matterport.com/show/?m=5bmZJimrKx7,כן
3/27/24,.dwg,Long,$65,"Baskin Robbins Cypress, TX - Baskin Robbins PC 333007",https://my.matterport.com/show/?m=QXEsHqSfZ5t,כן
3/27/24,.dwg,Long,$250,"US Renal Care South Aiken, SC #0482 - US Renal Care",https://my.matterport.com/show/?m=EZrxPHV4qP7,כן
3/21/24,.dwg,Long,$125,"US Bank St. Louis, MO, CRE #6560 (8396 - St. Louis - St. Louis Hills - 6560) US Bank Wifi",https://my.matterport.com/show/?m=P1S51SxR4b7,כן
3/27/24,.dwg,Long,$150,"US Bank Downers Grove, IL, CRE #4168 (2372 - Downers Grove - 63rd Street - 4168) US Bank Wifi",https://my.matterport.com/show/?m=goqgGqVMNPy,כן
3/27/24,.dwg,Long,$150,"US Bank St. Louis, MO, CRE #6546 (8751 - St. Louis - Gravois Plaza - 6546) US Bank Wifi",https://my.matterport.com/show/?m=xe635xXSEVf,כן
3/27/24,.dwg,Long,$255,"US Bank Overland, MO, CRE #6483 (8403 - St. Louis - Overland - 6483) US Bank Wifi",https://my.matterport.com/show/?m=dkznV74mPTD,כן
3/27/24,.dwg,Long,$150,"US Bank Seattle, WA, CRE #8328 (3311 - Seattle - Rainier Valley - 8328) US Bank Wifi",https://my.matterport.com/show/?m=YsE3v68AUKt,כן
3/27/24,.dwg,Long,$170,"US Bank Naperville, IL, CRE #4219 (2366 - Naperville - Market Meadows - 4219) US Bank Wifi",https://my.matterport.com/show/?m=nVWyskW4P9Y,כן
3/27/24,.dwg,Long,$85,"US Bank Bremerton, WA, CRE #8104 (3483 - Bremerton - 6th & Naval - 8104) US Bank Wifi",https://my.matterport.com/show/?m=8nNKxEKg5XT,כן
3/29/24,.dwg,Long,$300,Fresenius Clinic #1271 - 307 Laird St ste 1 Wilkes-Barre PA 18702 USA - 3-19-24,"https://my.matterport.com/show/?m=MPm61qEyYYW
https://my.matterport.com/show/?m=Ft66XkMfPx4",כן
3/27/24,.dwg,Long,$130,"US Bank Tacoma, WA, CRE #8377 (3473 - Tacoma - Proctor - 8377) US Bank Wifi",https://my.matterport.com/show/?m=C5v8LNAUeJL,כן
3/27/24,.dwg,Long,$100,"Baskin Robbins Olympia, WA - Baskin Robbins",https://my.matterport.com/show/?m=LUo1sFQA3vH,כן
3/27/24,.dwg,Long,$130,"UPS Hercules, CA - UPS #2796",https://my.matterport.com/show/?m=QAki7qjPUjq,כן
3/27/24,.dwg,Long,$130,"UPS Los Lunas, NM - UPS #6594",https://my.matterport.com/show/?m=3eUH61JxJKb,כן
3/28/24,.dwg,Long,$250,Fresenius Clinic #100655 - 1600 N Bryan Ave Lamesa TX 79331 USA - 3-17-24,https://my.matterport.com/show/?m=f4efhM9VWz2,כן
3/29/24,.dwg,Long,$130,"UPS The Woodlands, TX - UPS #6596",https://my.matterport.com/show/?m=RBriYTR5vWP,כן
3/29/24,.dwg,Long,$130,"UPS Phoenix, AZ - UPS #4350",https://my.matterport.com/show/?m=4m1AjPMSys5,כן
3/27/24,.dwg,Long,$350,"KBP Columbia, MO - KBP(KFC) #135252",https://my.matterport.com/show/?m=CpYdmmCgskh,כן
4/1/24,.dwg,Long,$250,Fresenius Clinic #22040000 - 1224 S. Air Depot Bld Oklahoma City OK 73100 - 3-26-24,https://my.matterport.com/show/?m=Chq7Dp5QKst,כן
3/27/24,.dwg,Long,$600,"Home Hardware Revelstoke, BC - Home Hardware",https://my.matterport.com/show/?m=fkCp58zkPRQ,כן
3/27/24,.dwg,Long,$300,"Home Hardware Revelstoke, BC - Home Hardware - Warehouse",https://my.matterport.com/show/?m=yY8Kv3xonWu,כן
4/1/24,.dwg,Long,$250,Fresenius Clinic #TBD - 27172 Interstate 45 N Oak Ridge North TX 77385 USA - 3-22-24,https://my.matterport.com/show/?m=L5ERbb1atJ9,כן
3/27/24,.dwg,Long,$150,"US Bank Kent, WA, CRE #8234 (3353 - Kent - East Hill - 8234) US Bank Wifi",https://my.matterport.com/show/?m=ZCxJ8FLzQxk,כן
3/27/24,.dwg,Long,$125,"US Bank Ashtabula, OH, CRE #2036 (682 - Ashtabula - Park - 2036) US Bank Wifi",https://my.matterport.com/show/?m=H85Mgs4bTua,כן
3/29/24,.dwg,Long,$300,Fresenius Clinic #1319 - 6630 Quaker Ave ste 102 Lubbock TX 79413 USA - 3-24-24,https://my.matterport.com/show/?m=nSRwkerhW7U,כן
4/1/24,.dwg,Long,$130,"UPS South San Francisco, CA - UPS #7962",https://my.matterport.com/show/?m=SxA5rAjMAjn,כן
4/1/24,.dwg,Long,$130,"UPS La Jolla, CA - UPS #163",https://my.matterport.com/show/?m=YiFWMLnSro7,כן
4/1/24,.dwg,Long,$130,"UPS Austin, TX - UPS #18988",https://my.matterport.com/show/?m=5C8GyTRRbCP,כן
4/1/24,.dwg,Long,$130,"UPS Pittsburg, CA - UPS #1064",https://my.matterport.com/show/?m=fPitfxaWDu2,כן
27-03-2024,.dwg,Long,$150,"Self Esteem Brands Grimes, IA - Self Esteem Brands (Anytime Fitness) #4642",https://my.matterport.com/show/?m=C7yXB7DRuyt,כן
27-03-2024,.dwg,Long,$150,"Self Esteem Brands Worthington, MN - Self Esteem Brands (Anytime Fitness) AF2280",https://my.matterport.com/show/?m=iWVmo8R6NW7,כן
29-03-2024,.dwg,Long,$65,"Focus Gretna, NE - Focus(Cinnabon) Pump & Pantry #38/Cinnabon #5223",https://my.matterport.com/show/?m=KDt5xXxew1t,כן
2-04-2024,.dwg,Long,$130,"UPS Corona, CA - UPS #1876",https://my.matterport.com/show/?m=Z99bKBMy7qD,כן
2-04-2024,.dwg,Long,$65,"Baskin Robbins Brentwood, TN - Baskin Robbins PC 360524",https://my.matterport.com/show/?m=xV9ksCpcAE2,כן
28-03-2024,.dwg,Long,$65,"Baskin Robbins Lincoln, CA - Baskin Robbins PC 353426",https://my.matterport.com/show/?m=rS2CdX93hB7,כן
1-04-2024,.dwg,Long,$65,"Baskin Robins Collierville, TN - Baskin Robins PC 340961",https://my.matterport.com/show/?m=zygm1AQ4sQt,כן
1-04-2024,.dwg,Long,$130,"UPS Victoria, TX - UPS #5474",https://my.matterport.com/show/?m=Gytuz7J4m14,כן
1-04-2024,.dwg,Long,$130,"Barnes & Noble College Watkinsville, GA - Barnes & Noble College #8436",https://my.matterport.com/show/?m=nPw5TYpo77E,כן
1-04-2024,.dwg,Long,$200,"Barnes & Noble College Oakwood, GA - Barnes & Noble College #8435",https://my.matterport.com/show/?m=9JPSotv3nwM,כן
1-04-2024,.dwg,Long,$300,"Barnes & Noble College Dahlonega, GA - Barnes & Noble College #8434",https://my.matterport.com/show/?m=ihp7uQ4Yh6f,כן
3-04-2024,.dwg,Long,$335,"US Bank Kirkwood, MO, CRE #6445 (8411 - Kirkwood - 470 N. Kirkwood - 6445) US Bank Wifi",https://my.matterport.com/show/?m=VmyKWyZKsjq,כן
3-04-2024,.dwg,Long,$295,"US Bank Chicago, IL, CRE #4797 (4367 - Chicago - W 63rd - 4797) US Bank Wifi",https://my.matterport.com/show/?m=9TWRmDW5zBX,כן
3-04-2024,.dwg,Long,$85,"US Bank New Albany, OH, CRE #2456 (711 - New Albany - Miller & Main - 2456) US Bank Wifi",https://my.matterport.com/show/?m=5deGzdakL4y,כן
3-04-2024,.dwg,Long,$150,"US Bank Portland, OR, CRE #8610 (3255 - Happy Valley - 82nd & Causey - 8610) US Bank Wifi",https://my.matterport.com/show/?m=YrBuaiKSVoU,כן
3-04-2024,.dwg,Long,$85,"US Bank Portland, OR, CRE #8611 (3220 - Portland - Argay Square - 8611) US Bank",https://my.matterport.com/show/?m=HNpWSjgqDn3,כן
3-04-2024,.dwg,Long,$150,"US Bank Estacada, OR, CRE #8524 (3230 - Estacada - SW Second - 8524) US Bank Wifi",https://my.matterport.com/show/?m=9NqpCHV76FA,כן
3-04-2024,.dwg,Long,$150,"US Bank Bountiful, UT, CRE #5700 (3923 - Bountiful - 278 South - 5700) US Bank Wifi",https://my.matterport.com/show/?m=6d3vZUhn5Tk,כן
3-04-2024,.dwg,Long,$125,"US Bank Salt Lake City, UT, CRE #5714 (3911 - Salt Lake City - 70th South - 5714) US Bank Wifi",https://my.matterport.com/show/?m=38rYFEegQ3q,כן
3-04-2024,.dwg,Long,$85,"US Bank Mukilteo, WA, CRE #8262 (3512 - Mukilteo - Harbour Pointe - 8262) US Bank Wifi",https://my.matterport.com/show/?m=Y2oadjWQYBH,כן
3-04-2024,.dwg,Long,$85,"US Bank Wilsonville, OR, CRE #8705 (3217 - Wilsonville - Town Center - 8705) US Bank Wifi",https://my.matterport.com/show/?m=L4CpbTLHTXq,כן
3-04-2024,.dwg,Long,$85,"US Bank St Helens, OR, CRE #8687 (3214 - St. Helens - South St. Helens - 8687) US Bank Wifi",https://my.matterport.com/show/?m=onTWDZMCrAf,כן
3-04-2024,.dwg,Long,$85,"US Bank Columbus, OH, CRE #2167 (724 - Columbus - Bexley - 2167) US Bank Wifi",https://my.matterport.com/show/?m=WygcXP1KX2s,כן
3-04-2024,.dwg,Long,$150,"US Bank St. Louis, MO, CRE #6563 (8413 - St. Louis - Union Rd - 6563) US Bank Wifi",https://my.matterport.com/show/?m=ttoGj982Epf,כן
5-04-2024,.dwg,Long,$65,"Baskin Robbins West Covina, CA - Baskin Robbins PC# 361373",https://my.matterport.com/show/?m=MLWkowGD582,כן
5-04-2024,.dwg,Long,$65,"Baskin Robbins San Dimas, CA - Baskin Robbins PC# 362084",https://my.matterport.com/show/?m=MSURUxZWfhE,כן
29-03-2024,.dwg,Long,$750,Fresenius Clinic #97260000 - 1857 S King St Honolulu HI 96826 USA - 3-18-24,https://my.matterport.com/show/?m=bDJ24usGD7Z,כן
1-04-2024,.dwg,Long,$350,"Flynn Herndon, VA - Flynn(Wendy's)",https://my.matterport.com/show/?m=hDi2XiGNTDZ,כן
3-04-2024,.dwg,Long,$170,"US Bank Sandy, OR, CRE #8677 (3234 - Sandy - Proctor - 8677) US Bank Wifi",https://my.matterport.com/show/?m=MNHStwPMkdK,כן
5-04-2024,.dwg,Long,$300,"Self Esteem Brands Windsor, CO - Self Esteem Brands (Anytime Fitness) #1224",https://my.matterport.com/show/?m=QtvBQfY8yfe,כן
5-04-2024,.dwg,Long,$250,Fresenius Clinic #1270 - 1020 W Hill St Thomson GA 30824 - 3-31-24,https://my.matterport.com/show/?m=ogYQjmMbRVE,כן
5-04-2024,.dwg,Long,$150,"Self Esteem Brands Abilene, TX - Self Esteem Brands (Anytime Fitness) #2289",https://my.matterport.com/show/?m=3tXWdcrWNyR,כן
22-03-2024,.dwg,Long,$600,"Flynn Charleston, WV - Flynn(Panera) #2325 - REVIT",https://my.matterport.com/show/?m=fLD8YiBSV44,כן
3-04-2024,.dwg,Long,$125,"US Bank Canby, OR, CRE #8506 (3249 - Canby - Elm - 8506) US Bank Wifi",https://my.matterport.com/show/?m=vTwEezZym8k,כן
3-04-2024,.dwg,Long,$130,"US Bank Salt Lake City, UT, CRE #5715 (3909 - Salt Lake City - Central - 5715) US Bank Wifi",https://my.matterport.com/show/?m=95Cn6cVE9fQ,כן
8-04-2024,.dwg,Long,$300,"US Renal Care Poplar Ave, TN #7349 - US Renal Care",https://my.matterport.com/show/?m=xUKSxsorwgz,כן
3-04-2024,.dwg,Long,$215,"US Bank Portland, OR, CRE #8640 (3125 - Portland - Peninsula - 8640) US Bank Wifi",https://my.matterport.com/show/?m=F1KDqyAgC61,כן
3-04-2024,.dwg,Long,$150,"US Bank Park City, UT, CRE #5655 (3907 - Park City - Park Place - 5655) US Bank Wifi",https://my.matterport.com/show/?m=GqzvGzztvzL,כן
3-04-2024,.dwg,Long,$130,"US Bank Salt Lake City, UT, CRE #5723 (3910 - Salt Lake City - Parley's View - 5723) US Bank Wifi",https://my.matterport.com/show/?m=2gPx1Hs4iLm,כן
8-04-2024,.dwg,Long,$170,"US Bank Cincinnati, OH, CRE #2126 (15 - Cincinnati - Roselawn - 2126) US Bank Wifi",https://my.matterport.com/show/?m=usYTna94Xjz,כן
8-04-2024,.dwg,Long,$85,"US Bank Hilliard, OH, CRE#2248 (703 - Hilliard - Hilliard Rome - 2248) US Bank Wifi",https://my.matterport.com/show/?m=HyCTXB2ePdH,כן
8-04-2024,.dwg,Long,$150,"US Bank Salt Lake City, UT, CRE #5719 (3918 - Salt Lake City - Holladay - 5719) US Bank Wifi",https://my.matterport.com/show/?m=t8qsqXUUukQ,כן
8-04-2024,.dwg,Long,$125,"US Bank Newberg, OR, CRE #8590 (3141 - Newberg - Portland Road - 8590) US Bank Wifi",https://my.matterport.com/show/?m=XF27mMpzgbq,כן
8-04-2024,.dwg,Long,$215,"US Bank Portland, OR, CRE #8643 (3160 - Portland - Sandy Blvd - 8643) US Bank Wifi",https://my.matterport.com/show/?m=hkszczovVwu,כן
8-04-2024,.dwg,Long,$215,"US Bank Portland, OR, CRE #8621 (3169 - Portland - Eastport - 8621) US Bank Wifi",https://my.matterport.com/show/?m=AqJYCms9yDK,כן
3-04-2024,.dwg,Long,$130,"US Bank Somerset, OH, CRE #2371 (755 - Somerset - Public Square - 2371) US Bank Wifi","https://my.matterport.com/show/?m=KK4Knu6nGUt 
https://my.matterport.com/show/?m=PnFDjKqndR4 ",כן
3-04-2024,.dwg,Long,$130,"US Bank Columbus, OH, CRE #2191 (9377 - Columbus - Worthington Hills - 2191) US Bank Wifi",https://my.matterport.com/show/?m=hqWLkkMvi6g,כן
5-04-2024,.dwg,Long,$200,"Rent-A-Center Manhattan, KS - Rent-A-Center #01485",https://my.matterport.com/show/?m=jVA6o2chPKk,כן
8-04-2024,.dwg,Long,$150,Fresenius Clinic #7377 - 67-1123 Mamalahoa Hwy Ste # 112 Kamuela HI 96743 - 3-20-24,https://my.matterport.com/show/?m=s8Bo5boLMQK,כן
9-04-2024,.dwg,Long,$200,"Rent-A-Center Leavenworth, KS - Rent-A-Center #01483",https://my.matterport.com/show/?m=gVXoPmkfRtm,כן
9-04-2024,.dwg,Long,$250,"Fresenius Clinic #100978 - 4600 American Pkwy Madison WI 53718 USA - April 4, 2024",https://my.matterport.com/show/?m=GR6Zg7nPT4t,כן
9-04-2024,.dwg,Long,$130,"UPS Kenner, LA - UPS #7978",https://my.matterport.com/show/?m=Jtebawzn87Y,כן
9-04-2024,.dwg,Long,$130,"UPS Fresno, CA - UPS #6629",https://my.matterport.com/show/?m=YfrWKPDsvcC,כן
8-04-2024,.dwg,Long,"$1,300",MD Builders Mercy Medical Plaza - 3939 J Street,https://my.matterport.com/show/?m=6rV7555YT52,כן
9-04-2024,.dwg,Long,$350,"Odom Architects Hopkinsville, KY - Odom Architects",https://my.matterport.com/show/?m=Qs2w7HFB3Yo,כן
10-04-2024,.dwg,Long,$150,Fresenius Clinic #4491 - 1499 E Old Settlers Blvd Round Rock TX 78664 USA - 4-9-24,https://my.matterport.com/show/?m=t2qZm9SEDym,כן
8-04-2024,.dwg,Long,$850,"Darden(Eddie V's) Palm Beach Gardens, FL - Darden",https://my.matterport.com/show/?m=ixyCMAoL8iM,כן
8-04-2024,.dwg,Long,$65,"Focus Annapolis, MD - Focus(Cinnabon) #2384",https://my.matterport.com/show/?m=EWZEL4AogzJ,כן
9-04-2024,.dwg,Long,$130,"UPS Tucson, AZ - UPS #329",https://my.matterport.com/show/?m=MCAxBm4NtyL,כן
10-04-2024,.dwg,Long,$150,Fresenius Clinic #4840 - 75 Evelyn Dr Millersburg PA 17061 USA - 4-7-24,https://my.matterport.com/show/?m=3aB66rS5nUS,כן
9-04-2024,.dwg,Long,$200,Rent-A-Center Pensacola FL - Rent-A-Center #589,https://my.matterport.com/show/?m=5V5QkrQ8ZrL,כן
9-04-2024,.dwg,Long,$150,Fresenius Clinic #6790 - 2205 Ross Ave El Centro CA 92243 USA - 4-7-24,https://my.matterport.com/show/?m=cX4ZqCNp2Gf,כן
9-04-2024,.dwg,Long,$250,Fresenius Clinic #4846 - 120 Medical Campus Dr Lansdale PA 19446 USA - 4-7-24,https://my.matterport.com/show/?m=933LhmdqJe3,כן
10-04-2024,.dwg,Long,$100,"Focus Fayetteville, NC - Focus (Cinnabon) #6110",https://my.matterport.com/show/?m=639BMArXrKt,כן
12-04-2024,.dwg,Long,$210,"US Bank Ankeny, IA, CRE #3619 (543 - Ankeny - Des Moines - 3619) US Bank Wifi",https://my.matterport.com/show/?m=NFD5NJ4rXVX,כן
12-04-2024,.dwg,Long,$130,"US Bank Kearns, UT, CRE #5704 (3914 - Kearns - 5352 South - 5704) US Bank Wifi",https://my.matterport.com/show/?m=rR5nvo85Q2n,כן
12-04-2024,.dwg,Long,$255,"US Bank Conway, AR, CRE #6635 (8986 - Conway - Main - 6635) US Bank Wifi",https://my.matterport.com/show/?m=6zwXFvYZpnW,כן
12-04-2024,.dwg,Long,$85,"US Bank Little Rock, AR, CRE #6659 (8973 - Little Rock - Rodney Parham - 6659) US Bank Wifi",https://my.matterport.com/show/?m=eiNkpF4kNYF,כן
12-04-2024,.dwg,Long,$150,"US Bank Pasco, WA, CRE #8270 (3332 - Pasco - N 10th - 8270) US Bank Wifi",https://my.matterport.com/show/?m=UcugreSqwxt,כן
10-04-2024,.dwg,Long,$130,"UPS Pasadena, CA - UPS #6288",https://my.matterport.com/show/?m=r1KCoXTV5cE,כן
12-04-2024,.dwg,Long,$85,"US Bank Hood River, OR, CRE #8553 (3140 - Hood River Heights - 12th St - 8553) US Bank Wifi",https://my.matterport.com/show/?m=vjV242qCfPJ,כן
12-04-2024,.dwg,Long,$85,"US Bank North Little Rock, AR, CRE #6670 (8964 - North Little Rock - Levy - 6670) US Bank Wifi",https://my.matterport.com/show/?m=HsMFte62o1v,כן
12-04-2024,.dwg,Long,$255,"US Bank Hot Springs, AR, CRE #6644 (9015 - Hot Springs - Main - 6644) US Bank Wifi",https://my.matterport.com/show/?m=1sj9T3wYzZx,כן
12-04-2024,.dwg,Long,$600,"Burlington Louisville, KY - Burlington (Dixie Manor)",https://my.matterport.com/show/?m=3mMPRpz19GD,כן
12-04-2024,.dwg,Long,$85,"US Bank Jacksonville, AR, CRE #6649 (8980 - Jacksonville - 6649) US Bank Wifi",https://my.matterport.com/show/?m=WqYrRprzxbS,כן
12-04-2024,.dwg,Long,$85,"US Bank Sandy, UT, CRE #5727 (3904 - Sandy - South Towne - 5727) US Bank Wifi",https://my.matterport.com/show/?m=Bertt5edvTr,כן
12-04-2024,.dwg,Long,$170,"US Bank Elk Grove Village, IL, CRE #4174 (2250 - Elk Grove Village - West Devon - 4174) US Bank Wifi",https://my.matterport.com/show/?m=zVREtAhogj1,כן
15-04-2024,.dwg,Long,$600,"Burlington Baltimore, MD - Burlington (Eastpoint Mall)",https://my.matterport.com/show/?m=akdewFaiXvH,כן
12-04-2024,.dwg,Long,$85,"US Bank Chicago, IL, CRE #4120 (587 - Chicago - West Town - 4120) US Bank Wifi",https://my.matterport.com/show/?m=1sQ7qLnDfeu,כן
12-04-2024,.dwg,Long,$125,"US Bank Kennewick, WA, CRE #8228 (3467 - Kennewick - Clearwater - 8228) US Bank Wifi",https://my.matterport.com/show/?m=4vWbCkpAXaj,כן
16-04-2024,.dwg,Long,$190,"US Bank Stateline, NV, CRE #5323 (7101 - Stateline - Kingsbury CB - 5323) US Bank Wifi",https://my.matterport.com/show/?m=wRjxkSqbJ1Z,כן
16-04-2024,.dwg,Long,$170,"US Bank Granby, CO, CRE #5133 (7029 - Granby - Agate Ave WSB - 5133) US Bank Wifi",https://my.matterport.com/show/?m=jA4FTx8Kjmz,כן
16-04-2024,.dwg,Long,$130,"US Bank Midvale, UT, CRE #5706 (3916 - Midvale - South State - 5706) US Bank Wifi",https://my.matterport.com/show/?m=DRbRvDKAzy3,כן
16-04-2024,.dwg,Long,$85,"US Bank Carson City, NV, CRE #5746 (3743 - Carson City - North Carson - 5746) US Bank Wifi",https://my.matterport.com/show/?m=ugqfkmXYFzd,כן
16-04-2024,.dwg,Long,$85,"US Bank Yucaipa, CA, CRE#9966 (5026 - Yucaipa - 9966) US Bank Wifi",https://my.matterport.com/show/?m=dijpixa76Je,כן
16-04-2024,.dwg,Long,$85,"US Bank Incline Village, NV, CRE #5778 (3753 - Incline Village - Tahoe Blvd - 5778) US Bank Wifi - Upstairs",https://my.matterport.com/show/?m=cbmzRrWEgLt,כן
17-04-2024,.dwg,Long,$150,"US Bank Stillwater, MN, CRE #1771 (2515 - Stillwater - Oak Ridge - 1771) US Bank Wifi",https://my.matterport.com/show/?m=MkjPhtm5MW8,כן
17-04-2024,.dwg,Long,$85,"US Bank Lakeville, MN, CRE #1789 (4524 - Lakeville - 1789) US Bank Wifi",https://my.matterport.com/show/?m=tiC6SK4s6Uj,כן
17-04-2024,.dwg,Long,$85,"US Bank Little Canada, MN, CRE#1510 (138 - Little Canada - 1510) US Bank Wifi",https://my.matterport.com/show/?m=pczN1dMznNL,כן
17-04-2024,.dwg,Long,$250,"US Bank Cottage Grove, MN, CRE #1370 (318 - Cottage Grove - 1370) US Bank Wifi",https://my.matterport.com/show/?m=fAegTxRooUV,כן
17-04-2024,.dwg,Long,$170,"US Bank Eagan, MN, CRE #1749 (2462 - Eagan - Cliff Lake - 1749) US Bank Wifi",https://my.matterport.com/show/?m=8MQwz6VnhRh,כן
17-04-2024,.dwg,Long,$130,"US Bank Prior Lake, MN, CRE #1928 (147 - Prior Lake - 1928) US Bank Wifi",https://my.matterport.com/show/?m=dbX4oc7Tk4Z,כן
16-04-2024,.dwg,Long,$85,"US Bank Reno, NV, CRE #5377 (3736 - Reno - McQueen Crossing - 5377) US Bank Wifi",https://my.matterport.com/show/?m=ioP7uWxe1if,כן
16-04-2024,.dwg,Long,$125,"US Bank Los Angeles, CA, CRE #8869 (7191 - Hollywood - 6922 Hollywood - 8869) US Bank",https://my.matterport.com/show/?m=M31n34snhPg,כן
17-04-2024,.dwg,Long,$85,"US Bank Shoreview, MN, CRE#1690 (238 - Shoreview - 1690) US Bank Wifi",https://my.matterport.com/show/?m=aw8Zenh1YqZ,כן
17-04-2024,.dwg,Long,$85,"US Bank St Paul, MN, CRE#1310 (237 - St. Paul - Battle Creek - 1310) US Bank Wifi",https://my.matterport.com/show/?m=ZkdKFdiA2Do,כן
17-04-2024,.dwg,Long,$85,"US Bank St Paul, MN, CRE #1460 (140 - St. Paul - Highland - 1460) US Bank Wifi",https://my.matterport.com/show/?m=nm4AFywyrAm,כן
17-04-2024,.dwg,Long,$150,"US Bank St Paul, MN, CRE #1773 (723 - West St. Paul - South Robert - 1773) US Bank Wifi",https://my.matterport.com/show/?m=v2HU5rSqceH,כן
16-04-2024,.dwg,Long,$200,"Rent-A-Center Huntsville, TX - Rent-A-Center #02253",https://my.matterport.com/show/?m=eFgBbBJXgVc,כן
16-04-2024,.dwg,Long,$850,MD Builders Mercy Medical Plaza - 3941 J Street,https://my.matterport.com/show/?m=PPpMiJsnevE,כן
17-04-2024,.dwg,Long,$170,"US Bank Hugo, MN, CRE #1752 (2505 - Hugo - Forest Blvd - 1752) US Bank Wifi",https://my.matterport.com/show/?m=uJRpjv1EAMB,כן
17-04-2024,.dwg,Long,$190,"US Bank Circle Pines, MN, CRE #1745 (2497 - Circle Pines - Centennial - 1745) US Bank Wifi",https://my.matterport.com/show/?m=RyUfyxQacqE,כן
17-04-2024,.dwg,Long,$85,"US Bank Bloomington, MN, CRE #1660 (980 - Bloomington - West - 1660) US Bank Wifi",https://my.matterport.com/show/?m=aJrWd2snrgf,כן
17-04-2024,.dwg,Long,$85,"US Bank Roseburg, OR, CRE #8659 (3222 - Roseburg - Garden Valley - 8659) US Bank Wifi",https://my.matterport.com/models/kkqMthxVWTU,כן
17-04-2024,.dwg,Long,$85,"US Bank Burnsville, MN, CRE #1345 (119 - Burnsville - W Cty Road 42 - 1345) US Bank Wifi",https://my.matterport.com/show/?m=GNiXc2U12C8,כן
17-04-2024,.dwg,Long,$150,"Self Esteem Brands Thief River Falls, MN - Self Esteem Brands (Anytime Fitness) #414",https://my.matterport.com/show/?m=CMHWneakMzo,כן
17-04-2024,.dwg,Long,$125,"US Bank Minnetonka, MN, CRE #1541 (141 - Minnetonka - Hwy 7 - 1541) US Bank Wifi",https://my.matterport.com/show/?m=CAcBa8hTxSR,כן
19-04-2024,.dwg,Long,$200,"Rent-A-Center Chanute, KS - Rent-A-Center #03696",https://my.matterport.com/show/?m=xCzFYxLhSxq,כן
19-04-2024,.dwg,Long,$150,"Self Esteem Jonesboro, LA - Self Esteem Brands (Anytime Fitness) #2844",https://my.matterport.com/show/?m=UNz55dpvVBX,כן
18-04-2024,.dwg,Long,$200,"Rent-A-Center Miami, FL - Rent-A-Center #01204",https://my.matterport.com/show/?m=HBgUcEYkysc,כן
19-04-2024,.dwg,Long,$200,"Rent-A-Center Greenville, NC - Rent-A-Center #01778",https://my.matterport.com/show/?m=qU4yMWXZj8N,כן
22-04-2024,.dwg,Long,$65,"Sbarro Rockaway, NJ - Sbarro (Rockaway Townsquare Mall)",https://my.matterport.com/show/?m=WE8J4emWZ2n,כן
22-04-2024,.dwg,Long,$200,"Rent-A-Center Great Bend, KS - Rent-A-Center #1697",https://my.matterport.com/show/?m=czxPymLz5hx,כן
22-04-2024,.dwg,Long,$600,"Burlington Philadelphia, PA - Burlington",https://my.matterport.com/show/?m=6AKM4HgEZQo,כן
22-04-2024,.dwg,Long,$600,"Burlington Kent, WA - Burlington",https://my.matterport.com/show/?m=fUsYnJQ7w4F,כן
23-04-2024,.dwg,Long,$65,"Fresh Dining Concepts Las Vegas, NV - Fresh Dining Concepts (Cinnabon) Ms .Fields",https://my.matterport.com/show/?m=7aC9V3QV7oq,כן
24-04-2024,.dwg,Long,$65,"Baskin Robbins Junction City, KS - Baskin Robbins PC 361475",https://my.matterport.com/show/?m=FDvqdaZnkde,כן
19-04-2024,.dwg,Long,$700,"Barnes & Noble College Ruston, LA - Barnes & Noble College (Louisiana Tech University)",https://my.matterport.com/show/?m=r84PEcDu6eR,כן
19-04-2024,.dwg,Long,$200,"Rent-A-Center Norman, OK - Rent-A-Center #02032",https://my.matterport.com/show/?m=6zawJxeo44g,כן
23-04-2024,.dwg,Long,$65,"Armocida Olympia, WA - Armocida (Sbarro)",https://my.matterport.com/show/?m=kZg8QBD7ggE,כן
24-04-2024,.dwg,Long,$130,"UPS Tucson, AZ - UPS #0765",https://my.matterport.com/show/?m=6ptQT9W72AS,כן
19-04-2024,.dwg,Long,$500,"Wings Etc Salem, VA - Wings Etc",https://my.matterport.com/show/?m=QJTzp3fcM5T,כן
19-04-2024,.dwg,Long,$300,"Rent-A-Center Winston-Salem, NC - Rent-A-Center #01820",https://my.matterport.com/show/?m=NCghSDJXzGP,כן
19-04-2024,.dwg,Long,$130,"UPS Oklahoma City, OK - UPS #4785",https://my.matterport.com/show/?m=CpJBQzetuBi,כן
23-04-2024,.dwg,Long,$150,"Self Esteem Brands Bridge City, TX - Self Esteem Brands (Anytime Fitness)",https://my.matterport.com/show/?m=LheoTRiP5Gi,כן
23-04-2024,.dwg,Long,$150,"Self Esteem Brands Vidor, TX - Self Esteem Brands (Anytime Fitness)",https://my.matterport.com/show/?m=jTRBj39NLz3,כן
23-04-2024,.dwg,Long,$150,"Self Esteem Brands Elma, WA - Self Esteem Brands (Anytime Fitness) #1346",https://my.matterport.com/show/?m=4u6LitjWLUH,כן
23-04-2024,.dwg,Long,$65,"Fresh Dining Concepts Waldorf, MD - Fresh Dining Concepts (Cinnabon) #CB6217",https://my.matterport.com/show/?m=qZ8RoinidKB,כן
23-04-2024,.dwg,Long,$130,"UPS Grass Valley, CA - UPS #5417",https://my.matterport.com/show/?m=CNvuH57PaJE,כן
23-04-2024,.dwg,Long,$250,"Fresenius Clinic #001436 - FKC Northern Alabama - 1311 N Memorial Pkwy, Suite 200, Huntsville, AL 35801",https://my.matterport.com/show/?m=dUQ9osSbRNf,כן
23-04-2024,.dwg,Long,$250,"Fresenius Clinic #001937 - FKC Parkway - 1311 N Memorial Pkwy, Suite 200, Huntsville, AL 35801",https://my.matterport.com/show/?m=vxNJhkWrbHV,כן
24-04-2024,.dwg,Long,$150,"Self Esteem Brands Platte City, MO - Self Esteem Brands (Anytime Fitness) #2185",https://my.matterport.com/show/?m=vock3eFyTVo,כן
24-04-2024,.dwg,Long,$200,"Rent-A-Center Fort Myers, FL - Rent-A-Center #01176",https://my.matterport.com/show/?m=k28CcnVbieZ,כן
24-04-2024,.dwg,Long,$250,Fresenius Clinic #A17939T - 1640 N 21st St Newark OH 43055 USA - 4-11-24,https://my.matterport.com/show/?m=reZUZqRcEAq,כן
24-04-2024,.dwg,Long,$200,"Rent-A-Center Kennewick, WA - Rent-A-Center #3760",https://my.matterport.com/show/?m=GqGXcN4bzZp,כן
24-04-2024,.dwg,Long,$300,Fresenius Clinic #100194 - 750 W High St Suite 100 Lima OH 45801 USA - 4-14-24,https://my.matterport.com/show/?m=rBNtzdudTRa,כן
24-04-2024,.dwg,Long,$300,Fresenius Clinic #006883 - 3201 Mall View Rd Bakersfield CA 93306 USA - 4-14-24,https://my.matterport.com/show/?m=zQ96mh7uMQe,כן
24-04-2024,.dwg,Long,$300,"Rent-A-Center Lexington, TN - Rent-A-Center 00551",https://my.matterport.com/show/?m=2FgNVMbx7fb,כן
24-04-2024,.dwg,Long,$200,"Rent-A-Center Nashville, TN - Rent-A-Center #00079",https://my.matterport.com/show/?m=yXJrDJTs3Qn,כן
24-04-2024,.dwg,Long,$65,"Baskin Robbins Los Angeles, CA - Baskin Robbins PC 353057",https://my.matterport.com/show/?m=PoGhXrHD7xB,כן
24-04-2024,.dwg,Long,$130,"UPS Burbank, CA - UPS #7874",https://my.matterport.com/show/?m=DytyUDa5csM,כן
24-04-2024,.dwg,Long,$130,"UPS Glendale, AZ - UPS #4480",https://my.matterport.com/show/?m=hujHYQACnCo,כן
24-04-2024,.dwg,Long,$65,"Hugo Boss Torrance, CA - Hugo Boss (Nordstrom) - Del Amo Fashion Center",https://my.matterport.com/show/?m=6eAQFYGHM6h,כן
24-04-2024,.dwg,Long,$250,Fresenius Clinic #101400 - 4800 Kawaihau Rd Kapaʻa HI 96746 USA - 4-16-24,https://my.matterport.com/show/?m=wpx5ofm8BYB,כן
25-04-2024,.dwg,Long,$130,"Fresh Dining Concepts San Jose, CA - Fresh Dining Concepts (Jamba) #556","https://my.matterport.com/show/?m=La6uxxLmhTf
https://my.matterport.com/show/?m=K3CbQZSH6pM",כן
19-04-2024,.dwg,Long,$165,"Odom Architects Lubbock, TX - Odom Architects",https://my.matterport.com/show/?m=oGqnmwfAmea,כן
19-04-2024,.dwg,Long,$530,"US Bank Bountiful, UT, CRE #5700 (Bountiful - 278 South) US Bank",https://my.matterport.com/show/?m=VC8BsucsYHm,כן
23-04-2024,.dwg,Long,$300,"Rent-A-Center New Martinsville, WV - Rent-A-Center #02819",https://my.matterport.com/show/?m=YLNodp5rEAE,כן
25-04-2024,.dwg,Long,$150,"Self Esteem Brands Sutherlin, OR - Self Esteem Brands (Anytime Fitness) #550",https://my.matterport.com/show/?m=u5TBh2rxDPt,כן
25-04-2024,.dwg,Long,$150,"Self Esteem Brands Hastings, MN - Self Esteem Brands (Anytime Fitness) #892",https://my.matterport.com/show/?m=N6w3KqBdq1D,כן
18-04-2024,.dwg,Long,$630,"US Bank Gresham, OR, CRE #8543 (Gresham - East Powell) US Bank",https://my.matterport.com/show/?m=dSjGPDcB84V,כן
23-04-2024,.dwg,Long,$130,"UPS Spring, TX - UPS #6394",https://my.matterport.com/show/?m=zN7QoiFRsGe,כן
24-04-2024,.dwg,Long,$150,"Kent Fayetteville, TN - Kent Kwik",https://my.matterport.com/show/?m=9pqpBL4Tvj5,כן
24-04-2024,.dwg,Long,$250,Fresenius Clinic #007318 - 2800 Kelly Rd suite 110 Warrington PA 18976 USA - 4-14-24,https://my.matterport.com/show/?m=NMEKfNFCx28,כן
24-04-2024,.dwg,Long,$250,"Fresenius Clinic # 001443 - 497 Winn Way, Ste 160, Decatur, GA 30030",https://my.matterport.com/show/?m=GeYGQCjxuQa,כן
24-04-2024,.dwg,Long,$200,"Rent-A-Center Garland, TX - Rent-A-Center #00496",https://my.matterport.com/show/?m=yyS9qmkhpXp,כן
25-04-2024,.dwg,Long,$130,"UPS Ontario, CA - UPS #19127",https://my.matterport.com/show/?m=2V8BnF9Ey3a,כן
25-04-2024,.dwg,Long,$130,"UPS Santa Monica, CA - UPS #0562",https://my.matterport.com/show/?m=jtym7QhT17i,כן
18-04-2024,.dwg,Long,$500,"US Bank Littleton, CO, CRE #5666 (Littleton - Southwest Plaza) US Bank",https://my.matterport.com/show/?m=scwxsDa4nnj,כן
25-04-2024,.dwg,Long,$300,"Rent-A-Center Kalispell, MT - Rent-A-Center #4038",https://my.matterport.com/show/?m=CvsRA4kHmG6,כן
25-04-2024,.dwg,Long,$65,"Baskin Robbins Memphis, TN - Baskin Robbins PC 339422",https://my.matterport.com/show/?m=M7QCvrMMR8z,כן
26-04-2024,.dwg,Long,$65,"Baskin-Robbins Baton Rouge, LA - Baskin Robins PC 353282",https://my.matterport.com/show/?m=PXU99MzZ4xw,כן
26-04-2024,.dwg,Long,$130,"UPS Richland, WA - UPS #4420",https://my.matterport.com/show/?m=bvoTon244f5,כן
26-04-2024,.dwg,Long,$130,"UPS Santa Barbara, CA - UPS #0023",https://my.matterport.com/show/?m=5Pnp3wF3w6z,כן
18-04-2024,.dwg,Long,$400,"US Bank Thornton, CO, CRE #5560 (Thornton) US Bank",https://my.matterport.com/show/?m=xtTCwpo1arL,כן
23-04-2024,.dwg,Long,$400,"Heartland St. Petersburg, FL - Aesthetic Integrative Dentistry (SN0102629 | 1470006)",https://my.matterport.com/show/?m=uEwaiAmiBjq,כן
18-04-2024,.dwg,Long,$530,"US Bank Soledad, CA, CRE #3429 - US Bank",https://my.matterport.com/show/?m=eDgr7BgS6gV,כן
26-04-2024,.dwg,Long,$65,"Baskin-Robbins Redwood City, CA - Baskin-Robbins PC 360101",https://my.matterport.com/show/?m=uHYf2jv5ft8,כן
24-04-2024,.dwg,Long,$65,"Baskin Robbins Salinas, CA - Baskin Robbins #360094",https://my.matterport.com/show/?m=WFhFbcgjzgN,כן
18-04-2024,.dwg,Long,$830,"US Bank Hollister, CA, CRE #2651 - US Bank",https://my.matterport.com/show/?m=hpTiZcMpRGB,כן
26-04-2024,.dwg,Long,$65,"Focus San Antonio, TX - Focus(Cinnabon) #1556",https://my.matterport.com/show/?m=zy2ufTR2Mrx,כן
30-04-2024,.dwg,Long,$150,"Self Esteem Brands North Liberty, IA - Self Esteem Brands (Anytime Fitness)",https://my.matterport.com/show/?m=1dRqNk6DScA,כן
30-04-2024,.dwg,Long,$150,"Self Esteem Brands Marion, IA - Self Esteem Brands (Anytime Fitness)",https://my.matterport.com/show/?m=Di8Mc7U7MmN,כן
30-04-2024,.dwg,Long,$130,"UPS Boulder, CO - UPS #6439 (Village Center)",https://my.matterport.com/show/?m=4yYF7bDdGbi,כן
30-04-2024,.dwg,Long,$150,"J.E. Foster Building Company Waterloo, IL - J.E. Foster Building Company (KFC/Taco Bell)",https://my.matterport.com/show/?m=a23ZFUjdsoF,כן
1-05-2024,.dwg,Long,$65,"Focus Auburn, MA - Focus (Auntie Anne’s) Auburn Mall",https://my.matterport.com/show/?m=ie11tPxpCN8,כן
30-04-2024,.dwg,Long,$65,"Baskin Robbins Sacramento, CA - Baskin Robbins PC 336866",https://my.matterport.com/show/?m=YeVWwo7y1w7,כן
24-04-2024,.dwg,Long,$150,"US Bank Incline Village, NV, CRE #5778 (3753 - Incline Village - Tahoe Blvd - 5778) US Bank Wifi","https://my.matterport.com/show/?m=cbmzRrWEgLt 
https://my.matterport.com/show/?m=JWLGDCmYpmh ",כן
18-04-2024,.dwg,Long,$630,"US Bank Denver, CO - CRE #5564 (Denver - South Federal) US Bank",https://my.matterport.com/show/?m=TipUat9MHye,כן
19-04-2024,.dwg,Long,$800,"US Bank Centennial, CO, CRE #5664 (Centennial - Cherry Hills) - US Bank",https://my.matterport.com/show/?m=9xzrPdBm9sf,כן
30-04-2024,.dwg,Long,$150,"Self Esteem Brands Iowa City, IA -Self Esteem Brands (Anytime Fitness) 613 Eastbury Dr",https://my.matterport.com/show/?m=yZbnJPXag4j,כן
30-04-2024,.dwg,Long,$150,"Self Esteem Brands Iowa City, IA - Self Esteem Brands (Anytime Fitness) 458 Hwy 1",https://my.matterport.com/show/?m=ra2u7dkTuZn,כן
24-04-2024,.dwg,Long,$300,Fresenius Clinic #008647 - 2391 Boswell Rd Chula Vista CA 91914 USA - 4-14-24,https://my.matterport.com/show/?m=sTBDkay8i6U,כן
30-04-2024,.dwg,Long,$150,"Self Esteem Brands Cedar Rapids, IA - Self Esteem Brands (Anytime Fitness)",https://my.matterport.com/show/?m=orALbjgKGDe,כן
1-05-2024,.dwg,Long,$65,"Fresh Dining Concepts San Antonio, TX - Fresh Dining Concepts (Jamba) Jj1113",https://my.matterport.com/show/?m=QczpZM2amY4,כן
1-05-2024,.dwg,Long,$130,"UPS Lakewood, WA - UPS #7972",https://my.matterport.com/show/?m=u888TGuFj1X,כן
1-05-2024,.dwg,Long,$150,"Heartland Noblesville, IN - SN0101162",https://my.matterport.com/show/?m=QczpZM2amY4,כן
1-05-2024,.dwg,Long,$150,"Self Esteem Brands Delhi, LA - Self Esteem Brands (Anytime Fitness) #5301",https://my.matterport.com/show/?m=wceKDe2194T,כן
1-05-2024,.dwg,Long,$65,"Focus West Palm Beach, FL - Focus(Carvel)",https://my.matterport.com/show/?m=UD2Ndh4ES6f,כן
23-04-2024,.dwg,Long,$730,"US Bank Portland, OR, CRE #8607 (3193 - Portland - 39th & Salmon - 8607) US Bank",https://my.matterport.com/show/?m=xKjJkdXuq1U,כן
1-05-2024,.dwg,Long,$350,"Flynn Nashville, TN - Flynn (Pizza Hut) #038279- 4379",https://my.matterport.com/show/?m=8oJKtBTfLpE,כן
1-05-2024,.dwg,Long,$350,"Odom Architects San Augustine, TX - Odom Architects",https://my.matterport.com/show/?m=PowXoPpFDDF,כן
1-05-2024,.dwg,Long,$350,KBP Herkimer NY - KBP (KT) G135350,https://my.matterport.com/show/?m=z25KmKCBegn,כן
2-05-2024,.dwg,Long,$130,"UPS Kennewick, WA - UPS #5727",https://my.matterport.com/show/?m=qUze4q7e1k6,כן
2-05-2024,.dwg,Long,$130,"UPS Chatsworth, CA - UPS #4934",https://my.matterport.com/show/?m=JL2fZ9GWnZQ,כן
2-05-2024,.dwg,Long,$350,"Flynn Collinsville, IL - Flynn(Taco Bell)",https://my.matterport.com/show/?m=DUS2PvCi7oQ,כן
2-05-2024,.dwg,Long,$65,"GoTo Foods Kennewick, WA - GoTo Foods (Cinnabon) 0003",https://my.matterport.com/show/?m=fo9Nbzc8kmc,כן
2-05-2024,.dwg,Long,$250,Fresenius Clinic #101047 - 13501 SW 268th St Homestead FL 33032 USA - 4-30-24,https://my.matterport.com/show/?m=RdKauNZAWHE,כן
24-04-2024,.dwg,Long,$930,"US Bank Lakewood, CO - CRE #5636 - Lakewood - Carr & DU - US Bank",https://my.matterport.com/show/?m=Q4C7rBm2uXc,כן
30-04-2024,.dwg,Long,$150,"Self Esteem Brands Davenport, IA - Self Esteem Brands (Anytime Fitness)",https://my.matterport.com/show/?m=9FnLSoySCKZ,כן
1-05-2024,.dwg,Long,$250,Fresenius Clinic #6394 - 7631 Wilson Blvd Columbia SC 29203 USA - 4-28-24,https://my.matterport.com/show/?m=ie11tPxpCN8,כן
3-05-2024,.dwg,Long,$200,"US Bank Plymouth, MN, CRE #1580 (118 - Plymouth - Main - 1580) US Bank Wifi",https://my.matterport.com/show/?m=5BVVyV88B1V,כן
3-05-2024,.dwg,Long,$150,"US Bank Freeland, WA, CRE #8218 (3350 - Freeland - Harbor Ave - 8218) US Bank Wifi",https://my.matterport.com/show/?m=VYE7Krv4KU7,כן
3-05-2024,.dwg,Long,$420,"US Bank Ames, IA, CRE #3612 (1267 - Ames - Main Street - 3612) US Bank Wifi",https://my.matterport.com/show/?m=PbvAJTKTgXi,כן
5-03-2024,.dwg,Long,$150,"US Bank Kennewick, WA, CRE #8231 (3511 - Kennewick - Columbia Center - 8231) US Bank Wifi",https://my.matterport.com/show/?m=HinkVKE3tBj,כן
5-03-2024,.dwg,Long,$195,"GoTo Food Manhattan, NY - GoTo Foods (Carvel)",https://my.matterport.com/show/?m=YcTPAN8HDvf,כן
2-05-2024,.dwg,Long,$370,"US Bank Saint Paul, MN, CRE#1690 (Shoreview 2024 Brand Refresh Investment) US Bank Premium",https://my.matterport.com/show/?m=T91ssJ6zhE4,כן
2-05-2024,.dwg,Long,$370,"US Bank Little Canada, MN, CRE#1510 (Little Canada 2024 Brand Refresh Investment) US Bank Premium",https://my.matterport.com/show/?m=aaTtiE9V29i,כן
2-05-2024,.dwg,Long,$370,"US Bank Lakeville, MN, CRE#1789 (Lakeville 2024 Brand Refresh Investment) US Bank Premium",https://my.matterport.com/show/?m=sty42ihE5ES,כן
3-05-2024,.dwg,Long,$130,"US Bank New Prague, MN, CRE #3342 (151 - New Prague - 3342) US Bank Wifi",https://my.matterport.com/show/?m=UwiCA8Qqkrz,כן
3-05-2024,.dwg,Long,$125,"US Bank Minneapolis, MN, CRE #1846 (721 - Minneapolis - University - 1846) US Bank Wifi",https://my.matterport.com/show/?m=rSYzLSzwBMq,כן
3-05-2024,.dwg,Long,$85,"US Bank Brooklyn Park, MN, CRE #1341 (146 - Brooklyn Park - 1341) US Bank Wifi",https://my.matterport.com/show/?m=AiUyqMHMVHT,כן
3-05-2024,.dwg,Long,$125,"US Bank Evergreen, CO, CRE #5626 (328 - Evergreen - 5626) US Bank Wifi",https://my.matterport.com/show/?m=4Aq8Xm62BWF,כן
3-05-2024,.dwg,Long,$150,"US Bank Oak Harbor, WA, CRE #8264 (3398 - Oak Harbor - NE Midway - 8264) US Bank Wifi","https://my.matterport.com/show/?m=3piYDsZwi6x 
https://my.matterport.com/show/?m=9S9v4jm6NmG ",כן
3-05-2024,.dwg,Long,$235,"US Bank Walla Walla, WA, CRE #8392 (3385 - Walla Walla - E Alder - 8392) US Bank Wifi",https://my.matterport.com/show/?m=7EhPEpiXazu,כן
3-05-2024,.dwg,Long,$370,"US Bank St. Paul, MN, CRE#1917 (Maplewood) US Bank Premium",https://my.matterport.com/show/?m=iN1NZyDvdi8,כן
7-05-2024,.dwg,Long,$65,"Baskin Robbins San Diego, CA - Baskin Robbins PC 361402",https://my.matterport.com/show/?m=eXvGeG6Q9g8,כן
7-05-2024,.dwg,Long,$450,Fresenius Clinic #N-A - 9729 Granger Road Garfield Heights OH 44125 - 4-29-24,https://my.matterport.com/show/?m=XM3wAEk5bDN,כן
7-05-2024,.dwg,Long,$370,"US Bank Minneapolis, MN, CRE#1440 (Plymouth Four Seasons) US Bank Premium",https://my.matterport.com/show/?m=TyXDqAtsuxT,כן
7-05-2024,.dwg,Long,$150,"Self Esteem Brands Los Alamos, NM - Self Esteem Brands (Anytime Fitness) #4843",https://my.matterport.com/show/?m=a5bLsQh7wUM,כן
7-05-2024,.dwg,Long,$150,"Self Esteem Brands Winona, MN - Self Esteem Brands (Anytime Fitness)",https://my.matterport.com/show/?m=B1ZBBoGHZkr,כן
7-05-2024,.dwg,Long,$150,Fresenius Clinic #100863 - 5681 Woerner Temple Rd Dublin OH 43016 USA - 5-3-24,https://my.matterport.com/show/?m=WRPqt8x2vEp,כן
8-05-2024,.dwg,Long,$65,"Papa John’s St Peters, MO - Papa John’s",https://my.matterport.com/show/?m=SJ82s7AFNZv,כן
8-05-2024,.dwg,Long,$150,"Heartland Festus, MO - Smile For Life Dental Care (SN0101022)",https://my.matterport.com/show/?m=dHjwp8k2YTQ,כן
8-05-2024,.dwg,Long,$150,"Self Esteem Brands Frisco, TX - Self Esteem Brands (Anytime Fitness) AF 2703 ABC 4168",https://my.matterport.com/show/?m=CXXGCazSw4g,כן
7-05-2024,.dwg,Long,$150,"Kent Fayetteville, TN - Kent",https://my.matterport.com/show/?m=95xA5yffGFb,כן
7-05-2024,.dwg,Long,$65,"GoTo Foods Fresno, CA - GoTo Foods (Jamba) 0492",https://my.matterport.com/show/?m=GEYG1dXWxfD,כן
7-05-2024,.dwg,Long,$130,"UPS Little Rock, AR - UPS #3775",https://my.matterport.com/show/?m=By3YXsJcaLA,כן
8-05-2024,.dwg,Long,$300,"It's Sugar Chesterfield, MO - It's Sugar",https://my.matterport.com/show/?m=8rUETjVVT8X,כן
8-05-2024,.dwg,Long,$65,"Baskin Robbins Cathedral City, CA - Baskin Robbins PC 362112",https://my.matterport.com/show/?m=8KrC2xHqZu9,כן
8-05-2024,.dwg,Long,$65,"GoTo Foods Pensacola, FL - GoTo Foods(Cinnabon) 0161",https://my.matterport.com/show/?m=qkqdmBzyf7K,כן
8-05-2024,.dwg,Long,$300,"It's Sugar Schaumburg, IL - It's Sugar",https://my.matterport.com/show/?m=q1SBdsY2sbK,כן
7-05-2024,.dwg,Long,$130,"UPS Phoenix, AZ - UPS #2460",https://my.matterport.com/show/?m=fYxp5xdqGeb,כן
7-05-2024,.dwg,Long,$130,"UPS Sioux Falls, SD - UPS #2994",https://my.matterport.com/show/?m=s6KMSvDS3o4,כן
7-05-2024,.dwg,Long,$300,"US Bank Minneapolis, MN, CRE#1660 (West Bloomington 2024 Brand Refresh Investment) US Bank Premium",https://my.matterport.com/show/?m=yfMx11VVmMK,כן
7-05-2024,.dwg,Long,$130,"UPS Phoenix, AZ - UPS #2780",https://my.matterport.com/show/?m=eYz1z2k8eqr,כן
9-05-2024,.dwg,Long,$150,"Self Esteem Brands Lynden, WA - Self Esteem Brands (Anytime Fitness) #3107",https://my.matterport.com/show/?m=jEZKLjEcBJr,כן
9-05-2024,.dwg,Long,$130,"UPS Tulalip, WA - UPS #4334",https://my.matterport.com/show/?m=Co1Ljg77uSM,כן
7-05-2024,.dwg,Long,$500,"US Bank Minnetonka, MN, CRE#1541 (Minnetonka Hwy7 2024 Brand Refresh Investment) US Bank Premium",https://my.matterport.com/show/?m=qNCvmXQx3bp,כן
9-05-2024,.dwg,Long,$65,"Baskin Robbin Houston, TX - Baskin Robbins PC#360489",https://my.matterport.com/show/?m=T328a3LfLT8,כן
10-05-2024,.dwg,Long,$100,"Papa John's Brownsburg, IN - Papa John's",https://my.matterport.com/show/?m=mdjP9ZZUio6,כן
7-05-2024,.dwg,Long,$530,"US Bank St Paul, MN, CRE#1773 (West St. Paul - South Robert - 2024 Brand Refresh Investment) US Bank Premium",https://my.matterport.com/show/?m=y3YTtmVjMrE,כן
10-05-2024,.dwg,Long,$130,UPS Little Rock AR - UPS #5902,https://my.matterport.com/show/?m=tVYyacQRiUY,כן
10-05-2024,.dwg,Long,$65,"Baskin Robbins Fresno, CA - Baskin Robbins PC 353818",https://my.matterport.com/show/?m=K2TFe3qu57G,כן
10-05-2024,.dwg,Long,$130,"UPS Reno, NV - UPS",https://my.matterport.com/show/?m=9eDf7WP77iB,כן
10-05-2024,.dwg,Long,$130,"UPS Great Falls, MT - UPS #2116",https://my.matterport.com/show/?m=EEUUBgg2Y4q,כן
10-05-2024,.rvt,Abhi,$250,"Maverik Flagstaff, AZ - Maverik #290",https://my.matterport.com/show/?m=8jUE9fd1emQ,כן
10-05-2024,.rvt,Abhi,$250,"Maverik Salt Lake City, UT - Maverik #327",https://my.matterport.com/show/?m=WndLhayDCk2,כן
7-05-2024,.dwg,Long,$350,KBP Buffalo NY  - KBP(Taco Bell) 39996,https://my.matterport.com/show/?m=hd4n9zXAgHm,כן
10-05-2024,.dwg,Long,$65,"Baskin Robbins Los Angeles, CA - Baskin Robbins PC 361374",https://my.matterport.com/show/?m=UGiBpDo3Zjd,כן
7-05-2024,.dwg,Long,$250,Fresenius Clinic #7543 - 1508 Sheridan Dr Buffalo NY 14217 USA - 5-1-24,https://my.matterport.com/show/?m=ZLkrvRy419d,כן
9-05-2024,.dwg,Long,$350,"Dollar Tree Houston, TX - Dollar Tree #2881",https://my.matterport.com/show/?m=H1Z96ZyQvUB,כן
9-05-2024,.dwg,Long,$300,"Dollar Tree Houston, TX - Dollar Tree #2874",https://my.matterport.com/show/?m=mRkNVMCc8QM,כן
9-05-2024,.dwg,Long,$200,"Dollar Tree Houston, TX - Dollar Tree #2883",https://my.matterport.com/show/?m=odmu4cXS3xu,כן
9-05-2024,.dwg,Long,$350,"Dollar Tree Houston, TX - Dollar Tree #2814",https://my.matterport.com/show/?m=tqdDjvLqG9H,כן
7-05-2024,.dwg,Long,$350,"KBP Santa Fe, NM - KBP(Taco Bell) #39929 - Promenade Blvd",https://my.matterport.com/show/?m=mYz2rYif9EB,כן
7-05-2024,.dwg,Long,"$1,000","Brinker Schaumburg, IL - Brinker (Maggiano's) #77",https://my.matterport.com/show/?m=Mnsgmev4BsZ,כן
7-05-2024,.dwg,Long,$350,"Flynn Brighton, CO - Flynn (Pizza Hut) 038219 – 4829",https://my.matterport.com/show/?m=34fhmYV5fg7,כן
10-05-2024,.dwg,Long,$65,"GoTo Foods Indiana, PA - GoTo Foods (Auntie Anne's) AA-PA-171",https://my.matterport.com/show/?m=FdeKcBqZ4gg,כן
10-05-2024,.dwg,Long,$350,"KBP Port St. Lucie, FL - KBP (KT) G135265",https://my.matterport.com/show/?m=mFc8tjiC8RC,כן
7-05-2024,.dwg,Long,$350,"KBP Augusta, ME - KBP (KT) G135834",https://my.matterport.com/show/?m=wUdpQxBej5p,כן
9-05-2024,.dwg,Long,$600,"US Bank Wayzata, MN, CRE#1659 (Wayzata) US Bank Premium",https://my.matterport.com/show/?m=ayKunCmYthd,כן
13-05-2024,.dwg,Long,$125,Fresenius Clinic #8807 - 350 Q St Springfield OR 97477 USA - 05-05-24,https://my.matterport.com/show/?m=Hti49Md89YT,כן
13-05-2024,.dwg,Long,$65,"Baskin Robbins Sacramento, CA - Baskin Robbins PC 337480",https://my.matterport.com/show/?m=eNAYH7z9jjh,כן
13-05-2024,.dwg,Long,$65,"Baskin Robbins Silverdale, WA - Baskin Robbins PC 361858",https://my.matterport.com/show/?m=E8AkzFfyzZ6,כן
13-05-2024,.dwg,Long,$565,"USB Premium Forest Lake, MN, CRE#1430 (Forest Lake) US Bank Premium",https://my.matterport.com/show/?m=xCqweFNSeoW,כן
13-05-2024,.rvt,Abhi,$250,"Maverik Draper, UT - Maverik #304",https://my.matterport.com/show/?m=hV3aoUcF7Af,כן
9-05-2024,.rvt,Abhi,$250,"Wings Etc Salem, VA - Wings Etc",https://my.matterport.com/show/?m=QJTzp3fcM5T,כן
5-10-2024,.dwg,Long,$500,MD Builders Mercy Medical Plaza - 3941 J Street,https://my.matterport.com/show/?m=ddzbC8HUHDC,כן
14-05-2024,.dwg,Long,$100,"Papa John’s High Ridge, MO - Papa John’s",https://my.matterport.com/show/?m=wbPinCkyTwc,כן
13-05-2024,.dwg,Long,$250,Fresenius Clinic #7554 - 175 Commerce Dr Taylorsville NC 28681 USA -5-12-24,https://my.matterport.com/show/?m=oRBikDYdYoz,כן
9-05-2024,.dwg,Long,$350,"KBP Colorado Springs, CO - KBP(Taco Bell) #37390",https://my.matterport.com/show/?m=sNPA8PrrRZm,כן
9-05-2024,.dwg,Long,$350,"KBP Presque Isle, ME - KBP (KT) G135882",https://my.matterport.com/show/?m=axYrjZ1Eq4v,כן
9-05-2024,.dwg,Long,$350,"KBP Colorado Springs, CO - KBP(Taco Bell) #37394",https://my.matterport.com/show/?m=hd8BaoCFKn3,כן
14-05-2024,.dwg,Long,$265,"US Bank Milwaukee, WI, CRE #3981 (2122 - Milwaukee - Mitchell @ 10th - 3981) US Bank Wifi",https://my.matterport.com/show/?m=qavnJytiot1,כן
15-05-2024,.dwg,Long,"$1,800",MD Builders Mercy Medical South Plaza - 3939 J Street,https://my.matterport.com/show/?m=dVMFqqZvP9B,כן
16-05-2024,.dwg,Long,$170,"US Bank Dubuque, IA, CRE #3685 (1361 - Dubuque - West JFK - 3685) US Bank Wifi",https://my.matterport.com/show/?m=ADQhEbz3eYZ,כן
16-05-2024,.dwg,Long,$255,"US Bank Milwaukee, WI, CRE #3983 (2119 - Milwaukee - North @ 52nd - 3983) US Bank Wifi",https://my.matterport.com/show/?m=a6nk4Gyu5HB,כן
16-05-2024,.rvt,Abhi,$250,"Maverik Afton, WY - Maverik #355",https://my.matterport.com/show/?m=yrTbw2PGKb6,כן
9-05-2024,.dwg,Long,$350,"KBP Pueblo, CO - KBP(Taco Bell) #37405",https://my.matterport.com/show/?m=U8ypvN7QC1e,כן
9-05-2024,.dwg,Long,$350,"KBP Pueblo, CO - KBP(Taco Bell) #37409",https://my.matterport.com/show/?m=ufKVXNZYpdC,כן
10-05-2024,.dwg,Long,$750,Fresenius Clinic #7178 - 6921 La Tijera Blvd Los Angeles CA 90045 USA - 05-07-24,"https://my.matterport.com/show/?m=TvdqNqfQGSo 
https://my.matterport.com/show/?m=DKwnVZQF4wB ",כן
14-05-2024,.dwg,Long,$130,"US Bank Longmont, CO, CRE #5642 (349 - Longmont - Convenience Bank - 5642) US Bank Wifi",https://my.matterport.com/show/?m=ipBzPUi8DqE,כן
14-05-2024,.dwg,Long,$380,"US Bank Boone, IA, CRE #3624 (9333 - Boone - Story Street - 3624) US Bank Wifi",https://my.matterport.com/show/?m=Jjp6uLssp2S,כן
14-05-2024,.dwg,Long,$85,"US Bank Port Townsend, WA, CRE #8276 (3377 - Port Townsend - Water Street - 8276) US Bank Wifi",https://my.matterport.com/show/?m=BF35XsLuqfQ,כן
14-05-2024,.dwg,Long,$150,"US Bank Sequim, WA, CRE #8341 (3352 - Sequim - Washington & DU - 8341) US Bank Wifi","https://my.matterport.com/show/?m=ApEQF1gc17Z
https://my.matterport.com/show/?m=cUY4ALH2T3G ",כן
14-05-2024,.dwg,Long,$150,"US Bank Richland, WA, CRE #8294 (3379 - Richland - Jadwin - 8294) US Bank Wifi",https://my.matterport.com/show/?m=W6uNRhRjVH2,כן
16-05-2024,.dwg,Long,$85,"US Bank Prairie Village, KS, CRE #6890 (9256 - Prairie Village - 95th Street - 6890) US Bank Wifi",https://my.matterport.com/show/?m=g1S9HVT8YiL,כן
16-05-2024,.dwg,Long,$255,"US Bank Kansas City, KS, CRE #6429 (9246 - Kansas City - Central Avenue - 6429) US Bank Wifi",https://my.matterport.com/show/?m=UC9ipy7cf9j,כן
16-05-2024,.dwg,Long,$190,"US Bank Milwaukee, WI, CRE #3978 (2090 - Milwaukee - Howell @ Norwich - 3978) US Bank Wifi",https://my.matterport.com/show/?m=bNvZEnwboKW,כן
16-05-2024,.dwg,Long,$300,"Dollar Tree Dallas, TX - Dollar Tree #2876",https://my.matterport.com/show/?m=rxhB8M1ZAq4,כן
16-05-2024,.rvt,Abhi,$250,"Maverik Pocatello, ID - Maverik #194",https://my.matterport.com/show/?m=93oXHSeWhjV,כן
16-05-2024,.dwg,Long,$500,"US Bank Wisconsin Rapids, WI, CRE#4056 (1238 - Wisconsin Rapids - Two Mile - 4056) US Bank Premium",https://my.matterport.com/show/?m=s6fkPZsaycC,כן
9-05-2024,.dwg,Long,$350,"KBP Colorado Springs, CO - KBP(Taco Bell) #37399",https://my.matterport.com/show/?m=TFJerfws9om,כן
14-05-2024,.dwg,Long,$190,"US Bank Estes Park, CO, CRE #5126 (7023 - Estes Park - Elkhorn Ave - 5126) US Bank Wifi","https://my.matterport.com/show/?m=CeiBq44A89f 
https://my.matterport.com/show/?m=DBtQ7ao6jU2 
https://my.matterport.com/show/?m=MpZmqbp2QjB ",כן
14-05-2024,.dwg,Long,$235,"US Bank Ames, IA, CRE #3615 (1272 - Ames - University - 3615) US Bank Wifi",https://my.matterport.com/show/?m=Tdfsk8BeAin,כן
17-05-2024,.dwg,Long,$65,"GoTo Foods Inglewood, CA - GoTo Foods (Jamba) 1596",https://my.matterport.com/show/?m=NxXhDa8Cdo5,כן
17-05-2024,.dwg,Long,$65,"Baskin Robbins Salinas, CA - Baskin Robbins - PC #361176",https://my.matterport.com/show/?m=GbGGmRYxy6S,כן
14-05-2024,.dwg,Long,$125,"US Bank Hermiston, OR, CRE #8546 (3133 - Hermiston - SE Second - 8546) US Bank Wifi",https://my.matterport.com/show/?m=UKyUjboC4Nm,כן
14-05-2024,.dwg,Long,$235,"US Bank Hoquiam, WA, CRE #8224 (3327 - Hoquiam - Simpson - 8224) US Bank Wifi","https://my.matterport.com/show/?m=8mzN6UH73Kz
https://my.matterport.com/show/?m=vL4dWtr3TCB ",כן
15-05-2024,.dwg,Long,$400,"US Bank Concord, CA, CRE#9288 (Concord – Diamond ) US Bank Premium",https://my.matterport.com/show/?m=fMVRT5qmdFL,כן
17-05-2024,.dwg,Long,$350,"Sun Holdings Opelousas, LA - Sun Holdings (Papa John’s)",https://my.matterport.com/show/?m=nLQNzNeQ8Mv,כן
20-05-2024,.dwg,Long,$300,"Dollar Tree San Luis Obispo, CA - Dollar Tree  #0401",https://my.matterport.com/show/?m=SajBUnzuVBR,כן
16-05-2024,.dwg,Long,$130,"UPS Houston, TX - UPS #6638",https://my.matterport.com/show/?m=WDwSYnwGsyz,כן
17-05-2024,.dwg,Long,$130,"UPS San Diego, CA - UPS #19417",https://my.matterport.com/show/?m=8xizWqYyJba,כן
17-05-2024,.dwg,Long,$190,"US Bank Blue Springs, MO, CRE #6349 (9231 - Blue Springs - West Main - 6349) US Bank Wifi",https://my.matterport.com/show/?m=vkHcgh7yiKt,כן
17-05-2024,.dwg,Long,$170,"US Bank Independence, MO, CRE #6409 (9230 - Independence - Hwy 24 - 6409) US Bank Wifi",https://my.matterport.com/show/?m=medrUzbbkQe,כן
17-05-2024,.dwg,Long,$125,"US Bank Independence, MO, CRE #6408 (9205 - Independence - E. 39th - 6408) US Bank Wifi",https://my.matterport.com/show/?m=DcXfWx7S4fL,כן
17-05-2024,.dwg,Long,$170,"US Bank Kansas City, MO, CRE #6425 (9125 - Kansas City - Blue Ridge - 6425) US Bank Wifi",https://my.matterport.com/show/?m=grv3TJw2vzL,כן
17-05-2024,.dwg,Long,$255,"US Bank Raytown, MO, CRE #6492 (9118 - Raytown - Gregory - 6492) US Bank Wifi",https://my.matterport.com/show/?m=dyU6RpY7rEn,כן
17-05-2024,.dwg,Long,$255,"US Bank Blue Springs, MO, CRE#6348 (9227 - Blue Springs - North Hwy 7 - 6348) US Bank Wifi",https://my.matterport.com/show/?m=M98yQ8t3Kdh,כן
21-05-2024,.dwg,Long,$65,"Fresh Dining Concepts Honolulu, HI - Fresh Dining Concepts (Jamba) JJ183",https://my.matterport.com/show/?m=Ys6dxgefQgb,כן
21-05-2024,.dwg,Long,$130,"UPS Agoura Hills, CA - UPS #6653",https://my.matterport.com/show/?m=PsxsUx3mixx,כן
21-05-2024,.dwg,Long,$130,"UPS Albuquerque, NM - UPS #6336",https://my.matterport.com/show/?m=HH2bSasSJHj,כן
21-05-2024,.dwg,Long,$150,"Self Esteem Brand Phoenix, AZ - Self Esteem Brands (Anytime Fitness) #04058",https://my.matterport.com/show/?m=4aZwBgKEQz4,כן
21-05-2024,.dwg,Long,$65,"Baskin Robbins Greenbelt, MD - Baskin Robbins PC 361224",https://my.matterport.com/show/?m=hinj5AVcBzW,כן
22-05-2024,.dwg,Long,$65,"Propelled Brands Lynn Haven, FL - Propelled Brands (Fast Signs)",https://my.matterport.com/show/?m=mG9jgCKXMsa,כן
14-05-2024,.dwg,Long,$300,"US Bank Premium La Crescenta-Montrose, CA, CRE#8874 (La Crescenta – 2649 Foothill) US Bank Premium",https://my.matterport.com/show/?m=Ybnfd6oFBaJ,כן
16-05-2024,.dwg,Long,$630,"US Bank Alameda, CA, CRE#9064 (Alameda Main Santa Clara E Off) US Bank Premium",https://my.matterport.com/show/?m=TWxeDbTCg8g,כן
20-05-2024,.dwg,Long,$130,"US Bank Waterloo, IA, CRE #3736 (1333 - Waterloo - Kimball - 3736) US Bank Wifi",https://my.matterport.com/show/?m=xosp8bZ74Yc,כן
20-05-2024,.dwg,Long,$360,"US Bank Bellingham, WA, CRE#8187 (3478 - Bellingham - West Holly - 8187) US Bank Wifi","https://my.matterport.com/show/?m=V2C8h5fhayK
https://my.matterport.com/show/?m=wLyJYWxYnVA ",כן
20-05-2024,.dwg,Long,$85,"US Bank Wenatchee, WA, CRE #8394 (3419 - Wenatchee - N Mission - 8394) US Bank Wifi",https://my.matterport.com/show/?m=MPxSsAY35Qq,כן
20-05-2024,.dwg,Long,$150,"US Bank Tonasket, WA, CRE #8381 (3399 - Tonasket - Fourth & Whitcomb - 8381) US Bank Wifi",https://my.matterport.com/show/?m=7w1mBCMCh8d,כן
20-05-2024,.dwg,Long,$255,"US Bank Cedar Falls, IA, CRE #3629 (1328 - Cedar Falls - Washington St - 3629) US Bank Wifi",https://my.matterport.com/show/?m=fJ3cYbYroaN,כן
20-05-2024,.dwg,Long,$215,"US Bank Church Hill, TN, CRE#2802 (1719 - Church Hill - East Main - 2802) US Bank Wifi",https://my.matterport.com/show/?m=vYpNPjhHucQ,כן
21-05-2024,.dwg,Long,$130,"UPS Fontana, CA - UPS #5225",https://my.matterport.com/show/?m=2CmWdcqeYzu,כן
21-05-2024,.dwg,Long,$130,"UPS Phoenix, AZ - UPS #4960",https://my.matterport.com/show/?m=xpZytE4TxLi,כן
16-05-2024,.dwg,Long,$630,"US Bank Fremont, CA, CRE#9295 (Fremont Blvd) US Bank Premium",https://my.matterport.com/show/?m=1QGQx9RLwxL,כן
21-05-2024,.dwg,Long,$170,"US Bank Ferndale, WA, CRE#8215 (3345 - Ferndale - Main - 8215) US Bank Wifi",https://my.matterport.com/show/?m=YouuMp1WGzG,כן
21-05-2024,.dwg,Long,$85,"US Bank Fargo, ND, CRE #7329 (696 - Fargo - 7329) US Bank Wifi",https://my.matterport.com/show/?m=NFToQrCrv4B,כן
21-05-2024,.dwg,Long,$85,"US Bank Grand Forks, ND, CRE #7090 (698 - Grand Forks - 13th & Columbia - 7090) US Bank Wifi",https://my.matterport.com/show/?m=wkM7hnri1BE,כן
21-05-2024,.dwg,Long,$125,"US Bank Ashland City, TN, CRE #2800 (1718 - Ashland City - Main Street - 2800) US Bank Wifi",https://my.matterport.com/show/?m=UcoBrbeuZE2,כן
16-05-2024,.dwg,Long,$500,"US Bank Irvine, CA, CRE#2657 (Irvine – The Square – MUB) US Bank Premium",https://my.matterport.com/show/?m=W3WXMebvr7u,כן
21-05-2024,.dwg,Long,$215,"US Bank Moses Lake, WA, CRE #8256 (3317 - Moses Lake - E Third - 8256) US Bank Wifi",https://my.matterport.com/show/?m=hdZ97JGLfn2,כן
21-05-2024,.dwg,Long,$130,"US Bank Galena, IL, CRE #4185 (9379 - Galena - Gear Street Galena Sq - 4185) US Bank Wifi",https://my.matterport.com/show/?m=Df7iEEX8XVn,כן
21-05-2024,.dwg,Long,$85,"US Bank Sun City, AZ, CRE #7425 (4957 - Sun City - Bell Road - 7425) US Bank Wifi",https://my.matterport.com/show/?m=huTzhsCyCzM,כן
21-05-2024,.dwg,Long,$85,"US Bank Mesa, AZ, CRE #7511 (8655 - Mesa - One MacDonald Ctr - 7511) US Bank Wifi",https://my.matterport.com/show/?m=BribKMdDftf,כן
21-05-2024,.dwg,Long,$150,"US Bank Sedro-Woolley, WA, CRE#8339 (3480 - Sedro Woolley - Woodworth - 8339) US Bank Wifi",https://my.matterport.com/show/?m=J5MN6AEb4K6,כן
21-05-2024,.dwg,Long,$125,"US Bank Scottsdale, AZ, CRE #9590 (2601 - Scottsdale - Hayden Road - 9590) US Bank Wifi",https://my.matterport.com/show/?m=skduNRuXrT7,כן
16-05-2024,.dwg,Long,$400,"US Bank San Ysidro, CA, CRE#9346 (Las Americas) US Bank Premium",https://my.matterport.com/show/?m=CiPjYkazh11,כן
16-05-2024,.dwg,Long,$700,"US Bank Salinas, CA, CRE#2763 (Salinas S Main) US Bank Premium",https://my.matterport.com/show/?m=nsom2cAWdbn,כן
17-05-2024,.dwg,Long,$500,"US Bank Fresno, CA, CRE#2627 (Fresno – Shaw & Marks ) US Bank Premium",https://my.matterport.com/show/?m=9pp3JvpNpgm,כן
17-05-2024,.dwg,Long,$630,"US Bank Montclair, CA, CRE#9958 (Montclair – Central) US Bank Premium",https://my.matterport.com/show/?m=AHEcKR1u9sr,כן
22-05-2024,.dwg,Long,$150,"Self Esteem Brands New Orleans, LA - Self Esteem Brands (Anytime Fitness) #966",https://my.matterport.com/show/?m=79oiQx3b1gB,כן
22-05-2024,.dwg,Long,$85,"US Bank Dickson, TN, CRE #2822 (1722 - Dickson - College St - 2822) US Bank Wifi",https://my.matterport.com/show/?m=2nQDjeBLxPe,כן
22-05-2024,.dwg,Long,$255,"US Bank Warrensburg, MO, CRE#6577 (8698 - Warrensburg - North Maguire - 6577) US Bank Wifi",https://my.matterport.com/show/?m=JZzAcADNZK7,כן
22-05-2024,.dwg,Long,$65,"US Bank Fort Collins, CO, CRE#5632 (348 - Fort Collins - Horsetooth DU - 5632) US Bank Wifi",https://my.matterport.com/show/?m=NVYxqSMiJRJ,כן
22-05-2024,.dwg,Long,$85,"US Bank Salmon, ID, CRE#5942 (3633 - Salmon - Main - 5942) US Bank Wifi",https://my.matterport.com/show/?m=ZTkbhZBvc19,כן
22-05-2024,.dwg,Long,$85,"US Bank Muskego, WI, CRE#3994 (2167 - Muskego - Janesville - 3994) US Bank Wifi",https://my.matterport.com/show/?m=sv5fzCQdPPj,כן
22-05-2024,.dwg,Long,$170,"US Bank Othello, WA, CRE#8267 (3331 - Othello - E Main - 8267) US Bank Wifi",https://my.matterport.com/show/?m=LCtzKjknUur,כן
23-05-2024,.dwg,Long,$215,"US Bank Coos Bay, OR, CRE#8514 (3154 - Coos Bay - W Anderson - 8514) US Bank Wifi",https://my.matterport.com/show/?m=wTA8G36XbMP,כן
23-05-2024,.dwg,Long,$180,"US Bank Cheyenne, WY, CRE #8800 (706 - Cheyenne - Carey - 8800) US Bank Wifi",https://my.matterport.com/show/?m=Mx7souuQf2M,כן
23-05-2024,.dwg,Long,$125,"US Bank Gallatin, TN, CRE#2827 (1724 - Gallatin - Nashville Pike - 2827) US Bank Wifi",https://my.matterport.com/show/?m=cDGXvzvWHrr,כן
22-05-2024,.dwg,Long,$85,"US Bank New Berlin, WI, CRE#3996 (2158 - New Berlin - National Avenue - 3996) US Bank Wifi",https://my.matterport.com/show/?m=xdZjuZ5RjcD,כן
22-05-2024,.dwg,Long,$235,"US Bank Elm Grove, WI, CRE#3928 (2152 - Elm Grove - Elm Grove Road - 3928) US Bank Wifi",https://my.matterport.com/show/?m=t7DkDqiZSGm,כן
22-05-2024,.dwg,Long,$150,"US Bank Nashville, TN, CRE#2839 (1706 - Nashville - Bellevue Mall - 2839) US Bank Wifi",https://my.matterport.com/show/?m=j2kK6HqnREu,כן
23-05-2024,.dwg,Long,$380,"US Bank Newton, IA, CRE #3706 (9356 - Newton - West Second - 3706) US Bank Wifi",https://my.matterport.com/models/coS8wALFUz5,כן
23-05-2024,.dwg,Long,$85,"US Bank Hendersonville, TN, CRE#2829 (1725 - Hendersonville - East Main - 2829) US Bank Wifi",https://my.matterport.com/show/?m=GdBGGASeJ33,כן
23-05-2024,.dwg,Long,$500,"Chipman Design Manhattan, NY - Chipman Design (Ulta)",https://my.matterport.com/show/?m=E3kwpg6qcVe,כן
17-05-2024,.dwg,Long,$450,"US Bank Ontario, CA, CRE#9959 (Ontario – North Euclid) US Bank Premium",https://my.matterport.com/show/?m=2iHDcX9QUrL,כן
21-05-2024,.dwg,Long,$170,"US Bank Fargo, ND, CRE #7324 (735 - Fargo - West Acres & Drive-Up - 7324) US Bank Wifi","https://my.matterport.com/show/?m=UoTRGErQXHL
https://my.matterport.com/show/?m=CtVzwYT2B6M",כן
21-05-2024,.dwg,Long,$150,"US Bank Milwaukee, WI, CRE #3990 (2125 - Milwaukee - Wisconsin @ 26th - 3990) US Bank Wifi",https://my.matterport.com/show/?m=oRM1AthRcF5,כן
21-05-2024,.dwg,Long,$85,"US Bank Surprise, AZ, CRE #7504 (8654 - Surprise - Westpoint & Bell - 7504) US Bank Wifi",https://my.matterport.com/show/?m=XoejtbkQ9s3,כן
23-05-2024,.dwg,Long,$380,"US Bank Marshalltown, IA, CRE#3698 (9360 - Marshalltown - West Main - 3698) US Bank Wifi",https://my.matterport.com/show/?m=tDys3kXv7vb,כן
23-05-2024,.dwg,Long,$215,"US Bank Ellensburg, WA, CRE #8204 (3482 - Ellensburg - N. Pearl - 8204) US Bank Wifi",https://my.matterport.com/show/?m=oerWAQBCDcw,כן
23-05-2024,.dwg,Long,$190,"US Bank Sunnyside, WA, CRE #8364 (3412 - Sunnyside - 7th & Franklin - 8364) US Bank Wifi",https://my.matterport.com/show/?m=7bbVP4QBsRE,כן
23-05-2024,.dwg,Long,$130,"US Bank Cheyenne, WY, CRE#8818 (709 - Cheyenne - Frontier Mall - 8818) US Bank Wifi",https://my.matterport.com/show/?m=scHvXd2FZGP,כן
20-05-2024,.dwg,Long,$500,"US Bank Folsom, CA, CRE#9098 (Folsom – E. Bidwell) US Bank Premium",https://my.matterport.com/show/?m=u6wa5EVtpjt,כן
20-05-2024,.dwg,Long,$400,"US Bank San Diego, CA, CRE#2793 (San Diego – Del Mar Heights ) US Bank Premium",https://my.matterport.com/show/?m=PiJjQajdn5v,כן
20-05-2024,.dwg,Long,$300,"US Bank Maywood, CA, CRE#8891 (Maywood – E Slauson) US Bank Premium","https://my.matterport.com/show/?m=LaNosb6VTCJ 
https://my.matterport.com/show/?m=nvHNZK2TroZ ",כן
22-05-2024,.dwg,Long,$150,"US Bank Higginsville, MO, CRE#6405 (8713 - Higginsville - 19 & Main - 6405) US Bank Wifi",https://my.matterport.com/show/?m=DDLoRwFwPwU,כן
22-05-2024,.dwg,Long,$255,"US Bank Fort Collins, CO, CRE #5540 (264 - Fort Collins - Howes - 5540) US Bank Wifi",https://my.matterport.com/show/?m=hSzgBjn5DhA,כן
23-05-2024,.dwg,Long,$125,"US Bank Yakima, WA, CRE#8406 (3408 - Yakima - W Yakima - 8406) US Bank Wifi",https://my.matterport.com/show/?m=ayK7yZem7qF,כן
23-05-2024,.dwg,Long,$170,"US Bank Bayside, WI, CRE #3906 (2972 - Bayside - Brown Deer Rd - 3906) US Bank Wifi",https://my.matterport.com/show/?m=e7MoLyv3TrT,כן
28-05-2024,.dwg,Long,$170,"US Bank Cody, WY, CRE#8824 (715 - Cody - 8824) US Bank Wifi",https://my.matterport.com/show/?m=bL4oKPgL9Y9,כן
22-05-2024,.dwg,Long,$340,"US Bank Missoula, MT, CRE#8070 (586 - Missoula - Southside - 8070) US Bank Wifi",https://my.matterport.com/show/?m=nEtYxSCgfHN,כן
23-05-2024,.dwg,Long,$170,"US Bank Great Falls, MT, CRE#8014 (5259 - Great Falls - Northwest - 8014) US Bank Wifi",https://my.matterport.com/show/?m=xP2RrXjX3ms,כן
23-05-2024,.dwg,Long,$125,"US Bank Greendale, WI, CRE #3940 (2139 - Greendale - Southridge - 3940) US Bank Wifi",https://my.matterport.com/show/?m=6QdLFCjwqxu,כן
23-05-2024,.dwg,Long,$170,"US Bank Kenosha, WI, CRE #3950 (2212 - Kenosha - West - 3950) US Bank Wifi",https://my.matterport.com/show/?m=vfjTeMjuTXZ,כן
24-05-2024,.dwg,Long,$85,"US Bank Bozeman, MT, CRE #8011 (5263 - Bozeman - 19th Avenue - 8011) US Bank Wifi",https://my.matterport.com/show/?m=ieyYpX5RxHt,כן
24-05-2024,.dwg,Long,$170,"US Bank Grandview, WA, CRE #8221 (3375 - Grandview - E. Second - 8221) US Bank Wifi",https://my.matterport.com/show/?m=BPwjPSwmaU9,כן
21-05-2024,.dwg,Long,$65,"GoTo Foods Myrtle Beach, SC - GoTo Foods (Cinnabon) TN 0124",https://my.matterport.com/show/?m=J7PkBksVyim,כן
22-05-2024,.dwg,Long,$180,"US Bank Milwaukee, WI, CRE#3969 (2146 - Milwaukee - Capitol @ Lisbon - 3969) US Bank Wifi",https://my.matterport.com/show/?m=5bv7sAuu9XT,כן
24-05-2024,.dwg,Long,$85,"US Bank Tullahoma, TN, CRE#2867 (276 - Tullahoma - Jackson - 2867) US Bank Wifi",https://my.matterport.com/show/?m=wT8SAqVUgbC,כן
28-05-2024,.dwg,Long,$65,"Home Hardware Revelstoke, BC - Home Hardware - Warehouse",https://my.matterport.com/show/?m=yY8Kv3xonWu,כן
22-05-2024,.dwg,Long,$630,"US Bank Santa Fe Springs, CA, CRE#9216 (Santa Fe Springs Telegraph) US Bank Premium",https://my.matterport.com/show/?m=xD9Sv9guNjS,כן
23-05-2024,.dwg,Long,$150,"US Bank Laramie, WY, CRE #8828 (710 - Laramie - 8828) US Bank Wifi",https://my.matterport.com/show/?m=36AXjTgocyh,כן
23-05-2024,.dwg,Long,$125,"US Bank Glendale, WI, CRE #3935 (2066 - Glendale - Bayshore - 3935) US Bank Wifi",https://my.matterport.com/show/?m=216KZ9raGwt,כן
24-05-2024,.dwg,Long,$85,"US Bank Manchester, TN, CRE #2833 (279 - Manchester - Hillsboro - 2833) US Bank Wifi",https://my.matterport.com/show/?m=TWypQLvG5Pe,כן
24-05-2024,.dwg,Long,$85,"US Bank Germantown, WI, CRE#3934 (2096 - Germantown - City Hwy Q - 3934) US Bank Wifi",https://my.matterport.com/show/?m=GXHoxZFTkA6,כן
30-05-2024,.dwg,Long,$65,"Baskin Robbins Lake Elsinore, CA - Baskin Robbins PC 343909",https://my.matterport.com/show/?m=Z5NeABeMmBM,כן
22-05-2024,.dwg,Long,$760,"US Bank Downey, CA, CRE#9190 (Downey Main) US Bank Premium",https://my.matterport.com/show/?m=aRWHisb9bYc,כן
22-05-2024,.dwg,Long,$700,"US Bank Goleta, CA, CRE#2642 (Goleta Fairview MUB) US Bank Premium",https://my.matterport.com/show/?m=Vp5SBRCdibg,כן
23-05-2024,.dwg,Long,$215,"US Bank Pella, IA, CRE #3713 (9321 - Pella - Broadway - 3713) US Bank Wifi",https://my.matterport.com/show/?m=997GsbYDWkX,כן
23-05-2024,.dwg,Long,$85,"US Bank Nashville, TN, CRE #2849 (1714 - Nashville - Murfreesboro Road - 2849) US Bank Wifi",https://my.matterport.com/show/?m=1Hn2akxbp3S,כן
29-05-2024,.dwg,Long,$350,"Sun Holdings East Peoria, IL - Sun Holdings (Arby's)",https://my.matterport.com/show/?m=gcABqC9QCWo,כן
20-05-2024,.dwg,Long,$500,"US Bank Lancaster, CA, CRE#9751 ( Lancaster – Valley Central) US Bank Premium",https://my.matterport.com/show/?m=ZhQKPjEmK2S,
22-05-2024,.dwg,Long,$130,"UPS Houston, TX - UPS #1719",https://my.matterport.com/show/?m=cNnwAdVDzYk,
22-05-2024,.dwg,Long,$350,"US Bank Tarzana, CA, CRE#8918 (Tarzana – 19500 Ventura) US Bank Premium",https://my.matterport.com/models/fgPbJL9jfvQ,
23-05-2024,.dwg,Long,$130,"US Bank Nashville, TN, CRE #2850 (1715 - Nashville - Nolensville Road - 2850) US Bank Wifi",https://my.matterport.com/show/?m=24idFxrKM5V,
24-05-2024,.dwg,Long,$640,"US Bank Great Falls, MT, CRE #8030 (500 - Great Falls - 8030) US Bank Wifi",https://my.matterport.com/show/?m=Lhz5n8iayKo,
24-05-2024,.dwg,Long,$700,"US Bank Paramount, CA, CRE#9270 (Paramount– Paramount Blvd) US Bank Premium",https://my.matterport.com/show/?m=1TdJje5tNmP,
29-05-2024,.dwg,Long,$130,"UPS Franklin, TN - UPS #9933",https://my.matterport.com/show/?m=3F84MtpUK3Z,
29-05-2024,.dwg,Long,$200,"UPS Vancouver, WA - UPS #6550",https://my.matterport.com/show/?m=7v7QTas3QLE,
29-05-2024,.dwg,Long,$130,"UPS Portland, OR - UPS #3506",https://my.matterport.com/show/?m=ZSbw6i5sfpF,
29-05-2024,.dwg,Long,$130,"UPS Victoria, TX - UPS #6666",https://my.matterport.com/show/?m=hPZjir5z3UM,
23-05-2024,.dwg,Long,$85,"US Bank Selah, WA, CRE#8340 (3463 - Selah - 1st Ave - 8340) US Bank Wifi",https://my.matterport.com/show/?m=7yFwYqggr48,
24-05-2024,.dwg,Long,$170,"US Bank Prosser, WA, CRE #8277 (3410 - Prosser - Meade - 8277) US Bank Wifi",https://my.matterport.com/show/?m=HwsZVS9Wft9,
24-05-2024,.dwg,Long,$630,"US Bank Westminster, CA, CRE#9276 (Westminster – Westminster Mall) US Bank Premium",https://my.matterport.com/show/?m=1Mp1ymM4DT4,
29-05-2024,.dwg,Long,$350,"Sun Holdings Peoria, IL - Sun Holdings (Arby's)",https://my.matterport.com/show/?m=LUWjukhfdqi,
29-05-2024,.dwg,Long,$350,"Sun Holdings Ottawa, IL - Sun Holdings (Arby's)",https://my.matterport.com/show/?m=QB3pvhd6fiW,
29-05-2024,.dwg,Long,$85,"US Bank Florence, OR, CRE #8536 (3259 - Florence - Hwy 101 - 8536) US Bank Wifi",https://my.matterport.com/show/?m=VXMNEka99VE,
29-05-2024,.dwg,Long,$130,"US Bank Hartford, WI, CRE#3942 (2078 - Hartford - Sumner - 3942) US Bank Wifi",https://my.matterport.com/show/?m=JbngKTqzEgr,
29-05-2024,.dwg,Long,$130,"US Bank Fayetteville, TN, CRE#2823 (1723 - Fayetteville - Main - 2823) US Bank Wifi",https://my.matterport.com/show/?m=XFkVpyKyQKB,
24-05-2024,.dwg,Long,$400,"US Bank Rancho Cucamonga, CA, CRE#9952 (Rancho Cucamonga Archibald (Alta Loma) US Bank Premium",https://my.matterport.com/show/?m=5urm3zJ5DC4,
29-05-2024,.dwg,Long,$350,"Sun Holdings Jacksonville, IL - Sun Holdings (Arby's)",https://my.matterport.com/show/?m=2trP7MxTDip,
29-05-2024,.dwg,Long,$130,"US Bank Mequon, WI, CRE#3967 (2063 - Mequon - Port Washington - 3967) US Bank Wifi",https://my.matterport.com/show/?m=fB5jzcn1SEf,
29-05-2024,.dwg,Long,$85,"US Bank Janesville, WI, CRE#3945 (2020 - Janesville - Milton - 3945) US Bank Wifi",https://my.matterport.com/show/?m=AHN9s7UPMXB,
29-05-2024,.dwg,Long,$150,"US Bank Delavan, WI, CRE#3920 (2234 - Delavan - East Geneva - 3920) US Bank Wifi",https://my.matterport.com/show/?m=LvgAtAKgc8m,
29-05-2024,.dwg,Long,$85,"US Bank Sun Prairie, WI, CRE#4028 (2024 - Sun Prairie - Windsor - 4028) US Bank Wifi",https://my.matterport.com/show/?m=6U1GNd3GN7d,
29-05-2024,.dwg,Long,$130,"US Bank Des Moines, IA, CRE#3667 (2435 - Des Moines - East Euclid - 3667) US Bank Wifi",https://my.matterport.com/show/?m=AjuFyVD8Qy2,
29-05-2024,.dwg,Long,$260,"US Bank Madison, WI, CRE#3954 (2011 - Madison - East Towne - 3954) US Bank Wifi",https://my.matterport.com/show/?m=8tt5keJd7Bu,
30-05-2024,.dwg,Long,$85,"US Bank Rapid City, SD, CRE #6070 (766 - Rapid City - Western - 6070) US Bank Wifi",https://my.matterport.com/show/?m=8y9qH7ywny3,
30-05-2024,.dwg,Long,$65,"GoTo Foods Flagstaff, AZ - GoTo Foods (Jamba) 1111",https://my.matterport.com/show/?m=wcT2rWnxvVP,
30-05-2024,.dwg,Long,$130,"US Bank Cottage Grove, OR, CRE#8519 (3159 - Cottage Grove - N Seventh - 8519) US Bank Wifi",https://my.matterport.com/show/?m=zNy6MjYCXiP,
30-05-2024,.dwg,Long,$85,"US Bank Madison, WI, CRE#3897 (2017 - Madison - Hilldale - 3897) US Bank Wifi",https://my.matterport.com/show/?m=8SnyN2KVUtm,
29-05-2024,.dwg,Long,$150,"Heartland Mansfield, OH - Myontariodentist.com  (SN0101290)",https://my.matterport.com/show/?m=Q6ULH24bdFe,
30-05-2024,.dwg,Long,$350,"KBP Kansas City, MO - KBP(KFC)",https://my.matterport.com/show/?m=E2KJYqeBd3M,
30-05-2024,.dwg,Long,$130,"US Bank Drain, OR, CRE#8521 (3129 - Drain - First Street - 8521) US Bank Wifi",https://my.matterport.com/show/?m=vL2L4ThrSqU,
31-05-2024,.dwg,Long,$150,Fresenius Clinic #2096 - 23758 Riverside Dr Grundy VA 24614 USA - 5-26-24,https://my.matterport.com/show/?m=krJG2gGCzF4,
5-06-2024,.dwg,Long,$150,"WoW Works San Antonio, TX - WoW Works",https://my.matterport.com/show/?m=PnaRDLUwSvg,
5-06-2024,.dwg,Long,$365,"Dollar Tree Pico Rivera, CA - Dollar Tree #0031",https://my.matterport.com/show/?m=eFSWQwA3QB8,
29-05-2024,.dwg,Long,$150,"Self Esteem Brands Glendale, CA - Self Esteem Brands (Anytime Fitness) #1588",https://my.matterport.com/show/?m=aCLn27AUdnm,
30-05-2024,.dwg,Long,$250,"Odom Architects Abilene, TX - Odom Architects",https://my.matterport.com/show/?m=swuvNP8fRGX,
31-05-2024,.dwg,Long,$150,"Self Esteem Brands Scott, LA - Self Esteem Brands (Anytime Fitness) #533",https://my.matterport.com/show/?m=Sy3JhJigPsv,
3-06-2024,.dwg,Long,$350,"KBP El Dorado, AR - KBP(KFC)",https://my.matterport.com/show/?m=P7gJKXJLwum,
30-05-2024,.dwg,Long,$195,"US Bank Madison, WI, CRE#3958 (2014 - Madison - West Towne - 3958) Basement - US Bank Wifi","https://my.matterport.com/show/?m=BmfCSPy5rVB
https://my.matterport.com/show/?m=pWaC1BWVV8Y ",
5-06-2024,.dwg,Long,$150,"Heartland Streetsboro, OH - Advanced Dental Care of Streetsboro (SN 0102335)",https://my.matterport.com/show/?m=WADLkWQrSMP,
30-05-2024,.dwg,Long,$680,"US Bank Rapid City, SD, CRE#6000 (0751D - Rapid City Autobank - 6000) US Bank Wifi",https://my.matterport.com/show/?m=XwhBiruNXCX,
30-05-2024,.dwg,Long,$85,"US Bank Fitchburg, WI, CRE#3955 (2022 - Madison - Fitchburg - 3955) US Bank Wifi",https://my.matterport.com/show/?m=AQFjwXwocrk,
31-05-2024,.dwg,Long,$250,"US Renal Care USRC North Dallas, TX #0016 - US Renal Care",https://my.matterport.com/show/?m=TSwYL5tqGQC,
31-05-2024,.dwg,Long,$580,"US Bank Hacienda Heights, CA, CRE#9263 (Hacienda Heights) US Bank Premium",https://my.matterport.com/show/?m=3fYbf676shK,
31-05-2024,.dwg,Long,$235,"US Bank Williston, ND, CRE#7366 (768 - Williston - 7366) US Bank Wifi",https://my.matterport.com/show/?m=Z7cC6uqnRGn,
31-05-2024,.dwg,Long,$315,"US Bank Miles City, MT, CRE#8060 (528 - Miles City - 8060) US Bank Wifi",https://my.matterport.com/show/?m=UmdvEsKhHf3,
31-05-2024,.dwg,Long,$255,"US Bank Billings, MT, CRE#8080 (522 - Billings - West - 8080) US Bank Wifi",https://my.matterport.com/show/?m=SQ65pKbTRvk,
31-05-2024,.dwg,Long,$130,"US Bank Madison, WI, CRE#3957 (2030 - Madison - Sauk Trails - 3957) US Bank Wifi",https://my.matterport.com/show/?m=Y8YjHL1JdMW,
31-05-2024,.dwg,Long,$150,"US Bank Nashville, TN, CRE#2848 (1716 - Nashville - Hickory Hollow - 2848) US Bank Wifi",https://my.matterport.com/show/?m=a7kT7PpcE1q,
3-06-2024,.dwg,Long,$150,"Self Esteem Brands Deer Park, WA - Self Esteem Brands (Anytime Fitness) #0926",https://my.matterport.com/show/?m=ZoCNvpvw2vu,
3-06-2024,.dwg,Long,$130,"US Bank Walnut Creek, CA, CRE#3457 (CA Walnut Creek WM Annex) US Bank",https://my.matterport.com/show/?m=RRxxVMuja8y,
3-06-2024,.dwg,Long,$130,"US Bank Murfreesboro, TN, CRE#2890 (9100 - Murfreesboro - Lokey - 2890) US Bank Wifi",https://my.matterport.com/show/?m=GDT4ipWB2R1,
3-06-2024,.dwg,Long,$170,"US Bank Waunakee, WI, CRE#4035 (2026 - Waunakee - West Main - 4035) US Bank Wifi",https://my.matterport.com/show/?m=5neWtYoLa2e,
3-06-2024,.dwg,Long,$130,"US Bank Portage, WI, CRE#4007 (1204 - Portage - Northridge - 4007) US Bank Wifi",https://my.matterport.com/show/?m=Q1Z51fpyGpB,
3-06-2024,.dwg,Long,$170,"US Bank Mason City, IA, CRE#3848 (564 - Mason City - Downtown - 3848) US Bank Wifi",https://my.matterport.com/show/?m=aBB5meWwWLM,
4-06-2024,.dwg,Long,$85,"US Bank Nampa, ID, CRE#5958 US Bank Wifi",https://my.matterport.com/show/?m=VhphCteZDyT,
5-06-2024,.dwg,Long,$150,"US Bank Eugene, OR, CRE#8530 (3181 - Eugene - Oregon Campus - 8530) US Bank Wifi",https://my.matterport.com/show/?m=FtFAq3mVovU,
5-06-2024,.dwg,Long,$85,"US Bank North Liberty, IA, CRE#3707 (9298 - North Liberty - West Cherry - 3707) US Bank Wifi",https://my.matterport.com/show/?m=2FYnqUezvBh,
6-06-2024,.dwg,Long,$300,"Dollar Tree Garden Grove, CA - Dollar Tree #0372",https://my.matterport.com/show/?m=yqsL3tPyCuG,
6-06-2024,.dwg,Long,$300,"Dollar Tree Huntington Beach, CA - Dollar Tree #0075",https://my.matterport.com/show/?m=iLQ8nST5F2a,
6-06-2024,.dwg,Long,$350,"Dollar Tree Lancaster, CA - Dollar Tree #0070",https://my.matterport.com/show/?m=ZQQwgLPPMCd,
6-06-2024,.dwg,Long,$300,"Dollar Tree Lancaster, CA - Dollar Tree #0325",https://my.matterport.com/show/?m=kc8M3aLfyUc,
6-06-2024,.dwg,Long,$300,"Dollar Tree Ontario, CA - Dollar Tree #0064",https://my.matterport.com/show/?m=jPTUGPjKoyS,
6-06-2024,.dwg,Long,$300,"Dollar Tree Ontario, CA - Dollar Tree #0376",https://my.matterport.com/show/?m=m8LaUZDaXG8,
6-06-2024,.dwg,Long,$350,"Dollar Tree Ontario, CA - Dollar Tree #0448",https://my.matterport.com/show/?m=NK3tcLNxUMW,
7-06-2024,.dwg,Long,$250,"Dollar Tree Tustin, CA - Dollar Tree #384",https://my.matterport.com/show/?m=Q5S14ytaNhM,
7-06-2024,.dwg,Long,$350,"Dollar Tree Huntington Beach, CA - Dollar Tree #0097",https://my.matterport.com/show/?m=FXSP6bmTjno,
7-06-2024,.dwg,Long,$350,"Dollar Tree Apple Valley, CA - Dollar Tree #254",https://my.matterport.com/show/?m=HVm2EC526Gc,
4-06-2024,.dwg,Long,$170,"US Bank Sheridan, WY, CRE#8808 (714 - Sheridan - 8808) US Bank Wifi",https://my.matterport.com/show/?m=xj8jQB4ZFD9,
4-06-2024,.dwg,Long,$85,"US Bank Twin Falls, ID, CRE#5948 (3662 - Twin Falls - Blue Lakes - 5948) US Bank Wifi",https://my.matterport.com/show/?m=XyUgYeMmEB1,
4-06-2024,.dwg,Long,$195,"US Bank Princeton, WI, CRE#4009 (1206 - Princeton - Pearl - 4009) US Bank Wifi",https://my.matterport.com/show/?m=Ggcv6AbJ3Gy,
5-06-2024,.dwg,Long,$170,"US Bank Eugene, OR, CRE#8526 (3183 - Eugene - 29th & Willamette - 8526) US Bank Wifi",https://my.matterport.com/show/?m=69mVkMjZY6G,
5-06-2024,.dwg,Long,$170,"US Bank Pocatello, ID, CRE#5932 (3651 - Pocatello - N Yellowstone - 5932) US Bank Wifi",https://my.matterport.com/show/?m=DUgY45KJDhG,
6-06-2024,.dwg,Long,$415,"Dollar Tree Huntington Beach, CA - Dollar Tree #0049",https://my.matterport.com/show/?m=cyphm4b3kDR,
6-06-2024,.dwg,Long,$130,"US Bank Cedar Rapids, IA, CRE#3635 (2393 - Cedar Rapids - Council - 3635) US Bank Wifi",https://my.matterport.com/show/?m=aWpHczgvg82,
6-06-2024,.dwg,Long,$130,"US Bank Soda Springs, ID, CRE#5946 (3648 - Soda Springs - S. Main - 5946) US Bank Wifi",https://my.matterport.com/show/?m=MBAb5wN78Ge,
6-06-2024,.dwg,Long,$150,"US Bank Blackfoot, ID, CRE#5843 (3652 - Blackfoot - S Ash - 5843) US Bank Wifi",https://my.matterport.com/show/?m=wywmFtmSNsm,
6-06-2024,.dwg,Long,$85,"US Bank Wendell, ID, CRE#5952 (3629 - Wendell - S Idaho - 5952) US Bank Wifi",https://my.matterport.com/show/?m=5sHPfCscpXd,
6-06-2024,.dwg,Long,$260,"US Bank Tipton, IA, CRE#3727 (9343 - Tipton - East 5th - 3727) US Bank Wifi",https://my.matterport.com/show/?m=WS55Qf6szkf,
7-06-2024,.dwg,Long,$415,"Dollar Tree Upland, CA - Dollar Tree #107",https://my.matterport.com/show/?m=irTo55sBajQ,
7-06-2024,.dwg,Long,$300,"Dollar Tree Tustin, CA - Dollar Tree #425",https://my.matterport.com/show/?m=gEaS3HGqFfM,
3-06-2024,.dwg,Long,$130,"UPS Covington, WA - UPS #6080",https://my.matterport.com/show/?m=1LdTaGDJqWY,
3-06-2024,.dwg,Long,$130,"UPS Modesto, CA - UPS  #8005",https://my.matterport.com/show/?m=ikA2TH9UtyZ,
4-06-2024,.dwg,Long,$150,"Self Esteem Brands Stansbury Park, UT - Self Esteem Brands (Anytime Fitness) #1851",https://my.matterport.com/show/?m=vtMZzcyxFxN,
5-06-2024,.dwg,Long,$235,"US Bank Vinton, IA, CRE#3732 (9323 - Vinton - West 4th - 3732) US Bank Wifi",https://my.matterport.com/show/?m=rhZmjBk4Wy9,
6-06-2024,.dwg,Long,$130,"US Bank Coralville, IA, CRE#3647 (9300 - Coralville - Tenth Avenue - 3647) US Bank Wifi",https://my.matterport.com/show/?m=KL5rSf9jRsu,
7-06-2024,.dwg,Long,$65,"SBARRO Santa Fe, NM - SBARRO - Buffalo Thunder Resort & Casino",https://my.matterport.com/show/?m=bV3PALfb78t,
4-06-2024,.dwg,Long,$130,"UPS Poway, CA - UPS #19141",https://my.matterport.com/show/?m=YxN5WqhUCcu,
5-06-2024,.dwg,Long,$130,"UPS Sparks, NV - UPS #4720",https://my.matterport.com/show/?m=TuX24qi6nhk,
5-06-2024,.dwg,Long,$130,"UPS Boulder, CO - UPS #19335",https://my.matterport.com/show/?m=KmzQ36dtAjN,
7-06-2024,.dwg,Long,$150,"Self Esteem Brands Flint, TX - Self Esteem Brands (Anytime Fitness) #4920",https://my.matterport.com/show/?m=Np5pJX2P9DY,
7-06-2024,.dwg,Long,$85,"US Bank Gillette, WY, CRE#8826 (789 - Gillette - 8826) US Bank Wifi",https://my.matterport.com/show/?m=EMcJzz2jos1,
7-06-2024,.dwg,Long,$150,"US Bank Jerome, ID, CRE#5900 (3663 - Jerome - S Lincoln - 5900) US Bank Wifi",https://my.matterport.com/show/?m=Ta4Dr1NGeo9,
7-06-2024,.dwg,Long,$85,"US Bank Iowa City, IA, CRE#3689 (9299 - Iowa City - Southwest - 3689) US Bank Wifi",https://my.matterport.com/show/?m=QApS5FHtJcM,
3-06-2024,.dwg,Long,$150,"Self Esteem Brands Santa Rosa, CA - Self Esteem Brands (Anytime Fitness) #1352",https://my.matterport.com/show/?m=WGDsKwWnAZ5,
11-06-2024,.dwg,Long,$300,"Dollar Tree Eastvale, CA - Dollar Tree #0379",https://my.matterport.com/show/?m=4B1yPMFwVFJ,
11-06-2024,.dwg,Long,$250,"Dollar Tree Orange, CA - Dollar Tree #0341",https://my.matterport.com/show/?m=nuVDJkhSaDf,
11-06-2024,.dwg,Long,$450,"Dollar Tree Placentia, CA - Dollar Tree #0122",https://my.matterport.com/show/?m=P4eRVYymNQw,
11-06-2024,.dwg,Long,$300,"Dollar Tree Lake Elsinore, CA - Dollar Tree #0234",https://my.matterport.com/show/?m=WeYEABJ5R6Q,
11-06-2024,.dwg,Long,$300,"Dollar Tree Moreno Valley, CA - Dollar Tree #0405",https://my.matterport.com/show/?m=d4fuMcuUF7C,
11-06-2024,.dwg,Long,$65,"Domino's Detroit, MI - Domino's",https://my.matterport.com/show/?m=gXbjvJF6hh3,
29-05-2024,.dwg,Long,$300,"Flynn Cutler Bay, FL - Flynn(Applebee's) #9734",https://my.matterport.com/show/?m=UbW4aTZckGj,
30-05-2024,.dwg,Long,$300,"Heartland Warren, MI - Universal Dental Center (SN2223393)",https://my.matterport.com/show/?m=TWEMikqRjou,
4-06-2024,.dwg,Long,$250,Fresenius Clinic #4715 - 312 Mohawk Drive Minneola FL 34715 - 5-26-24,https://my.matterport.com/show/?m=uAwzm7GMQbW,
7-06-2024,.dwg,Long,$250,"Fresenius Clinic #7179 - 16255 Laguna Canyon Rd Irvine, CA - 6-2-24",https://my.matterport.com/show/?m=pgVYNY8N6Qy,
7-06-2024,.dwg,Long,$150,"US Bank Junction City, OR, CRE#8556 (3285 - Junction City - W Sixth - 8556) US Bank Wifi",https://my.matterport.com/show/?m=p1oydJhoPag,
11-06-2024,.dwg,Long,$200,"Dollar Tree Riverside, CA Dollar Tree #285",https://my.matterport.com/show/?m=LiKyeMJqVd9,
11-06-2024,.dwg,Long,$350,"Dollar Tree Menifee, CA -Dollar Tree #0371",https://my.matterport.com/show/?m=b55mV8i95vX,
11-06-2024,.dwg,Long,$300,"Dollar Tree Riverside, CA - Dollar Tree #317",https://my.matterport.com/show/?m=wmpDMgUfoVQ,
11-06-2024,.dwg,Long,$450,"US Bank Mayfield, KY, CRE#4534 (9086 - Mayfield - South 7th - 4534) US Bank Wifi",https://my.matterport.com/show/?m=cc6a6yamXXR,
3-06-2024,.dwg,Long,$315,"US Bank Humboldt, IA, CRE#3688 (9355 - Humboldt - Sumner Ave - 3688) US Bank Wifi",https://my.matterport.com/show/?m=yauVhY3PbCr,
7-06-2024,.dwg,Long,$85,"US Bank Eugene, OR, CRE#8531 (3210 - Eugene - Santa Clara - 8531) US Bank Wifi",https://my.matterport.com/show/?m=X6N5bZwCMhK,
7-06-2024,.dwg,Long,$600,"Burlington Akron, OH - Burlington",https://my.matterport.com/show/?m=uSb1oky6u3B,
11-06-2024,.dwg,Long,$130,"US Bank Springfield, OR, CRE#8685 (3201 - Springfield - Mohawk & Northga - 8685) US Bank Wifi",https://my.matterport.com/show/?m=khYLQQmH1Zm,
11-06-2024,.dwg,Long,$85,"US Bank Des Moines, IA, CRE#3668 (2432 - Des Moines - Highland Park - 3668) US Bank Wifi",https://my.matterport.com/show/?m=ttaXoEavN3s,
11-06-2024,.dwg,Long,$85,"US Bank Urbandale, IA, CRE#3730 (9352 - Urbandale - NW 86th - 3730) US Bank Wifi",https://my.matterport.com/show/?m=FHLZzF2iFrE,
11-06-2024,.dwg,Long,$170,"US Bank Murray, KY, CRE#4545 (9089 - Murray - Main Street - 4545) US Bank Wifi",https://my.matterport.com/show/?m=TRT4PCSY1Ch,
6-12-2024,.dwg,Long,$130,"US Bank Cambridge, OH, CRE#2060 (772 - Cambridge - East Wheeling - 2060) US Bank Wifi",https://my.matterport.com/show/?m=h6nCrdvnqbP,
13-06-24,.dwg,Long,$150,"Self Esteem Brands Waterloo, IA - Self Esteem Brands (Anytime Fitness)",https://my.matterport.com/show/?m=9AYRPWDQUgk,
13-06-24,.dwg,Long,$150,"Self Esteem Brands Lebanon, MO - Self Esteem Brands (Anytime Fitness) #2024",https://my.matterport.com/show/?m=NWUcZPQohTp,
13-06-24,.dwg,Long,$150,"Self Esteem Brands Thomasville, GA - Self Esteem Brands (Anytime Fitness) #1695",https://my.matterport.com/show/?m=HYCAmz2hoKi,
13-06-24,.dwg,Long,$150,"Self Esteem Brands St. Cloud, FL - Self Esteem Brands (Anytime Fitness) #3147",https://my.matterport.com/show/?m=6cWg67gNBfi,
14-06-2024,.dwg,Long,$165,"Sun Holdings Stephenville, TX - Sun Holdings (Papa John's)",https://my.matterport.com/show/?m=ox4L5eoubv1,
14-06-2024,.dwg,Long,$165,"Sun Holdings Moorhead, MN - Sun Holdings (Papa John's)",https://my.matterport.com/show/?m=EoEyvQQJScF,
14-06-2024,.dwg,Long,$200,"It's Sugar Round Rock, TX - It's Sugar",https://my.matterport.com/show/?m=5VfgnPkcu32,
14-06-2024,.dwg,Long,$600,"Burlington Rego Park, NY - Burlington",https://my.matterport.com/show/?m=hPgvqBXF5hn,
14-06-2024,.dwg,Long,$200,"WoW Works Southfield, MI - WoW Works",https://my.matterport.com/show/?m=K8figXJVzrx,
14-06-2024,.dwg,Long,$150,"Self Esteem Brands Nacogdoches, TX - Self Esteem Brands (Anytime Fitness) #2675",https://my.matterport.com/show/?m=jvBZ3vxMPxn,
14-06-2024,.dwg,Long,$150,"Self Esteem Brands Tea, SD - Self Esteem Brands (Anytime Fitness) #4770",https://my.matterport.com/show/?m=vSH5Khd1UtZ,
30-05-2024,.dwg,Long,$300,"Flynn Tamarac, FL - Flynn(Applebee's) #7506",https://my.matterport.com/show/?m=4Sgw5HVKrrY,
7-06-2024,.dwg,Long,$300,"US Renal Care 7354-SHC Sacramento, CA #7354",https://my.matterport.com/show/?m=Qw1TYFoTtc3,
31-05-2024,.dwg,Long,,"Flynn Sarasota, FL - Flynn(Applebee’s) #8856",https://my.matterport.com/show/?m=r82B2z7H9kd,
30-05-2024,.dwg,Long,,"Flynn Margate, FL - Flynn(Applebee's) #9995",https://my.matterport.com/show/?m=3TzcSf4kf3m,
30-05-2024,.dwg,Long,,"Flynn Pembroke Pines, FL - Flynn(Applebee's) #8860",https://my.matterport.com/show/?m=3GcEsouuxko,
3-06-2024,.dwg,Long,,"Flynn Cape Coral, FL - Flynn(Applebee’s) #9125",https://my.matterport.com/show/?m=3kp4Bd3eQur,
4-06-2024,.dwg,Long,,"Flynn Jacksonville, FL - Flynn(Applebee’s) #9357",https://my.matterport.com/show/?m=PhoPn849oyZ,
4-06-2024,.dwg,Long,,"Flynn Fort Pierce, FL - Flynn(Applebee’s) #8846",https://my.matterport.com/show/?m=H6eXtnKuxdf,
4-06-2024,.dwg,Long,,"Flynn Naples, FL - Flynn(Applebee’s) #8990",https://my.matterport.com/show/?m=JkwvA9MuJ6R,
4-06-2024,.dwg,Long,,"US Bank Oshkosh, WI, CRE#4004 (2042 - Oshkosh - Southwest - 4004) US Bank Wifi","https://my.matterport.com/show/?m=3gj4An2XXrP
https://my.matterport.com/show/?m=FExsbRtrTz7",
7-06-2024,.dwg,Long,,"US Renal Care Satellite Healthcare Vallejo, CA #7380",https://my.matterport.com/show/?m=ekhuGrvsJJB,
11-06-2024,.dwg,Long,,"US Bank Manteca, CA, CRE#9111 (3872 - Manteca - Cherry Lane - 9111) US Bank Wifi",https://my.matterport.com/show/?m=xAkJGKmiUqK,
6-12-2024,.dwg,Long,,"GoTo Foods Vancouver, WA - GoTo Foods (Cinnabon) 4998",https://my.matterport.com/show/?m=WfHx4sSRPou,
6-12-2024,.dwg,Long,,"UPS Jurupa Valley, CA - UPS #7981",https://my.matterport.com/show/?m=iVsopAp8aVm,
13-06-24,.dwg,Long,,"UPS Palmdale, CA - UPS #4553",https://my.matterport.com/show/?m=CcMHq5ukuQP,
13-06-24,.dwg,Long,,"UPS Linda, CA - UPS #7966",https://my.matterport.com/show/?m=Fwid1xchaZq,
13-06-24,.dwg,Long,,"UPS Rancho Cordova, CA - UPS #4240",https://my.matterport.com/show/?m=W3DVvtmkwcF,
13-06-24,.dwg,Long,,"US Bank Garden Grove, CA, CRE#0000 (CA OC Garden Grove) US Bank",https://my.matterport.com/show/?m=reDXcdRo4wp,
14-06-2024,.dwg,Long,,"US Bank Beachwood, OH, CRE# 2044 (OH Beachwood Denovo) US Bank Premium",https://my.matterport.com/show/?m=SiLVsN9chax,
14-06-2024,.dwg,Long,,"Heartland Longview, TX - Smile Studio (SN0101471)",https://my.matterport.com/show/?m=RW181KfeaNB,
14-06-2024,.dwg,Long,,"GoTo Foods Hanover, MD - GoTo Foods (McAlister's Deli)",https://my.matterport.com/show/?m=S93NioTZWzU,
14-06-2024,.dwg,Long,,"GoTo Foods Garden City, NY - Go To Foods(Jamba) 1313",https://my.matterport.com/show/?m=Z3tYR85KaTf,
14-06-2024,.dwg,Long,,"US Renal Care USRC Oakdale, CA  #0587 - US Renal Care",https://my.matterport.com/show/?m=ZSHqVTaCtMh,
14-06-2024,.dwg,Long,,"Baskin Robbins Pasadena, CA - Baskin Robbins PC 360052",https://my.matterport.com/show/?m=18EUUZZqqju,
14-06-2024,.dwg,Long,,"Fresenius Clinic #LX98208 - 737 Arnold Drive Martinez, CA - 6-12-24",https://my.matterport.com/show/?m=qgqBh5ifj6t,
14-06-2024,.dwg,Long,,"US Bank Woodburn, OR, CRE#8700 (3191 - Woodburn - Country Club - 8700) US Bank Wifi",https://my.matterport.com/show/?m=feUqmXLvSGc,
14-06-2024,.dwg,Long,,"US Bank Salem, OR, CRE#8676 (3131 - Salem - West Salem - 8676) US Bank Wifi",https://my.matterport.com/show/?m=KsNiUxkFmCa,
14-06-2024,.dwg,Long,,"US Bank Salem, OR, CRE#8671 (3223 - Salem - Silverton & Lancaster - 8671) US Bank Wifi",https://my.matterport.com/show/?m=q5shqQLidGS,
14-06-2024,.dwg,Long,,"US Bank Lebanon, KY, CRE#4483 (9045 - Lebanon - West Main - 4483) US Bank Wifi",https://my.matterport.com/show/?m=YMB5SQDAqVc,
14-06-2024,.dwg,Long,,"US Bank Loretto, KY, CRE#4491 (9046 - Loretto - Hwy 52 - 4491) US Bank Wifi",https://my.matterport.com/show/?m=W3tYaCFFDdr,
14-06-2024,.dwg,Long,,"US Bank Troutdale, OR, CRE#8735 (4662 - Troutdale - Cherry Park Road - 8735) US Bank Wifi",https://my.matterport.com/show/?m=P3ajSDKMJDH,
14-06-2024,.dwg,Long,,"US Bank Des Moines, IA, CRE#3659 (524 - Des Moines - 4045 Merle Hay - 3659) US Bank Wifi",https://my.matterport.com/show/?m=kd6GsffVwnD,
14-06-2024,.dwg,Long,,"US Bank Paducah, KY, CRE#4566 (9072 - Paducah - Lone Oak - 4566) US Bank Wifi",https://my.matterport.com/show/?m=AbTbAji8me1,
14-06-2024,.dwg,Long,,"US Bank Paducah, KY, CRE#4563 (9071 - Paducah - 1666 Broadway - 4563) US Bank Wifi",https://my.matterport.com/show/?m=bbwRNCpZfgK,
14-06-2024,.dwg,Long,,"US Bank Paducah, KY, CRE#4569 (9076 - Paducah - Reidland - 4569) US Bank Wifi",https://my.matterport.com/show/?m=fuuMLgMkANa,
14-06-2024,.dwg,Long,,"US Bank Hopkinsville, KY, CRE#4475 (143 - Hopkinsville - South Main - 4475) US Bank Wifi",https://my.matterport.com/show/?m=mfVCTrFDX9C,
14-06-2024,.dwg,Long,,"US Bank Russellville, KY, CRE#4587 (233 - Russellville - West 4th - 4587) US Bank Wifi",https://my.matterport.com/show/?m=b1DgoHiCSuf,
14-06-2024,.dwg,Long,,"US Bank Benton, KY, CRE#4427 (9084 - Benton - Draffenville - 4427) US Bank Wifi",https://my.matterport.com/show/?m=WXYf8zNpJRE,
14-06-2024,.dwg,Long,,"US Bank Colfax, WA, CRE#8200 (3383 - Colfax - N. Main - 8200) US Bank Wifi",https://my.matterport.com/show/?m=m556Mfq2Wit,
14-06-2024,.dwg,Long,,"US Bank Pullman, WA, CRE#8278 (3386 - Pullman - 301 E Main - 8278) US Bank Wifi",https://my.matterport.com/show/?m=BoNbfiZpFVc,
14-06-2024,.dwg,Long,,"UPS Corvallis, OR - UPS #2610",https://my.matterport.com/show/?m=XyPMCyZqyFr,
,,,, ,,
`;

const reverseString = (str) => {
    return str.split('').reverse().join('');
};


const parseCsv = (csvString) => {
    // Function to reverse a string
    const reverseString = (str) => str.split('').reverse().join('');

    // Split the CSV string into an array of lines
    const lines = csvString.trim().split('\n');

    // Extract headers
    const headers = ["Date","Type","Executor","Price","Name","MP","Completed"];

    // Map over the remaining lines to create objects
    const result = lines.map(line => {
        const values = parseCsvLine(line);
        const entry = headers.reduce((object, header, index) => {
            object[header] = values[index];
            return object;
        }, {});
        return entry;
    });

    return result;
};

// Function to parse a single line of CSV, handling quoted fields
const parseCsvLine = (line) => {
    const result = [];
    let current = '';
    let insideQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];

        if (char === '"' && (i === 0 || line[i - 1] !== '\\')) {
            insideQuotes = !insideQuotes;
        } else if (char === ',' && !insideQuotes) {
            result.push(current);
            current = '';
        } else {
            current += char;
        }
    }

    result.push(current);

    return result;
};

let ObjectArr = parseCsv(csvData);
let parsedArr = [];
ObjectArr.forEach(element => {
    let price = element["Price"] || ''; // Ensure price is a string
    parsedArr.push([
        element["Name"],
        price.substring(1).replace(",",""),  // Get the substring starting from the second character
        price[0]             // Get the first character of the Price
    ]);
});
const processItems = async (items) => {
    for (const item of items) {
        let cur;
        if (item[2] === '$') {
            cur = 'דולר';
        }
        await addItem(item[0], item[1], cur);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Extra delay between items
    }
}

processItems(parsedArr);