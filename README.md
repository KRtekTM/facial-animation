# Audio driven facial animation

Bachelor thesis project providing an interactive web application with the core functionality of uploading an audio file with human speech and displaying the corresponding lip movements on the provided avatar basing on the output of an LSTM neural network model on the remote server.

## Quickstart

1. Press the icon in the top-left corner to display the menu.
2. <b>Choose file</b> to upload a <b>wav</b> or <b>mp3</b> audio file with speech. Press <b>Record</b> to record the speech in real-time.
3. Press <b>Upload</b> to send the speech recording to the server.
4. When the model is performing the computations on the server, a loading spinner is displayed. Wait until it disappears.
5. The <b>player</b> options in the bottom-right corner handle the animation. Change the intensity of the avatar's expression with the <b>slider</b>.

![image](https://user-images.githubusercontent.com/49707233/104379229-77fcac00-5529-11eb-9e2f-2364861712a7.png)


## Public access

You can access the web application through the link: www.facialanimation.page

## Running locally

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn start-api`

Runs backend on the http://localhost:5000 port.
First you need to prepare virtual environment using commands:
#### Windows
```
cd api
python3 -m venv venv
. venv\Scripts\activate
pip install flask python-dotenv
```

#### macOS
```
cd api
python3 -m venv venv
source venv/bin/activate
pip install flask python-dotenv
```

### `npm test`

Launches the unit tests for the presentation module.

## Authors

Małgorzata Nowicka and Filip Zawadka
