---
title: "VCE Results Web-app"
date: "2018-12-25"
type: "project"
published: true
keywords: "django,python,scrapping,beautifulsoup,web,automation,selenium,krushi,krushi raj,vasavi,vce,vasavi college of engineering,results,exam"
description: "A web application which can be used as an alternative source to VCE Results site."
tags: "webapp,django,python,vceresults,scrapping,data,import"
banner: "./vceresults.png"
bannercaption: "Image from VCE Results web-app"
source: "https://github.com/krushiraj/vce-results"
technologies: "python,django,jinja"
---

In 2018 around mid-June, I was working on Django to explore more about it and trying out some new things and features in Django which I never used till that day. So, I decided to build a couple of web apps to get more familiar with it and to master Python. During this, I build a simple web application where I make some REST calls to an API endpoint which will fetch the news around the world and I processed the data received and displayed it. I wanted to build one more application which would be helpful for people around me. That's when the idea to build VCE Results was born. Our college results site is the most un-reliable site I've ever seen. Soon after they release the results it goes down for no reason(even if the user hits are more or none). So, I decided to build this application so that students can rely on this to check their results.

You can find the repo for this project at

github/krushiraj/vce-results

The live version of this project is hosted at <a style="color:indianred;" target="_blank" rel="noopener noreferrer" href="http://vceresults.pythonanywhere.com/">vceresults.pythonanywhere.com</a>.

If you face any issues in the live version or found any defects please feel free to raise and issue in the GitHub repository's <a style="color:skyblue;" href="https://github.com/krushiraj/vce-results/issues" target="_blank" rel="noopener noreferrer">issues</a> section. Also, all types of contributions are welcomed.

It was the time when our results for the end semester would be released in a day or two. So I decided to build it as soon as possible, because I wanted this web app to go live at the same time the results would be declared.

## Building blocks
---

### Grab Data
First thing I had to do was to find a way to fetch the results data from our server. They won't give me permissions to read the data in the college database from a 3rd party application and they didn't expose any endpoint to fetch results. So I had to look for other ways, I found scrapping the data from their site is the best possible way that is possible at that time. I wrote a scraper which would grab the HTML code for each of the student's result page.

### Process Data
Now that I have the data in the form of HTML source code. I want it to be in a form which can be easily accessible by the Django backend. To solve this I wrote a data importer script that reads the HTML and parses the data required from me and inserts it into the database.

### Giving life to the web app
The final thing is to show the data to the end user of the web app. I think no explanation is needed. Because it's the most obvious thing and goal of the project.

I finished building the application before that night and was waiting for our college to release the results.

## The release
---

As expected the results for that semester were released the next day. I ran the `datascrapper` and `dataimporter` scripts to fetch the data and had a copy in my app's database. It took a few minutes, soon after the process was finished I made the application to go live. I got a great response from the fellow mates, seniors and juniors. While few were appreciating my efforts for doing this, few were busy checking out their results and there were some people(to whom I want to thank) who found few minor bugs in UI and some data inconsistency. They reported the issues which was great feedback for me and that helped me to improve the application.

That was a great experience building this application and making it to go live and iterating over the application features and enhancements from the feedback received.