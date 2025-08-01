# WWE User & PPV Manager 🥇

A full-stack **Node.js** application designed to manage **WWE-style user profiles** and **PPV (Pay-Per-View) events**, deployed using **MongoDB Atlas** for the backend database and **Render** for the live server hosting.

This app provides endpoints to perform **CRUD operations** on WWE-style users and events stored in two MongoDB collections: `users` and `PPV`.

---

## 🧠 Key Features

- ⚙️ Built using **Node.js** and **Express.js**
- 🗄️ Connected to a **MongoDB Atlas Cluster**
- ☁️ Deployed via **Render**
- 🔐 Uses `.env` for secure configuration
- 📊 Manages two collections: `users` and `PPV`
- 📎 Sample schema from `users` collection provided

---

## 🗃️ Collections & Sample Document

### 📂 `users` Collection

Stores details of individual WWE user profiles.  
A sample document:

```json
{
  "_id": "ObjectId('688cde190f8769f23372f936')",
  "userID": "wwe12345",
  "name": "Roman OTC Reigns",
  "age": 38,
  "email": "roman.reigns@wwe.com",
  "work": "Gamer",
  "salary": 1500000,
  "__v": 0
}
```

### 📂 `PPV` Collection

Contains information about WWE PPV events such as:

- Event name
- Date
- Participants
- Results

(Refer to codebase for exact schema)

---

## 🏗️ Tech Stack

| Layer        | Technology     |
|--------------|----------------|
| Backend      | Node.js, Express |
| Database     | MongoDB Atlas (Cloud Cluster) |
| Deployment   | Render |
| Environment  | dotenv |

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- Render account (for deployment)

### 📦 Local Setup

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd node-wwe-main
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up `.env` file**

Create a `.env` file in the root with the following:

```env
MONGO_URI=mongodb+srv://<your-cluster-url>
PORT=5000
```

4. **Run the server**

```bash
npm start
```

Server will start on `http://localhost:5000`

---

## 🧪 API Endpoints

Below are some sample API endpoints (check `routes/` folder for full details):

| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| GET    | `/users`            | Fetch all user profiles  |
| POST   | `/users`            | Add a new user profile   |
| PUT    | `/users/:id`        | Update user by ID        |
| DELETE | `/users/:id`        | Delete user by ID        |
| GET    | `/ppv`              | Fetch all PPV events     |

---

## 🌐 Deployment Details

- **Render** was used to host the Node.js backend service.
- **MongoDB Atlas** was used to deploy the cloud-hosted NoSQL database cluster.
- Environment variables securely configured using `.env` file.

---

## 📸 Screenshots

### User Document Preview

![User Screenshot](./assets/user-screenshot.png)

---

## 🤝 Author

Developed by **Aashujeet Rai**  
GitHub: [@Aashujeet6260](https://github.com/Aashujeet6260)  
Portfolio: [aashujeet6260.github.io](https://aashujeet6260.github.io/mainport.github.io)

---

## 📄 License

This project is licensed under the MIT License.
