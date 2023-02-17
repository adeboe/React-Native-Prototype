# SER402-React-Native-Prototype
This is meant to be a small project to demonstrate the knowledge I learned regarding React Native.

This project is also meant to be a reference for my team for the semester if the team decides to go for React Native, as we might plan on using React Native to make it easier to create a mobile version of the existing web app, making it easier for the homeless to access the web-app in a more mobile-friendly way.

## How to Install (Windows 10)
First, install *Python* (at least version 3.10.7), *Node Package Manager* (a.k.a. `npm`), and *Android Studio* (for emulating Android).

Then, use `npm` to install `yarn` globally by using the following command:
```
> npm install --global yarn
```

After that, download the repo.

Then, under `[PROJECT DIR]/prototype-front-end/prototype` run the following commands to ensure everything is in there:

```
> npm install
```

## How to Run (Windows 10)

### Back-end (Django)
Open the command line in the directory `./prototype-back-end/virt-env/Scripts` and run the following command

```
> activate.bat
```

This should take you into the virtual environment, which should have everything you need in terms of running the back-end.

Then, you run the following commands:
```
> cd ../../prototype
> py manage.py runserver
```

You know if you done it correctly if you get the following lines at the bottom
```
Django version 4.1.5, using settings 'prototype.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.
```

You can then access the Django REST framework for the User database through `http://127.0.0.1:8000/users/`

If you then want to shut it down, press `CTRL-C` to stop the server and run the following commands to exit out of the virtual environment:
```
> cd ../virt-env/Scripts
> deactivate.bat
```

### Front-end (React Native)
Open the command line in the directory `./prototype-front-end/prototype` and run the following command

```
> yarn start
```

If things are working correctly, you should see a QR code appear in the command line, which will allow one to test the app on their phone, as well as some commands for testing. However, for it to work properly on the phone, you need have access to the back-end server, which requires the front-end to be able to communicate with the back-end server on the computer, which isn't possible unless if the back-end is running on a remote server computer like AWS.

However, if you run the back-end beforehand (see section *Back-end (Django)*), then you can test the app on the web by pressing `w` on the terminal, which will open the web-app version.