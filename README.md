# ball

# Project Setup Instructions

This README outlines how to set up and run the project on a new computer.

---

## **Backend (Flask)**

### **1. Clone the Repository**

```bash
git clone <your-repo-url>
```

### **2. Navigate to the Backend Directory**

```bash
cd server
```

### **3. Set Up the Virtual Environment**

- **On macOS/Linux:**
  ```bash
  python -m venv venv
  source venv/bin/activate
  ```
- **On Windows:**
  ```bash
  python -m venv venv
  venv\Scripts\activate
  ```

### **4. Install Dependencies**

```bash
pip install -r requirements.txt
```

### **5. Run the Backend**

```bash
python server.py
```

---

## **Frontend (Next.js)**

### **1. Navigate to the Frontend Directory**

```bash
cd frontend
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Run the Frontend**

```bash
npm run dev
```

This will start the Next.js development server. By default, it will be available at:

- [http://localhost:3000](http://localhost:3000)

---

## **Additional Notes**

- Ensure you have the correct versions of **Python**, **Node.js**, and **npm** installed.
- If you're using different versions of Python or Node.js, update the virtual environment or dependencies as needed.
- If you encounter any issues, refer to the error logs or documentation for Flask and Next.js.
