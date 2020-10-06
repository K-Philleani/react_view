const fs = require('fs');
const os = require('os');
const path = require('path');
const NodeSSH = require('node-ssh');
ssh = new NodeSSH();

ssh
  .connect({
    host: '124.70.71.78',
    port: '22',
    username: 'root',
    privateKey: `${os.userInfo().homedir}/.ssh/id_rsa`,
  })
  .then(() => {
    ssh
      .putDirectory(
        path.join(__dirname, '../build'),
        '/home/fe/dist',
      )
      .then(() => {
        console.log('success');
        ssh.dispose();
      })
      .catch(err => {
        console.log(err);
        ssh.dispose();
      });
  })
  .catch(err => {
    console.log(err)
  });