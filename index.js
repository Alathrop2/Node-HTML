const fs = require('fs');
const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'Name',
    },
    {
      type: 'input',
      message: 'Where are you from?',
      name: 'Location',
    },
    {
      type: 'input',
      message: 'What is your linkdin profile?',
      name: 'linkdin',
    },
    {
      type: 'input',
      message: 'What is your Github Username?',
      name: 'Github',
    },
  ])

  .then((answers) => {
    console.log(answers);
    const generateHTML = (answers) => {
      return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Node HTML</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
        </head>
        <body class="bg-secondary">
          <h1 class="text-white shadow-lg m-5">Hello! my name is ${answers.Name}</h1>
          <h1 class="text-white shadow-lg m-5">I am from ${answers.Location}</h1>
          <h1 class="text-white shadow-lg m-5">Here is my Linkdin profile ${answers.linkdin}</h1>
          <h1 class="text-white shadow-lg m-5">Here is my Github ${answers.Github}</h1>
        </body>
      </html>`;
    };
    writeToFile('index.html', generateHTML(answers));
  });

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
  });
}
