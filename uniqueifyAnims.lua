-- Make every animation under the animation folder passed have their name as their path
local anims = game.ReplicatedStorage.Assets.CopyAnimations

for _, anim in pairs(anims:GetDescendants()) do
    if not anim:IsA("Animation") then
        continue
    end

    local fullName: string = anim:GetFullName()
    local terminator: string = "ReplicatedStorage.Assets." .. anims.Name .. "."

    anim.Name = fullName:sub(fullName:find(terminator) + terminator:len())
end