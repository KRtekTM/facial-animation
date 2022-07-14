# Audio driven facial animation

Bachelor thesis project providing an interactive web application with the core functionality of uploading an audio file with human speech and displaying the corresponding lip movements on the provided avatar basing on the output of an LSTM neural network model on the remote server.

## Setup

First, prepare the frontend environment using the command:
```
npm install
```

Second, prepare the backend virtual environment using commands:
#### Windows
```
cd api
python3 -m venv venv
.\venv\Scripts\activate
pip install flask python-dotenv
pip install -r requirements.txt
```

#### macOS
```
cd api
python3 -m venv venv
source venv/bin/activate
pip install flask python-dotenv
pip install -r requirements.txt
```

## Running locally

If you followed the **Setup** guide, run
```
python api.py
```
to start the backend on port 5000.

Alternatively run (depending on your OS)

```
yarn start-api-win
```
or
```
yarn start-api-mac
```
in the project source.

To start the frontend on port 3000, run:
```
npm start
```
in the project source.

Open http://localhost:3000 to view the project in the browser.

## Quickstart

1. Press the icon in the top-left corner to display the menu.
2. <b>Choose file</b> to upload a <b>wav</b> or <b>mp3</b> audio file with speech. Press <b>Record</b> to record the speech in real-time.
3. Press <b>Upload</b> to send the speech recording to the server.
4. When the model is performing the computations on the server, a loading spinner is displayed. Wait until it disappears.
5. The <b>player</b> options in the bottom-left corner handle the animation. Change the intensity of the avatar's expression with the <b>slider</b>.

![image](https://user-images.githubusercontent.com/49707233/105201992-c91c2980-5b41-11eb-9c3f-6c266a8e274e.png)


## Public access

~~You can access the web application through the link: https://facialanimation.page/.~~ Not supported!
<!-- Contact one of the contributors of the project to gain the valid credentials.  -->
Use the exemplary files in audio_files folder.

## Project structure

See the model preparation in the `ml_model_folder`.

## Authors

Małgorzata Nowicka and Filip Zawadka
