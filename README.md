1. Download nodejs

2. Copy animations folder

3. Run uniqueifyanims.lua on the copied folder

4. Save the folder as rbxmx file

5. Run generateAnimsTxt.js on the xml file

5.5. Run $env:ROBLOSECURITY="your roblox security cookie here"

6. Run npx roblox-animation-transfer --inFile loneAnimsTxt.text --group yourGroupId --outFile transferedAnimTxt.text

6.5. Run reverseRobloxFilterDodge.js on the transferedAnimTxt.text file

7. Copy the contents of the transferedAnimTxt.text file into a modulescript into roblox studio

8. Run setTransferedAnims.lua on the modulescript with a reference to a new copy of your animations folder

9. Switch out the animations folder with the overwritten copied animations folder

10. Ttest to see if everything looks good

11. Replace any missed files that were rejected by roblox manually (or add encodes/decodes to the generator/applicator)

12. You're done