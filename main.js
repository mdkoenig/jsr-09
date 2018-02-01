/**
    Travel the World: Redux

    1. Use an event handler to store the <select> menu's selected option in variables for each of the 3 parts:
        • Country name
        • Country currency code
        • Country currency name
    2. Use the exhangeRates object below to find the exchange rate
    3. Populate the <p> tag to read similar to "The exchange rate is 1 Euro to 23.322 Mexican Peso"
    4. Add a click handler to the button that changes the second <p> tag to read similar to:
        "Congratuations! You're on your way to Mexico!!"
    5. Use the OpenWeatherMap API to get the current temperature for that country's capital city using the 
        countries objet: http://openweathermap.org/current
    6. Add a <p> tag after the second <p> tag to display information about the weather.
    7. Use jQuery to modify the background color of the page and its text to a palette relevant to the weather
        or other creative use of the returned data
*/

var exchangeRates = {"base":"EUR","date":"2018-01-04","rates":{"AUD":1.5398,"BGN":1.9558,"BRL":3.906,"CAD":1.5114,"CHF":1.1763,"CNY":7.838,"CZK":25.515,"DKK":7.4449,"GBP":0.89103,"HKD":9.4323,"HRK":7.4355,"HUF":308.53,"IDR":16191.0,"ILS":4.1578,"INR":76.498,"JPY":135.92,"KRW":1283.1,"MXN":23.322,"MYR":4.8405,"NOK":9.7655,"NZD":1.6957,"PHP":60.062,"PLN":4.1555,"RON":4.629,"RUB":68.931,"SEK":9.822,"SGD":1.6043,"THB":38.873,"TRY":4.5367,"USD":1.2065}};

var countries = {"AUD": { "country" : "Australia", "capital" : "Canberra"}},{"BGN": { "country" : "Bulgaria", "capital" : "Sofia"}},{"BRL": { "country" : "Brazil", "capital" : "Brasília"}},{"CAD": { "country" : "Canada", "capital" : "Ottawa"}},{"CHF": { "country" : "Switzerland", "capital" : "Bern"}},{"CNY": { "country" : "China", "capital" : "Beijing"}},{"CZK": { "country" : "Czech Republic", "capital" : "Prague"}},{"DKK": { "country" : "Denmark", "capital" : "Copenhagen"}},{"GBP": { "country" : "United Kingdom", "capital" : "London"}},{"HKD": { "country" : "Hong Kong", "capital" : "Hong Kong"}},{"HRK": { "country" : "Croatia", "capital" : "Zagreb"}},{"HUF": { "country" : "Hungary", "capital" : "Budapest"}},{"IDR": { "country" : "Indonesia", "capital" : "Jakarta"}},{"ILS": { "country" : "Israel", "capital" : "Tel Aviv"}},{"INR": { "country" : "India", "capital" : "New Delhi"}},{"JPY": { "country" : "Japan", "capital" : "Tokyo"}},{"KRW": { "country" : "South Korea", "capital" : "Seoul"}},{"MXN": { "country" : "Mexico", "capital" : "Mexico City"}},{"MYR": { "country" : "Malaysia", "capital" : "Kuala Lumpur"}},{"NOK": { "country" : "Norway", "capital" : "Oslo"}},{"NZD": { "country" : "New Zealand", "capital" : "Wellington"}},{"PHP": { "country" : "Philippines", "capital" : "Manila"}},{"PLN": { "country" : "Poland", "capital" : "Warsaw"}},{"RON": { "country" : "Romania", "capital" : "Bucharest"}},{"RUB": { "country" : "Russia", "capital" : "Moscow"}},{"SEK": { "country" : "Sweden", "capital" : "Stockholm"}},{"SGD": { "country" : "Singapore", "capital" : "Singapore"}},{"THB": { "country" : "Thailand", "capital" : "Bangkok"}},{"TRY": { "country" : "Turkey", "capital" : "Ankara"}},{"USD": { "country" : "United States", "capital" : "Washington D.C."}};
