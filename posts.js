const posts = [
    {
        id: 2,
        title: "Nightmare Neighbours Arrive on Coronation Street",
        author: "Admin",
        image: "https://images.ctfassets.net/ti0n6mm28of1/7KqoTeaFffok7Mu4a81JaN/3208690d894675bdb0d71caa0dddc8a2/EMBARGO_CORO_MICK_LOU.jpg",
        content: `
               <h1>Nightmare Neighbours Shake Up Coronation Street</h1>
    
    <p>Residents of Weatherfield are in for a shock this February as Coronation Street welcomes the arrival of new ‘nightmare neighbours.’</p>
    
    <p>Mick and Lou Michaelis will storm into the street, causing trouble for anyone who dares to cross them.</p>
    
    <p>The Michaelis family will be moving into Mawdsley Street, behind Chesney and Gemma’s house, marking the first time Coronation Street has extended its drama beyond the ginnel.</p>
    
    <p>Lou (Farrel Hegarty) will arrive on her own on 12th February and quickly bond with Gemma (Dolly-Rose Campbell), recognizing each other from Bessie Street School where their children are classmates.</p>
    
    <p>When Mick (Joe Layton) appears on 14th February, viewers will discover he is the man with the silver van who has been harassing Chesney (Sam Aston) for months. Chesney remains unaware of Mick’s true identity.</p>
    
    <p>Mick and Lou soon form a friendship with the Winter-Browns, but their disruptive presence reveals old secrets, including a past link to Kit Green (Jacob Roberts).</p>

    <h2>Cast and Crew Speak</h2>

    <h3>Farrel Hegarty on Joining the Cast</h3>
    <p>"I’m delighted and so grateful to be joining the cast of Coronation Street. Everyone has been incredibly warm and welcoming."</p>
    <p>"Lou is a vibrant character—full of energy and chaos. She thrives on making waves but is deeply loyal to her family, especially Mick."</p>

    <h3>Joe Layton on Playing Mick</h3>
    <p>"Coronation Street is an institution, and walking down the cobbles as Mick is surreal. Farrel and I are having a blast bringing these characters to life."</p>
    <p>"Mick is impulsive and unpredictable, and I enjoy exploring his layers beyond the typical ‘villain’ label."</p>

    <h3>Producer Kate Brooks on the New Characters</h3>
    <p>"Mick and Lou are loud, chaotic, and fiercely loyal. They’ll cause plenty of drama, and while they bring energy to the street, they won’t be everyone’s cup of tea."</p>

    <h2>Q&A with Joe Layton</h2>

    <h3>Welcome to Coronation Street! How’s it been?</h3>
    <p>"I absolutely love it! Everyone has been really welcoming, and it’s even better than I imagined."</p>

    <h3>What makes working on a soap different?</h3>
    <p>"The pace is incredible. We shoot twelve scripts out of order with multiple directors. It forces you to trust your instincts and grow as an actor."</p>

    <h3>What’s Mick like?</h3>
    <p>"He’s hot-headed, impulsive, and unpredictable. Playing him is both challenging and rewarding."</p>

    <h2>Q&A with Farrel Hegarty</h2>

    <h3>What was your reaction to getting the part?</h3>
    <p>"I was working as a studio manager when I found out. My colleagues gathered around, and it was such a supportive moment. I was in shock and tears of joy."</p>

    <h3>How would you describe Lou?</h3>
    <p>"She’s fiery, gobby, and irrational, but also fiercely loyal. I probably wouldn’t be friends with her in real life!"</p>

    <h3>What do you love about working on Corrie?</h3>
    <p>"The cast and crew are like a family. Everyone is so invested in each other’s success, and it’s been a wonderful experience so far."</p>
,
        publishDate: "2025-02-07T22:28:00+13:00"
    },
    {
        id: 3,
        title: "Behind the Scenes: Cast Interview",
        author: "Admin",
        image: "https://www.thesun.co.uk/wp-content/uploads/2025/02/mhp18p-coronation-street-itv-soap-945916226.jpg",
        content: "The cast of Coronation Street shared exclusive insights during an interview...",
        publishDate: "2025-02-03T15:00:00+13:00"
    },
    {
        id: 4,
        title: "Memorable Moments from the Past Decade",
        author: "Admin",
        image: "https://www.thesun.co.uk/wp-content/uploads/2025/02/mhp18p-coronation-street-itv-soap-945916226.jpg",
        content: "Let's look back at some of the most iconic moments on Coronation Street...",
        publishDate: "2025-02-04T16:00:00+13:00"
    },
    {
        id: 5,
        title: "New Character Joins the Show!",
        author: "Admin",
        image: "https://www.thesun.co.uk/wp-content/uploads/2025/02/mhp18p-coronation-street-itv-soap-945916226.jpg",
        content: "Exciting news! A new character will soon be joining the Coronation Street cast...",
        publishDate: "2025-02-05T17:00:00+13:00"
    },
    {
        id: 6,
        title: "Farewell to a Beloved Character",
        author: "Admin",
        image: "https://www.thesun.co.uk/wp-content/uploads/2025/02/mhp18p-coronation-street-itv-soap-945916226.jpg",
        content: "An emotional farewell episode that had fans in tears...",
        publishDate: "2025-02-06T18:00:00+13:00"
    },
    {
        id: 7,
        title: "Fan Event Highlights",
        author: "Admin",
        image: "https://www.thesun.co.uk/wp-content/uploads/2025/02/mhp18p-coronation-street-itv-soap-945916226.jpg",
        content: "Fans gathered to celebrate their love for Coronation Street...",
        publishDate: "2025-02-07T19:00:00+13:00"
    },
    {
        id: 8,
        title: "Exclusive Photos from the Set",
        author: "Admin",
        image: "https://www.thesun.co.uk/wp-content/uploads/2025/02/mhp18p-coronation-street-itv-soap-945916226.jpg",
        content: "Exclusive behind-the-scenes photos were revealed from the Coronation Street set...",
        publishDate: "2025-02-08T20:00:00+13:00"
    },
    {
        id: 9,
        title: "Exciting Future Plotlines",
        author: "Admin",
        image: "https://www.thesun.co.uk/wp-content/uploads/2025/02/mhp18p-coronation-street-itv-soap-945916226.jpg",
        content: "Spoilers hint at some unexpected twists coming up...",
        publishDate: "2025-02-09T21:00:00+13:00"
    },
    {
        id: 10,
        title: "Iconic Locations in Coronation Street",
        author: "Admin",
        image: "https://www.thesun.co.uk/wp-content/uploads/2025/02/mhp18p-coronation-street-itv-soap-945916226.jpg",
        content: "Let's take a look at the most iconic locations in Coronation Street...",
        publishDate: "2025-02-10T22:00:00+13:00"
    },
    {
        id: 11,
        title: "Character Developments to Watch",
        author: "Admin",
        image: "https://www.thesun.co.uk/wp-content/uploads/2025/02/mhp18p-coronation-street-itv-soap-945916226.jpg",
        content: "Some characters are set to experience major developments...",
        publishDate: "2025-02-11T23:00:00+13:00"
    },
    {
        id: 12,
        title: "Coronation Street: A Historical Perspective",
        author: "Admin",
        image: "https://www.thesun.co.uk/wp-content/uploads/2025/02/mhp18p-coronation-street-itv-soap-945916226.jpg",
        content: "An overview of the show's rich history and how it has evolved over the years...",
        publishDate: "2025-02-12T09:00:00+13:00"
    },
    {
        id: 13,
        title: "Behind the Cameras: Meet the Crew",
        author: "Admin",
        image: "https://www.thesun.co.uk/wp-content/uploads/2025/02/mhp18p-coronation-street-itv-soap-945916226.jpg",
        content: "A look at the dedicated crew behind the scenes on Coronation Street...",
        publishDate: "2025-02-13T10:00:00+13:00"
    },
    {
        id: 14,
        title: "Coronation Street's Most Controversial Moments",
        author: "Admin",
        image: "https://www.thesun.co.uk/wp-content/uploads/2025/02/mhp18p-coronation-street-itv-soap-945916226.jpg",
        content: "Revisiting the most talked-about and controversial storylines...",
        publishDate: "2025-02-14T11:00:00+13:00"
    },
    {
        id: 15,
        title: "Why Fans Love Coronation Street",
        author: "Admin",
        image: "https://www.thesun.co.uk/wp-content/uploads/2025/02/mhp18p-coronation-street-itv-soap-945916226.jpg",
        content: "Exploring the reasons why Coronation Street has such a loyal fan base...",
        publishDate: "2025-02-15T12:00:00+13:00"
    },
    {
        id: 16,
        title: "Top 5 Guest Appearances on Coronation Street",
        author: "Admin",
        image: "https://www.thesun.co.uk/wp-content/uploads/2025/02/mhp18p-coronation-street-itv-soap-945916226.jpg",
        content: "A countdown of the top guest appearances in the show's history...",
        publishDate: "2025-02-16T13:00:00+13:00"
    },
    {
        id: 17,
        title: "The Evolution of Coronation Street's Theme Song",
        author: "Admin",
        image: "https://www.thesun.co.uk/wp-content/uploads/2025/02/mhp18p-coronation-street-itv-soap-945916226.jpg",
        content: "A fascinating look at how the show's iconic theme song has evolved...",
        publishDate: "2025-02-17T14:00:00+13:00"
    },
    {
        id: 18,
        title: "Fan Theories: What's Next?",
        author: "Admin",
        image: "https://www.thesun.co.uk/wp-content/uploads/2025/02/mhp18p-coronation-street-itv-soap-945916226.jpg",
        content: "Fans speculate on future plotlines and potential twists...",
        publishDate: "2025-02-18T15:00:00+13:00"
    },
    {
        id: 19,
        title: "Meet the New Writers of Coronation Street",
        author: "Admin",
        image: "https://www.thesun.co.uk/wp-content/uploads/2025/02/mhp18p-coronation-street-itv-soap-945916226.jpg",
        content: "An introduction to the new writers shaping the future of Coronation Street...",
        publishDate: "2025-02-19T16:00:00+13:00"
    },
    {
        id: 20,
        title: "Coronation Street Anniversary Celebration",
        author: "Admin",
        image: "https://www.thesun.co.uk/wp-content/uploads/2025/02/mhp18p-coronation-street-itv-soap-945916226.jpg",
        content: "A grand celebration marking a major milestone for the show...",
        publishDate: "2025-02-20T17:00:00+13:00"
    }
];
