// Decodes keyword dodges to get past roblox text filtering
// todo: could make a json file with auto encode/decode

let fs = require("fs")
let transferedData = fs.readFileSync("./transferedAnimTxt.text", "utf8")

transferedData = transferedData.replace(/Helper/g, () => {
    return "Weapons" // roblox :/
})

transferedData = transferedData.replace(/Sword/g, () => {
    return "OneHanded" // roblox :/
})

transferedData = transferedData.replace(/Gifts/g, () => {
    return "Attacks" // roblox :/
})

transferedData = transferedData.replace(/Hug/g, () => {
    return "Block" // roblox :/
})

transferedData = transferedData.replace(/Friendly/g, () => {
    return "Bully" // roblox :/
})

transferedData = transferedData.replace(/\_\w+\_/g, (e) => {
    let newCode =  e == "_a_" ? 1 : e == "_b_" ? 2 : e == "_c_" ? 3 : 4
    return newCode
})

fs.writeFileSync("./transferedAnimTxt.text", transferedData)