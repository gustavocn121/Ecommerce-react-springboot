FROM openjdk:18-jdk-slim
COPY . ./backend
RUN mvn clean package -DskipTests
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]