KEN OWEN OJAS — ACADEMIC PORTFOLIO
=================================
HOW TO ADD MULTIPLE IMAGES AND FILES (NO DATABASE)

1. Copy each image/document into its category folder:
   files/quiz/quiz-1.jpg
   files/quiz/quiz-2.pdf
   files/projects/final-project.png

2. Open data.js in a text editor.
3. Add one object per item inside the correct category's files array. Example:
   files: [
     { name: "Quiz 1", path: "files/quiz/quiz-1.jpg", type: "image" },
     { name: "Quiz 2 PDF", path: "files/quiz/quiz-2.pdf", type: "file" }
   ]
   Separate objects with commas. Use type "image" for images and "file" for documents.
4. Save data.js, then refresh index.html in your browser.
5. To publish changes, upload/commit the updated website and files to your host.

PROFILE PHOTO
Put your photo in assets (example assets/ken-owen.jpg), then change profileImage in data.js to:
profileImage: "assets/ken-owen.jpg"

VISITORS
The site has no upload/edit controls. Visitors can view files and open/download them. This static site has no private owner login: anyone with write access to the hosting repository can edit the published code. Do not publish private documents.

GITHUB PAGES
1. Create a GitHub repository and upload index.html, style.css, data.js, script.js, assets/, and files/.
2. Go to Settings > Pages.
3. Select Deploy from a branch, choose main and /(root), then Save.
4. Wait for the published site link. Additions require committing/pushing updated files.
