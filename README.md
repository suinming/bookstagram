You are going to build a full-stack application for uploading and storing images. The main focus on this project is back-end, but you will still need to build a simple front-end.

This is a new app where people can take a picture of books they are reading or have found in antique shops/elsewhere and upload them. People can see a global feed of images.


# Requirements:
## Front-end

User must be able to create an account with email/password
User must be able to login with email/password
There is a main page that displays a "feed" of all images that have been uploaded in the order they were uploaded. (similar to Facebook, Instagram posts, etc)
There is an Upload link at the top of the page. When the upload link is clicked, a popup modal will appear. A user can drag a single image onto the modal. The image will upload to AWS S3 and your API must handle the storage of that image URL
When a user uploads an image they must also give it a title
The front-end must connect to AWS S3 to show images on the home page. PLEASE REVIEW "Resources" and "Tips" below for more details.
There will be a Filter bar at the top of the "feed". When a user starts typing, the results of the "feed" will filter based on the posts title. For example, if a user types, "cat", any posts that includes the letters "cat" as part of the title will be displayed.

## Back-end

- User accounts & authentication
- Storing, fetching, and deleting of posts (a post has a title and an image)
- Must have error handling
- Must use MongoDB
*NOTE: Please change your database "Network Access" to, "ALLOW ACCESS FROM ANYWHERE" so Devslopes can review and test your project 👍🏼 You can set this back to private after your project has been approved if you'd like.

## Want a job? (Extra Credit)

- Make the front-end look beautiful
- Write unit tests for all of your endpoints
- Make sure the front-end UI NEVER freezes
- Show progress bars for uploads of images
- Deploy your front-end and back-end live for all to see


📁 Resources
1. AWS S3 SDK
What it is: https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/welcome.html
Uploading photos: https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-photo-album.html
Configuring CORS on AWS S3: https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/cors.html
Read through the docs!! You will use pieces of the above references.

2. Multer
Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
NPM: https://www.npmjs.com/package/multer
Read about memoryStorage
Read about fileFilter

💡 Tips:
1. When you save an image to AWS, it returns an image url that references that image in AWS storage. Add that image url to the "POST" object so it's saved in MongoDB. This is a great way to save memory consumption in MongoDB by storing the image file itself on AWS.
2. You can use "Multler" or the native file-system library that's already included with Node.js to help with file uploads.

