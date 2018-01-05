/**
    Travel the World

    1. Use an event handler to store the <select> menu's selected option in variables for each of the 3 parts:
        • Country name
        • Country currency code
        • Country currency name
    2. Use the exhangeRates object below to find the exchange rate
    3. Populate the <p> tag to read similar to "The exchange rate is 1 Euro to 23.322 Mexican Peso"
    4. Add a click handler to the button that changes the second <p> tag to read similar to:
        "Congratuations! You're on your way to Mexico!!"

    Hungry for more?
    Add a country flag based on the country you're going to. (Feel free to add hidden images that you then unhide) 
*/

var exchangeRates = {"base":"EUR","date":"2018-01-04","rates":{"AUD":1.5398,"BGN":1.9558,"BRL":3.906,"CAD":1.5114,"CHF":1.1763,"CNY":7.838,"CZK":25.515,"DKK":7.4449,"GBP":0.89103,"HKD":9.4323,"HRK":7.4355,"HUF":308.53,"IDR":16191.0,"ILS":4.1578,"INR":76.498,"JPY":135.92,"KRW":1283.1,"MXN":23.322,"MYR":4.8405,"NOK":9.7655,"NZD":1.6957,"PHP":60.062,"PLN":4.1555,"RON":4.629,"RUB":68.931,"SEK":9.822,"SGD":1.6043,"THB":38.873,"TRY":4.5367,"USD":1.2065}};
