## Koop GDELT API
This is a sample that shows how to use [Koop](http://koopjs.github.io/) and the [GDELT API](https://blog.gdeltproject.org/gdelt-geo-2-0-api-debuts/) to show features from the last 24 hours.

## Getting Started

- `git clone` && `cd` to your directory
- `npm install`
- `npm start`
- Feature Server endpoint will be available @ `http://localhost:3000/gdelt/<keyword>/<tone:toneValue>/FeatureServer/0`

## Quick docs (more to come)
This provider will generate the following URL structure:

`http://localhost:3000/gdelt/<keyword>/<tone:toneValue>/FeatureServer/0`

While the `keyword` param is self explanatory, the `tone` and `toneValue` parms are described from the GDELT API website as:

> Allows you to filter for only articles above or below a particular tone score (ie more positive or more negative than a certain threshold). To use, specify either a greater than or less than sign and a positive or negative number (either an integer or floating point number). To find fairly positive articles, search for "tone>5" or to search for fairly negative articles, search for "tone<-5".

Here are a few examples:
- Generate a Layer for articles with keyword `chicago cubs` with a fairly negative tone
    `http://localhost:3000/gdelt/chicago%20cubs/less:-5/FeatureServer/0`  
- Generate a Layer for articles with keyword `milwaukee brewers` with a fairly positive tone
    `http://localhost:3000/gdelt/milwaukee%20brewers/more:5/FeatureServer/0`  
