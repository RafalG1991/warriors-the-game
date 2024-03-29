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
  </p>
    
  [💡 Live preview](https://warriors-the-game.herokuapp.com)
</div>
<div align="justify">
  <p>My first project that connects my knowledge about TypeScript and node.js with Handlebars view engine and MariaDB database. The fighting mechanism is based on my own algorithm that takes into consideration four warrior's attributes - strength, defence, endurance and agility and a dice roll. On the start of the battle each character gets a certain number of hit points (HP) based on the endurance points multiplied by 10. Agile hero - with sum of agility and defense greater than attacker strength - can dodge the attack on lucky dice roll (5 or more dots). On successfull attack the defender can also block some hit points if he has the defense points left. The attack strength is calculated on each round by multiplying the strength points by a result of a dice roll (from 1 to 6). The game ends when one of the warrior's HP goes to 0.
  </p>
  </div>
  <div align="center">
  <h3>
    Check different skill builds and create the invincible warrior! Hall of fame awaits you!
  </h3>
</div>
  
<br />

<!-- Table of Contents -->

# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  - [Screenshots](#camera-screenshots)
  - [Tech Stack](#space_invader-tech-stack)
  - [Features](#gem-features)
  - [API endpoints documentation](#dart-api-endpoints-documentation)
- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Run Locally](#running-run-locally)
- [License](#warning-license)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)

<!-- About the Project -->

## :star2: About the Project

<!-- Screenshots -->

### :camera: Screenshots

<div align="center"> 
 <img src="https://user-images.githubusercontent.com/92755273/190611507-9fa1620e-1357-4e8a-86e3-4effbaf43c16.png" alt="screenshot">
 <img src="https://user-images.githubusercontent.com/92755273/190611792-6077c6ca-2ae5-4ddc-aabe-839eba9f00c0.png" alt="screenshot">
</div>

<!-- TechStack -->

### :space_invader: Tech Stack

<details>
  <summary>Application</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://handlebarsjs.com/">Handlebars</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.mysql.com/">MySQL</a></li>
    <li><a href="https://mariadb.org/">MariaDB</a></li>
  </ul>
</details>

<!-- Features -->

## :gem: Features

#### Adding new warrior

![add_warrior](https://user-images.githubusercontent.com/92755273/190630304-c20b9662-e5c1-417e-9ffa-ab488919f5ff.gif)

#### Choosing warriors and fighting

![fight](https://user-images.githubusercontent.com/92755273/190631798-036f42fc-e640-4ebe-a83b-5f85a429dbce.gif)


<!-- API endpoints documentation -->

## :dart: API endpoints documentation

### MENU VIEW
#### `GET /menu`

<p> 
  Renders main menu view
</p>

### WARRIOR
#### `GET /warrior`

<p> 
  Renders warrior creator form view
</p>

#### `POST /warrior`

<p> 
  Verifies provided warrior data - name must be unique and skill points must be greater than 0 and less than 10. The sum of distributed point cannot be greater than 10 as well. After verification new hero is added to the database.
</p>
<p>
Accepting JSON:

```javascript
{
	"name": string,
        "str": string,
        "def": string,
        "end": string,
        "agi": string,
}
```
</p>

### ARENA
#### `GET /arena`

<p> 
  Renders arena view
</p>

#### `POST /arena`

<p> 
  Start a battle between provided warriors based on their id. Renders battlelog and returns winner after fight end. The wins counter is updated in database.
</p>
<p>
Accepting JSON:

```javascript
{
	"warrior1": string,
        "warrior2": string,
}
```
</p>

### HALL OF FAME
#### `GET /hall-of-fame`

<p> 
  Renders hall of fame view
</p>


<!-- Getting Started -->

## :toolbox: Getting Started

<!-- Prerequisites -->

### :bangbang: Prerequisites

This project uses npm as package manager

**Before you start, make sure to create mysql database with following structure:**
<details>
<summary>SQL DATABASE STRUCTURE</summary>

##### 'warriors' table

|#|	Name | Type	| Collation	| Null | Default |
|-|------|------|-----------|------|---------|
1	|id (Primary)   |varchar(36)	  |utf8mb4_unicode_ci	  |No	    |uuid()
2	|name	        |varchar(30)	  |utf8mb4_unicode_ci		|No	    |None
3	|str	      |tinyint	      |		|No	    |None
4	|def	      |tinyint	      |		|No	    |None
5	|end	      |tinyint	      |		|No	    |None
6	|agi	      |tinyint	      |		|No	    |None
7	|wins	      |int	      |		|Yes	    |NULL

</details>

<!-- Run Locally -->

### :running: Run Locally

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
- [Handlebars](https://handlebarsjs.com/)
- [MariaDB](https://mariadb.org/)
