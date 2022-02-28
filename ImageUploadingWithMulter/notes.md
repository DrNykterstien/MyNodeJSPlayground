
Uploading files and images in nodejs, we will explore the multer module which is really powerful and the most popular way to do

we will use materialize css,  ejs(embedded js template engine).

In this project we will look at file/image uploading in Node.js with the Multer module. We will also be using the EJS template engine and MaterializeCSS for the form UI.

and we will also prevent any non img files(safe guard) and also size limits. It is also cross plateform.

1. create package.json file (npm init)
2. Installing express, ejs and multer
3. create start script.
4. Install nodemon globally.
5. write basic express server, import ejs, multer and path modules.
6. https://materializecss.com/getting-started.html
7. we will use the cdn method
8. js from materialize needs jquery so we gonna use it. we will use its cdn too. v 3 choose the minified.
9. we will put it above the materialize script.
10. visit the materialize site and go to components, then forms. look for the file input. and grap the code example.
11. change form action to '/upload' and post method.
12. add name to file input to handle things using it.
13. add the submit button the form.
14. we wanna add output messages. so under h1, ejs has syntax that we can use js inside <%= and we will use ternary operator with this.
15. now we need to create storage engine with multer. and we will use disk storage.
16. If you are using file upload you need to add additional attr to the form tag.(enctype)
17. Now we will implement size limit. it deals with number of bytes.
18. to limit only uploading imgs.
19. we need to display image after upload it.
20. 