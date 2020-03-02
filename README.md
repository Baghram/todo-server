## todo-server
Postman Documentation : https://documenter.getpostman.com/view/10570615/SzKbKukw

**Show User**
----
  Returns json data about a single user.

* **URL**

  /users/:id

* **Method:**

  `GET`

* **Headers:**

  `access_token`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 12, name : "Michael Bloom" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

=========================================================================================================================