# TODO Project

## AUTH API
```
REQUEST: POST /authenticate
RESPONSE: { token: 'generated-token' }

CURL:
curl --location --request POST 'http://localhost:4001/authenticate'
```

## CREATE API
```
REQUEST: POST /add
HEADERS: Authorization: Bearer 'generated-token'
BODY: { title: string, description: string }
RESPONSE: { code: 0, message: '' }

CURL:
curl --location --request POST 'http://localhost:4001/api/add' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZ3Vlc3QiLCJpYXQiOjE2NjQyNjE4MjYsImV4cCI6MTY2Njg1MzgyNn0.6aXwus8eic-wByNWjhYlIR4UcEppGAg7O64FKPzOd14' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "Marck'\''s todo",
    "description": "Some description"
}'
```

## UPDATE API
```
REQUEST: PUT /update
HEADERS: Authorization: Bearer 'generated-token'
BODY: { id: number, title: string, description: string }
RESPONSE: { code: 0, message: '' }

CURL:
curl --location --request PUT 'http://localhost:4001/api/update' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZ3Vlc3QiLCJpYXQiOjE2NjQyNjE4MjYsImV4cCI6MTY2Njg1MzgyNn0.6aXwus8eic-wByNWjhYlIR4UcEppGAg7O64FKPzOd14' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "Marck'\''s updated todo",
    "description": "Some description"
}'
```

## DELETE API
```
REQUEST: DELETE /delete/{id}
HEADERS: Authorization: Bearer 'generated-token'
RESPONSE: { code: 0, message: '' }

CURL:
curl --location --request DELETE 'http://localhost:4001/api/delete/21'
```

## READ API
```
REQUEST: GET /get-one/{id}
HEADERS: Authorization: Bearer 'generated-token'
RESPONSE: { code: 0, todo: { title: string, description: string } }

CURL:
curl --location --request GET 'http://localhost:4001/api/get-one/1' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZ3Vlc3QiLCJpYXQiOjE2NjQyNjE4MjYsImV4cCI6MTY2Njg1MzgyNn0.6aXwus8eic-wByNWjhYlIR4UcEppGAg7O64FKPzOd14'
```

## LIST API
```
REQUEST: GET /get-all?limit={limit}&page={page} // zero-based page
HEADERS: Authorization: Bearer 'generated-token'
RESPONSE: { code: 0, list: [{ title: string, description: string }] }

CURL:
curl --location --request GET 'http://localhost:4001/api/get-all/?limit=1&page=0' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZ3Vlc3QiLCJpYXQiOjE2NjQyNjE4MjYsImV4cCI6MTY2Njg1MzgyNn0.6aXwus8eic-wByNWjhYlIR4UcEppGAg7O64FKPzOd14'
```

