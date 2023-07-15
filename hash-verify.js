const bcrypt = require('bcrypt');


async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$PW3dMgkVAuHfwf4E5JIgHuIGzvV0ikjYWDD8RAyKQAp/Su/uRlr2.';

  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);

}

verifyPassword();
