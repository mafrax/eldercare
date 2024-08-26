# Backend Dockerfile (Gradle)

# Use an official Gradle image to build the application
FROM gradle:7.6.0-jdk17 AS build

# Set the working directory
WORKDIR /app

# Copy the Gradle wrapper and project files
COPY build.gradle settings.gradle ./
COPY src ./src

# Build the application
RUN gradle clean build -x test

# Use an OpenJDK image to run the application
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=build /app/build/libs/*.jar user-service.jar

# Expose the application's port
EXPOSE 8081 5005

# Set the environment variable for debugging
#ENV JAVA_OPTS="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005"

# Run the application
CMD ["java", "-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005", "-jar", "user-service.jar"]
