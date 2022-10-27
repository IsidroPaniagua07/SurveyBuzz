import emailjs from "@emailjs/browser";
export default function handler(req, res) {
  if (req.method !== 'POST') return
    var templateParams = {
        to_email: 'James',
        message: 'this out!'
    };
  try {
    emailjs.send(process.env.NEXT_PUBLIC_EMAIL_SERVICE, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE, templateParams, process.env.NEXT_PUBLIC_EMAIL_PUBLIC)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  } catch (e) {
    res.status(400).end(JSON.stringify({ message: e }));
    return;
  }

  res.status(200).end(JSON.stringify({ message: "Send Mail" }));
}
