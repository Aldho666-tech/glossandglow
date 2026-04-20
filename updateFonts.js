const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInDir(fullPath);
        } else if (fullPath.endsWith('.css')) {
            let src = fs.readFileSync(fullPath, 'utf8');
            let res = src.split("'Syne', sans-serif").join("var(--font-display)");
            res = res.split("'Space Grotesk', sans-serif").join("var(--font-main)");
            if (src !== res) {
                fs.writeFileSync(fullPath, res, 'utf8');
                console.log("Updated", fullPath);
            }
        }
    });
}

replaceInDir(path.join(__dirname, 'src'));
