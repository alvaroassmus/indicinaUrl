[Go Back](https://github.com/alvaroassmus/indicinaUrl#readme)

**Encode**
----
Encodes a URL to a shortened URL

* **URL**

  /encode/:url

* **Method:**

  `GET`

* **URL Params**

   url: the url to be encoded

* **Success Response:**

    * **Code:** 200 <br />
      **Content:** `{ data : string { urlEncoded }, msg : "Url has been encoded" }`

* **Error Response:**

    * **Code:** 400 <br />
      **Content:** `{ ERR-MSG : "The url must have the correct structure" }`
* **Sample Call:**

  ```javascript
    $.ajax({
        url: "http://localhost:3000/encode/https://www.google.com",
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
