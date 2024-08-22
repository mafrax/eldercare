FROM ubuntu:latest
LABEL authors="marcmongin"

# Example Dockerfile for user-service
FROM openjdk:17-jdk-slim
COPY target/user-service-0.0.1-SNAPSHOT.jar user-service.jar
ENTRYPOINT ["java", "-jar", "user-service.jar"]
