# 📝 React Blog Project

A simple and modern blog application built using:

- ⚛️ React + Vite
- 🎨 Tailwind CSS
- 🔐 Auth0 (Login system)
- 🧠 Redux Toolkit
- 🌐 React Router
- 📦 Axios, localForage, react-icons

---

## 📁 Folder Structure

react-redux-blog-project/
├── client/
│ ├── public/
│ ├── src/
│ │ ├── Components/
│ │ │ ├── Admin/
│ │ │ │ ├── AdminDashBoard.jsx
│ │ │ │ ├── DragDropContainer.jsx
│ │ │ │ └── OtherDetails.jsx
│ │ │ ├── Contact/ContactPage.jsx
│ │ │ ├── Footer/Footer.jsx
│ │ │ ├── Header/
│ │ │ │ ├── List.jsx
│ │ │ │ └── Navber.jsx
│ │ │ ├── MyBlogs/MyBlogs.jsx
│ │ │ ├── Pages/Home/
│ │ │ ├── Pages/blogs/
│ │ │ ├── Profile/Profile.jsx
│ │ │ ├── Register/SignUp/SignUp.jsx
│ │ │ ├── Search/Search.jsx
│ │ │ ├── UpdateBlog/
│ │ │ │ ├── BlogImage.jsx
│ │ │ │ ├── OuthorData.jsx
│ │ │ │ └── UpdateForm.jsx
│ │ │ ├── Error.jsx
│ │ │ └── ProtectedRout.jsx
│ │ ├── redux/
│ │ │ ├── featurs/
│ │ │ │ ├── blogs/
│ │ │ │ │ ├── BlogSlice.js
│ │ │ │ │ ├── blogsApi.js
│ │ │ │ │ ├── deletBlog.js
│ │ │ │ │ ├── editBlog.js
│ │ │ │ │ └── postNewBlogs.js
│ │ │ │ ├── filture/filterSlice.js
│ │ │ │ ├── relatedBlogs/
│ │ │ │ └── singleBlog/
│ │ │ └── store.js
│ │ ├── utils/
│ │ ├── App.jsx
│ │ ├── App.css
│ │ ├── main.jsx
│ │ ├── index.css
│ │ └── publicAxios.js
│ ├── .gitignore
│ ├── eslint.config.js
│ ├── index.html
│ ├── package.json
│ ├── postcss.config.js
│ ├── tailwind.config.js
│ └── vite.config.js
├── server/
│ ├── db.json
│ ├── package.json
│ └── ...
├── .nvmrc
├── render.yaml
└── README.md

---

## 🧰 Requirements

Make sure you have these installed before starting:

- **Node.js** (v18 or higher) → https://nodejs.org  
- **npm** (comes with Node.js)  
- **Git** (optional) → https://git-scm.com

---

## 📥 How to Install and Run

### 📌 Step 1: Download the Project

#### Option 1: Using Git

```bash
git clone https://github.com/Mdjisan892/react-redux-blog-project
cd react-redux-blog-project/client

# Option 2: Manual Download
Go to the repository.

Click Code > Download ZIP.

Extract the ZIP file.

Open the client folder in your terminal.
```
###  Step 2: Install All Dependencies
npm install

### Step 3: Setup Auth0 for Login
🛠Go to https://auth0.com and create a free account.

Create a new Single Page Application.

Go to Settings of your app and copy these two things:

Domain -- Client ID

🧾 Create .env File
Inside the client/ folder, create a file named .env and paste this:

VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
Please Replace your-auth0-domain and your-auth0-client-id with your own values.

✅ Save the file.

## Run the Project
#### step 1: cd react-redux-blog-project/client 
##### npm run dev
#### step 2: cd react-redux-blog-project/server
##### npm start
