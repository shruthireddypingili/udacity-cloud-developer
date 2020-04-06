# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into three parts:

1. [The Simple Frontend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-frontend)
A basic Ionic client web application which consumes the RestAPI Backend. [Covered in the course]
2. [The RestAPI Backend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-restapi), a Node-Express server which can be deployed to a cloud service. [Covered in the course]
3. [The Image Filtering Microservice](https://github.com/udacity/cloud-developer/tree/master/course-02/project/image-filter-starter-code), the final project for the course. It is a Node-Express application which runs a simple script to process images. [Your assignment]

## Current Project - Project 3: Image Filter Service

This service is deployed to AWS Elastic Beanstalk. It consists of an endpoint that when given an image_url as a query parameter, returns a filtered image.

## Usage

Example: <http://udagram-image-filter-dev22.us-west-2.elasticbeanstalk.com/filteredimage?image_url=https://specials-images.forbesimg.com/imageserve/1161194037/960x0.jpg>

## Elastic Beanstalk Dashboard

- The screenshot has been added to the directory `deployment_screenshots`
