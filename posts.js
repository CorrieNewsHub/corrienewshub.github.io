const posts = [
    {
        id: 2,
        title: "Nightmare Neighbours Arrive on Coronation Street",
        author: "Admin",
        image: "https://images.ctfassets.net/ti0n6mm28of1/7KqoTeaFffok7Mu4a81JaN/3208690d894675bdb0d71caa0dddc8a2/EMBARGO_CORO_MICK_LOU.jpg",
        content: `
            <h2>New Nightmare Neighbours Shake Up Coronation Street</h2>
            <p>Weatherfield residents are in for a wild ride this February as 'nightmare neighbours' <strong>Mick and Lou Michaelis</strong> crash onto the scene, causing chaos from day one. Moving into Mawdsley Street, they’re set to ignite drama like never before by bringing trouble right to <strong>Chesney</strong> and <strong>Gemma’s</strong> doorstep.</p>
            <p>The sparks begin on <strong>12th February</strong> with Lou (played by <strong>Farrel Hegarty</strong>) befriending Gemma. But the real shocker comes on <strong>14th February</strong> when Mick (played by <strong>Joe Layton</strong>) is revealed as the mystery man who’s been harassing Chesney for months.</p>
            <p>Together, Mick and Lou’s arrival threatens to unravel hidden secrets and stir up long-standing tensions, ensuring life on the cobbles will never be the same again.</p>
        `,
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
