# Buy, Sell, Bye
An ad listing site for finding the next treasure you didn't know you needed

## Getting Started
To get started with this project, follow these steps:
### Installation
- In the directory you wish this project to live, run the command `git clone git@github.com:adlistero/adlistero.git`. *note* ---> this **will** create a folder named `adlistero/` with the project inside of it
- Navigate into the newly created directory with `cd adlistero`
- Find the `client/` directory with `cd src/main/java/adlister/main/client/`
- From the `client/` directory, run `npm install` to add the necessary dependencies for this project
### Starting the servers
- To start the client side server, run `npm start` from the `client/` directory.
    - This server runs on `localhost:3000`. <br> If there is an error, run `killall -u <yourUserName>` to ensure there are no running servers
    - This server will automatically update the page upon changes made, including `CSS`
- To start the `Tomcat` backend server, find the `MainController` in `adlistero/src/main/java/adlister/main/`
- Be sure to reimport `Maven` to install the dependencies necessary
- Right click the file, and select `run MainController` to start a `Tomcat` server on `localhost:8080`
- Any changes made to the Java code, will require a redeploy of the server
### Connecting to a database
- In the `util/` directory, located in `../src/main/java/adlister/util/`, create a `Config` class.
- This class will store your database credentials
- Follow the format provided in `SampleConfig`

## Tech Stack
This application uses Java, MySQL, and React / Redux. <br> Using Spring, the backend serves a RESTful API, consumed by the React front end.

## Contributing
Ensure that you are on *your own branch* **before** making edits.<br>
### Sample Workflow
- Determine your branch by executing `git branch`
- If `master` is the result, run `git checkout -b <branchName` to create, and switch to the new branch
- Make desired changes
- Stage the changes by running `git add <editedFile>` or `git add .` to stage every file
- Commit with `git commit -m "<yourCommitMessage>"`
- Set the upstream ( default push path ), by running `git push -u origin <yourBranchName>`
    - If unsure about the remote name ( `origin` in the above case ), run `git remote -v` to check your remotes ( Remotes are usually Github Repositories )
- Push to your **own** branch with `git push origin <myBranchName>` or simply `git push` if upstream was set

### Editing client side
*Highlights:*
- `CSS` is imported into each `.js` file
- If the `.js` file name is `Header.js`, the corresponding `CSS` will be `Header.css`
