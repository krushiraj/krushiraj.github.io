
---
title: "Solving the Wordle Solver"
date: "2022-09-22"
type: "project"
published: true
keywords: "quiz,wordle,bot,python,puzzle,solver,puzzle solver,wordle solver,wordle solution"
description: "A CLI algo to solve wordle puzzles effortlessly"
tags: "python,cli,algorithm,trie,bot"
banner: "./bot.png"
bannercaption: "Image from Google Images"
source: "https://github.com/krushiraj/wordle-solver"
technologies: "python,selenium"
---

I think there are very less people who are unaware of the popular (at least contemporarily or may be not) game [Wordle](https://en.wikipedia.org/wiki/Wordle). I liked the simplicity and equally challenging pattern of the game. I used to play it to get the final answer right. But eventually the geek in me wanted to write a script that could solve the puzzle without much effort on my brain but a little on my computer's brain. 

You can find the source code here:

github/krushiraj/quiz-writer-bot

This post is about the problems that I faced and the decisions I made to get the solver ready for us.

## Why this?

I found it challenging enough and at the same time the problem statement is very confined so no real intelligence is required. That created the itch in me to solve it just because I know I can do it. So why not give it a try? Also I didn't want to solve this using the buzzword tech ML, AI etc., not even the deep statistical analysis. Just some overview on data and minimal data analysis and pure algo.

## Identify the pattern

These are the things that I identified before I started:
- The problem is so finite that there are limited number of 5 letter words in English. Digging into some blogs and source code of the game gives me a definite list of what all those words are. So I know what the possible solutions are, now I have to find a way to point me to the correct one.

- Second thing I found after looking at the list is if we could filter out the words that contain vowels then we will be left with very few guesses to go with

- Repetition of vowels is very less and repetition of any consonant is less and if we found that letter then it is easy to find that word as it narrows down the guess list by a lot

- Choose a starting word that could give a clear estimate on what vowels should be neglected. There is a lot of debate on the choice of first word for the game, but my choice was AUDIO. Because it has 4 out of 5 vowels and it could narrow down a lot of guesses.

## Implementation

I started on with an array of all 5 words that are gonna show up on Wordle game and I wanted to implement an algo with the observations that I made above. I know can heuristically check each word in the array and conclude the shortlist of guesses. But that was not challenging enough, so I wanted it to be a bit more challenging and optimal. So, I build a Trie, a Trie which can mark the existence of letters and non existence of letters (don't get confused I check existence and non existence by the search algo I have on that trie).

The solver starts with suggesting AUDIO or any other word (if you want) for the first time and then it runs the search on trie and get backs all the possible results, sorted in the way that has more vowels, less repetitions. Then we can update the game state telling which letter exists in the word, which letter is in correct place and which doesn't exist in the word

> You can have a look at the read me file of the project I mentioned. It will have the visual representation. I'll attach screenshots here too!

So if a letter in 2nd spot is green, I search for all words in trie which should have that particular letter as second letter.

If a letter in 4th spot is yellow, then there is no point in guessing with the words that have that letter in 4th spot. But also I filter only those words which has that letter in another spot than 4th.

This way we can filter a lot of words and come to a final word which mostly should be the answer in the 3rd or 4th attempt. Some edge cases might lead you to go till 6th chance. There could also be a possibility that we might miss 7-8 words within those 6 chance limit. So, sometimes human intuitiveness works better than algos - this is what I understood after using this script for a day, so I started to print the word that script guesses and then all possible words after that so sometimes we can pick what word to give.

It is always fun building such scripts for myself and the learnings that I have with these are immense. See you later, till my next script 😜.
