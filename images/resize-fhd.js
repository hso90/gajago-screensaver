'use strict'

const shell = require('shelljs');

if (!shell.which('gm')) {
    shell.echo('Sorry, this script requires gm. download from http://www.graphicsmagick.org/');
    shell.exit(1);
}

shell.ls('src-*.jpg').forEach(function(file) {
    if (shell.exec(`gm convert ${file} -resize 1920 fhd-${file}`).code !== 0) {
        shell.echo(`Error: gm convert ${file} resize failed.`);
        shell.exit(1);
    } else {
        shell.echo(`Success: gm convert ${file} resized.`);
    }
});
