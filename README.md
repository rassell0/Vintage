# Vintage B2B E-commerce App
<Div>
  <img align="center" alt="Coding" width="150" src="https://media.discordapp.net/attachments/1131378335205830698/1181484245974265887/IMG_0044.PNG?ex=658139f3&is=656ec4f3&hm=f11dd53f7003b7877e19ead00284ed8b28438e734cbeac8a5943cd840d9fd971&=&width=478&height=1034">
 <img align="center" alt="Coding" width="150" src="https://media.discordapp.net/attachments/1131378335205830698/1181484246515318815/IMG_0045.PNG?ex=658139f3&is=656ec4f3&hm=4763e6150677c434f01b473396b35310650bdfef8ca1bdbd7609d834602caac6&=&width=478&height=1034">
 <img align="center" alt="Coding" width="150" src="https://media.discordapp.net/attachments/1131378335205830698/1181484246817329213/IMG_0046.PNG?ex=658139f3&is=656ec4f3&hm=e7e9429f586707096eaf4c116e911354bf882954b49d518a3d3a192fc88e0f68&=&width=478&height=1034">
 <img align="center" alt="Coding" width="150" src="https://media.discordapp.net/attachments/1131378335205830698/1181484247622627408/IMG_0047.PNG?ex=658139f3&is=656ec4f3&hm=f0af7173bce616a4d48371ff69f5bd6d3fdba72381b5f686d2eeceecbd4d0956&=&width=478&height=1034">
 <img align="center" alt="Coding" width="150" src="https://media.discordapp.net/attachments/1131378335205830698/1181484248406949908/IMG_0048.PNG?ex=658139f3&is=656ec4f3&hm=f55bd42e0695603d5ec46851dba8aae5f25bf0df185eaabb60fcd5a64549a872&=&width=478&height=1034">
</Div>
 
Welcome to the Vintage B2B E-commerce App! This React Native application leverages Firebase for backend services and Tailwind CSS for styling. It's designed for business-to-business transactions, providing a seamless and responsive experience for users.

## Table of Contents

- Features
- Installation
- Usage
- Firebase Configuration
- Tailwind Integration
- Contributing
- License
## Features

- User authentication and authorization
- Product catalog with detailed information
- Cart functionality for easy order management
- Order history and tracking
- Real-time updates with Firebase Firestore
- Responsive design using Tailwind CSS
## Installation

Clone the repository:
```bash

git clone https://github.com/rassell0/Vintage.git
```
Navigate to the project directory:
```
bash

cd Vintage
```
Install dependencies:
```
bash

npm install
```
## Usage

Run the app on an emulator or a physical device:
```
bash

npx react-native run-android   # for Android
npx react-native run-ios       # for iOS
```
Ensure that you have set up your Firebase configuration (see Firebase Configuration).

## Firebase Configuration

Create a Firebase project at Firebase Console.
Obtain your Firebase configuration by creating a web app in the project settings.
Replace the placeholder configuration in src/config/firebase.js with your actual Firebase configuration.
Tailwind Integration

This project uses Tailwind CSS for styling. To customize styles or add new ones:

Install Tailwind CSS:
```
bash

npm install -D tailwindcss postcss autoprefixer
```
Generate the default tailwind.config.js file:
bash
```
npx tailwindcss init
```
Customize styles in the tailwind.config.js file.
Build styles:

Copy code
```
bash
npx tailwindcss build styles/tailwind.css -o styles/index.css
```
## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

License

This project is licensed under the MIT License.
