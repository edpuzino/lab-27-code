[![Build Status](https://travis-ci.com/edpuzino/lab-27-code.svg?branch=master)](https://travis-ci.com/edpuzino/lab-27-code)

![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 27

### Author: Ed Puzino

### Links and Resources
* [repo](https://github.com/edpuzino/lab-27-code)
* [travis](https://travis-ci.com/edpuzino/lab-27)
* [AWS](http://counter-demo.s3-website-us-west-2.amazonaws.com/)
* [AWS-2](https://counterstack-counterdemofromgithub-vpf58hbd4jyy.s3.us-east-2.amazonaws.com/index.html)
* [front-end](https://codesandbox.io/s/7jzk33okrq)

### Setup
#### `.env` requirements
* `PORT` - 3000
* `MONGODB_URI` - mongodb://localhost:27017/store

#### Running the app
* `npm start`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it.

#### Tests
* `npm run test`

#### UML
![](./assets/lab_27.jpg)
