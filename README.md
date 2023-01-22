# SER402-React-Native-Prototype
This is meant to be a small project to demonstrate the knowledge I learned regarding React Native.

This project is also meant to be a reference for my team for the semester if the team decides to go for React Native, as we might plan on using React Native to make it easier to create a mobile version of the existing web app, making it easier for the homeless to access the web-app in a more mobile-friendly way.

## How to Install (Windows 10)
First, install *Python* (at least version 3.10.7) and *Node Package Manager* (a.k.a. `npm`).

Then, use `npm` to install `yarn` globally by using the following command:
```
npm install --global yarn
```

Finally, download the repo.

## How to Run (Windows 10)

### Back-end (Django)
Open the command line in the directory `./prototype-back-end/virt-env/Scripts` and run the following command

```
> activate.bat
```

This should take you into the virtual environment, which should have everything you need in terms of running the
back-end.

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

If you then want to shut it down, press `CTRL-C` to stop the server and run the following commands to exit
out of the virtual environment:
```
> cd ../virt-env/Scripts
> deactivate.bat
```
 # SER402-React-Native-Prototype
This is meant to be a small project to demonstrate the knowledge I learned regarding React Native.

This project is also meant to be a reference for my team for the semester if the team decides to go for React Native, as we might plan on using React Native to make it easier to create a mobile version of the existing web app, making it easier for the homeless to access the web-app in a more mobile-friendly way.

## How to Install (Windows 10)
First, install *Python* (at least version 3.10.7) and *Node Package Manager* (a.k.a. `npm`).

Then, use `npm` to install `yarn` globally by using the following command:
```
npm install --global yarn
```

Finally, download the repo.

## How to Run (Windows 10)

### Back-end (Django)
Open the command line in the directory `./prototype-back-end/virt-env/Scripts` and run the following command

```
> activate.bat
```

This should take you into the virtual environment, which should have everything you need in terms of running the
back-end.

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

If you then want to shut it down, press `CTRL-C` to stop the server and run the following commands to exit
out of the virtual environment:
```
> cd ../virt-env/Scripts
> deactivate.bat
```