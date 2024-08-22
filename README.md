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

