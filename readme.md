# About
A RESTful API according to an MVC architecture for Snack resource.
Snacks have 5 fields = id, name, origin, category, description.
Id that is unique across every existing resource.

## Getting started
1. Fork and clone repository
2. Run npm install
3. Run "npm run dev" or "npm start" to start the server
4. Make requests using httpie or curl.

## Requests include
GET /snacks
GET /snacks/:id
POST /snacks
PUT /snacks/:id
DELETE /snacks/:id

## Data looks like
1. An array of snack objects.

[
      {
          "category": "meat",
          "description": "A round shaped beef-ragout version of croquette, typically containing a mixture of beef or veal (minced or chopped), beef broth, butter, flour for thickening, parsley, salt and pepper, resulting in a thick ragout.",
          "id": "cb646602-ade8-4d4e-b638-99466c41ebb9",
          "name": "Bitterballen",
          "origin": "Netherlands"
      },
      {
          "category": "vegan",
          "description": "Traditional banana fritters",
          "id": "fd89b4e4-2c17-46e5-bd41-e258bc64feec",
          "name": "Pazham Pori",
          "origin": "South India"
      }
  ]
