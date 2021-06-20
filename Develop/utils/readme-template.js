module.exports = readmeData => {

    // select badge based on chosen license

    if (readmeData[0].license == "Apache License 2.0") {
        let badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        readmeData.push(badge);
    }
    else if (readmeData[0].license == `BSD 3-Clause "New" or "Revised" license`) {
        let badge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
        readmeData.push(badge);
    }
    else if (readmeData[0].license == `BSD 2-Clause "Simplified" or "FreeBSD" license`) {
        let badge = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
        readmeData.push(badge);
    }
    else if (readmeData[0].license == `GNU General Public License (GPL)`) {
        let badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        readmeData.push(badge);
    }
    else if (readmeData[0].license == `MIT license`) {
        let badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        readmeData.push(badge);
    }
    else if (readmeData[0].license == `Mozilla Public License 2.0`) {
        let badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        readmeData.push(badge);
    }
    else if (readmeData[0].license == `Eclipse Public License version 1.0`) {
        let badge = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
        readmeData.push(badge);
    }

    // add user-provided data and badge to template

    return `
${readmeData[1]}
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

This application is covered under the ${readmeData[0].license}.

## Contributing

${readmeData[0].contribution}

## Tests

${readmeData[0].test}

## Questions

### - What is your github username?

You can find me on github at [${readmeData[0].username}] (https://github.com/${readmeData[0].username})

### - How can I reach out?

Contact me at <${readmeData[0].email}>
`;
}