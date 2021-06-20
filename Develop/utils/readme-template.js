module.exports = readmeData => {

    return `
# ${readmeData[0].title}

## Description 

${readmeData[0].description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation

${readmeData[0].installation}

## Usage

${readmeData[0].usage}

## License

${readmeData[0].license}

## Contributing

${readmeData[0].contribution}

## Tests

${readmeData[0].test}

## Questions



`;
}