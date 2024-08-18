# Progressive Web Applications (PWA): Text Editor <!-- omit in toc -->

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description \*\*\* <!-- omit in toc -->

## Table of Contents <!-- omit in toc -->

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies Used \*\*\*](#technologies-used-)
- [Features \*\*\*](#features-)
- [Installation \*\*\*](#installation-)
- [Usage \*\*\*](#usage-)
  - [Screenshots \*\*\*](#screenshots-)
- [Tests](#tests)
- [Links \*\*\*](#links-)
- [Credits \*\*\*](#credits-)
- [License](#license)
- [Questions](#questions)

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application
```

## Technologies Used \*\*\*

## Features \*\*\*

## Installation \*\*\*

To install the PWA Text Editor, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/vaughanknouse/PWA-Text-Editor.git
   ```

2. **Install Node.js**: Ensure that the current version of Node.js is installed on your machine.

3. **Navigate to the Project Directory**:

   ```bash
    cd PWA-Text-Editor
   ```

4. **Install Dependencies**:

   ```bash
   npm install
   ```

## Usage \*\*\*

After completing the installation, follow these steps to use the PWA Text Editor:

1. **Start the server**: Invoke the application using the following command:

   ```bash
    npm start
   ```

   > [!NOTE]
   > If you want the server to automatically restart whenever changes are saved, use the command `npm run dev` instead.

### Screenshots \*\*\*

The following screenshots demonstrate the application's functionality and appearance:

**Image of ....:**

![Shows ....](assets/images/**IMAGE-NAME**.png)

## Tests

There is no testing involved for this application.

## Links \*\*\*

GitHub Repository: <https://github.com/vaughanknouse/PWA-Text-Editor>

Deployed Application Link: \*\*\*

## Credits \*\*\*

Used the following starter code and sources as tutorials and guidelines:

Starter code provided by UT Austin Coding Boot Camp at the following repository: <https://github.com/coding-boot-camp/cautious-meme>

ChatGPT: <https://chatgpt.com/?oai-dm=1>

Xpert Learning Assistant:
<https://bootcampspot.instructure.com/courses/5293/external_tools/313>

## License

This project is licensed under the MIT license. For more information, please visit [this link](https://opensource.org/licenses/MIT).

## Questions

For any questions or feedback, please contact me via email at vaughanknouse@gmail.com.

Additionally, you can find me on GitHub at [vaughanknouse](https://github.com/vaughanknouse).
