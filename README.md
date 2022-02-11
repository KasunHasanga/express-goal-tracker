# express-goal-tracker
Use express,js as a backend framework and use mongoDB as database to make a goal tracker REST API


## Usage
Rename the .envsample to .env and add your MONGO_URI and your own JWT_SECRET

### Install dependencies

```
npm install
```

### Run Server

```
npm run server
```


### User Route

| Method | Endpoint | Description | Access Type |
| ----------- | ----------- | ---------- | ---------- |
| post | /api/users | Register User | Private |
| post | /api/users/login |Login User | Private |
| get | /api/users/me | Get User Details | Private |

### Goal Route
| Method | Endpoint | Description | Access Type |
| ----------- | ----------- | ---------- | ---------- |
| get	| /api/goals |	Get Goals | Private |
| post | /api/goals | Set Goals | Private |
| put | /api/goals/{GoalID} | Update Goals | Private |
| delete | /api/goals/{GoalID} | Delete Goals | Private |





