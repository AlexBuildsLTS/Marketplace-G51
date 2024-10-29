# Marketplace API

This project is a REST API for managing a marketplace application, built using Spring Boot. It enables the management of users, advertisements, and categories, and provides secure authentication using JWT.

## Features

- **User Management**: Register, authenticate users, and manage user roles.
- **Advertisement Management**: Create, update, delete, and view advertisements.
- **Category Management**: Create, update, delete, and view categories.
- **Secure API Endpoints**: Most of the API endpoints are secured using JWT-based authentication.

## Project Structure

The project follows the MVC pattern and includes the following packages:

- **controller**: Handles HTTP requests and provides REST API endpoints (`UserController`, `AdvertisementController`, `CategoryController`).
- **dto**: Data Transfer Objects to simplify communication between layers (`UserDTO`, `AdvertisementDTO`, `LoginRequest`, `JwtResponse`).
- **entity**: Defines the core data models (`User`, `Advertisement`, `Category`).
- **repository**: Handles data persistence using Spring Data JPA (`UserRepository`, `AdvertisementRepository`, `CategoryRepository`).
- **service**: Contains the business logic and acts as a bridge between controllers and repositories (`UserService`, `AdvertisementService`, `CategoryService`).
- **util**: Utility classes used across the application (`JwtUtils`, `JwtAuthenticationFilter`, `SecurityConfig`, `JwtSecretGenerator`).

## Dependencies

### Spring Boot Starters
- `spring-boot-starter-data-jpa`
- `spring-boot-starter-security`
- `spring-boot-starter-validation`
- `spring-boot-starter-web`

### Database
- `mariadb-java-client`

### JWT for Security
- `jjwt-api`, `jjwt-impl`, `jjwt-jackson`

### Lombok for Boilerplate Code Reduction
- `lombok`

### Logging
- `slf4j-api`, `logback-classic`

## Class Diagram
# Marketplace Application

This is the backend for the Marketplace-G51 project, built using Spring Boot, REST APIs, and other Java technologies. Below you can see the class diagram that illustrates the relationships among the main entities of the project.

## Class Diagram


## Class Diagram

[View Class Diagram](src/main/resources/diagram/Marketplacediagram51g.svg)


