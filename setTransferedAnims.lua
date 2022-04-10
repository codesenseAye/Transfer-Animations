local anims = game.ReplicatedStorage.animsTransfered.Source

local ids = {}
local idsStr = anims

local currentId = true
local start = os.clock()

while currentId and start + 3 > os.clock() do
    currentId = idsStr:match("%d+")
    if currentId then 
        idsStr = idsStr:sub(idsStr:find(currentId) + currentId:len() + 1)

        local name = idsStr:match("[%w%d%p]+%s")
        name = name:sub(0, name:len() - 1)

        idsStr = idsStr:sub(idsStr:find(name) + name:len() + 1)

        table.insert(ids, {
            id = currentId,
            name = name
        })
    end
end

for _, details in pairs(ids) do
    local lastChar = details.name:sub(details.name:len())

    if lastChar == "a" or lastChar == "b" or lastChar == "c" then
        details.name = details.name:sub(0, details.name:len() - 1) .. (if lastChar == "a" then
            1
        else if lastChar == "b" then
            2
        else if lastChar == "c" then
            3
        else if lastChar == "d" then
            4
        else
            5
        )
    end

    local s, e = pcall(function(): ()
        local path = details.name:split(".")
        local anim = game.ReplicatedStorage.Assets.Animations

        for _, loc in ipairs(path) do
            anim = anim[loc]
        end

        anim.AnimationId = "rbxassetid://" .. details.id
    end)
    
    if not s then
        warn(e)
    end
end