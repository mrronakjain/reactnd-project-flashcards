# Mobile Flashcards

This project is a mobile application (Android or iOS - or both) that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

The project is developed and tested from android devices. It has been tested with a physical Android 7 device and Android simulator from the Android SDK.

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

## Table of Contents

- [Getting started](#getting-started)
- [Cloning and Setup](#cloning-and-setup)
- [How to run](#how-to-run)
- [Details](#details)
- [License](#license)

## Getting started

**Prerequisites or Dependencies:**

- Yarn package manager
- `create-react-native-app`
- Editor / IDE
- Expo app on a mobile device, and/or Xcode (for the iOS simulator)
- Expo SDK

## Cloning and Setup

To get started with this repository:

```sh
# git clone the repository e.g. into a <projects> folder
cd <projects>
# git clone with ssh
git@github.com:mrronakjain/reactnd-project-flashcards.git

# or git clone with HTTPS
git clone https://github.com/mrronakjain/reactnd-project-flashcards.git

# change directory into the cloned repo
cd reactnd-project-flashcards

# install the dependencies
yarn install
```

## How to run

From the terminal, in the project folder:

```sh
yarn start
```

A menu appears in the terminal with options. Select the appropriate option e.g. `a` to launch the Android emulator.

## Details

The app provides the following functionality:

- Display a list of flash card decks
- Start a quiz for a given card deck, including some stats
- Add a card with questions and answers to a card deck

In order to start a quiz, go to a deck and hit `start quiz` - if the quiz has questions in it.

Once the quiz is finished, you will receive a score. The quiz is a self-assessment; in order to
validate the answer, you can flip the card.

The app will show a notification at 8 o'clock PM, if you haven't studied for the given day.
Possibly you will be asked for a permission to that. If you reject, notifications will not work.

## License

*This project is licensed under the terms of the MIT license.*
_The original course material and specification is from [Udacity.com](https://eu.udacity.com/course/react-nanodegree--nd019)._
