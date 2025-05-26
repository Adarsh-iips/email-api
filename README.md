# Serverless Email API (Node.js + AWS Lambda)

This project is a REST API built using the [Serverless Framework](https://www.serverless.com/) to send emails via a POST endpoint. It runs offline for local development and can be deployed to AWS Lambda.

## Features

- Accepts email input: `receiver_email`, `subject`, and `body_text`
- Sends email using Nodemailer (Ethereal test account by default)
- Handles errors and returns appropriate HTTP status codes
- Runs offline using `serverless-offline`
- Easy to deploy to AWS

## Getting Started

### Prerequisites

- Node.js and npm
- [Serverless Framework CLI](https://www.serverless.com/framework/docs/getting-started/)
- AWS account (for deployment)

### Install dependencies

```bash
npm init -y
npm install nodemailer
npm install --save-dev serverless-offline


Run offline:- ```bash
npx serverless offline

API will be available at:
http://localhost:3000/dev/send-email
