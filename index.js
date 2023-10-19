const express = require("express")
const app = express()

const paypal = require("./paypal")


app.post("/paypal", (req, res)=>{
        
    const obj = [
        {
        name: "ao",
        quantity: 1,
        price: 100,
        currency: 'USD',
        },
        {
        name: "quan",
        quantity: 1,
        price: 200,
        currency: 'USD',
        },
        {
        name: "dep",
        quantity: 1,
        price: 50,
        currency: 'USD',
        },
    ]

    const totalMoney = 350;

    const create_payment_json = {
        intent: 'sale',
        payer: {
            payment_method: 'paypal',
        },
        redirect_urls: {
            return_url: `http://localhost:5000/success`,
            cancel_url: `http://localhost:5000/cancel`,
        },
        transactions: [
            {
            item_list: {
                items: obj,
            },
            amount: {
                currency: 'USD',
                total: totalMoney.toString(),
            },
            description: 'Hat for the best team ever',
            },
        ],
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
          console.log('Error pay: ' + error);
          res.json({
            statusCode: 500,
            message: 'Server Error When Create Payment',
          });
        } else {
          for (let i = 0; i < payment.links.length; i++) {
            if (payment.links[i].rel === 'approval_url') {
              res.json(payment.links[i]);
            }
          }
        }
      });
})

app.get("/success", (req, res)=>{
    res.send('sucess')
})

app.get("/cancel", (req, res)=>{
    res.send('cancel')
})

app.get("/", (req, res)=>{
    res.json({
        statusCode: 200,
        message: "success"
    })
})

app.listen(5000, ()=>{
    console.log("server run at port 5000");
})