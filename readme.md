🍽️ Recipe App API – CRUD Endpoints
This API allows users to perform full CRUD operations (Create, Read, Update, Delete) on a collection of recipes stored in MongoDB Atlas.

📥 Create a New Recipe
Endpoint:
POST https://recepieapp.onrender.com/api/recepies/create

Description:
Creates a new recipe and saves it to the database.

📄 Get All Recipes
Endpoint:
GET: https://recepieapp.onrender.com/api/recepies/getData

Description:
Fetches a list of all recipes available in the collection.

🔍 Get Recipe by ID
Endpoint:
GET: https://recepieapp.onrender.com/api/recepies/getData/:id

Example:
GET: https://recepieapp.onrender.com/api/recepies/getData/682c494aa5438f0a964f813d

Description:
Fetches a single recipe based on the provided MongoDB Object ID.

✏️ Update Recipe
Endpoint:
PUT: https://recepieapp.onrender.com/api/recepies/update/:id

Example:
PUT: https://recepieapp.onrender.com/api/recepies/update/682c494aa5438f0a964f813d

Description:
Updates an existing recipe based on the provided ID.

❌ Delete Recipe
Endpoint:
DELETE:  https://recepieapp.onrender.com/api/recepies/delete/:id

Example:
DELETE:  https://recepieapp.onrender.com/api/recepies/delete/682c49fba5438f0a964f8147

Description:
Deletes the specified recipe by ID from the collection.


I have also attached the Postman documentation for your reference and support
https://documenter.getpostman.com/view/44752909/2sB2qZDMQL