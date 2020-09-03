# strapi-project

Agricultutre tracking panel

API Docs

POST /activity/activityname:?/plants:?

example:
```
  curl --location --request POST 'localhost:3000/activity' \
--header 'Content-Type: application/json' \
--header 'Accept: text/plain' \
--header 'Authorization: Bearer XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' \
--data-raw '{
    "activity": "Activity 1",
    "plants": [
        "PLANTID", "PLANTID"
    ]
}'
```
GET /logs/id:?

Example

```
curl --location --request GET 'localhost:3000/log' \
--header 'Content-Type: application/json' \
--data-raw '{
    "plantId" : "XXXXXXXXXXXXXXXXXXXXX"
}'
```

