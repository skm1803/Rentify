# React + Vite


# Backend
There is a .env.example file, change it to .env and put your environment variables.

To start backend application, you need to be inside the backend folder and execute the below command:

```
docker-compose up --build
```

Once all the services are up, we need to create database migrations that will create the necessary tables
```
docker-compose run web alembic upgrade head
```