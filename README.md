# chatApp

Learn about JavaScript Applications while building chattApp native mobile application

Building Native Applications with JavaScript

## Objective

To build a chat app for mobile devices using React Native. The app will
provide users with a chat interface and options to share images and their
location.

### Context

More and more people use their phones for daily tasks, such as shopping, creating to-do lists,
communicating with friends, scheduling meetings, and more. That's why many companies offer native
mobile versions of their web apps, or even skip creating a web app entirely.
In the past, building high-quality mobile apps required a lot of time and money because writing apps
for different platforms like iOS and Android required specialized programmers who could build and
maintain multiple codebases.
Over time, however, new technologies emerged that made it easier for companies to build and
maintain mobile applications using familiar syntax. One of these technologies is React Native, a
framework for building Android and iOS apps that only requires one codebase.
For this Achievement’s project, you’ll use React Native, Expo, and Google Firestore Database to build a
chat app that you can add to your portfolio and demonstrate your knowledge of JavaScript mobile
development.

# Features and Requirements

### User Stories

● As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my
friends and family.
● As a user, I want to be able to send messages to my friends and family members to exchange
the latest news.
● As a user, I want to send images to my friends to show them what I’m currently doing.
● As a user, I want to share my location with my friends to show them where I am.
● As a user, I want to be able to read my messages offline so I can reread conversations at any
time.
● As a user with a visual impairment, I want to use a chat app that is compatible with a screen
reader so that I can engage with a chat interface.

### Key Features

● A page where users can enter their name and choose a background color for the chat screen
before joining the chat.
● A page displaying the conversation, as well as an input field and submit button.
● The chat must provide users with two additional communication features: sending images
and location data.
● Data gets stored online and offline.

### Technical Requirements

● The app must be written in React Native.
● The app must be developed using Expo.
● The app must be styled according to the given screen design.
● Chat conversations must be stored in Google Firestore Database.
● The app must authenticate users anonymously via Google Firebase authentication.
● Chat conversations must be stored locally.
● The app must let users pick and send images from the phone’s image library.
● The app must let users take pictures with the device’s camera app, and send them.
● The app must store images in Firebase Cloud Storage.
● The app must be able to read the user’s location data.
● Location data must be sent via the chat in a map view.
● The chat interface and functionality must be created using the Gifted Chat library.
● The app’s codebase must contain comments.

### Design Specifications

● Vertical and horizontal spacing: evenly distributed
● App title: font size 45, font weight 600, font color #FFFFFF
● “Your name”: font size 16, font weight 300, font color #757083, 50% opacity
● “Choose background color”: font size 16, font weight 300, font color #757083, 100% opacity
● Color options HEX codes: #090C08; #474056; #8A95A5; #B9C6AE
● Start chatting button: font size 16, font weight 600, font color #FFFFFF, button color #757083

# Setting Up a React Native Project

1. Before installing expo-cli, make sure you have the latest LTS Node version installed.
   run nvm install --lts or nvm install --lts/\* in the Terminal to check your Node version,
   then:
   run nvm ls-remote in the Terminal to check available versions (for installing choose "Latest LTS version" )

2. To istall the latest Node version,
   run nvm install 16.13.2 (type the LTS version number after install!) in the Terminal

3. To create new projects and start running Expo, you’ll need to install the Expo Command Line Interface (CLI) on your machine. To do so,
   run npm install expo-cli --global in the Terminal (make sure you install it globally!)

4. Next, you’ll need the Expo app for your phone to run your project on. Search for the Expo app in the relevant app store for your device (iOS or Android). The app icon should look something like this:
   Expo app icon
   Once you’ve found the Expo app, download it onto your device.

5. Head over to the Expo signup page and follow the instructions to create an account.

6. Go back to your terminal and navigate to the folder where all of your projects are stored.

Create a new Expo project by entering:

expo init hello-world

7. You’ll be asked which template you want to use for this project. Press Enter to choose the blank one

8. For Mac users, watchman is listed as a requirement in the Expo documentation section. If you do not have watchman installed, you can visit the Expo requirement and click on watchman for directions.

9. After the initialization is complete, go to your project’s directory using cd hello-world and start Expo with npm start or expo start.

10. Make sure that your phone and computer are on the same network (LAN or WiFi) and open up the Expo app on your phone. See if your new project is listed under “Recently in Development.” If your project isn’t listed, scan the QR Code provided in your browser (or your terminal) using the Expo Client app for Android or the built-in QR code scanner of your iPhone camera.

11. React Navigation is made by the community and not integrated into React Native, so first you need to install it. Open up your terminal and navigate to your new project folder, then type npm install --save react-navigation.

Once done, run the following command to install the necessary dependencies that react-navigation uses:

npm install @react-navigation/native @react-navigation/stack
expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
