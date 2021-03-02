var stateDetails = [
    {
        "key": "AN",
        "name": "Andaman and Nicobar Islands"
    },
    {
        "key": "AP",
        "name": "Andhra Pradesh"
    },
    {
        "key": "AR",
        "name": "Arunachal Pradesh"
    },
    {
        "key": "AS",
        "name": "Assam"
    },
    {
        "key": "BR",
        "name": "Bihar"
    },
    {
        "key": "CG",
        "name": "Chandigarh"
    },
    {
        "key": "CH",
        "name": "Chhattisgarh"
    },
    {
        "key": "DH",
        "name": "Dadra and Nagar Haveli"
    },
    {
        "key": "DD",
        "name": "Daman and Diu"
    },
    {
        "key": "DL",
        "name": "Delhi"
    },
    {
        "key": "GA",
        "name": "Goa"
    },
    {
        "key": "GJ",
        "name": "Gujarat"
    },
    {
        "key": "HR",
        "name": "Haryana"
    },
    {
        "key": "HP",
        "name": "Himachal Pradesh"
    },
    {
        "key": "JK",
        "name": "Jammu and Kashmir"
    },
    {
        "key": "JH",
        "name": "Jharkhand"
    },
    {
        "key": "KA",
        "name": "Karnataka"
    },
    {
        "key": "KL",
        "name": "Kerala"
    },
    {
        "key": "LD",
        "name": "Lakshadweep"
    },
    {
        "key": "MP",
        "name": "Madhya Pradesh"
    },
    {
        "key": "MH",
        "name": "Maharashtra"
    },
    {
        "key": "MN",
        "name": "Manipur"
    },
    {
        "key": "ML",
        "name": "Meghalaya"
    },
    {
        "key": "MZ",
        "name": "Mizoram"
    },
    {
        "key": "NL",
        "name": "Nagaland"
    },
    {
        "key": "OR",
        "name": "Odisha"
    },
    {
        "key": "PY",
        "name": "Puducherry"
    },
    {
        "key": "PB",
        "name": "Punjab"
    },
    {
        "key": "RJ",
        "name": "Rajasthan"
    },
    {
        "key": "SK",
        "name": "Sikkim"
    },
    {
        "key": "TN",
        "name": "Tamil Nadu"
    },
    {
        "key": "TS",
        "name": "Telangana"
    },
    {
        "key": "TR",
        "name": "Tripura"
    },
    {
        "key": "UK",
        "name": "Uttar Pradesh"
    },
    {
        "key": "UP",
        "name": "Uttarakhand"
    },
    {
        "key": "WB",
        "name": "West Bengal"
    }
]


function findStateDetails(stateName) {
    let stateName1 = stateName.toLowerCase();
    let left = 0;
    let right = stateDetails.length - 1;
    let mid = Math.floor((left + right) / 2);
    while (stateDetails[mid].name.toLowerCase() != stateName1 && left < right) {

        if (stateName1 < stateDetails[mid].name.toLowerCase()) {
            right = mid - 1;
        } else if (stateName1 > stateDetails[mid].name.toLowerCase()) {
            left = mid + 1;
        }
        mid = Math.floor((left + right) / 2);

    }

    return (stateDetails[mid].name.toLowerCase() != stateName1) ? -1 : stateDetails[mid].key;



}
module.exports = {
    findStateDetails: findStateDetails
}