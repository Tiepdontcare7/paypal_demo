const paypal = require('paypal-rest-sdk');
paypal.configure({
  mode: 'sandbox', //sandbox or live
  client_id:
    'Ae0XEAFs6TXLYxlgTdpZeYCKO7m2Q_NmlIyxh6XZ-1qj0FGj8ZIvdqlNM2ST86woTGwRjw8TrwZM0udZ',
  client_secret:
    'EFIEBYV3hvbMKL7VcI4ctVADEtrsIBfvR3j9NAgM9uDtXuGWO4oWeRNxGvZ5NNVq-PZ3S8a92nsr3H0Y',
});

module.exports = paypal;