# Sound Harvest (React + Vite)

## Introduction

This is a basic Youtube audio downloader (after converting from video to audio). It uses RapidAPI's `Youtube MP3 Downloader` API for this purpose. Please note that there is a hard limit of 1000 total requests per month on this API. So if the limit is passed, you might be stuck in a fetch cycle loop.

## UI Library

Radix UI and ShadCN components were used to create the UI of the website. Moreover, Vite was used to create this React Project.

## Deployment

This project was deployed to Github Pages and can be tested there. No servers or databases were used in this Project.

## Preview
![Screenshot 2024-06-06 184647](https://github.com/HasanYahya101/SoundHarvest-Vite/assets/118683092/03201bec-3d76-4e03-95c8-36f6c3701cbe)
![Screenshot 2024-06-06 184713](https://github.com/HasanYahya101/SoundHarvest-Vite/assets/118683092/bcce6c2d-cb27-4d1e-a7a5-f8effe52469b)
![Screenshot 2024-06-06 184726](https://github.com/HasanYahya101/SoundHarvest-Vite/assets/118683092/9e8b42cb-7729-4e5a-b7b7-6c615d78d483)
![Screenshot 2024-06-06 184759](https://github.com/HasanYahya101/SoundHarvest-Vite/assets/118683092/894b3843-093f-447d-a30d-23001e391f6a)
Finally the audio is downloaded:
<p align="center">
  <img src="https://github.com/HasanYahya101/SoundHarvest-Vite/assets/118683092/437261f5-eb6c-4007-946a-37386dc2ccce" alt="hasanyahya101" />
</p>


## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
