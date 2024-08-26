# Eldercare Platform

## Overview

Eldercare Platform is a microservices-based web application similar to Airbnb, designed to connect elderly individuals or their families with hosts who are willing to provide care and accommodation. The platform includes features for user management, listing properties, booking services, and handling payments, all orchestrated through a robust microservices architecture.

### Key Features

- **User Management**: Registration, authentication, and profile management.
- **Listing Management**: Hosts can create, update, and manage property listings.
- **Booking System**: Users can book properties for eldercare.
- **Payment Processing**: Secure payment transactions for services.
- **API Gateway**: Centralized gateway for routing, load balancing, and security.
- **Service Discovery**: Dynamic service registration and discovery using Eureka.
- **Centralized Configuration**: Manage configurations for all microservices using Spring Cloud Config.
- **Load Balancing**: Kubernetes-based load balancing and scaling.

## Project Structure

eldercare-platform/
├── api-gateway/
│ ├── src/
│ ├── Dockerfile
│ ├── pom.xml
├── config-server/
│ ├── src/
│ ├── Dockerfile
│ ├── pom.xml
├── discovery-server/
│ ├── src/
│ ├── Dockerfile
│ ├── pom.xml
├── user-service/
│ ├── src/
│ ├── Dockerfile
│ ├── pom.xml
├── listing-service/
│ ├── src/
│ ├── Dockerfile
│ ├── pom.xml
├── booking-service/
│ ├── src/
│ ├── Dockerfile
│ ├── pom.xml
├── payment-service/
│ ├── src/
│ ├── Dockerfile
│ ├── pom.xml
├── eureka-server/
│ ├── src/
│ ├── Dockerfile
│ ├── pom.xml
└── README.md



## Technologies Used

- **Java 17**
- **Spring Boot**
- **Spring Cloud**
- **Netflix Eureka**
- **Spring Data JPA**
- **MySQL**
- **Docker**
- **Kubernetes**
- **Maven**

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Java 17 installed
- Maven installed
- Docker installed
- Kubernetes cluster configured (e.g., Minikube, Docker Desktop)
- MySQL server running


# Eldercare Application

Welcome to the Eldercare Application! This project is designed to manage eldercare services through a full-stack web application consisting of a MySQL database, a Spring Boot-based backend service, and a Node.js-based frontend.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Set Up Environment Variables](#2-set-up-environment-variables)
  - [3. Build and Run the Application](#3-build-and-run-the-application)
  - [4. Access the Application](#4-access-the-application)
  - [5. Stopping the Application](#5-stopping-the-application)
- [Directory Structure](#directory-structure)
- [Troubleshooting](#troubleshooting)
- [Additional Notes](#additional-notes)
- [License](#license)

## Prerequisites

Before you begin, ensure that your system meets the following requirements:

- **Docker**: Docker is required to build and run the application containers. You can install Docker by following the official instructions [here](https://docs.docker.com/get-docker/).
- **Docker Compose**: Docker Compose is used to manage multi-container Docker applications. Install Docker Compose by following the instructions [here](https://docs.docker.com/compose/install/).

## Installation and Setup

Follow these steps to set up and run the Eldercare Application on your local machine.

### 1. Clone the Repository

Start by cloning the repository to your local machine. Open your terminal and run:

```bash
git clone <your-repository-url>
cd <your-repository-name>

Replace <your-repository-url> with the URL of your repository and <your-repository-name> with the name of the directory that will be created.

```
### 2. Set Up Environment Variables

There is no need to manually configure environment variables, as they are already set in the docker-compose.yml file.

### 3. Build and Run the Application

To build and run all the services (database, backend, and frontend), use Docker Compose:
docker-compose up --build

This command will:

Download and set up the MySQL database: The database will be created with the necessary credentials and configurations.
Build the User Service: The Spring Boot application will be built and started, connecting to the database.
Build the Frontend: The React-based frontend will be built and served using Nginx.


### 4. Access the Application

After the services have started, you can access the frontend of the application by opening your web browser and navigating to:

http://localhost

This will load the frontend of the application, which interacts with the backend user-service and the MySQL database.

### 5. Stopping the Application

To stop the application and remove the running containers, use the following command:

docker-compose down

This will stop all running containers and remove the associated Docker networks.
