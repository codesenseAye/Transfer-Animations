// read rbxmx data rbxasset ids and dump them into a text file

let fs = require("fs")

let fileData = fs.readFileSync("./animationsHavoc.rbxmx", "utf8")
let textData = ""

let matched = fileData.match(/rbxassetid:\/\/\d+/g)

let matchedOther = fileData.match(/id=\d+/g) // url format
matched = matched.concat(matchedOther)

let inserted = {}
let numAnims = 0

let subbedFileData = fileData

for (let i = 0; i < matched.length; i++) {
    let rbxasset = matched[i]
    let [ id ] = rbxasset.match(/\d+/) 

    let regex = new RegExp(`${rbxasset}`) // location of asset found regex

    let location = subbedFileData.search(regex)
    subbedFileData = subbedFileData.substring(location) // limited location of name tag
    let [ name ] = subbedFileData.match(/"Name">.+<\//g)
    
    // grab first index of matched string

    name = name.substring(7, name.search(/</)) // grab inner tag until end tag <
   
    // grab first index of matched string
    name = name.replace(/Weapons/g, () => {
        return "Helper" // roblox :/
    })

    name = name.replace(/OneHanded/g, () => {
        return "Sword" // roblox :/
    })
    
    name = name.replace(/Attacks/g, () => {
        return "Gifts" // roblox :/
    })

    name = name.replace(/Block/g, () => {
        return "Hug" // roblox :/
    })

    name = name.replace(/Bully/g, () => {
        return "Friendly" // roblox :/
    })

    name = name.replace(/\d+/g, (e) => {
        let newCode =  e == 1 ? "_a_" : e == 2 ? "_b_" : "_c_"  // roblox :/
        return newCode
    })

    if (inserted[name]) {
        continue
    }
    
    numAnims++

    inserted[name] = true
    textData += id + " " + name + "\n"
}

console.log("num found:", matched.length)
console.log("num parsed:", numAnims)

fs.writeFileSync("./loneAnimsTxt.text", textData)