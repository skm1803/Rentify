from fastapi import FastAPI
import schemas

app = FastAPI()

@app.get("/")
def hello():
    return {"Hello": "World"}

@app.post("/signup")
def signup(user: schemas.UserSchema):
    return user.dict()

