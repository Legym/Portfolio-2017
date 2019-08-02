const FS = require('fs');
const webfontsGenerator = require('webfonts-generator');
const markup = require('./modules/markup.js');

const srcDirectory = 'static/_global/images/icons'; // relative to git root (where npm script will be run)
let srcFiles = [];

const handleError = (error, message) => {
  if (error) {
    console.error(`Error.\n${message}\n\n`, error);
    process.exit(1);
  }
};
/**
 * Loop through files in 'srcDirectory', collect array of files with ".svg" as extension
 * and build the webfont with that array
 */
FS.readdir(srcDirectory, (error, files) => {

  handleError(error, 'Could not find directory.');

  srcFiles = files.filter((file) => {
    return file.indexOf('.svg') > -1;
  }).map(fileName => srcDirectory + '/' + fileName);

  webfontsGenerator({
    files: srcFiles,
    dest: 'static/_global/css',
    cssDest: 'static/_global/css/_font-icon.css',
    // cssFontsPath: '../css/'
  }, function (error) {
    if (error) {
      console.log('Fail!', error);
    } else {
      console.log('Done!');
    }
  });
});

/**
 * Given file contents & a name, write an output file to
 * the correct output directory
 */
const writeIconPage = (files) => {
  const outputFilePath = './pages/d/icons.js';
  const alreadyExists = FS.existsSync(outputFilePath);
  const existsString = alreadyExists
    ? `Updated ${outputFilePath}`
    : `Created ${outputFilePath}`;

  newContent = markup.generatePage(files);

  FS.writeFile(outputFilePath, newContent, (error) => {
    handleError(error, 'Could not write file.');
    console.log(existsString);
  });
};

/**
 * Loop through files in 'srcDirectory'
 */
FS.readdir(srcDirectory, (error, files) => {
  handleError(error, 'Could not find directory.');

  const validFiles = files.filter((file) => {
    return file.indexOf('.svg') > -1;
  });

  /**
   * Build out "icon" page"
   */
  console.log('\n');
  writeIconPage(validFiles);
});
