# 🚩 **123-Movies API** (version v1.0.0)

<img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg">          <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg">
<img src="https://img.shields.io/badge/123MOVIES-API-blue" alt="">

<a href="https://nodei.co/npm/123-movies/"><img src="https://nodei.co/npm/123-movies.png"></a>

*The API 123Movies is a library that provides an extensive catalog of movies and series from the 123-movies.com platform. This allows access to all the videos of each movie and episodes of each series with audio in English.*

---


# 📝123-Movies API


### PluginManager.getMovies([page])

|   page   |  range     |
|----------|-------------
|          | [1 .. 1222] |

```json
[
  [
    {
      id: 'https://vww.123-movies.com/movie/it-free100/watching.html',
      title: 'It',
      poster: 'https://123images.co/movies/1231396484-poster-It.jpg',
      description: "In the Town of Derry, the local kids are disappearing one by one, leaving behind bloody remains. In a place known as 'The Barrens', a group of seven kids are united by their horrifying and strange encounters with an evil clown and their determination to kill It. Written by Emma Chapman",
      imdb_score: 8,
      genres: [Array],
      year: '2017',
      episode_length: '135 min',
      quality: 'HD'
    },
    {
      id: 'https://vww.123-movies.com/movie/spider-man-homecoming-free113/watching.html',
      title: 'Spider-Man: Homecoming',
      poster: 'https://123images.co/movies/1232250912-poster-Spider-Man-Homecoming.jpg',
      description: 'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving 
himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that 
Peter holds most important will be threatened. Written by Benett Sullivan',
      imdb_score: 7.9,
      genres: [Array],
      year: '2017',
      episode_length: '133 min',
      quality: 'HD'
    },
    {
      id: 'https://vww.123-movies.com/movie/transformers-the-last-knight-free126/watching.html',
      title: 'Transformers: The Last Knight',
      poster: 'https://123images.co/movies/1233371366-poster-Transformers-The-Last-Knight.jpg',
      description: 'Optimus Prime finds his dead home planet, Cybertron, in which he comes to find he was responsible for its destruction. He finds a way to bring Cybertron back to life, but in order to do so, Optimus needs to find an artifact that is on Earth.', 
      imdb_score: 5.3,
      genres: [Array],
      year: '2017',
      episode_length: '149 min',
      quality: 'HD'
    },
    {
      id: 'https://vww.123-movies.com/movie/annabelle-2-free104/watching.html',
      title: 'Annabelle 2',
      poster: 'https://123images.co/movies/1235140878-poster-Annabelle-2.jpg',
      description: "12 years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, where they soon become the target of the dollmaker's possessed creation, Annabelle.",    
      imdb_score: 6.9,
      genres: [Array],
      year: '2017',
      episode_length: '109 min',
      quality: 'HD'
    },
    // .....
  ]
]
```

### PluginManager.getTVSeries([page])

|   page   |  range     |
|----------|-------------
|          | [1 .. 208] |

```json
[
  [
    {
      title: 'Game of Thrones',
      poster: 'https://123images.co/tv/1230944947-poster-Game-of-Thrones.jpg',
      description: 'In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea. Written by Sam Gray',
      imdb_score: 9.5,
      genres: [Array],
      year: '2011',
      episode_length: '56 min',
      episodes: [Array]
    },
    {
      title: 'Power',
      poster: 'https://123images.co/tv/1233281796-poster-Power.jpg',
      description: "Power tells the story of James Ghost St. Patrick, a wealthy New York City nightclub owner who caters to the city's elite. He wants to build an empire, turn the club into a Fortune 500 business, but there's just one problem: Ghost is living a double life. When he is not in the club, he is the kingpin of the most lucrative drug network in New York for a very high-level clientele. His marriage, family and business all become unknowingly threatened as he is tempted 
to leave his criminal life behind and become the rags-to-riches businessman he wants to be most of all. Written by Jiilo_Kim",
      imdb_score: 8.1,
      genres: [Array],
      year: '2014',
      episode_length: '50 min',
      episodes: [Array]
    },
    {
      title: 'Rick and Morty',
      poster: 'https://123images.co/tv/1232861424-poster-Rick-and-Morty.jpg',
      description: 'An animated series on adult-swim about the infinite adventures of Rick, a genius alcoholic and careless scientist, with his grandson Morty, a 14 year-old anxious boy who is not so smart, but always tries to lead his grandfather with his own morale compass. Together, they explore the infinite universes; causing mayhem and running into trouble. Written by Ruben Galaviz',
      imdb_score: 9.3,
      genres: [Array],
      year: '2013',
      episode_length: '22 min',
      episodes: [Array]
    },
    {
      title: 'The Flash',
      poster: 'https://123images.co/tv/1233107288-poster-The-Flash.jpg',
      description: 'Barry Allen is a Central City police forensic scientist with a reasonably happy life, despite the childhood trauma of a mysterious red and yellow lightning killing his mother and framing his father. All that changes when a 
massive particle accelerator accident leads to Barry being struck by lightning in his lab. Coming out of coma nine months later, Barry and his new friends at S.T.A.R labs find that he now has the ability to move at superhuman speed. Furthermore, Barry learns that he is but one of many affected by that event, most of whom are using their powers for evil. Determined to make a difference, Barry dedicates his life to fighting such threats, as The Flash. While he gains allies he never expected, there are also secret forces determined to aid and manipulate him for their own agenda. Written by Kenneth Chisholm ([email protected])',
      imdb_score: 8.1,
      genres: [Array],
      year: '2014',
      episode_length: '43 min',
      episodes: [Array]
    },
    // .....
  ]
]   
```

## How to get the videos of the episodes of each series?
*You should go to the **episodes** property, and you will see a list of episodes from each season. You will take the url and pass it to the function `getVideoURL([url])`*

### PluginManager.getVideoURL([url]);

```javascript
(async() =>{
  const episodeURL = 'https://vww.123-movies.com/episode/vikings-1x1/watching.html'
  const video = await PluginManager.getVideoURL(episodeURL);
})();
```

*The function will return the video in **mp4** format. If the .mp4 file is not found, it will return the **iframe** of the video.*

```javascript
[
  [
    {
      "data": {
        "video": "https://s39.upstream.to/o2up2ceuraysmvk4xsecu2xcl36uqlu3rguuezlbnrrfkua5wrmdb6uuzhcq/v.mp4"
      }
    }
  ]
]
```

## How to get the videos of the movies?
*You should take the value of the property **id** and pass it to the `getVideoURL([url])` function.*

### PluginManager.getVideoURL([url]);

```javascript
(async() =>{
  const url = 'https://vww.123-movies.com/movie/joker-1/watching.html';
  const video = await PluginManager.getVideoURL(url);
})();
```

*The function will return the video in **mp4** format. If the .mp4 file is not found, it will return the **iframe** of the video.*

```javascript
[
  [
    {
      "data": {
        "video": "https://s53.upstream.to/o2up3jvjr4ysmvk4xqksuzvikfjrgkyynbnb6c7j626eddozcgque2fttu6a/v.mp4"
      }
    }
  ]
]
```


## **Donations**

<a href="https://www.buymeacoffee.com/chrismichael" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>


## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.


---


### **:robot: Author**

_*Chris Michael*_

> You can follow me on
[github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright © 2020 [123-Movies API](https://github.com/ChrisMichaelPerezSantiago/123-movies).
