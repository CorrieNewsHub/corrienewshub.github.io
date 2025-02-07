const posts = [
    {
        id: 2,
        title: "Nightmare Neighbours Arrive on Coronation Street",
        author: "Admin",
        image: "https://images.ctfassets.net/ti0n6mm28of1/7KqoTeaFffok7Mu4a81JaN/3208690d894675bdb0d71caa0dddc8a2/EMBARGO_CORO_MICK_LOU.jpg",
        content: `
            <h1>Nightmare Neighbours Shake Up Coronation Street</h1>

            <p>Residents of Weatherfield will need to watch their backs as Coronation Street welcomes the arrival of new ‘nightmare neighbours’ this February.</p>

            <p>Mick and Lou Michaelis will arrive on the street all guns blazing, making life hell for anyone who dares to cross them.</p>

            <p>The Michaelis family will be moving into Mawdsley Street, at the back of Chesney and Gemma’s house, marking the first time Coronation Street has extended the drama across the ginnel.</p>

            <p>Initially arriving on her own on the 12th February, Lou (<strong>Farrel Hegarty</strong>) immediately sparks up a friendship with Gemma (<strong>Dolly-Rose Campbell</strong>) as they recognise each other from Bessie Street School, where Gemma’s quads and Lou’s two young daughters attend.</p>

            <p>When Mick (<strong>Joe Layton</strong>) appears on 14th February, the audience will be shocked to realise his true identity—the man with the silver van who has been harassing Chesney (<strong>Sam Aston</strong>), who is none the wiser to who Mick really is.</p>

            <p>After developing a friendship with the Winter-Browns, it’s evident that Mick and Lou are determined to create upheaval, starting with a prior connection to Kit Green (<strong>Jacob Roberts</strong>), leading to them exposing his secretive past.</p>

            <h2>Cast and Crew Speak</h2>

            <h3>Farrel Hegarty on Joining the Cast</h3>
            <p>"I’m delighted and so grateful to be joining the cast of Coronation Street. I have genuinely been blown away by how ridiculously warm and nice everyone is."</p>
            <p>"Lou is definitely an exciting character to play because she’s got good and bad parts to her, she’s a life force and full of beans. She’s a very colourful person who likes to make waves and try to cause chaos."</p>

            <h3>Joe Layton on Playing Mick</h3>
            <p>"Coronation Street is such an institute in British television and to get to walk down the cobbles in Mick’s shoes is so exciting. To also do it alongside Farrel is awesome—we are having great fun together and connecting really well whilst developing our characters."</p>

            <h3>Producer Kate Brooks on the New Characters</h3>
            <p>"Chaotic and loud, Mick and Lou bulldoze their way into Weatherfield, causing absolute carnage for the residents of Coronation Street. Their relationship is volatile to say the least, but at the heart of it lies a fierce sense of family loyalty."</p>

            <h2>Q&A With Joe Layton</h2>

            <h3>Welcome to the Cobbles - how are you enjoying your time here?</h3>
            <p>"I absolutely love it! Everyone's really welcoming. It really is everything I'd hoped it would be."</p>

            <h3>How did you get the part?</h3>
            <p>"I initially had to do a self-tape, and then I got called in for a screen test. Farrel and I hit it off immediately, and it just felt right."</p>

            <h3>What makes a soap different from other acting experiences?</h3>
            <p>"The pace is incredible. We shoot twelve scripts out of order with multiple directors. You have to trust your instincts and go for it."</p>

            <h3>Describe Mick in three words.</h3>
            <p>Impulsive, hot-headed, unpredictable.</p>

            <h2>Q&A With Farrel Hegarty</h2>

            <h3>The news is finally out—how are you enjoying your time on Coronation Street?</h3>
            <p>"It's been so much fun! We definitely came in hitting the ground running. It’s so nice to come in as a duo—we're thick as thieves."</p>

            <h3>How did you get the part?</h3>
            <p>"I did a self-tape, then a screen test. The chemistry with Joe during the test was amazing—we even had a scene where I threw a spam sandwich at his face!"</p>

            <h3>Describe Lou in three words.</h3>
            <p>Irrational, gobby, fiery—but also loyal.</p>

            <h3>What do you love about Coronation Street?</h3>
            <p>"I’ve been blown away by how warm and welcoming everyone is. The cast and crew are like a proper family. It’s been an enjoyable experience."</p>
        `,
        publishDate: "2025-02-07T15:00:00+13:00"
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
