const fs = require("fs");

//  birth date
const birthDate = new Date("2003-10-07T00:00:00Z");
const now = new Date();
const diff = now - birthDate;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const years = Math.floor(days / 365);
const remainingDays = days % 365;

// Read README
const readmePath = "README.md";
let readme = fs.readFileSync(readmePath, "utf8");

// New uptime line
const uptimeLine = `Uptime: ${years} years ${remainingDays} days`;

// Check if README already has the correct uptime
const uptimeRegex = /Uptime: \d+ years \d+ days/;
if (!uptimeRegex.test(readme) || !readme.includes(uptimeLine)) {
    readme = readme.replace(uptimeRegex, uptimeLine);
    fs.writeFileSync(readmePath, readme);
    console.log("✅ README updated successfully!");
} else {
    console.log("⚡ No changes needed. README is already up to date.");
}
