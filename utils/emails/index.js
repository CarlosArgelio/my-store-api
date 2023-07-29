function contructMails(from, to, subject, text, html) {
  const mail = {
    from: from,
    to: to,
    subject: subject,
    text: text,
    html: html,
  }
  return mail
}

module.exports = contructMails;
