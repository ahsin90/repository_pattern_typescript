# Repository Pattern In TypeScript

The simple app with repository pattern implemented using Typescript and ExpressJs.

## How to use it?

- Please download or clone the project first.
- Make sure MySQL and nodejs have been installed on your computer.
- Rename .env.example file to .env and adjust the values as your needs.
- Open the project using a console and run `npm install ` in your root project.
- Run `npx prisma migrate dev --name user_migration` to execute the migration.
- Then run project `npm run dev `
- Use API tools such as Postman, cURL, etc.

## Routes

1. Register a new user with POST method to http://localhost:3000/register, fill the request body with JSON attributes:

   ```json
   {
     "email": "youremail@mail.com",
     "name": "Your Name ",
     "password": "yourPassword",
     "repeatPassword": "yourPassword"
   }
   ```

   if the request successful, then will got the result:

   ```json
   {
     "status": true,
     "message": "user created",
     "data": {
       "id": 1,
       "uuid": "498cad68-deb9-4318-b88b-0aac5086d27b",
       "email": "ahsin.and@gmail.com",
       "name": "Muhammad Ahsin",
       "createdAt": "2023-02-27T05:26:18.076Z",
       "updatedAt": "2023-02-27T05:26:18.076Z"
     }
   }
   ```

2. log in as a registered user with POST method (input attributes: email and password): http://localhost:3000/login. If it succeeds will be got the result:

```json
{
  "status": true,
  "data": {
    "id": 1,
    "uuid": "498cad68-deb9-4318-b88b-0aac5086d27b",
    "email": "ahsin.and@gmail.com",
    "name": "Muhammad Ahsin",
    "createdAt": "2023-02-27T05:26:18.076Z",
    "updatedAt": "2023-02-27T05:26:18.076Z",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXVpZCI6IjQ5OGNhZDY4LWRlYjktNDMxOC1iODhiLTBhYWM1MDg2ZDI3YiIsImVtYWlsIjoiYWhzaW4uYW5kQGdtYWlsLmNvbSIsIm5hbWUiOiJNdWhhbW1hZCBBaHNpbiIsImlhdCI6MTY3NzQ4MDEwNCwiZXhwIjoxNjc3NDgwNDA0fQ.lRgc1WOf9ZaLe8VYSGq_uw9_Eox7po0SKdqrK1rP5Ec",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXVpZCI6IjQ5OGNhZDY4LWRlYjktNDMxOC1iODhiLTBhYWM1MDg2ZDI3YiIsImVtYWlsIjoiYWhzaW4uYW5kQGdtYWlsLmNvbSIsIm5hbWUiOiJNdWhhbW1hZCBBaHNpbiIsImlhdCI6MTY3NzQ4MDEwNCwiZXhwIjoxNjc3NTY2NTA0fQ.TYvilJz8VuL86FJ_BLEnrJisbn5x7PsxeH6sO4gYEvw"
  }
}
```

## Run with Docker?

Docker is a simple way to run the project, follow the instruction below:

1. Build a Docker image that runs `docker build -t typescript-repository-pattern .` on your console and in the project root.
2. Run `docker compose up`

## License

[MIT](LICENSE)
