[Go Back](https://github.com/alvaroassmus/indicinaUrl#readme)

**Statistic**
----
Return basic stat of a short URL path. In this basic stats you will find how many times the short URL has been used, the date and hour the last time the URL was used.

* **URL**

  /statistic/shortUrl

* **Method:**

  `GET`

* **URL Params**

  shortUrl: the short url to be analyzed.

* **Success Response:**

    * **Code:** 200 <br />
      **Content:** `{ statistic : { originalUrl: string, timesUsed: #, date: dateTime }, msg : "The statistics for the URL" }`

* **Error Response:**

    * **Code:** 400 <br />
      **Content:** `{ ERR-MSG : "The shortUrl does not exist in the system" }`
* **Sample Call:**

  ```javascript
    $.ajax({
        url: "http://localhost:3000/statistic/GeAi9K",
        type: 'GET',
        dataType: "json",
        data: {},
        success: function (data) {
            console.log(1, data);
        },
        error: function (error) {
            console.error(2, error);
        }
    });
  ```
