# Welcome to the Marley Spoon Frontend Challenge!

Overview
The customer experience team at Marley Spoon is cross functional and handles front-end, back-end, and all customer facing web-applications. That being said, the team is looking for more support on the front-end side of their domain.

We would ask you to implement a small front-end application to display recipes from an API. Good luck! We are looking forward to reviewing your solution!


The Challenge
Your application should be able to show a list of MarleySpoon recipes in the root page /

In the root page the user should be able to select 2 of the recipes and proceed to the User Details page /user-details

At the User Details page the user should be able to review the title of the previously selected recipes, enter their first name and email, then confirm and submit all the data of selected recipes (ids), first name and email

After submitting the data successfully, the user should see a Confirmation page at /confirmation


Data Model
The data for these recipes can be fetched via a GET request to

https://code-challenge-mid.vercel.app/api/recipes


To submit the data it can be sent as a POST request to

https://code-challenge-mid.vercel.app/api/submit

with the body following the format:

{ firstName: string, email: string, recipes: string[] }

Requirements
General
Use React
Bonus points for responsive UI
Bonus points for TypeScript usage
Bonus points for NextJS usage
Please provide very clear and detailed instructions on how to run your solution locally
Please work on this application as close as possible as if you would work on a real application. It will likely not be production ready but we will look at aspects including but not limited to: modularity/scalability of the codebase, testing and commit messages. If you did not manage to do something you wanted to do in the time you had to work on this challenge then please provide an outlook of things you would have added/changed in the readme document.
Target your development time for 3-4 hours. That may require prioritizing some features over others and taking shortcuts. Make sure to comment them.

If you have any implementation detail question, just ask! We are more than happy to answer.


Deliverables
Please send us a link (via email) to the hosted repositories with your code. Preferably, invite thiagocam-marleyspoon to your Github repo as well. If you have uploaded your solution in another platform like Gitlab, Bitbucket, etc., please, make them public and send us the link. You should include all the code necessary to run the app and documentation on how to do it.