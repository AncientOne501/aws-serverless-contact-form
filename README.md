# AWS Serverless Contact Form

A fully serverless contact form built on AWS.

## Architecture

- **Frontend**: Static website hosted on Amazon S3 + CloudFront (HTTPS)
- **Backend**: API Gateway → Lambda (Python) → DynamoDB
- **Security**: Origin Access Control, least-privilege IAM, restricted CORS

## Services Used

- Amazon S3
- Amazon CloudFront
- Amazon API Gateway
- AWS Lambda (Python 3.12/3.14)
- Amazon DynamoDB
- IAM
- CloudWatch

## Features

- Contact form that stores submissions in DynamoDB
- HTTPS via CloudFront
- Private S3 origin (only accessible through CloudFront)
- Serverless and free-tier friendly

## Project Structure
- index.html
- styles.css
- script.js

## What I Learned

- Building a complete serverless application on AWS
- Configuring CloudFront with Origin Access Control
- Writing least-privilege IAM policies
- Connecting API Gateway to Lambda
- Storing data in DynamoDB
