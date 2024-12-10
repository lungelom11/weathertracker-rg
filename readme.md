# WEATHER TRACKER APPLICATION (Azure Compute Solutions Hands On experiene)
A web application that allows users to track weather updates in real-time for their chosen cities. The system also triggers Azure Functions for alerts when a specific weather threshold is met (like if it's going to rain).
## Infrastructure
- Azure App Service Web App (Hosting the web application)
- Azure Container Registry (Storing Docker images for the app)
- Azure Container Instance (Running the containers for development/testing)
- Azure Functions (Weather alert system)
- Azure Container Apps (Running the containers in production)