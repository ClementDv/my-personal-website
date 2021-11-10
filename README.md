<p align="center">
  <img src="https://github.com/ClementDv/my-personal-website/blob/main/.readme/img/headerwebsite.jpg" alt="header website clément poirier" width="951.5"/>
  <h1 align="center">My personal website</h1>
</p>

## Description

This website presents me, my skills, my background and the most important projects of my training.</br>
I developed it to learn more about the web and new technologies like React and NextJs.</br>
I decided to leave it open source in order to show my work and the skills I was able to acquire in this project.</br></br>
The adress of the website is : https://clementpoirier.fr

## Technologies

1. [Node js](https://nodejs.org/en/download/)
2. [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
3. [Next js](https://nextjs.org/docs)

I used code formatter [prettier](https://prettier.io/) and code linter [eslint](https://eslint.org/).

## Custom components

I created my own components so that it is designed as I wish and that I manage their implementation

### Modal

You can add children to the modal and it handles escape and click / touch out of the area to close the modal.  

<img src="https://github.com/ClementDv/my-personal-website/blob/main/.readme/img/modal.JPG" alt="modal website clément poirier" width="600"/>

### Carousel


You can show image frame and the description part. It's easy to add projects. </br>
On touchscreen you can swipe.

<img src="https://github.com/ClementDv/my-personal-website/blob/main/.readme/img/carousel.JPG" alt="carousel website clément poirer" width="600"/>

## Deployment

### GitHub Actions

Script in :
```
/.github/workflows/deploy.yml
```

Executed on all push with the tag **prod** :

```
on:
  push:
    tags:
      - prod
```

### GitHub page

It generates Github page using this [script](https://github.com/JamesIves/github-pages-deploy-action) : 

```
- name: Deploy
        uses: JamesIves/github-pages-deploy-action@4.1.5
        with:
          branch: github-pages
          folder: ./out
```

<img src="https://github.com/ClementDv/my-personal-website/blob/main/.readme/img/branchespage.JPG" alt="branches of website project" width="300">

### CloudFlare

Redirect https://clementpoirier.fr to GitHub page
_____________

Thank You.
CLemDv
