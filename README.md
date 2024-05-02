### TASK 6 - Roman Converter - Continuous Delivery System

This is the task 6 for Software Quality subject. 

The main purpose of this practice is to build a Continuous Delivery System that hold all the Roman COnverter commit and auto-test them and lint before upload them. 


The structure of the practice is:

Your task is implementing a Continuous Delivery system for the Romans converter problem:

1. You need to take the files you used for task #5 (Test Automation). You can use your implementation or the possible answer I gave you.
2. You need to implement a Continuous Delivery System in a similar way to the one described in the triangle CI example. The system needs to:
* Test Automatically the code
* Perform some basic linting operation
* Publish the romans converter using GitHub pages


# INSTRUCTIONS


During the year we have been working with one simple example, the type of triangle calculator. In this folder (implementation) you have the source code of:

An implementation of the problem (as a webpage): index.html and triangle.js
A set of automated tests: test.html and tests.js
What we are going to build in this exercise is a system that:

Manages the source code of both the implementation and the tests
Every time that there are changes in the implementation, tests everything is working automatically
Every time that there are changes in the implementation and the tests are executed successfully (previous item), publishes the implementation in a website
We are going to do it via GitHub following some iterative some steps:

Step 1: Host in Github only the implementation (not the tests) and publishing it automatically with every commit
Step 2: Add automatic tests and executing them automatically with every commit. New versions will only be published if tests are successfully executed.
Step 3: On top of that, we will add the capability to perform some automatic analysis of the code (e.g. via lint). If lint is not OK we could disabled the publishing as well.


## STEP 1:

We need to create a GH Repository (you need to create a GH account first if you don’t have one).
Once the repo is ready we are going to add the website implementation (index.html and triangle.js) to the main/master branch of the repository.
Activate GH Pages in the Repository: Setttings → Pages → gh_pages (select the option to use GitHub actions for handling this - in beta)
Activate Actions in the Repository: “Actions” → “Set up a workflow yourself” (leaving the default options).
Configure Actions to just publish the website. You have the example code in the folder step1/main.yml
After doing this, we can check that your website is automatically published at the gh-pages website for our repository.

That website should be fully functional. Now, you could test that every time anything is changed in any of the files, the new website is updated with the new files. We have built a very basic continuous delivery system.

## STEP 2:

As we don’t want to break our website in case we introduce a change that breaks the functionality we are going to introduce a previous step: some automatic testing that are executed before publishing the website. If the tests are executed successfully, the website is updated, otherwise, the website is kept the old version.

For instance, you can check what happens if you introduce a change that breaks the functionality before adding this step.

In order to add automatic tests we need to do two things:

Add to the repo the files that implement the automated tests: test.html and tests.js
Add in the “Actions” configuration the test step previous to the deployment to GH pages
In the step2/main.yml file you have the content of the new Actions with that step included.

Now in the GH Actions log you can check that there is an extra step that takes place before deploying the website.

Try what happens now when you break the website functionality.

## STEP 3:

The last step consists in adding static analysis of the code as another previous step to the deployment. This is helpful in case we want to enforce some rules in our code, e.g. the type of indentation, quotes in the strings, etc.

In order to do it we need to:

Add to the repo the “linter” rules that define what is possible and what is not in the code (file .eslint_rc.json). Be careful with the name and the dot at the beginning (is not in the file in the PDU)
Add to the “Actions” configuration the lint step previous to the deployment to GH pages (available at step3/main.yml)
After doing this, GH Actions will execute not only some tests before publishing but also some static analysis of the code. For instance, it’s going to check that all the strings using single quotes instead of double quotes (”). You can try to use double quotes to check what is the result of that.

ANNEX

GitHub Actions Syntax: https://docs.github.com/es/actions/learn-github-actions/understanding-github-actions
Lint Syntax: https://eslint.org/docs/latest/use/configure/configuration-files

Some videos of an example I performed at another repository (https://github.com/dcoloma/usj-2023-triangle) and URL https://dcoloma.github.io/usj-2023-triangle/
Loom Links:

Basic CI: https://www.loom.com/share/3407656662504bcdabda498e53cd5667

Breaking the website: https://www.loom.com/share/281e75ab05134a3491afbd1fb29ace79

Adding Test Automation: https://www.loom.com/share/bf0132b3648c44679e79506a3ced4913

Adding Linting: https://www.loom.com/share/eb535d6117c341a58472abe449e675a6

Stream Links:

Basic CI: https://usanjorge-my.sharepoint.com/:v:/g/personal/dcoloma_usj_es/EW6c3zc5KIpMkGrjibe1NmQBFXpH-uKnjWTfscqzfbj3rA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=BbJrbJ

Breaking the website: https://usanjorge-my.sharepoint.com/:v:/g/personal/dcoloma_usj_es/EdGDQGlDxQ9FmLeLKACdZaoBqjXo3Km3_ER-FI1HKrDcUQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=gIQbzC

Adding Test Automation: https://usanjorge-my.sharepoint.com/:v:/g/personal/dcoloma_usj_es/EVzM6OHn3XBCg_SxStZ-Ps0B8tvWmtDfBcFyZPsGdV8FYQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=2LE62H

Adding Linting: https://usanjorge-my.sharepoint.com/:v:/g/personal/dcoloma_usj_es/EUESw7SyzxtJpZEEQzOXg5EBFiNKkt949maJ2GdZ6-Mfzg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=6RzagS



