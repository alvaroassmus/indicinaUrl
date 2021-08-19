[Go Back](https://github.com/alvaroassmus/indicinaUrl#readme)

**Decode**
----
Decodes a shortened URL to its original URL

* **URL**

  /decode/shortUrl

* **Method:**

  `GET`

* **URL Params**

  shortUrl: the short url to be decoded

* **Success Response:**

    * **Code:** 200 <br />
      **Content:** `{ urlDecoded : "urlDecoded", msg : "Url has been decoded" }`

* **Error Response:**

    * **Code:** 400 <br />
      **Content:** `{ ERR-MSG : "The shortUrl does not exist in the system" }`
* **Sample Call:**

  ```javascript
    $.ajax({
        url: "http://localhost:3000/decode/GeAi9K",
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
