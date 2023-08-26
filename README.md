# Cinema Movie
![cinema movie](https://user-images.githubusercontent.com/106734133/209891568-f9ecbe96-6a97-43ae-8963-e1bf384af288.jpg)

Go to this website - [Link](https://sp-cinemamovie.netlify.app)<br>
Go to old website - [Link](https://github.com/SunilPark1129/cinema-movie)<br>
Go to updated version website - [Link](https://github.com/SunilPark1129/c-movie-today)

## Project Description

- Cinema Movie fetches movie information from The Movie Database and shares the information with users on a new platform. You can search for a movie through this website or click on a recommended movie to find the information.

## Features
> Features that I would like to introduce.

|Feature|Description|
|:--:|:--|
|Resposive|<img src="https://user-images.githubusercontent.com/106734133/209891638-34e9132b-c229-4663-a8f6-e9037363fd6d.jpg" height="400"><br><br>This website works with any window sizes. It is divided into mobile size, tablet size, and desktop size.|
|Filters|<img src="https://user-images.githubusercontent.com/106734133/209891684-619e051e-c845-4214-ad2d-803e549aff74.jpg" height="400"><br><br>Users can find movies by genre. If you change the genre in the filter, a new API is requested.|
|Recommended Movie|<img src="https://user-images.githubusercontent.com/106734133/209891665-d0f15243-eb5c-442d-a9cf-f8636e290e13.jpg"><br><br>It recommends a movie randomly from the filtered movie list.|
|Selected Item|<img src="https://user-images.githubusercontent.com/106734133/209891679-c1822150-a7a8-4593-abd9-ad602a3141a9.jpg" height="400"><br><br>When a user clicks on a movie, information about the movie is displayed.|
|Movie by imgs|<img src="https://user-images.githubusercontent.com/106734133/209891673-1900f8f4-3ecc-41df-ab86-5a2b4407257c.jpg" height="400"><br><br>Lists fetched movies as movie posts.|
|Movie by lists|<img src="https://user-images.githubusercontent.com/106734133/209891651-ad617f3e-0908-446a-b3f0-74eebe98ef2e.jpg" height="400"><br><br>Lists fetched movies as movie texts.|
|Search Query|<img src="https://user-images.githubusercontent.com/106734133/209891658-a49eb059-d33b-473b-baf8-88b7e913ad31.jpg"><br><br>Search for movie titles in Input. When requesting the api, we use useDebounce to prevent loading a lot of data.|
|Dark Mode|<img src="https://user-images.githubusercontent.com/106734133/209891656-c9665293-b1b3-421f-b26d-7e19ed6f34dd.jpg"><br><br>Dark mode added. Since this website was originally designed to be dark, it doesn't make much of a difference, but it's included as a feature.|
|See Movies More|<img src="https://user-images.githubusercontent.com/106734133/209893450-27421a0c-3a66-4625-bb25-faaec572c19b.jpg"><br><br>Request more related movie lists from the server. It is recommended to load 20 movie data in one request because loading a lot of data at once will overload the speed.|

## Technology Used

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)


## Installation
1. Clone the repo
```
git clone https://github.com/SunilPark1129/re-cinema-movie.git
```
2. Install all dependencies
```
npm install
```
> Dependencies I have installed :<br>axios<br> react-router-dom<br> styled components<br> font awesome<br> 

3. run the website
```
npm start
```

## Self-improvement
> In the past, while creating a website, I took note of the parts that could be improved or that were difficult at the time to develop the website.
So I updated the old website with reference to this note for self-development. My Old Site - [Link](https://github.com/SunilPark1129/cinema-movie)

- [x] I need to improve the naming of files and folders so that other developers can see and understand their meaning at once.
  - Elements are written with related names to indicate what they mean. I've been studying a lot, but I think I still need to study more.
- [x] I need to learn more about which folder to put the files in.
  - Compared to the past, I'm much better at organizing folders, but I need to study more.
- [x] I need to make more reusable React Hooks and UI components of repetitive coding.
  - Repetitive coding is reused through components to optimize repeated coding.
- [x] In order to improve website speed, I should become more proficient in the usage of useState, useEffect, and rendering.
  - In the previous version, 60 movie lists were loaded at a time, which overloaded the performance of both the client and server side. So, I reduced the request limit to 20. In addition, I optimized the performance by using useState and useEffect in each component.

## Project Status
Completed
