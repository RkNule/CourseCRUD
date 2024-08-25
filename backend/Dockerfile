# Use an official Tomcat base image with JDK 21 support
FROM tomcat:10-jdk21-temurin

# Set environment variables
ENV JAVA_OPTS="-Djava.security.egd=file:/dev/./urandom"

# Copy the WAR file to the webapps directory of Tomcat
COPY target/CourseInstance-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/

# Expose the port that Tomcat is running on
EXPOSE 8080

# Start Tomcat
CMD ["catalina.sh", "run"]
