# API Documentation

## Endpoints

### 1. Register User

**URL:** `/users/register`  
**Method:** `POST`  
**Description:** Registers a new user.

**Request Body:**
```json
{
    "fullname": {
        "firstname": "string (min 3 characters)",
        "lastname": "string (optional, min 3 characters)"
    },
    "email": "string (valid email)",
    "password": "string (min 5 characters)"
}
```

**Responses:**
- **201 Created:** User registered successfully.
    ```json
    {
        "token": "string",
        "user": {
            "_id": "string",
            "fullname": {
                "firstname": "string",
                "lastname": "string"
            },
            "email": "string"
        }
    }
    ```
- **400 Bad Request:** Validation errors.
    ```json
    {
        "errors": [
            {
                "msg": "string",
                "param": "string",
                "location": "string"
            }
        ]
    }
    ```

### 2. Login User

**URL:** `/users/login`  
**Method:** `POST`  
**Description:** Logs in an existing user.

**Request Body:**
```json
{
    "email": "string (valid email)",
    "password": "string (min 5 characters)"
}
```

**Responses:**
- **200 OK:** User logged in successfully.
    ```json
    {
        "token": "string",
        "user": {
            "_id": "string",
            "fullname": {
                "firstname": "string",
                "lastname": "string"
            },
            "email": "string"
        }
    }
    ```
- **400 Bad Request:** Validation errors.
    ```json
    {
        "errors": [
            {
                "msg": "string",
                "param": "string",
                "location": "string"
            }
        ]
    }
    ```
- **401 Unauthorized:** Invalid email or password.

    ### Endpoints

    #### GET /user/profile
    - **Description**: Retrieves the profile information of the authenticated user
    - **Authentication**: Required (Bearer Token)
    - **Response**:
        - Success (200 OK):
            ```json
            {
                    "id": "string",
                    "name": "string",
                    "email": "string",
                    "phone": "string",
                    "created_at": "datetime"
            }
            ```
        - Error (401 Unauthorized):
            ```json
            {
                    "message": "Unauthorized access"
            }
            ```

    #### POST /user/logout
    - **Description**: Logs out the currently authenticated user
    - **Authentication**: Required (Bearer Token)
    - **Response**:
        - Success (200 OK):
            ```json
            {
                    "message": "Successfully logged out"
            }
            ```
        - Error (401 Unauthorized):
            ```json
            {
                    "message": "Unauthorized access"
            }
            ```
    {
        "message": "Invalid Email or Password"
    }
    
    
    ```
<!-- NEXT SEGMENT HERE -->


