const { exec } = require("child_process");

const realmEnvVar = `realm`;
const realm = process.env[realmEnvVar];
const tokenEnvVar = `token_id`;
const token = process.env[tokenEnvVar];
const secretEnvVar = `secret_secret`;
const secret = process.env[secretEnvVar];

const authCmd = `suitecloud account:savetoken --account ${realm} --authid "cisdf" --tokenid ${token} --tokensecret ${secret}`;

exec(authCmd, realm, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});