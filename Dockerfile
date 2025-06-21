# Use official Apache HTTP Server image
FROM httpd:2.4

# A default index.html file in /usr/local/apache2/htdocs/
# Copy HTML, CSS, and JS files into Apache's default web root inside the container
COPY ./index.html /usr/local/apache2/htdocs/
COPY ./style.css /usr/local/apache2/htdocs/
COPY ./script.js /usr/local/apache2/htdocs/

# Expose port 80
EXPOSE 80