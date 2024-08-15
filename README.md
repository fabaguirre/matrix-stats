# Matrix Stats API 🚀

## Description

API that receives matrix data, computes statistical metrics including max, min, average, and checks for diagonal matrices. 📊

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/fabaguirre/matrix-stats.git
   ```

2. Navigate to the project directory:

   ```bash
   cd matrix-stats
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the application:

   ```bash
   npm build:start
   ```

   By default, the application will be available at `http://localhost:3000`. 🌐

2. Make requests to the API:

   - **POST /api/matrix/stats** 📈

     Request body:

     ```json
     {
       "matrix": [[1, 2], [3, 4]]
     }
     ```

     Response:

     ```json
     {
        "max": 4,
        "min": 1,
        "average": 2.5,
        "totalSum": 10,
        "isDiagonal": false
     }
     ```

## Environment Variables

- **PORT:** The port where the server will listen. Default is `3000`. 🌟

## Docker 🐳

1. Build the Docker image:

    ```bash
    docker build -t matrix-stats . 
    ```

2. Run the Docker container:

    ```bash
    docker run -d --name matrix-stats-express --network my-network -p 3000:3000 matrix-stats  
    ```