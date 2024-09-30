class Currency { 
    constructor() {
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_0oQwG3kehOR7EtNy7RBDZ74hwdikr7w5TQHH8ilb";
    }

    async exchange(amount, firstCurrency, secondCurrency) {
        try {
            const response = await fetch(`${this.url}&base_currency=${firstCurrency}&symbols=${secondCurrency}`);
            const data = await response.json();

            if (data && data.data && data.data[secondCurrency]) {
                const rate = data.data[secondCurrency];
                const result = amount * rate;
                return result;
            } else {
                console.error("Error retrieving exchange rate.");
                return null;
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    }
}
