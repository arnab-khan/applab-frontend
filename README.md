# Applab Frontend

Frontend application for Applab, a full-stack web application built with Angular and Spring Boot.

## Overview

This repository contains the Angular frontend for Applab. It provides the user interface for authentication, profile management, public profile pages, profile image upload, and real-time global chat.

The frontend uses Angular SSR to support SEO-friendly public profile pages with dynamic metadata for search engine indexing and rich link previews. It connects to the Spring Boot backend through REST APIs for user and profile features, and uses STOMP WebSocket for real-time chat updates.

## Tech Stack

- Angular
- Angular SSR
- Angular Material
- Tailwind CSS
- TypeScript
- STOMP WebSocket

## Related Links

- Live project: https://applab.arnabkhan.in/chat/global
- Demo video: https://arnab-khan.github.io/images/projects/app-lab.mp4
- Frontend source code: https://github.com/arnab-khan/applab-frontend
- Backend source code: https://github.com/arnab-khan/applab-backend

## Features

- User registration and login interface
- Secure cookie-based session authentication flow
- Profile management
- Unique username validation
- Profile image upload and cropping
- Public user profile pages
- SEO-friendly profile pages using Angular SSR
- Dynamic metadata for public pages
- Real-time global chat using STOMP WebSocket
- Live messaging and synchronization
- Typing indicators
- Message editing and deletion
- Message reactions
- Quoted replies
- Responsive UI built with Angular Material and Tailwind CSS

## Deployment

The application is designed to run as the frontend client for the Applab backend. The full project is deployed on a Linux VPS using Nginx and PM2, with automated CI/CD pipelines handled through GitHub Actions.

## Development Setup

### Prerequisites

- Node.js ^20.19.0, ^22.12.0, or ^24.0.0
- npm 11.3.0
- Angular CLI 21
- Running Applab backend service

### Install Dependencies

```bash
npm install
```

### Run the Application

```bash
npm start
```

### Build

```bash
npm run build
```

### Run SSR Build

After building the application, run the SSR server:

```bash
npm run serve:ssr:applab_frontend
```

## License

This project is not open source. See [LICENSE](LICENSE) for usage restrictions.