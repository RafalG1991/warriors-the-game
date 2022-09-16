<!--
Thanks for using the template!

Don't forget to give this project a star for additional support ;)
Maybe you can mention me or this repo in the acknowledgements too
-->
<div align="center">

  <h1>⚔️ Warriors: The Game 🛡️</h1>
  
  <p>
    Welcome to the battle arena! Defeat the warriors who stand against you on the way to eternal glory!
    Create your own warrior and distribute your skill points among four attributes - strength, defence, endurance and agility to tailor your Hero to your needs.
    
    The first project that connects my knowledge about TypeScript and node.js with Handlebars view engine and MariaDB database.
  </p>
  
  <h3>[Live preview](https://warriors-the-game.herokuapp.com/)</h3>
</div>

<br />

<!-- Table of Contents -->

# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  - [Screenshots](#camera-screenshots)
  - [Tech Stack](#space_invader-tech-stack)
  - [API endpoints documentation](#dart-api-endpoints-documentation)
  - [Color Reference](#art-color-reference)
  - [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Installation](#gear-installation)
  - [Run Locally](#running-run-locally)
  - [Deployment](#triangular_flag_on_post-deployment)
- [Usage](#eyes-usage)
- [Roadmap](#compass-roadmap)
- [License](#warning-license)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)

<!-- About the Project -->

## :star2: About the Project

<!-- Screenshots -->

### :camera: Screenshots

<div align="center"> 
  <img src="https://i.imgur.com/c16s0XG.png" alt="screenshot" />
  <img src="https://i.imgur.com/CXPqXbr.png" alt="screenshot" />
  <img src="https://i.imgur.com/JFsOB6V.png" alt="screenshot" />
  <img src="https://i.imgur.com/MiRQrHb.png" alt="screenshot" />
  <img src="https://i.imgur.com/1qCpiKW.png" alt="screenshot" />
  <img src="https://i.imgur.com/GNnmKWY.png" alt="screenshot" />
</div>

<!-- TechStack -->

### :space_invader: Tech Stack (for both Client and Server)

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.mysql.com/">MySQL</a></li>
  </ul>
</details>

<!-- API endpoints documentation -->

## :dart: API endpoints documentation

### Authentication
#### `POST /auth/login`

<p> 
  Sign in route that verify user data and bcrypt hashed password and returns httpOnly Cookie with user jwt token payload 
</p>
<p>
Accepting JSON:

```javascript
{
	"email": "email",
	"password": "password"
}
```
</p>

<!-- Getting Started -->

## :toolbox: Getting Started

<!-- Prerequisites -->

### :bangbang: Prerequisites

This project uses npm as package manager


<!-- Run Locally -->

### :running: Run Locally

**Before you start, make sure to create mysql database**

Clone the project

```bash
  git clone https://github.com/RafalG1991/warriors-the-game.git
```

Go to the project directory

```bash
  cd warriors-the-game
```

Install dependencies

```bash
  npm install
```

Launch mysql

```bash
  If you didn't notice the important message above, create mysql database
```

Start the server

```bash
  npm run start
```

<!-- Deployment -->

### :triangular_flag_on_post: Deployment


<!-- Roadmap -->

<!-- ## :compass: Roadmap

<!-- License -->

## :warning: License

Distributed under the MIT License.

<!-- Contact -->

## :handshake: Contact

Email - rgrajcar@gmail.com

Project Link: [https://github.com/RafalG1991/warriors-the-game](https://github.com/RafalG1991/warriors-the-game)

<!-- Acknowledgments -->

## :gem: Acknowledgements

- [MySQL](https://www.mysql.com)
