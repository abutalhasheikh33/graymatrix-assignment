# To-Do List RESTful API

- This project is a RESTful API for managing a to-do list using **Express.js** and **MongoDB**. 
- The API supports CRUD operations and allows setting reminders for tasks. 
- It follows Object-Oriented Programming (OOP) principles and adheres to SOLID principles to ensure maintainable and scalable code.

## Features

- **CRUD Operations**: Create, read, update, and delete tasks.
- **Reminders**: Set reminders for tasks with a specific date, time, and message.
- **Data Validation**: Input validation to ensure data integrity.
- **Modular Structure**: Clean and maintainable code with a modular structure.

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**



## Endpoints / Routes

- **GET /tasks**: Retrieve all tasks.
- **GET /tasks/:id**: Retrieve a single task by ID.
- **POST /tasks**: Create a new task.
- **PATCH /tasks/:id**: Update an existing task by ID.
- **DELETE /tasks/:id**: Delete a task by ID.
- **PATCH /tasks/:id/reminder**: Set a reminder for a task.

## Task Object Structure

```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "status": "string", // e.g., "pending", "in-progress", "completed"
  "created_at": "string",
  "updated_at": "string",
  "reminder": {
    "date": "string",
    "time": "string",
    "message": "string"
  }
}
```

## Getting Started

### Prerequisites

- **Node.js** installed
- **MongoDB** running locally

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/abutalhasheikh33/graymatrix-assignment.git
   cd graymatrix-assignment
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure MongoDB**:

   Edit the `dbConn.js` file to match your MongoDB setup.

4. **Run the server**:

   ```bash
   node index.js
   ```

5. **Access the API**:

   The API will be running at `http://localhost:5000/api/v1`.

## Example Requests

### Create a Task

```bash
POST /api/v1/tasks
Content-Type: application/json

{
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs",
  "status": "pending"
}
```

### Retrieve All Tasks

```bash
GET /api/v1/tasks
```

### Update a Task

```bash
PUT /api/v1/tasks/:id
Content-Type: application/json

{
  "title": "Buy groceries and fruits",
  "status": "in-progress"
}
```

### Delete a Task

```bash
DELETE /api/v1/tasks/:id
```

### Set a Reminder

```bash
POST /api/v1/tasks/:id/reminder
Content-Type: application/json

{
  "date": "2024-07-25",
  "time": "14:00:00",
  "message": "Buy groceries now"
}
```

## OOP and SOLID Principles Implemented

### Object-Oriented Programming (OOP)

1. **Encapsulation**:
   - Each component (model, controller, service) encapsulates its functionality and hides implementation details. For instance, the `TaskService` class encapsulates all business logic related to tasks, while the `TaskController` encapsulates request handling logic.

2. **Abstraction**:
   - Business logic is abstracted away in the service layer (`TaskService`), allowing controllers to interact with it without worrying about the underlying data operations.

3. **Inheritance**:
   - While inheritance is not explicitly demonstrated in this simple application, the design allows for future extensions using inheritance. You can easily extend the `TaskService` or `TaskController` classes for additional functionality.

4. **Polymorphism**:
   - Though not heavily used in this example, the architecture supports polymorphism through method overriding if required. Different task types could implement specific behaviors if the need arises.

### SOLID Principles

1. **Single Responsibility Principle (SRP)**:
   - Each module has a single responsibility. For example, `task.js` is only responsible for defining the data schema, while `taskService.js` handles the business logic.

2. **Open/Closed Principle (OCP)**:
   - Classes are open for extension but closed for modification. You can extend existing classes with new features without altering their existing code, keeping the system stable and maintainable.

3. **Liskov Substitution Principle (LSP)**:
   - This principle isn't explicitly demonstrated in this simple CRUD application, but the design allows for subclasses to extend the behavior of base classes without breaking functionality.

4. **Interface Segregation Principle (ISP)**:
   - While interfaces are not explicitly used (JavaScript doesn't have formal interfaces), each service and controller follows a clear contract. Classes expose only what is necessary, preventing unnecessary dependencies.

5. **Dependency Inversion Principle (DIP)**:
   - High-level modules (controllers) do not depend directly on low-level modules (models). Instead, they rely on abstractions (services), making the code more modular and flexible.


## Conclusion

This RESTful API provides a robust foundation for managing a to-do list, adhering to best practices in OOP and SOLID principles. It is designed to be modular, scalable, and easy to maintain, allowing for future enhancements and extensions.

---
