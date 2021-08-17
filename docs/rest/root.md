[Go Back](https://github.com/alvaroassmus/indicinaUrl#readme)

**Root**
----
Returns the redirection for the user when uses a shortUrl

* **URL**

  /:shortUrl

* **Method:**

  `GET`

* **URL Params**

  shortUrl: the short url to be analyzed.

* **Success Response:**

    * **Redirects:** to the original URL <br />
      
* **Error Response:**

    * **Code:** 400 <br />
      **Content:** `{ ERR-MSG : "The shortUrl does not exist in the system" }`
* **Sample Call:**

  ```javascript
    $.ajax({
        url: "http://localhost:3000/GeAi9K",
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
