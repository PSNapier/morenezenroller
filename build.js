const fs = require('fs');
const path = require('path');

function buildSinglePage() {
     // Read the original HTML file
     let html = fs.readFileSync('index.html', 'utf8');

     // Read and inline CSS
     const css = fs.readFileSync('style.css', 'utf8');
     html = html.replace(
          '<link rel="stylesheet" type="text/css" href="style.css">',
          `<style>\n${css}\n</style>`
     );

     // Read and inline JavaScript files
     const toolboxJs = fs.readFileSync('toolbox.js', 'utf8');
     const dictionaryJs = fs.readFileSync('dictionary.js', 'utf8');
     const scriptJs = fs.readFileSync('script.js', 'utf8');

     // Replace script tags with inline scripts
     html = html.replace(
          /<script src="toolbox\.js"><\/script>/,
          `<script>\n${toolboxJs}\n</script>`
     );
     html = html.replace(
          /<script src="dictionary\.js"><\/script>/,
          `<script>\n${dictionaryJs}\n</script>`
     );
     html = html.replace(
          /<script src="script\.js"><\/script>/,
          `<script>\n${scriptJs}\n</script>`
     );

     // Write the single-page version
     fs.writeFileSync('index-single.html', html);
     console.log('✅ Built single-page version: index-single.html');
}

// Run the build
buildSinglePage();
